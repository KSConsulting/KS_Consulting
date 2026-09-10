// <sphere-backdrop> — deformable wireframe sphere, scroll-linked + draggable.
// Palette: KS blue #0066FF → cyan #00D9FF. Sits behind content; never blocks clicks.
(() => {
  if (customElements.get('sphere-backdrop')) return;

  const VERT = `
uniform float uTime;
uniform float uNoiseStrength;
uniform float uNoiseDensity;
varying float vDisp;

vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(
      i.z+vec4(0.,i1.z,i2.z,1.))
    + i.y+vec4(0.,i1.y,i2.y,1.))
    + i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

void main(){
  float n = snoise(normal * uNoiseDensity + vec3(0., 0., uTime * .28));
  float n2 = snoise(normal * (uNoiseDensity * 2.1) - vec3(uTime * .18));
  float d = n * .75 + n2 * .25;
  vDisp = d;
  vec3 pos = position + normal * d * uNoiseStrength;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`;

  const FRAG = `
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uOpacity;
varying float vDisp;
void main(){
  float t = clamp(vDisp * .5 + .5, 0., 1.);
  vec3 c = mix(uColorA, uColorB, smoothstep(.15, .9, t));
  gl_FragColor = vec4(c, uOpacity * (.45 + t * .55));
}`;

  // scroll keyframes: [progress, x, y, scale]
  const KEYS = [
    [0.00,  1.90,  0.55, 1.00],
    [0.22, -2.05,  0.10, 0.80],
    [0.45,  1.80, -0.35, 0.94],
    [0.68, -1.75,  0.25, 0.72],
    [1.00,  0.10, -0.15, 1.15],
  ];

  const lerp = (a, b, t) => a + (b - a) * t;
  function sample(p) {
    for (let i = 0; i < KEYS.length - 1; i++) {
      const a = KEYS[i], b = KEYS[i + 1];
      if (p <= b[0]) {
        const t = (p - a[0]) / (b[0] - a[0] || 1);
        const e = t * t * (3 - 2 * t);
        return [lerp(a[1], b[1], e), lerp(a[2], b[2], e), lerp(a[3], b[3], e)];
      }
    }
    const l = KEYS[KEYS.length - 1];
    return [l[1], l[2], l[3]];
  }

  class SphereBackdrop extends HTMLElement {
    static get observedAttributes() { return ['opacity', 'color-a', 'color-b', 'noise-strength', 'noise-density']; }

    attributeChangedCallback(name, _old, val) {
      const u = this._uniforms;
      if (!u || val == null) return;
      if (name === 'opacity') u.uOpacity.value = parseFloat(val);
      if (name === 'noise-strength') u.uNoiseStrength.value = parseFloat(val);
      if (name === 'noise-density') u.uNoiseDensity.value = parseFloat(val);
      if (name === 'color-a') u.uColorA.value.set(val);
      if (name === 'color-b') u.uColorB.value.set(val);
    }

    connectedCallback() {
      if (this._booted) return;
      this._booted = true;
      this.style.display = 'block';
      this.style.position = 'absolute';
      this.style.inset = '0';
      this.style.pointerEvents = 'none';
      this._canvas = document.createElement('canvas');
      Object.assign(this._canvas.style, { display: 'block', width: '100%', height: '100%' });
      this.appendChild(this._canvas);
      this._reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this._boot();
    }

    disconnectedCallback() {
      this._dead = true;
      if (this._raf) cancelAnimationFrame(this._raf);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('pointerdown', this._onDown);
      window.removeEventListener('pointermove', this._onMove);
      window.removeEventListener('pointerup', this._onUp);
      if (this._renderer) this._renderer.dispose();
    }

    async _boot() {
      let THREE;
      try {
        THREE = await import('https://esm.sh/three@0.160.0');
      } catch (e) {
        console.warn('sphere-backdrop: three.js unavailable', e);
        return;
      }
      if (this._dead) return;

      const el = this._canvas;
      const renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      this._renderer = renderer;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.z = 6;

      const uniforms = {
        uTime: { value: 0 },
        uNoiseStrength: { value: parseFloat(this.getAttribute('noise-strength') || '0.34') },
        uNoiseDensity: { value: parseFloat(this.getAttribute('noise-density') || '1.35') },
        uColorA: { value: new THREE.Color(this.getAttribute('color-a') || '#0066FF') },
        uColorB: { value: new THREE.Color(this.getAttribute('color-b') || '#00D9FF') },
        uOpacity: { value: parseFloat(this.getAttribute('opacity') || '0.40') },
      };
      this._uniforms = uniforms;
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT, fragmentShader: FRAG, uniforms,
        transparent: true, wireframe: true, depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 20), mat);
      scene.add(mesh);

      // faint solid core for depth
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.02, 8),
        new THREE.MeshBasicMaterial({ color: 0x0B1B3A, transparent: true, opacity: 0.55, depthWrite: false })
      );
      mesh.add(core);

      const state = { x: KEYS[0][1], y: KEYS[0][2], s: KEYS[0][3] };
      const target = { ...state };
      const drag = { active: false, dx: 0, dy: 0, ox: 0, oy: 0, sx: 0, sy: 0 };

      const size = () => {
        const w = this.clientWidth || innerWidth;
        const h = this.clientHeight || innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        this._w = w; this._h = h;
      };
      this._onResize = size;
      size();
      window.addEventListener('resize', size);

      // Drag: only capture the pointer when it lands on the sphere's screen disc,
      // so the page underneath stays fully clickable.
      const projected = () => {
        const v = mesh.position.clone().project(camera);
        return { x: (v.x * .5 + .5) * this._w, y: (-v.y * .5 + .5) * this._h };
      };
      const radiusPx = () => {
        const worldR = 1.35 * state.s;
        const fov = camera.fov * Math.PI / 180;
        const dist = camera.position.z - mesh.position.z;
        return (worldR / (2 * Math.tan(fov / 2) * dist)) * this._h;
      };

      this._onDown = (e) => {
        const r = this.getBoundingClientRect();
        const p = projected();
        const px = e.clientX - r.left, py = e.clientY - r.top;
        if (Math.hypot(px - p.x, py - p.y) > radiusPx()) return;
        drag.active = true; drag.sx = e.clientX; drag.sy = e.clientY;
        drag.ox = drag.dx; drag.oy = drag.dy;
        document.body.style.cursor = 'grabbing';
      };
      this._onMove = (e) => {
        if (!drag.active) return;
        const k = 6 / this._h * 2;
        drag.dx = drag.ox + (e.clientX - drag.sx) * k;
        drag.dy = drag.oy - (e.clientY - drag.sy) * k;
        e.preventDefault();
      };
      this._onUp = () => {
        if (!drag.active) return;
        drag.active = false;
        document.body.style.cursor = '';
      };
      window.addEventListener('pointerdown', this._onDown);
      window.addEventListener('pointermove', this._onMove, { passive: false });
      window.addEventListener('pointerup', this._onUp);
      window.addEventListener('pointercancel', this._onUp);

      const clock = new THREE.Clock();
      const tick = () => {
        if (this._dead) return;
        this._raf = requestAnimationFrame(tick);
        if (document.hidden) return;

        const t = clock.getElapsedTime();
        uniforms.uTime.value = this._reduced ? 0.8 : t;

        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        const p = Math.min(1, Math.max(0, scrollY / max));
        const [kx, ky, ks] = sample(p);
        target.x = kx; target.y = ky; target.s = ks;

        // damped follow — no abrupt jumps; drag offset decays back when released
        const ease = drag.active ? 0.26 : 0.055;
        state.x = lerp(state.x, target.x, ease);
        state.y = lerp(state.y, target.y, ease);
        state.s = lerp(state.s, target.s, 0.06);
        if (!drag.active) { drag.dx = lerp(drag.dx, 0, 0.045); drag.dy = lerp(drag.dy, 0, 0.045); }

        mesh.position.set(state.x + drag.dx, state.y + drag.dy, 0);
        mesh.scale.setScalar(state.s);
        if (!this._reduced) {
          mesh.rotation.y = t * 0.12 + p * 2.2 + drag.dx * 0.25;
          mesh.rotation.x = Math.sin(t * 0.18) * 0.14 - drag.dy * 0.2;
        }
        renderer.render(scene, camera);
      };
      tick();
    }
  }
  customElements.define('sphere-backdrop', SphereBackdrop);
})();

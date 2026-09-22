# UI kit — Site institucional KS Consulting

Click-through de quatro telas do site: **Início**, **Serviços**, **Cases** e **Contato**. Abrir `index.html`.

| Arquivo | Conteúdo |
| --- | --- |
| `Chrome.jsx` | Navbar fixa (glass), wordmark tipográfico, rodapé, `Section` e `SectionHead` |
| `HomeScreen.jsx` | Hero com painel de métricas, faixa de logos, metodologia em 3 etapas, banda de resultado, CTA final |
| `ServicesScreen.jsx` | Grade de 6 serviços com filtro por Tabs, tabela de planos com toggle anual |
| `CasesScreen.jsx` | Cards de case com métricas, filtro, carrossel de depoimentos, NPS |
| `ContactScreen.jsx` | Formulário de diagnóstico + Dialog de confirmação + Toast de sucesso |

Todos os primitivos vêm do bundle do design system (`window.KSConsultingDesignSystem_…`); nenhuma tela reimplementa Button, Card etc.

Conteúdo (empresas, métricas, depoimentos) é **fictício e ilustrativo**, inspirado na estrutura da página de vendas enviada como referência. Trocar por dados reais antes de qualquer uso público.

# Dr. Samuel Chagas — Site Institucional

Landing page (one-page) do **Dr. Samuel Chagas**, fisioterapeuta especializado em
quiropraxia, ajuste postural, alívio de dores na coluna e recovery para atletas em
São Paulo. Projeto da **Dose de Growth (DDG)**.

- 🌐 **No ar:** https://drsamuelchagas.com.br/
- 📦 **Repositório:** https://github.com/dosedegrowth-design/drsamuelchagas
- ☁️ **Deploy:** Vercel (automático no push da branch `main`)

---

## Stack

Site **estático, sem framework e sem build**. Tudo simples de propósito.

| Camada | O que é |
|---|---|
| Estrutura | `index.html` único — HTML + **CSS inline** + **JS inline** (tudo em um arquivo, ~77 KB) |
| Fontes | Google Fonts (`Inter` + `Space Grotesk`) via `<link>` |
| Ícones/Favicon | PNGs na raiz (16/32 + apple-touch) |
| Embeds | Instagram (`embed.js`) para os reels na seção Vídeos |
| Hospedagem | Vercel (static hosting) |

> Não há `package.json`, `node_modules`, nem etapa de build. Editar = abrir o
> `index.html` e mexer. É isso.

---

## Estrutura de arquivos

```
dr-samuel-chagas/
├── index.html            ← O SITE INTEIRO (HTML + CSS + JS). 99% dos ajustes são aqui.
├── assets/
│   └── images/           ← logo, hero, parallax, foto do Dr., backgrounds (desktop + mobile)
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── robots.txt            ← SEO
├── sitemap.xml           ← SEO
├── .gitignore            ← ignora .DS_Store e .vercel
└── README.md
```

### Seções do site (ordem na página)

| id | Seção | Conteúdo |
|---|---|---|
| — | Hero | Chamada principal + CTA WhatsApp |
| `#sobre` | Sobre | Bio + foto do Dr. Samuel |
| `#servicos` | Serviços | Ajuste postural, coluna, recovery, etc. |
| `#metodo` | Método | Como o atendimento funciona |
| `#resultados` | Resultados | Provas / depoimentos |
| `#videos` | Vídeos | Reels do Instagram (embed) |
| `#contato` | CTA Final | Chamada de agendamento + WhatsApp |

---

## Dados do negócio (fonte da verdade — usados em texto, SEO e Schema.org)

- **Profissional:** Dr. Samuel Chagas — Fisioterapeuta · Crefito/SP **335633-F**
- **WhatsApp:** `+55 11 91352-8080` → `https://wa.me/5511913528080`
- **Instagram:** [@dr.samuelchagas](https://www.instagram.com/dr.samuelchagas/)
- **Endereço:** R. Quintana, 719 — Cidade Monções, São Paulo/SP — CEP 04569-011
- **Horário:** Seg–Sex 08:00–20:00 · Sáb 08:00–14:00
- **Especialidades:** Fisioterapia, Quiropraxia, Recovery Esportivo

> ⚠️ Ao trocar telefone/endereço, atualize em **3 lugares** dentro do `index.html`:
> (1) os links `wa.me`, (2) o texto visível na página e (3) o bloco **Schema.org**
> (`application/ld+json`) no `<head>`. Manter os três em sincronia.

---

## Rodar localmente

Não precisa de servidor. Basta abrir o arquivo:

```bash
open index.html
```

Ou, se quiser servir com URL local (recomendado por causa dos embeds do Instagram):

```bash
python3 -m http.server 8000
# acessa http://localhost:8000
```

---

## Publicar (deploy)

O deploy é **automático**: todo push na branch `main` do GitHub dispara um deploy
na Vercel e publica em https://drsamuelchagas.com.br/.

Fluxo normal de ajuste:

```bash
git add index.html                       # (adicione só o que mudou)
git commit -m "descreva o ajuste"
git push origin main                     # Vercel publica sozinho em ~1 min
```

---

## SEO — já configurado (não quebrar)

- `<title>`, `meta description`, `keywords`, `canonical`
- Open Graph + Twitter Card (imagem = foto do Dr.)
- Schema.org `HealthBusiness` (telefone, endereço, horário, credencial, serviços)
- `sitemap.xml` + `robots.txt`
- Google Search Console verificado (meta `google-site-verification` no `<head>`)

Ao mexer no conteúdo, preserve esses blocos. Se mudar imagem de destaque, atualize
também as `og:image` / `twitter:image`.

---

## Boas práticas do projeto

- **Commit por arquivo** — evite `git add -A` (o `.DS_Store`/`.vercel` já estão no
  `.gitignore`, mas mantenha o hábito).
- **Mobile primeiro** — o histórico do projeto tem vários fixes de iOS/iPad (parallax,
  imagens mobile). Sempre teste no celular antes de subir.
- **Imagens** — há versão desktop e `-mobile` separadas para hero/sobre/parallax.
  Ao trocar, troque o par.
- **Mensagem de commit** curta e descritiva, em pt-BR ou en, seguindo o padrão do
  histórico.

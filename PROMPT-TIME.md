# Prompt de Handoff — Site Dr. Samuel Chagas

Este arquivo é um **prompt pronto** para o time começar a trabalhar no site usando
o Claude Code (mesma conta DDG, em outra máquina).

## Como usar

1. Clone o repositório na máquina do time:
   ```bash
   git clone https://github.com/dosedegrowth-design/drsamuelchagas.git
   cd drsamuelchagas
   ```
2. Abra o Claude Code **dentro dessa pasta**.
3. **Copie e cole o bloco abaixo** como primeira mensagem. Depois é só pedir o ajuste.

---

## 👇 COLE ISTO NO CLAUDE CODE

```
Você vai me ajudar a ajustar o site do Dr. Samuel Chagas.

CONTEXTO DO PROJETO
- É a landing page (one-page) do Dr. Samuel Chagas, fisioterapeuta/quiropraxia em SP.
- Projeto da Dose de Growth (DDG).
- No ar: https://drsamuelchagas.com.br/
- Repo: https://github.com/dosedegrowth-design/drsamuelchagas
- Deploy: Vercel, AUTOMÁTICO no push da branch main.

STACK (importante)
- Site 100% estático, SEM framework e SEM build.
- O site inteiro está num único arquivo: index.html (HTML + CSS inline + JS inline).
- Assets em assets/images/ (tem versão desktop e -mobile de hero/sobre/parallax).
- Não existe package.json nem node_modules. Editar = mexer no index.html direto.

ANTES DE COMEÇAR
1. Leia o README.md do projeto (tem toda a arquitetura, seções e dados do negócio).
2. Leia o index.html para entender a estrutura antes de qualquer mudança.
3. As seções da página são: Hero, #sobre, #servicos, #metodo, #resultados, #videos, #contato.

REGRAS AO EDITAR
- Mobile primeiro: o histórico tem vários fixes de iOS/iPad. Sempre considere o
  comportamento no celular (existem imagens -mobile separadas).
- SEO: preserve <title>, meta description, canonical, Open Graph, Twitter Card,
  Schema.org (application/ld+json), sitemap.xml e robots.txt. Não quebrar.
- Dados de contato (WhatsApp +55 11 91352-8080, Instagram @dr.samuelchagas,
  endereço R. Quintana 719 - São Paulo/SP): se mudar algum, atualize em TODOS os
  lugares — links wa.me, texto visível E o bloco Schema.org no <head>.
- Commit por arquivo (nada de git add -A).

FLUXO DE PUBLICAÇÃO
- Depois de validar o ajuste, faça:
    git add <arquivo>
    git commit -m "descrição do ajuste"
    git push origin main
- A Vercel publica sozinha em ~1 min em drsamuelchagas.com.br.

Confirme que entendeu lendo o README.md e o index.html, me dê um resumo rápido do
que o site tem hoje, e então me pergunte qual ajuste eu quero fazer.
```

---

## Notas para o time (fora do prompt)

- **Acesso ao GitHub:** a conta `dosedegrowth-design` precisa estar autenticada na
  máquina (via `gh auth login` ou credencial Git) para dar `push`.
- **Acesso à Vercel:** não é obrigatório mexer na Vercel — o deploy sai sozinho pelo
  push. Só entre no painel da Vercel se precisar ver logs de build ou domínio.
- **Testar antes de subir:** abra o `index.html` no navegador (de preferência via
  `python3 -m http.server 8000`) e confira no celular também.
- **Dúvida sobre o negócio** (texto, foto, serviços): confirmar com o Lucas antes de
  publicar alterações de conteúdo sensível.

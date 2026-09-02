# Portfólio da Letícia

Site pessoal de front-end. Por enquanto o que está pronto é a tela inicial: tema escuro, um pouco de espaço, a apresentação e o retrato.

As outras partes do menu (Sobre, Projetos, Tecnologias e Contato) já têm âncora, mas ainda estão vazias. Vou preenchendo conforme os projetos forem saindo.

## Como rodar

Precisa do Node instalado.

```bash
npm install
npm run dev
```

O Vite sobe um servidor local (geralmente `http://localhost:5173`). `npm run build` gera a pasta `dist` se quiser publicar.

## Foto

A imagem do hero fica em `src/assets/portrait.jpg`. Se trocar o arquivo, mantém o nome pra não quebrar o import.

## Stack

React e Vite. CSS na mão, sem framework de UI. Fontes do Google: Barlow Condensed no título, Inter no texto, Outfit na logo e JetBrains Mono na tag de desenvolvedora.

## Estrutura

```
src/
  App.jsx
  components/
    Header.jsx
    Hero.jsx
    HeroPortrait.jsx
    SpaceBackground.jsx
```

Nada muito complexo: o `App` monta o fundo, o header e o hero. O resto das seções entra no mesmo arquivo quando existir conteúdo de verdade.

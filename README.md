# Blog Pessoal com Next.js (App Router)

## 📑 Sobre o Projeto

Este é um projeto de um blog pessoal simples, desenvolvido como parte do programa de formação **Grupo Boticário - Koru Desenvolve**. O objetivo foi aplicar conceitos modernos de desenvolvimento web full-stack utilizando o framework Next.js e seu App Router.

A aplicação demonstra funcionalidades essenciais de um blog, desde a listagem de posts até a criação de novos conteúdos com upload de imagens, tudo construído sobre uma arquitetura performática com Server Components.

---

## ✨ Funcionalidades Principais (Features)

- **Listagem de Posts:** A página inicial exibe todos os posts em um grid responsivo.
- **Páginas Dinâmicas:** Cada post possui sua própria página, gerada dinamicamente a partir de um `slug`.
- **Criação de Posts:** Um formulário permite a criação de novos posts, incluindo o upload de uma imagem de capa.
- **Interatividade:** Botão de "Curtir" em cada post, demonstrando o uso de Client Components para gerenciar estado.
- **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela, de celulares a desktops.
- **UI:** Páginas personalizadas para estados de carregamento (`loading.tsx`), erros (`error.tsx`) e páginas não encontradas (`not-found.tsx`).
- **Página "Sobre Mim":** Uma página de apresentação com design moderno.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com um stack moderno, focado em performance e na melhor experiência para o desenvolvedor.

- **[Next.js](https://nextjs.org/):** O framework React para produção.
  - **App Router:** Utilizado para roteamento baseado no sistema de arquivos, Server Components por padrão, e funcionalidades avançadas como layouts aninhados e grupos de rotas.
  - **Server Components & Client Components:** Separação clara entre componentes renderizados no servidor (para performance e acesso a dados) e no cliente (para interatividade).
  - **Server Actions:** Para mutações de dados seguras e diretas do cliente para o servidor, utilizadas no formulário de criação de post.
  - **Componentes Otimizados:** Uso de `<Image>`, `<Link>`, `<Script>` e `<Font>` para otimização automática de imagens, navegação, scripts e fontes.
- **[React](https://react.dev/):** A biblioteca base para a construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Para adicionar tipagem estática ao JavaScript, tornando o código mais robusto e fácil de manter.
- **[Tailwind CSS](https://tailwindcss.com/):** Um framework CSS utility-first para estilização rápida e responsiva.
- **Node.js:** O ambiente de execução para o lado do servidor, permitindo o acesso ao sistema de arquivos (`fs`) para ler e escrever os posts.

---

## 📁 Estrutura do Projeto

A estrutura de pastas segue as convenções do App Router para organização e clareza:

```
/
├── public/               # Arquivos estáticos (imagens, fontes)
├── src/
│   └── app/              # Coração da aplicação (App Router)
│       ├── (admin)/      # Grupo de Rota para páginas de administração
│       ├── _components/  # Pasta Privada para componentes reutilizáveis
│       ├── _lib/         # Pasta Privada para tipos e funções utilitárias
│       ├── about/        # Rota estática /about
│       ├── posts/
│       │   └── [slug]/   # Rota dinâmica para posts individuais
│       ├── actions.ts    # Server Actions
│       ├── layout.tsx    # Layout global da aplicação
│       ├── page.tsx      # UI da página inicial (/)
│       ├── loading.tsx   # UI de carregamento global
│       └── error.tsx     # UI de erro global
├── posts.json            # Nosso "banco de dados" simples
└── next.config.js        # Arquivo de configuração do Next.js
```

---

## 🚀 Como Executar o Projeto (Getting Started)

Siga os passos abaixo para rodar o projeto em sua máquina local.

**Pré-requisitos:**

- [Node.js](https://nodejs.org/en) (versão LTS recomendada)

**Instalação:**

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  **Abra o navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em funcionamento.

---

## 🧑‍💻

Desenvolvido por **Stephanny Yukare**.

- [LinkedIn](https://www.linkedin.com/in/yukare)
- [GitHub](https://github.com/yukare-dev)

# 🥗 Site de Nutrição SlimMind

**Um site de portfólio moderno, responsivo e de alta performance para o nutricionista João Paulo, construído com Next.js e TypeScript.**

---

_[Leia em Inglês / Read in English](README.md)_

---

## O Problema

Na era digital de hoje, uma presença online convincente é essencial para que profissionais de saúde e bem-estar se conectem com potenciais clientes. O nutricionista João Paulo precisava de uma plataforma que não apenas apresentasse seus serviços e metodologia, mas que também refletisse sua abordagem moderna e holística à nutrição. O desafio era ir além de um site estático e genérico para criar uma experiência envolvente, performática e interativa que pudesse converter visitantes em clientes de forma eficaz.

O objetivo era construir um site que não fosse apenas um cartão de visitas digital, mas uma ferramenta dinâmica para aquisição de clientes, com depoimentos, planos de serviço detalhados e linhas diretas de comunicação.

## A Solução

O **Site de Nutrição SlimMind** é uma aplicação de página única (SPA) projetada para fornecer uma experiência de usuário imersiva e informativa. Ele serve como a porta de entrada digital para a consultoria de nutrição de João Paulo, a "SlimMind".

A aplicação apresenta todas as informações essenciais em um formato de rolagem contínua, dividido em seções lógicas. Ela busca dinamicamente as avaliações dos clientes de uma planilha do Google (Google Sheet) externa, exibe depoimentos em um carrossel interativo e integra chamadas para ação (CTAs) diretas para o WhatsApp, facilitando a comunicação e o agendamento de consultas.

## Principais Funcionalidades

A arquitetura desta ferramenta utiliza uma stack de tecnologias moderna para alcançar um alto grau de performance, responsividade e interatividade.

-    **Arquitetura Frontend Moderna:** Construído com **Next.js 15** utilizando o App Router, garantindo uma base rápida, otimizada para SEO e escalável.
-    **Design Totalmente Responsivo:** Utiliza **CSS Modules** com media queries extensivas para oferecer uma experiência de visualização perfeita em todos os dispositivos, desde telas pequenas de celulares até desktops grandes.
-    **Integração de Conteúdo Dinâmico:** Busca e exibe avaliações de clientes em tempo real a partir de uma Google Sheet através de uma rota de API customizada, fornecendo prova social e construindo confiança.
-    **Mídia Otimizada:** Utiliza a biblioteca `next-video` para streaming de vídeo eficiente e `next/image` para carregamento otimizado de imagens, melhorando a performance e a experiência do usuário.
-    **UI/UX Interativa:** Apresenta um carrossel de depoimentos interativo (`react-alice-carousel`) e animações suaves ao rolar a página, criando uma jornada de usuário envolvente e profissional.
-    **Engajamento Direto com o Cliente:** Implementa botões de chamada para ação claros que abrem conversas pré-preenchidas no WhatsApp, reduzindo o atrito para que potenciais clientes entrem em contato.
-    **JavaScript Tipado:** Escrito inteiramente em **TypeScript** para um código robusto, de fácil manutenção e livre de erros.

## Demonstração

A aplicação final é um site de página única visualmente atraente e profissional. Ele guia o usuário por várias seções: uma introdução com um vídeo, detalhes sobre o nutricionista e a filosofia SlimMind, planos de serviço, depoimentos de clientes e uma seção de contato.

_{ Vídeo} _

## Instalação e Uso

Siga estes passos para executar o projeto em sua máquina local.

1.   **Clone o repositório:**

     ```bash
     git clone https://github.com/armandomonteir-o/nutri-jampa
     cd nutri-jampa
     ```

2.   **Configure o ambiente de desenvolvimento:**
     Este projeto usa Node.js. Certifique-se de que você o tem instalado.

3.   **Instale as dependências:**

     ```bash
     yarn install
     # ou
     npm install
     ```

4.   **Execute o servidor de desenvolvimento:**
     Este comando também sincronizará os arquivos de vídeo.

     ```bash
     yarn dev
     ```

     Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado.

## Tech Stack

-    **Framework:** [Next.js](https://nextjs.org/) - Escolhido por suas funcionalidades poderosas como Renderização no Lado do Servidor (SSR) e Geração de Site Estático (SSG), que proporcionam excelente performance e SEO — fatores críticos para um portfólio público. O App Router foi usado para uma arquitetura moderna e escalável.
-    **Biblioteca:** [React](https://react.dev/) - Como base do Next.js, o React permite a criação de uma interface de usuário modular e interativa através de uma arquitetura baseada em componentes, tornando o código reutilizável e de fácil manutenção.
-    **Linguagem:** [TypeScript](https://www.typescriptlang.org/) - Selecionado para adicionar tipagem estática ao JavaScript. Isso aumenta a qualidade do código, reduz erros em tempo de execução e melhora a experiência do desenvolvedor, tornando a base de código mais robusta e autodocumentada.
-    **Estilização:** [CSS Modules](https://github.com/css-modules/css-modules) - Usado para estilização para garantir que os nomes das classes tenham escopo local em seus componentes. Essa abordagem previne conflitos de estilo e torna o CSS mais gerenciável e escalável à medida que o projeto cresce.
-    **Vídeo:** [next-video](https://next-video.dev/) - Uma biblioteca projetada especificamente para o Next.js que simplifica e otimiza a entrega de vídeos. Foi escolhida para gerenciar o vídeo principal, fornecendo transcodificação automática, streaming adaptativo e carregamento otimizado.
-    **Carrossel:** [React Alice Carousel](https://github.com/maxmarinich/react-alice-carousel) - Um componente de carrossel leve e customizável, usado para exibir os depoimentos dos clientes de uma forma interativa e que economiza espaço.
-    **Ícones:** [React Icons](https://react-icons.github.io/react-icons/) - Esta biblioteca fornece uma vasta coleção de ícones populares como componentes React, simplificando o processo de adicionar e estilizar ícones em toda a aplicação, como nos links de redes sociais.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contribuidor

A project conceived and developed by Armando Monteiro."

<a href="https://github.com/armandomonteir-o">
  <img src="https://avatars.githubusercontent.com/u/141039211?v=4" width="75" height="75">
</a>

---

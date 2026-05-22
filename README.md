# Gerenciador de Tarefas

Um aplicativo simples de gerenciamento de tarefas construído com React, Vite e Tailwind CSS.

## Demonstração

Acesse a versão online do aplicativo: (em andamento)

## Funcionalidades

- Adicionar novas tarefas com título e descrição
- Marcar tarefas como concluídas
- Visualizar detalhes de uma tarefa
- Deletar tarefas
- Interface responsiva e moderna

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface
- **Vite**: Ferramenta de build rápida
- **Tailwind CSS**: Framework CSS para estilização
- **React Router DOM**: Para navegação entre páginas
- **Lucide React**: Ícones SVG
- **ESLint**: Linting do código

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/ds096/curso-de-react.git
   cd curso-de-react
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o navegador em `http://localhost:5173` (ou a porta indicada no terminal).

## Uso

- Na página inicial, adicione tarefas usando o formulário.
- Clique em uma tarefa para marcá-la como concluída.
- Use o botão com seta para ver os detalhes da tarefa.
- Use o botão com lixeira para deletar uma tarefa.

## Estrutura do Projeto

```
src/
├── components/
│   ├── AddTask.jsx      # Formulário para adicionar tarefas
│   ├── Button.jsx       # Componente de botão reutilizável
│   ├── Icons.jsx        # Ícones customizados
│   ├── Input.jsx        # Componente de input reutilizável
│   ├── Tasks.jsx        # Lista de tarefas
│   └── Title.jsx        # Componente de título (se usado)
├── pages/
│   └── TaskPage.jsx     # Página de detalhes da tarefa
├── App.jsx              # Componente principal
├── index.css            # Estilos globais com Tailwind
└── main.jsx             # Ponto de entrada
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Constrói o projeto para produção
- `npm run lint`: Executa o linter
- `npm run preview`: Visualiza a build de produção

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias!

## Licença

Este projeto é de código aberto e está sob a licença MIT.

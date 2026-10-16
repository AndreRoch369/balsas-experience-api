# Balsas Experience API

API REST desenvolvida para disponibilizar informações sobre experiências e atrações turísticas do município de Balsas, Maranhão.

O projeto permite consultar, cadastrar, atualizar e remover atrações turísticas, além de realizar buscas por categoria, tags e texto. Também possibilita registrar avaliações dos visitantes e consultar as categorias cadastradas.

# Equipe

- Nome: André Rocha Figueredo
  Matrícula: 25.1.03383


# Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- Node.js — ambiente de execução JavaScript no servidor;
- Express — framework utilizado para criação da API REST;
- Prisma ORM — responsável pela comunicação e modelagem do banco de dados;
- PostgreSQL — sistema gerenciador de banco de dados relacional;
- Neon — serviço utilizado para hospedagem do banco PostgreSQL;
- Git e GitHub — utilizados para versionamento e armazenamento do código-fonte.

# Modelo de dados

A aplicação utiliza quatro modelos principais:

# Categoria

Representa a categoria de uma atração turística.

Principais campos:

- `id`
- `nome`

Uma categoria pode estar relacionada a várias atrações.

# Tag

Representa características associadas às atrações, como natureza, aventura, cachoeira, cultura e lazer.

Principais campos:

- `id`
- `nome`

As tags foram criadas em uma tabela separada porque uma atração pode possuir várias tags e uma mesma tag pode estar associada a várias atrações, formando um relacionamento muitos-para-muitos.

# Atracao

Armazena os dados das atrações turísticas.

Principais campos:

- `id`
- `nome`
- `descricao`
- `cidade`
- `estado`
- `distanciaCentroKm`
- `criadaEm`
- `categoriaId`

Cada atração pertence a uma categoria e pode possuir várias tags e avaliações.

# Avaliacao

Armazena as avaliações realizadas pelos visitantes.

Principais campos:

- `id`
- `visitante`
- `nota`
- `comentario`
- `criadaEm`
- `atracaoId`

Cada avaliação pertence a uma atração.

# Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Exibe informações da API |
| GET | `/health` | Verifica o funcionamento da API |
| GET | `/atracoes` | Lista todas as atrações |
| GET | `/atracoes?categoria=...` | Filtra atrações por categoria |
| GET | `/atracoes?tag=...` | Filtra atrações por tag |
| GET | `/atracoes?q=...` | Pesquisa atrações por texto |
| GET | `/atracoes/:id` | Busca uma atração pelo ID |
| POST | `/atracoes` | Cadastra uma nova atração |
| PUT | `/atracoes/:id` | Atualiza uma atração |
| DELETE | `/atracoes/:id` | Remove uma atração |
| POST | `/atracoes/:id/avaliacoes` | Registra uma avaliação |
| GET | `/categorias` | Lista as categorias |

# Exemplos de requisições

# Listar todas as atrações

```http
GET /atracoes
```

# Pesquisar por categoria

```http
GET /atracoes?categoria=Natureza%20e%20Aventura
```

# Pesquisar por tag

```http
GET /atracoes?tag=cachoeira
```

# Pesquisar por texto

```http
GET /atracoes?q=rio
```

# Buscar atração por ID

```http
GET /atracoes/:id
```

Substitua `:id` pelo identificador da atração desejada.

# Exemplo de cadastro de atração

Requisição:

```http
POST /atracoes
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "nome": "Nova atração turística",
  "descricao": "Descrição da atração turística.",
  "categoria": "Natureza e Aventura",
  "cidade": "Balsas",
  "estado": "MA",
  "distanciaCentroKm": 10,
  "tags": [
    "natureza",
    "aventura"
  ]
}
```

Quando o cadastro é realizado corretamente, a API retorna o status HTTP:

```text
201 Created
```

# Exemplo de avaliação

```http
POST /atracoes/:id/avaliacoes
Content-Type: application/json
```

Corpo:

```json
{
  "visitante": "Visitante",
  "nota": 5,
  "comentario": "Lugar muito bonito."
}
```

A nota deve ser um número inteiro entre **1 e 5**.

# Como executar o projeto

# 1. Clonar o repositório

```bash
git clone 
```
https://github.com/AndreRoch369/balsas-experience-api.git

Entre na pasta:

```bash
cd balsas-experience-api
```

# 2. Instalar as dependências

```bash
npm install
```

# 3. Configurar o banco de dados

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@host/banco?sslmode=require"
```

> Não publique senhas ou dados reais de acesso ao banco de dados. O arquivo `.env` está configurado para não ser enviado ao GitHub.

# 4. Executar as migrations

Para ambiente de desenvolvimento:

```bash
npx prisma migrate dev
```

Para aplicar migrations existentes em ambiente de produção:

```bash
npx prisma migrate deploy
```

# 5. Gerar o Prisma Client

```bash
npx prisma generate
```

# 6. Inserir os dados iniciais

```bash
npm run seed
```

# 7. Iniciar a API

Modo normal:

```bash
npm start
```

Modo de desenvolvimento:

```bash
npm run dev
```

Por padrão, a API poderá ser acessada localmente em:

```text
http://localhost:3000
```

Teste de funcionamento:

```text
http://localhost:3000/health
```

Resposta esperada:

```json
{
  "status": "ok"
}
```

# Banco de dados

O projeto utiliza PostgreSQL com Prisma ORM.

As migrations ficam armazenadas no diretório:

```text
prisma/migrations
```

O arquivo principal do modelo de dados é:

```text
prisma/schema.prisma
```

O projeto também possui um script de seed para cadastrar os dados iniciais das atrações, categorias, tags e avaliações.

# Status HTTP utilizados

A API utiliza códigos HTTP de acordo com o resultado das operações, incluindo:

- `200 OK` — requisição realizada com sucesso;
- `201 Created` — recurso criado com sucesso;
- `204 No Content` — recurso removido com sucesso;
- `400 Bad Request` — dados enviados são inválidos;
- `404 Not Found` — recurso ou rota não encontrada;
- `409 Conflict` — conflito com registro existente;
- `500 Internal Server Error` — erro interno do servidor.

# API publicada

A API também está disponível online:

```text
https://balsas-experience-api-098u.onrender.com
```


# Repositório

Código-fonte disponível no GitHub:

```text
https://github.com/AndreRoch369/balsas-experience-api.git
```

# Projeto acadêmico

Projeto desenvolvido na disciplina de Programação para Web, do curso de Análise e Desenvolvimento de Sistemas, como atividade prática envolvendo o desenvolvimento e a publicação de uma API REST com persistência de dados em PostgreSQL.

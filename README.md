# Desafio Técnico - Full Stack Junior

## Candidato

- Rafael da Cunha Santos
- [LinkedIn](https://www.linkedin.com/in/rafaelcunhas/)
- [Github](https://github.com/RafaelCunhaS)
- Telefone: (71) 99249-0607
- Email: rafaelcs_94@hotmail.com

## Rodando o projeto

```bash
    # Clone o repositório
    $ git clone git@github.com:RafaelCunhaS/naranja-labs-test.git

    # Entre no diretório do projeto NextJS
    $ cd naranja-labs-test && cd next-app

    # Rode o projeto
    $ npm run dev
    # Rotas do frontend e do backend estarão online em seu localhost 'http://localhost:3000'
```

## Hero Section

![Car Rental](./image.png)

## Backend

- Rotas da API precisam da chave secreta ("naranja-labs") no header "Authorization":

  ```
  headers: {
    "Authorization": "naranja-labs"
  }
  ```

- Caso contrário, retornarão uma resposta 401:

  ```
  {
    "message": "Unauthorized"
  }
  ```

- Rotas API:

  `GET http://localhost:3000/api/jobs`

  - Sucesso (200):

  ```json
  [
    {
      "id": 1,
      "job": "Full Stack Developer",
      "level": "Junior",
      "status": "open"
    },
    {
      "id": 2,
      "job": "Frontend Developer",
      "level": "Junior",
      "status": "closed"
    },
    {
      "id": 3,
      "job": "Backend Developer",
      "level": "Junior",
      "status": "closed"
    },
    {
      "id": 4,
      "job": "Full Stack Developer",
      "level": "Senior",
      "status": "closed"
    }
  ]
  ```

  `GET http://localhost:3000/api/jobs?level=Senior`

  - Sucesso (200):

  ```json
  [
    {
      "id": 4,
      "job": "Full Stack Developer",
      "level": "Senior",
      "status": "closed"
    }
  ]
  ```

  `GET http://localhost:3000/api/jobs/1`

  - Sucesso (200):

  ```json
  {
    "id": 1,
    "job": "Full Stack Developer",
    "level": "Junior",
    "status": "open"
  }
  ```

  `POST http://localhost:3000/api/jobs/submit`

  - Body esperado:

  ```json
  {
    "name": "string",
    "age": "number",
    "phone": "string",
    "state": "string",
    "city": "string"
  }
  ```

  - Sucesso (201):

  ```json
  {
    "message": "Thank you for your application, ${name}"
  }
  ```

  - Erro (400):

  ```json
  {
    "message": "${error message}"
  }
  ```

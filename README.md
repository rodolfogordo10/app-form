
![1_nSuwUaZxQyBsN3-eUwudSg](https://github.com/rodolfogordo10/app-form/assets/11947679/2c379ba3-93f8-4ea8-9d66-e02360bbe0d5)

### Introduction

This is a Full-stack Dockerized

#### Stack

- React.js
- Node.js
- Postgres
- Docker

### Prerequisites

Make sure you have the below installed on your machine.

- [x] **Docker** : https://docs.docker.com/engine/install/
- [x] **Docker-Compose** : https://docs.docker.com/compose/install/
- [x] **Node** : https://nodejs.org/en/

### File strcutre

```
app-form
    |
    |---/ backend
    |
    |---/ db
    |
    |---/ frontend
    |
    docker-compose.yml
    README.md
```

## Demo

Demo is a simple Todolist using React and styled-components on client side, nest on backend and postgres as our database
demo can be started in development mode and in production mode as well.


### Quick start

Clone this repo to your local machine

```
git clone https://github.com/rodolfogordo10/app-form
```

Before we run our container lets calm down our editor and npm install dependecies locally.
For that let's run the following command

```bash
# install server dependencies

cd app-form/backend && npm i

# instal client dependencies

cd ../frontend && npm i
```

Now Let's check our Demo, for that run the following command

```bash
cd ../ && docker-compose.yml up --build
```

it will be served on `http://localhost:3000`

<img width="478" alt="Captura de tela 2023-10-02 124118" src="https://github.com/rodolfogordo10/app-form/assets/11947679/2dbda9c0-1809-4126-bbcf-cdfb8b7b50a4">


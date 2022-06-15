# DeepESG Teste

## Descrição

Esse repositório contém o sistema de front resposável pelas operações CRUD das entidades filial (branchOffice), computador (computer) e ar condicionado (airConditioner).

## Instalação

```bash
$ yarn install
```

## Rodando o aplicativo

```bash
# desenvolvimento
$ yarn run start

# desenvolvimento no modo 'watch'
$ yarn run dev

# modo de produção
$ yarn run start
```

## Usando a aplicação (Considerações)

Como o cadastrado de uma filial é requerido para o cadastramento de um computador e de ares condicionados, quando não há filial cadastrada, a tela inicial mostra apenas o card 'Filial'. Após o cadastramento da primeira filial, os outros cards são apresentados.

Para criar um novo cadastro, na tela de listagem, há um ícode de uma pasta com um pequeno mais, basta clicá-lo para o redirecionamento.

## URL

A entrada da aplicação é exposta na porta 3050.

As rotas de edição e criação apresentam '/edit' na sua url. Enquanto que, as de listagem, apresentam '/list'.

### Filial (branchOffice):

```bash
# Lista todos os registros das filiais
- /branch-office/list

# Cria uma nova filial
- /branch-office/edit

# Atualiza uma filial com o id passado
- /branch-office/edit
Obs.: Na atualização, as informações são passadas como parâmetros queries.

# Deleta uma filial 
- Clicar no ícone de lixeira na listagem.
```

### Computador (computer):

```bash
# Lista todos os computadores cadastrados
- /computador/list

# Cria um novo computador
- /computador/edit

# Atulializa um computador com o id passado
- /computador/edit
Obs.: Na atualização, as informações são passadas como parâmetros queries.

# Deleta uma computador 
- Clicar no ícone de lixeira na listagem.
```

### Ar Condicionado (airConditioner):

```bash
# Lista todos os ares condicionados cadastrados
- /air-conditioner/list

# Cria um novo ar condicionado
- /air-conditioner/edit

# Atulializa uma ar condicionado com o id passado
- /air-conditioner/edit
Obs.: Na atualização, as informações são passadas como parâmetros queries.

# Deleta uma ar condicionado 
- Clicar no ícone de lixeira na listagem.
```

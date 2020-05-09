# Maratona Fullcyle 2.0 - Desafio 03

## Rodar local
```bash
$ yarn run start
$ yarn run start:dev <- Esse tem Hot Deploy
```

## Gerar imagem Docker
```bash
$ docker build -t gustavocarvalhoti/peer-to-peer .
```

## Rodando a imagem
```bash
$ docker run -p 3000:3000 gustavocarvalhoti/peer-to-peer
```

## Subindo a imagem para o Docker Hub
```bash
$ docker login
$ docker push gustavocarvalhoti/peer-to-peer
```

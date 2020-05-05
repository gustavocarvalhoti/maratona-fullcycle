### Create end start
```sh
$ docker build -t gustavocarvalhoti/node14.1-alpine .
$ docker run -p 3000:3000 -d gustavocarvalhoti/node14.1-alpine
```

### Acessar a aplicação:
`http://127.0.0.1:3000/`

### Comands:
```sh
$ docker images
```
```sh
$ docker ps
```
```sh
$ docker kill <CONTAINER ID>
```

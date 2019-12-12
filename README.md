# Trabalho final da disciplina DM124
## Discente: Edson de Senna Júnior
## Docente: Edy Segura

[PT-BR] Este trabalho foi desenvolvido utilizando o framework NestJs e o banco não-relacional MongoDB.
[ENG] This work was made using NestJS framework and No-SQL MongoDB.

[PT-BR] Para sua utilização, executar os seguintes passos:
[ENG] To use, follow those steps:

```
yarn install
yarn start
```
[PT-BR] O projeto será iniciado na porta local 3000 ou na porta default do servidor em que está hospedado.
[ENG] The project will be started and provided in 3000 port or in server default port where was deployed.

[PT-BR] Alguns endpoints estão protegidos e devem utilizar um token JWT para serem acessados, para obter um token de acesso utilize o seguinte endpoint e informe o seguinte objeto.
[ENG] Some endpoints are protected and a JWT token will be needed to access them, to get a token use this endpoint e and provide the following object.

```
POST /auth/login

{
	"username": "admin",
	"password": "adm123"
}
```

[PT-BR] Para manipular os objetos de entregas no banco de dados utilize os seguintes endpoints, estes seguem o modelo REST.
[ENG] To manipulate deliveries objects into the database uses those endpoints, they follow REST model.

```
GET /deliveries
GET /deliveries/:id
POST /deliveries
PATCH /deliveries/:id
DELETE /deliveries/:id
```

[PT-BR] Um exemplo de objeto de entrega.
[ENG] An example of delivery object.

```
{
        "_id": "5df18c9e1bff9b0023eb6e4d",
        "orderId": "24",
        "clientId": "123",
        "receiverName": "Edson Junior",
        "receiverCPF": "11111111111",
        "isClientReceiver": false,
        "orderDate": "2019-11-23T14:00:00.000Z",
        "location": "SRS, Minas Gerais, Brazil",
        "__v": 0
}
```


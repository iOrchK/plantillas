# simple-api-store

## Descripción

Una simple API desarrollada con NestJS que contiene un CRUD de productos

## Framework y Dependencias

```bash
NestJS             -> https://docs.nestjs.com/
@nestjs/config     -> https://docs.nestjs.com/techniques/configuration
@nestjs/mongoose   -> https://docs.nestjs.com/techniques/mongodb
env-cmd            -> https://www.npmjs.com/package/env-cmd
swagger-ui-express -> https://docs.nestjs.com/openapi/introduction
uuid               -> https://www.npmjs.com/package/uuid
```

## Instalación

```bash
$ npm install
```

## Ejecutar la app

```bash
# desarrollo
$ npm run start

# modo observador
$ npm run start:dev

# compilación para producción
$ npm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
$ npm run test

# pruenas e2e
$ npm run test:e2e

# cobertura de prueba
$ npm run test:cov
```

## Endpoints

```bash
# desarrollo
Lista de productos     -> GET    -> https://localhost:3001/products
Buscar producto por id -> GET    -> https://localhost:3001/products/:id
Crear producto         -> POST   -> https://localhost:3001/products
Actualizar producto    -> PUT    -> https://localhost:3001/products/:id
Eliminar producto      -> DELETE -> https://localhost:3001/products/:id
```

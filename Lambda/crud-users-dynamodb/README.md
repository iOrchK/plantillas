![N|Solid](https://lh3.googleusercontent.com/proxy/O2W5qs6bCWd1UthCbrpymK4gVSGfvNG6VOak5YqTnrZXj0j7J6AT1bODZguuq8DZRFPKgO5J9z0xbAh3BLH0GySM1zo2R7ONS6VI-Jsq0pTcEQ)

# [crud-lambda-dynamodb](https://github.com/iOrchK)

## Descripción

Este proyecto utiliza el framework Serverless para subir la lambda a AWS.

## Requerimientos para iniciar

- Serverless framework
- NodeJS > 8
- Cuenta de AWS
- Key y Secret Key para desplegar
- En el archivo serverless.yml, cambiar el profile por el configurado en el archivo credencials

## Configuración de credenciales AWS

Ejecuta el siguiente comando reemplazando APP_KEY y APP_SECRET por el key y secret key de la cuenta AWS.

- sls config credentials -o --provider aws --key=APP_KEY --secret=APP_SECRET

## Inicialización

Ejecutar los siguientes comandos en orden:

- npm install
- sls deploy

## Variables de ambiente

Configuración de variables de ambiente - [Ver documentación](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html)

## Tecnologías Utilizadas

| Plugin     | README                                                            |
| ---------- | ----------------------------------------------------------------- |
| aws-sdk    | [https://aws.amazon.com/es/sdk-for-node-js/]                      |
| jsonschema | [https://json-schema.org/learn/getting-started-step-by-step.html] |
| moment     | [https://momentjs.com/docs/]                                      |

## Versiones

1.0.0 - 2020

## Autor

Jorge Chable - [Email](yahicimosclick9193@gmail.com)

## Licencia

Este proyecto fue realizado para fines demostrativos y uso personal.
Para mas información referirse a [Jorge Chable - Desarrollador Full Stack](https://web.facebook.com/kaRyjOrch)

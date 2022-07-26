# Challenge Accenture


------------------------------------------------------------------------------------------------------------------------------------------------------------

## Configurando o Cypress

> - Instalado o NodeJS: https://nodejs.org/en/
> - Instalar o pacote **YARN** (Opcional): https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
> - Crie um diretorio e em seguida inicie o comando para criar um pacote NPM
>> - `npm init -y` | Será criado um arquivo na raiz do projeto chamado `package.json`.
> - Instalar o Cypress com Cucumber em ambiente de desenvolvimento
>> - `npm install --save-dev cypress cypress-cucumber-preprocessor`
>> - `npm install --save-dev cypress-file-upload`
>> - Dentro do arquivo `package.json` incluiremos dois scripts para rodar o cypress no terminal de duas formas: 1º (`npm run run`: Pacote NPM ou `yarn run`:  Pacote Yarn) para executar pelo terminal, sem a necessidade de alguma IDE. 2º (`npm run test`: Pacote NPM ou `yarn test`: Pacote Yarn) iremos abrir a nossa IDE para melhor aproveitamento e aprendizado do framework.
>> ![image](https://user-images.githubusercontent.com/105504315/172057220-de631837-5af4-45c8-88da-a5f023a3f625.png)
>> - Por fim precisamos rodar o comando `npx cypress open` para que o framework crie a estrutura de pastas que iremos utilizar em nosso projeto

## Melhores práticas e organização
> Foi utilizado Cenário em BDD com padrão de escrita Gherkin
> Para organização da estrutura do projeto utilizei PageObject para melhor manutenção ao longo do código


# Modelo básico de biblioteca para NodeJs (Padrão Riachuelo / COE)

> Este artigo requer conhecimentos em 
> [NodeJs v14x](https://nodejs.org/docs/latest-v14.x/api/), 
> [Typescript v4.3.x](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html), 
> [nvm](https://github.com/nvm-sh/nvm), 
> [Git](https://git-scm.com/), 
> [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks),
> [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) e 
> [Azure Artifacts](https://docs.microsoft.com/pt-br/azure/devops/artifacts/concepts/feeds?view=azure-devops)

## O que já está configurado? 
* Typescript.
* Jest e depurador via `vscode` ( `.vscode/launch.json` ) .
* ESLint e Prettier para formatação e boas práticas de códificação.
* Pipeline para publicação no `Azure Artifacts`
* `Git Hooks` com `Husky`, para prevenção de commits mau formatados e testes (`.husky/`)
* Endereços de repositórios `npm` da corporação `.npmrc`
* Recomendações de extenssões para `vscode` (`.vscode/extensions.json`)

## Fluxo de desenvolvimento
1. Versão alpha ( `npm run releass:alpha` ).
2. Publicação ( Execute a pipeline de publicação ).
4. Testes integrados ( Crie um projeto de teste utilizando esta biblioteca ).
5. Versão final ( `npm run release` ).
6. Publicação ( Execute a pipeline de publicação ).


## Passos iniciais 

```console
$ npm i 
or 
$ yarn
```
# Estrutura do projeto

* 📁 `.azuredevops/` ( *configurações de `devops`* )
  * 📃 **`README.md`**
  * 📃 **`builder.Dockerfile`**
  * 📃 **`pipeline-azure.yml`**
  * 📃 **`pull_request_template.md`**
  * 📃 **`sonar-project.properties`**
  * 📃 **`sonar.env`**
* 📁 `.husky/`  ( *`Git Hooks` para Husky* )
  * 📁 `_/`
    * 📃 **`.gitignore`**
    * 📃 **`husky.sh`**
  * 📃 **`commit-msg`**
  * 📃 **`pre-push`**
* 📁 `.vscode/` ( *configurações para `vscode`* )
  * 📃 **`extensions.json`** ( *recomendações de extenssões [opcional]* )
  * 📃 **`launch.json`** ( *configurações de debug* )
  * 📃 **`settings.json`** ( *configurações de ambiente para esste projeto* )
* 📁 `dist/` ( *arquivos transpilados sairão aqui* )
* 📁 `node_modules/` 
* 📁 `src/` ( *pasta de códigos fonte, a implementação desta biblioteca* )
  * 📃 **`hello-lib-one.spec.ts`** ( *exemplo de teste* )
  * 📃 **`hello-lib-one.ts`** ( *exemplo de implementação* )
  * 📃 **`index.ts`** ( *indexação de tudo que será exportado pela biblioteca* )
  * 📃 **`interfaces.ts`**
* 📃 **`.eslintrc.js`** ( *configuração `ESLint`* )
* 📃 **`.gitignore`** ( *arquivos ignorados pelo `git`* )
* 📃 **`.npmrc`** ( *configuração de acesso aos repositórios `npm`* )
* 📃 **`.prettierrc`** ( *configuração do `prettier`* )
* 📃 **`.CONTRIBUTING`** ( *manual de contribuição* )
* 📃 **`README.md`** ( *descrição e exemplos de uso desta biblioteca* )
* 📃 **`Taskfile.yml`** ( *indice de comandos para `construção`, `publicação`, `testes` e etc para `devops`* )
* 📃 **`jest.config.js`** ( *configuraçao do `jest`* )
* 📃 **`package-lock.json`** ( *trava de versões de dependências para o `npm`* )
* 📃 **`package.json`**
* 📃 **`tsconfig.json`** ( *configuração do `typescript`* )
* 📃 **`yarn.lock`** ( *trava de versões de dependências para o `yarn`* )

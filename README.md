<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Login App - TypeScript</h3>

---

<p align="center"> Convert the basic login app in JavaScript to TypeScript..
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [PreRequests](#pre_requests)
- [Setting up dev environment](#set_dev_env)
- [Running the tests](#tests)
- [Style guide](#style)
- [Project structure](#proj_struct)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

The purpose of this project is to create an api for managing user services.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

 ## 🏁 Prerequests <a name = "pre_requests"></a>

- Node.js- v12.3.1
- npm - 6.9.0
- TypeScript


## 🏁 Setting up development environment <a name = "set_dev_env"></a>

Please do the following instructions setup the dev envrionment

- Install the depedndices by running `npm install` in the root directory.

- To start the development server run  `npm run dev`


## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system(TBD).

- To run tests please use `npm test` in root directory.

### Style guide <a name = "style"></a>

We used eslint for linting and airbnb styleguide for styling

- [Eslint](https://eslint.org/) 
- Style guide [Google](https://github.com/google/eslint-config-google)

To find out the lint issues please run `npm run lint`, Also please use
EScode plugins in IDE  for a better support 

- [Vscode-eslint-plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Note

Make sure that there is no lint errors on before each PR


## 🧐 Project structure <a name = "proj_struct"></a>


```
├── README.md
├── src
│   └── app.ts
|   └── index.ts
├── environments
│   ├── env-sample.json
│   ├── env.json
│   └── index.js
├── test
│   └── index.spec.ts
├── package-lock.json
├── package.json
├── .eslintrc.yml
├── .gitignore
├── tsconfig.json
├── typings.json

```

## 🚀 Deployment <a name = "deployment"></a>

To deploy this on a live system

- Please use `npm run build`

The command will create a build folder in the root directory with the compiled code.

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@kiransukumaran](https://code.qburst.com/kiransukumaran) - Owner

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used

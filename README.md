# numiz-pwa
Numiz NFT marketplace progressive web application

## Developers guide
### Setup a project
Strongly recommended to add ssh public key to you profile and then clone repository and install dependencies:
```
git clone git@github.com:numizteam/numiz-pwa.git
cd numiz-pwa
yarn
```
Then copy `.example.env.*` files for setup you local environment configs:
```
cp ./.example.env ./.env
cp ./.example.env.test.local ./.env.test.local
cp ./.example.env.development.local ./.env.development.local
cp ./.example.env.production.local ./.env.production.local
```
All sensetive data, or local configuration dependent data should be stored in the environment variables locally on the developer computer

### Common project working tree overview
```
/
├─.git/             # repository configuration
├─.github/          # github CI/CD automations and templates for PR and issues
├─.storebook/       # storybook configuration
├─devlab/           # developers experiments, code samples, snippets, temporary unused modules, etc
├─public/           # statically served content 
│ ├─locales/        # strings translations for i18n
│ └─...             # HTML's, manifest, some icns, etc
├─src/              # project sources
│ ├─elements/       # simple stateless components
│ ├─components/     # complex statefull components
│ ├─pages/          # app pages, related to routing
│ ├─stores/         # application state code
│ ├─utils/          # helper functions, custom libs, and other utility tools
│ ├─App.tsx         # top level application routing and general layout 
│ ├─i18n.ts         # i18n configuration
│ ├─index.css       # app global styles
│ ├─App.css         # top level related layout styles
│ └─...             # sevice worker code, tests setup, web vitals, and other service code
├─.env.*            # developer local environment configuration
├─craco.config.js   # webpack config overrides and extending
└─...               # package.json, tsconfig, .gitignore, readme, and other top level repo docs and configuration
```
### Detailed description
#### Working with code
Foulders `elements`, `components`, `pages`, `stores`, and `utils` are contains a file `index.ts`, which purpose is make a reexport of folder related modules. Each module should be located in the separated subfolder with next structure (using the `elements` folder as an example):
```
src/
├─elements/
│ ├─SomeElement/                 # Module subfolder
│ │ ├─SomeElement.tsx            # Module realization (can have a '.ts' extension for utils)
│ │ ├─SomeElement.css            # Globally available styles (should use BEM for selectors)
│ │ ├─SomeElement.module.css     # Local component styles (not necessary for use a BEM, because selectors names will be guaranted unique)
│ │ ├─SomeElement.stories.tsx    # Component storybook configuration for visual testing
│ │ ├─SomeElement.test.tsx       # Module tests for jest unit testing
│ │ └─package.json               # We use a 'main' field of package.json instead 'index' script for avoid unnecessary reexports...
│ └─index.ts                     # ...all reexports located in the common index file, located in a root of modules folders
└─...
```
NOTE: also '.scss' supported for any style files for enable sass preprocessor features

Once created a module should be added to related to folder `index.ts` file, so, this will allows to use a bulk import:
```typescript
import React from 'react';
import { Component1, Component2, Component3 } from '../components'
import { util1, util2, util3 } from '../utils'
```
`elements` folder should contains a wildly reusable stateless components, which know nothing about application business logic and receive any data through pros. That components can contains internal state, actual only for element itself and it should be independent from any external application data.

`components` foulder should contains a components, which can interact with application state. In a generally, please avoid from providing data to that components through a props. This is possible in exceptional situations, but in general, that components should receive a data from application stores and then provide that data to the elements through props.

`pages` folders should contains a components, which mounted related to application routing. They are should act acording to rules described for c omponents in a `components` folder, but also can receive data through props in some rare cases.

`stores` foulder should contains application store modules. // TODO: describe a stores under the hood here

`utils` foulder should contains variouse service functions, like a calcukations, formatters, helpers, and any other modules, which are not a React components

NOTE: Please do not use a FunctionalComponent, or FC shortcut type for declaring react components. Use just an interface instead:
```typescript
// Bad solution
import React, { FC } from 'react';

type TMyProps = {
  someProp: string;
  otherProp: number;
}

const MyComponent:FC<TMyProps> = ({someProp, otherProp}) => {
  return ...
}

// Good code style
import React from 'react';

interface IMyProps = {
  someProp: string;
  otherProp: number;
}

const MyComponent = ({someProp, otherProp}: IMyProps) => {
  return ...
}

```
Reffer to [this article](https://github.com/typescript-cheatsheets/react#section-2-getting-started) for understand why `React.FC` is discouraged

#### Testing

// TODO: describe a QA rules and practices

#### CI/CD

// TODO: describe a CI/CD rules and practices

#### Localization
All strings, used in application, should be located at `/public/locales/${lang}/translation.json` files. English language used as fallback locale, so, any initially added string should be added at `en` locale using unique key, and then translated to other language. Later for project should be started a [weblate](https://weblate.org/) instance, which will allow translating application to any count of variouse languages by outsource collaborators, using intuitive webinterface

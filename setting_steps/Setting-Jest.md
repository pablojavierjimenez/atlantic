## How Setting Jest as a unit testing test tool

### Nota:
  - Here you can find the [Jest API Documentation](https://jestjs.io/docs/en/api)
  - This **Jest** settin is based on [this tutorial](https://dev.to/alfredoperez/angular-10-setting-up-jest-2m0l)

- **Step 1: Uninstall Karma and jasmine**
  ```bash
  :~$ npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
  ```
  And Remove `karma.conf.js` and `src/test.ts` files

- **Step 2: Install dependenciaes**
  ```bash
  :~$ npm install jest jest-preset-angular @types/jest --save-dev
  ```

- **Step 3: Configure Jest**
  Create the `Jest-setup.ts` with this content:
  ```typescript
  import 'jest-preset-angular';
  ```

  Edit the `tsconfig.spec.json` and fill it with the next content:
  ```JSON
  {
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
      "outDir": "./out-tsc/spec",
      "types": [
        "jest",
        "node"
      ]
    },
    "files": [
      "src/test.ts",
      "src/polyfills.ts"
    ],
    "include": [
      "src/**/*.spec.ts",
      "src/**/*.d.ts"
    ]
  }
  ```
- **Step 4: Edit package.json to include Jest**
  
  then update the `package.json` with the following content:

  1. Modify the test scripts to the following:
      ```JSON
        "test": "jest",
        "test:coverage": "jest --coverage",
      ```
  2. Add Jest configuration to the end of the `package.json` file
      ```JSON
      "jest": {
        "preset": "jest-preset-angular",
        "setupFilesAfterEnv": [
          "<rootDir>/Jest-setup.ts"
        ],
        "testPathIgnorePatterns": [
          "<rootDir>/node_modules/",
          "<rootDir>/dist/",
          "<rootDir>/src/test.ts"
        ],
        "globals": {
          "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.spec.json",
            "stringifyContentPathRegex": "\\.html$"
          }
        }
      }
      ```

  and to end this step run test comand
  ```bash
  :~$ npm test
  ```
----

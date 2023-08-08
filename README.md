# Configure Tests React + Testing Library + Vite + TS

- Install Jest and Types `npm i jest @types/jest -D`
- Configure command in `package.json` to run the tests
   ```json
   {
      "scripts": {
         ...
         test: "jest"
         ...
      }
   }
   ```
- Create a folder named `tests` and create a file named `App.spec.tsx`
- Install testing library `npm i @testing-library/jest-dom @testing-library/react @testing-library/user-event -D`
- Install babel to convert the component code `npm i @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D`
- Create a new config in the `package.json`
   ```json
   {
      "jest": {
         "testEnvironment": "jest-environment-jsdom",
         "setupFilesAfterEnv": ["<rootDir>/setup-test.js"]
      }
   }
   ```

- Create a new file named `setup-test.js` in root dir with these config
   ```js
   import '@testing-library/jest-dom'
   ```

- Create a new file named `babel.config.cjs` in root dir
   ```js
   module.exports = {
      presets: [
         ['@babel/preset-env', {targets: {esmodules: true}}],
         ['@babel/preset-react', {runtime: 'automatic'}]
      ]
   }
   ``` 

- Install babel ts `npm i @babel/preset-typescript -D` and add config in the file `babel.config.cjs`

   ```js
   module.exports = {
      presets: [
         ['@babel/preset-env', {targets: {esmodules: true}}],
         ['@babel/preset-react', {runtime: 'automatic'}],
         '@babel/preset-typescript'
      ]
   }
   ```


- Create a test in the file `App.spec.tsx` and exec with `npm run test`

   ```js
   import { render, screen } from '@testing-library/react'
   import '@testing-library/jest-dom'
   import App from '../App'
   
   describe('App test', () => {
      it('Should render `Hello World in App component', () => {
         render(<App />)
         screen.getByText('Hello World!')
      })
   })

   ```


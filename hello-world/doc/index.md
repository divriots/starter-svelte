# Svelte Design System Sample

This is a simple Svelte-based Design System sample.

## Tutorial: Use it as a Design System for your Svelte project

In this quick and guided tutorial, you'll use this Design System in your local Svelte project.

### Pre-requisites (in your local environment)

1. Create a new Svelte app
   ```sh
   $ npm init svelte@next my-svelte-app
   ```
   and validate default choices.
2. Enter your project and install dependencies
   ```sh
   $ cd my-svelte-app
   $ npm install
   ```
3. Add `@fortawesome/fontawesome-free` package to your dependencies as the Design System rely on it for icons:
   ```sh
   $ npm install --save @fortawesome/fontawesome-free
   ```

### In Backlight

1. Get the command to link your Design System in your local project. To so, click the top-right button next to your avatar. You get a modal named `Link`, showing a `npx backlight` command. Copy it.

### In your local project

1. Paste and execute the previously copied command. Validate default choices.
2. Run your local project
   ```sh
   $ npm run dev
   ```
   and point your browser to the URL given by the command
3. Open your project in your IDE, and go to the file `src/routes/index.svelte`
4. In the `<script>` tag, add the following lines to import the Design System CSS stylesheet as well as the `SwitchTheme` component
   ```js
   import '@backlight-dev/[workspace].[project]/main/dist/style.css';
   import SwitchTheme from '@backlight-dev/[workspace].[project]/switch-theme/src/SwitchTheme.svelte';
   ```
   keep in mind to replace `[workspace]` and `[project]` by the name of yours. Have a look at the `node_modules/@backlight-dev` folder.
5. Above the `<Counter />` component in the markup, add the `<SwitchTheme />` from the Design System

In your browser the Switch theme button is now visible above the Counter. Click on it. Your theme switches from light to dark.

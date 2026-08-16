# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Hostinger deployment

This project is a TanStack Start application and must run as a Node.js app on
Hostinger. Build it locally with:

```sh
npm run build
```

Upload the generated `.output` directory and the project files required by
Hostinger's Node.js application setup. Use `node .output/server/index.mjs` as
the startup command, or run:

```sh
npm start
```

Set the application port using Hostinger's environment configuration if the
panel requires it. This is not a WordPress theme: the compiled React output
cannot be edited in WP Elementor. Elementor editing requires rebuilding these
pages as WordPress templates or creating a WordPress integration/plugin.

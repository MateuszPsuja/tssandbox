# TS Sandbox
Preconfigured Typescript environment for learning purposes.

Features: TypeScript compilation, dev server, watch-mode, and Jest tests.

**Prerequisites**
- Node.js (v14+ recommended)
- npm (comes with Node.js)

**Install**

Clone the repo and install dependencies:

git clone https://github.com/aresimo/tssandbox.git
cd tssandbox
npm install

**Run the app (development)**

The repo includes a convenient `start` script that runs TypeScript compilation, starts the watcher and the dev server concurrently:

npm start

What `npm start` does:
- runs TypeScript compiler (build + watch)
- serves the site using `lite-server`

# Compile TypeScript once
npm run tsc

# Compile in watch mode
npm run tsc:w

# Start only the static dev server
npm run lite

**Run tests**

Tests use Jest. Run the test suite with:

npm test
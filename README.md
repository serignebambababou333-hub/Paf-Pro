Random Joke Generator

This is a minimal static random joke generator that fetches jokes from the icanhazdadjoke API.

Files added:
- index.html: UI
- script.js: fetches jokes from https://icanhazdadjoke.com/ and enables share/copy
- style.css: basic styles

How to use:
1. Open index.html in a browser (double-click or serve it).
2. Click "Get Joke" to fetch a new joke. The page fetches one on load as well.

Notes:
- The generator uses https://icanhazdadjoke.com/ (no API key required). It sets Accept: application/json in the request.
- To publish a live site, enable GitHub Pages in the repository settings (use the main branch) or deploy the static files to Netlify/Vercel.

If you'd like, I can enable GitHub Pages for this repo (create a branch or put files in /docs) or create a small Express/Node backend to proxy requests. Which would you prefer?

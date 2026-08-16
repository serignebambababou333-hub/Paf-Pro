Random Joke Generator

This is a minimal static random joke generator that fetches jokes from the icanhazdadjoke API.

Files in this repository:
- index.html: UI (updated to remove personal email and include the site link https://pafproevent.com)
- script.js: fetches jokes from https://icanhazdadjoke.com/ and enables share/copy
- style.css: basic styles
- CNAME: custom domain (pafproevent.com)

Contact / bookings
- Please use the official site for contact and bookings: https://pafproevent.com

How to use locally:
1. Open index.html in a browser or serve the folder (recommended) with:
   - Python 3: python -m http.server 8000
   - Then open: http://localhost:8000
2. Click "Get Joke" to fetch a new joke.

Notes:
- The generator uses https://icanhazdadjoke.com/ (no API key required). It sets Accept: application/json in the request.
- To publish live, enable GitHub Pages in the repository settings (main branch, root) or use the provided GitHub Actions workflow.

If you'd like additional changes (contact form, booking link, or remove phone number from other places), tell me and I will update the files.

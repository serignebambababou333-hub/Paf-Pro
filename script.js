const jokeEl = document.getElementById('joke');
const btn = document.getElementById('getJoke');
const shareBtn = document.getElementById('share');

async function fetchJoke() {
  jokeEl.textContent = 'Loading...';
  shareBtn.disabled = true;
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    const text = data && data.joke ? data.joke : 'No joke found.';
    jokeEl.textContent = text;
    shareBtn.disabled = false;

    shareBtn.onclick = () => {
      if (navigator.share) {
        navigator.share({ title: 'Joke', text }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          alert('Joke copied to clipboard');
        }, () => {
          alert('Could not copy to clipboard');
        });
      } else {
        prompt('Copy this joke:', text);
      }
    };
  } catch (err) {
    jokeEl.textContent = 'Failed to fetch a joke. Try again later.';
    console.error(err);
  }
}

btn.addEventListener('click', fetchJoke);

// Fetch a joke on page load
fetchJoke();

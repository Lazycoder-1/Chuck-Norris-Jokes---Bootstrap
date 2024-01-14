
const jokeEl = document.getElementById('jokes');
const jokeBtn = document.getElementById('joke');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          jokeEl.innerHTML = JSON.parse(this.responseText).value;
        } else {
          jokeEl.innerHTML = `
          Loading Jokes
          <span class="placeholder col-12 d-flex align-items-center mt-4"></span>
          <span class="placeholder col-8 d-flex align-items-center mt-4"></span>

          `
        }
      }
    };
  
    xhr.send();
  }

jokeBtn.addEventListener('click', generateJoke)
document.addEventListener('DOMContentLoaded', generateJoke)
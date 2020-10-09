const jokeEl = document.getElementById("joke");
const btnEl = document.querySelector(".getBtn");

btnEl.addEventListener("click", getDadJoke);

getDadJoke();

async function getDadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  console.log(response);
  const jsonResp = await response.json();
  jokeEl.innerHTML = jsonResp.joke;
}

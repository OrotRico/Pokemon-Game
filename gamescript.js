window.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  bgm.volume = 0.5; // Sets volume to 20%
});

const link = document.getElementById("startLink");
let visible = true;

setInterval(() => {
  link.style.opacity = visible ? "0" : "1";
  visible = !visible;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const clickSfx = new Audio("gameassets/btnclicksound-effect-hd.mp3");
  clickSfx.preload = "auto";
  clickSfx.volume = 0.4; // tweak from 0.0 to 1.0

  const startLink = document.getElementById("startLink");
  const container = document.querySelector(".container");
  const modal = document.getElementById("gameModal");

  const registerBtn = document.getElementById("registerBtn");

  startLink.addEventListener("click", (e) => {
    e.preventDefault();

    clickSfx.currentTime = 0; // rewind in case of rapid clicks
    clickSfx.play().catch((_) => {
      /*ignore if blocked*/
    });

    container.classList.add("hidden"); // fade out the main screen
    modal.classList.add("show"); // fade in the modal
  });

  const backBtn = document.getElementById("backBtn");

  backBtn.addEventListener("click", () => {
    modal.classList.remove("show"); // fade out modal
    container.classList.remove("hidden"); // fade in title screen
    pokemonSelection.classList.add("hidden");

    clickSfx.currentTime = 0; // rewind in case of rapid clicks
    clickSfx.play().catch((_) => {});
  });

  const pokemonSelection = document.getElementById("pokemonSelection");
  const totodileImg = document.querySelector(
    '.pokemonSelection img[alt="Totodile"]'
  );
  const cyndaquilImg = document.querySelector(
    '.pokemonSelection img[alt="Cyndaquil"]'
  );
  const chikoritaImg = document.querySelector(
    '.pokemonSelection img[alt="Chikorita"]'
  );
  const backBtn2 = document.getElementById("backBtn2");

  registerBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    pokemonSelection.classList.remove("hidden");

    clickSfx.currentTime = 0;
    clickSfx.play().catch((_) => {});
  });

  backBtn2.addEventListener("click", () => {
    pokemonSelection.classList.add("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("show");

    clickSfx.currentTime = 0;
    clickSfx.play().catch((_) => {});
  });

  const pokemonButtons = document.querySelectorAll(
    "#totodileBtn, #cyndaquilBtn, #chikoritaBtn"
  );
  const pkmnSelection = document.getElementById("pokemonSelection");
  const pokemonConfirmation = document.getElementById("pokemonConfirmation");
  const confirmationText = document.getElementById("confirmationText");
  const confirmationImage = document.getElementById("confirmationImage");
  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  let selectedPokemon = null;
  let selectedImage = null;

  pokemonButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedPokemon = button.getAttribute("aria-label"); // Get the name
      confirmationText.textContent = `Are you sure you want to choose ${selectedPokemon}?`;
      selectedImage = button.querySelector("img").getAttribute("src");

      confirmationText.textContent = `Are you sure you want to choose ${selectedPokemon}?`;
      confirmationImage.setAttribute("src", selectedImage);
      confirmationImage.setAttribute("alt", selectedPokemon);

      // Hide selection, show confirmation
      pkmnSelection.classList.add("hidden");
      pokemonConfirmation.classList.remove("hidden");
    });
  });

  // Cancel button
  cancelBtn.addEventListener("click", () => {
    pokemonConfirmation.classList.add("hidden");
    pkmnSelection.classList.remove("hidden");
  });

  // Confirm button
  confirmBtn.addEventListener("click", () => {
    alert(`You chose ${selectedPokemon}!`);
    // Proceed with game logic or hide all modals
    pokemonConfirmation.classList.add("hidden");
  });
});

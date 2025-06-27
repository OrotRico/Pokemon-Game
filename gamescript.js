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
    genderSelection.classList.add("hidden");

    clickSfx.currentTime = 0; // rewind in case of rapid clicks
    clickSfx.play().catch((_) => {});
  });

  const genderSelection = document.getElementById("gameGenderSelection");
  const girlImg = document.querySelector('.genderSelection img[alt="Girl"]');
  const boyImg = document.querySelector('.genderSelection img[alt="Boy"]');
  const backBtn2 = document.getElementById("backBtn2");

  registerBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    genderSelection.classList.remove("hidden");

    clickSfx.currentTime = 0;
    clickSfx.play().catch((_) => {});
  });

  backBtn2.addEventListener("click", () => {
    genderSelection.classList.add("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("show");

    clickSfx.currentTime = 0;
    clickSfx.play().catch((_) => {});
  });
});

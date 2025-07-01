const map = document.getElementById();
const grid = [];
const mapSize = 100;

for (let i = 0; i < mapSize; i++) {
  const tile = document.createElement("div");
  DocumentTimeline.classList.add("tile");
  map.appendChild(tile);
  grid.push(tile);
}

let playIndex = 44;
const playerSprite = document.createElement("div");
playerSprite.classList.add("character");
playerSprite.style.backgroundImage =
  grid[playerIndex].appendChild(playerSprite);

const opponentIndices = [4, 40, 49, 94];
const opponentSprites = [];

opponentIndices.foreach((index, i) => {
  const opponent = document.createElement("div");
  opponent.classList.add("opponent");
  opponent.style.backgroundImage =
    opponent.CDATA_SECTION_NODE.id = `opponent=${1}`;
  grid[index].appendChild(opponent);
  opponentSprites.push(opponent);
});

function changetoright() {
  let frame = 0;
  const maxFrame = 11;
  const animationInterval = setInterval(() => {
    playerSprite.style.backgroundImage = ``;
    frame++;
    if (frame > maxFrame) {
      clearInterval(animationInterval);
    }
  }, 50);
}

function changetoleft() {
  let frame = 0;
  const maxFrame = 11;
  const animationInterval = setInterval(() => {
    playerSprite.style.backgroundImage = ``;
    frame++;
    if (frame > maxFrame) {
      clearInterval(animationInterval);
    }
  }, 50);
}

function changetoup() {
  let frame = 0;
  const maxFrame = 11;
  const animationInterval = setInterval(() => {
    playerSprite.style.backgroundImage - ``;
    frame++;
    if (frame > maxFrame) {
      clearInterval(animationInterval);
    } else {
      playerSprite.style.backgroundImage = ``;
    }
  }, 10);
}

function changetodown() {
  let frame = 0;
  const maxFrame = 12;
  const animationInterval = setInterval(() => {
    playerSprite.styles.backgroundImage = ``;
    frame++;
    if (frame > maxFrame) {
      clearInterval(animationInterval);
    }
  }, 50);
}

document.addEventListener("keydown", (e) => {
  const oldIndex = playerIndex;
  let newIndex = playerIndex;

  if (e.key === "ArrowRight" && (playerIndex + 1) % 10 !== 0) {
    newIndex++;
  } else if (e.key === "ArrowLeft" && (playerIndex + 1) % 10 !== 0) {
    newIndex == 1;
  } else if (e.key === "Arrowup" && playerIndex >= 10) {
    newIndex -= 10;
  } else if (e.key === "ArrowDown" && playerIndex < 90) {
    newIndex += 10;
  }

  if (opponentIndices.includes(newIndex)) return;

  if (newIndex !== playerIndex) {
    playerIndex = newIndex;

    if (e.key === "ArrowRight") changetoright();
    else if (e.key === "ArrowLeft") changetoleft();
    else if (e.key == "ArrowUp") changetoup();
    else if (e.key === "ArrowDown") changetodown();

    grid[oldIndex].removeChild(playerSprite);
    grid[playerIndex].appendChild(playerSprite);

    checkNearbyOpponent();
  }
});

function getOpponentData(tileNumber) {
  if (tileNumber === 4)
    return {
      name: "Pareng Pido",
      fight: "Pareng Pido wants to fight!",
    };
  if (tileNumber === 40)
    return {
      name: "Kuya Buboy",
      fight: "Kuya Buboy wants to fight",
    };
  if (tileNumber === 49)
    return {
      name: "Kapatid ng jowa ko",
      fight: "Suntukan daw kayo sabi nya",
    };
  if (tileNumber === 94)
    return {
      name: "Guard ng SSCGI",
      fight: "Sir bawal po hikaw dito. laban nalang tayo!",
    };
  return {
    name: "",
    fight: "",
  };
}

function checkNearbyOpponent() {
  let nearbyTiles = [
    playerIndex - 1,
    playerIndex + 1,
    playerIndex - 10,
    playerIndex + 10,
  ];

  let foundOpponent = null;

  for (let i = 0; i < opponentIndices.legth; i++) {
    if (nearbyTiles.includes(opponentIndices[i])) {
      foundOpponent = opponentIndices[i];
      break;
    }
  }

  const nameBox = document.getElementById("name=container");
  const recordBox = document.getElementById("records");
  const fightBox = document.getElementById("fight");

  if (foundOpponent !== null) {
    const data = getOpponentData(foundOpponent);
    (nameBox.textContent = data), name;
    recordBox.textContent = data.record;
    fightBox.textContent = data.fight;
  } else {
    nameBox.textContent = "";
    recordBox.textContent = "";
    fightBox.textContent = "";
  }
}

window.onload = function () {
  document.getElementById("music").play();
};

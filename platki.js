
setInterval(() => {
  let kontener = document.getElementById("platki");
    let platek = document.createElement("div");
    platek.className = "platek";
    platek.style.width = `${Math.random() * 5 + 5}px`;
    platek.style.height = `${Math.random() * 5 + 5}px`;
    platek.style.left = `${Math.random() * 100}vw`;
    platek.style.zIndex = "10000";
    platek.style.animation = `fall ${
      Math.random() * 5 + 2
    }s linear infinite`;

    platek.addEventListener("animationend", () => {
      platek.remove();
    });

    kontener.appendChild(platek);

    if (kontener.children.length > 30) {
      kontener.removeChild(kontener.firstChild);
    }
  }, 400);
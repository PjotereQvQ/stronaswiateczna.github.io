    licznik = document.getElementById("timer");
      let interwal;
      function ileDoSwiat() {
        const teraz = new Date();
        const rok = teraz.getFullYear();
        const swieta = new Date(`December 25, ${rok} 00:00:00`);

        if (teraz > swieta) {
          swieta.setFullYear(rok + 1);
        }

        const ile = swieta - teraz;
        const dni = Math.floor(ile / (1000 * 60 * 60 * 24));
        const godz = Math.floor(
          (ile % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const min = Math.floor((ile % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((ile % (1000 * 60)) / 1000);

        licznik.innerHTML = `
            <h2>Do Świąt Zostało: </h2>
            ${dni} dni, ${godz} godzin, ${min} minut i ${sec} sekund `;
      }
      licznik.addEventListener("mouseenter", () => {
        if (!interwal) {
          interwal = setInterval(ileDoSwiat, 1000);
          ileDoSwiat();
        }
      });

      licznik.addEventListener("mouseleave", () => {
        clearInterval(interwal);
        interwal = null;
        licznik.innerHTML = ``;
      });
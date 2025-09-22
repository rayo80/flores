// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  // Intro
  { text: "Ay, únete a mi' plane", time: 8 },
  { text: "Imposible que no pase la misión", time: 11 },
  { text: "¿Cómo hago que no ganes?", time: 13 },
  { text: "Si me hablas y me baja la presión", time: 16 },

  { text: "Ay, únete a mis planes", time: 18 },
  { text: "Imposible que no gane la misión", time: 20 },
  { text: "¿Dónde hago que me ames?", time: 23 },
  { text: "Y nos llevemos por la ley de atracción", time: 25 },

  // Estribillo rápido
  { text: "¡Uh!, si me dejas yo te puedo enseñar", time: 29 },
  { text: "Lo rico que se siente caminar", time: 32 },
  { text: "Pegaítos en la orilla del mar", time: 34 },
  { text: "Mami, tan solo de imaginarlo", time: 37 },

  { text: "Si me dejas yo te paso a buscar", time: 40 },
  { text: "Pa pasar la noche fenomenal", time: 41 },
  { text: "Si ya se te olvidó cómo es amar", time: 44 },
  { text: "Tranquila, te puedes enamorar", time: 46 },

  { text: "No me quites la fuerza, dame más", time: 48 },
  { text: "Si sabes que te gusto, admítelo", time: 50 },
  { text: "Nos parecemos mucho y además", time: 53 },
  { text: "Tenemo los mismo' gusto'", time: 55 },
  { text: "Nada con besarte se compara", time: 57},
  { text: "Tenerte cara a cara, mami, hablando claro", time: 59 },
  { text: "Baby, otra como tú no hay, ¡ay, ay, ay, ay!", time: 63 }

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  for (let i = 0; i < lyricsData.length; i++) {
    let current = lyricsData[i];
    let next = lyricsData[i + 1];
    if (time >= current.time && (!next || time < next.time)) {
      lyrics.innerHTML = current.text;
      lyrics.style.opacity = 1;
      return;
    }
  }
  lyrics.innerHTML = "";
  lyrics.style.opacity = 0;
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
//setTimeout(ocultarTitulo, 216000);
setTimeout(ocultarTitulo, 30000);
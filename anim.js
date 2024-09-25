// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición en segundos y duración en segundos
var lyricsData = [
  { text: "Ya no importa cada noche que esperé", start: 9, duration: 6 }, 
  { text: "Cada calle o laberinto que crucé", start: 14, duration: 7 }, 
  { text: "Porque el cielo ha conspirado a mi favor", start: 19, duration: 8 },
  { text: "Y, a un segundo de rendirme, te encontré", start: 26, duration: 6 },
  { text: "Piel con piel", start: 31, duration: 4 },
  { text: "El corazón se me desarma", start: 34, duration: 3 },
  { text: "Me haces bien", start: 37, duration: 3 },
  { text: "Enciendes luces en mi alma", start: 39, duration: 4 },
  { text: "Creo en ti y en este amor", start: 42  , duration: 7 },
  { text: "Que me ha vuelto indestructible", start: 48, duration: 4 },
  { text: "Que detuvo mi caída libre", start: 51, duration: 5 },
  { text: "Creo en ti, y mi dolor", start: 55, duration: 6 },
  { text: "Se quedó kilómetros atrás", start: 60, duration: 4 },
  { text: "Mis fantasmas hoy, por fin, están en paz", start: 63, duration: 9 },
  { text: "El pasado es un mal sueño que acabó", start: 82, duration: 5 },
  { text: "Un incendio que en tus brazos se apagó", start: 88, duration: 5 },
  { text: "Cuando estaba a medio paso de caer", start: 93, duration: 5 },
  { text: "Mis silencios se encontraron en tu voz", start: 100, duration: 6 },
  { text: "Te seguí", start: 105, duration: 4 },
  { text: "Y reescribiste mi futuro", start: 108, duration: 5 },
  { text: "Es aquí", start: 110, duration: 3 },
  { text: "Mi único lugar seguro", start: 112, duration: 5 },
  { text: "Creo en ti y en este amor", start: 115, duration: 5 },
  { text: "Que me ha vuelto indestructible", start: 120, duration: 5 },
  { text: "Que detuvo mi caída libre", start: 123, duration: 5 },
  { text: "Creo en ti, y mi dolor", start: 126, duration: 5 },
  { text: "Se quedó kilómetros atrás", start: 132, duration: 5 },
  { text: "Mis fantasmas hoy, por fin, están en paz.", start: 136, duration: 5 },
  { text: "Te amo mucho <3", start: 149, duration: 99 }
];

// Función para actualizar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  var currentLine = lyricsData.find(
    (line) => time >= line.start && time < line.start + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.start) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Iniciar la actualización al comenzar la canción
audio.addEventListener("play", function () {
  setInterval(updateLyrics, 1000); // Actualiza cada segundo
});

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
setTimeout(ocultarTitulo, 216000);

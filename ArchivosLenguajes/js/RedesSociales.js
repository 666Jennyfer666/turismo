// Función para redirigir a diferentes redes sociales según el parámetro recibido
function redirigir(redSocial) {
    switch (redSocial) {
      // Redirigir a Facebook
      case 'facebook':
        window.location.href = 'https://www.facebook.com/profile.php?id=100093635625965&mibextid=ZbWKwL';
        break;
        // Redirigir a Twitter
      case 'twitter':
        window.location.href = 'https://twitter.com/pincho_car?t=eNVEPFsDflz-mM6pjmf1FA&s=09';
        break;
        // Redirigir a Instagram
      case 'instagram':
        window.location.href = 'https://instagram.com/valle_traslasierra?igshid=ZDc4ODBmNjlmNQ==';
        break;
        // Redirigir a Gmail
      case 'gmail':
        window.location.href = 'valletraslasierracb@gmail.com';
        break;
        // Redirigir a WhatsApp
      case 'whatsaap':
        window.location.href = 'http://wa.me/543544639778?text=Buen%20dia%20me%20estoy%20comunicando%20con%20usted%20por%20el%20siguiente%20motivo%20';
        break;
      default:
        break;
    }
  }
  // Obtiene el elemento con el ID "interletrado-titulo"
  const title = document.getElementById('interletrado-titulo');
  // Obtiene el texto contenido en el elemento
  const text = title.textContent;
  // Borra el contenido original del elemento
  title.innerHTML = '';
  // Recorre sobre cada letra del texto
  for (let i = 0; i < text.length; i++) {
    // Crea un nuevo elemento <span>
  const span = document.createElement('span');
  // Establece el texto del <span> como el caracter actual
  span.textContent = text[i];
  // Agrega el <span> como hijo del elemento "interletrado-titulo"
  title.appendChild(span);
}


// Busca el elemento del logo en el DOM y lo asigna a la variable 'logo'
var logo = document.querySelector('.logo-container');

// Variable booleana que indica si la animación está en ejecución
var isAnimationRunning = true;

// Función para alternar la animación al hacer clic en un botón
function toggleAnimation() {
  if (isAnimationRunning) {
    // Si la animación está en ejecución, se pausa estableciendo el estado de reproducción en 'paused'
    logo.style.animationPlayState = 'paused';
  } else {
    // Si la animación no está en ejecución, se reanuda estableciendo el estado de reproducción en 'running'
    logo.style.animationPlayState = 'running';
  }
  
  // Invierte el valor de 'isAnimationRunning' para reflejar el nuevo estado de la animación
  isAnimationRunning = !isAnimationRunning;
}

// Busca el botón en el DOM y agrega un evento de clic que llama a la función 'toggleAnimation'
var button = document.querySelector('button');
button.addEventListener('click', toggleAnimation);



  
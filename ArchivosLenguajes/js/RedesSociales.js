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
  
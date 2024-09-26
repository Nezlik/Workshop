document.addEventListener('DOMContentLoaded', function() {

    var map = L.map('map').setView([43.6047, 1.4442], 12); // Toulouse

    // Charger les tuiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var customIcon = L.icon({
        iconUrl: 'icon.svg', // Exemple d'icône, tu peux mettre ton image ici
        iconSize: [30, 30], // Taille de l'icône
        iconAnchor: [22, 94], // Point de l'icône qui correspondra à la position du marqueur
        popupAnchor: [-3, -76] // Position du popup par rapport à l'icône
      });

    // Ajouter des points d'intérêt (marqueurs)
    var points = [
      { position: [43.6099837, 1.4933617], titre: "Pizza autrement", info: "<b>Tarif moyen :</b> 10€-20€", img:"<img src='pizzaAutre.PNG' height='180px' width='180px'>"},
      { position: [43.629797, 1.4859006], titre: "Toboss burger", info: "<b>Tarif moyen :</b> 1€-10€", img:"<img src='toboss.jpg' height='180px' width='180px'>" },
      { position: [43.627678, 1.4830882], titre: "Cantine & gamelle ", info: "<b>Tarif moyen :</b> 10€-20€", img:"<img src='cantine.png' height='180px' width='180px'>"},
      { position: [43.609788, 1.4911311], titre: "Burger & co ", info: "<b>Tarif moyen :</b> 10€-20€", img:"<img src='bnco.jfif' height='180px' width='180px'>"}
    ];

    // Ajouter les marqueurs sur la carte et gérer les clics
    points.forEach(function(point) {
      var marker = L.marker(point.position).addTo(map);
      
      // Quand le marqueur est cliqué, changer le texte de la div
      marker.on('click', function() {
        document.getElementById('TitreRestau').textContent = point.titre;
        document.getElementById('description').innerHTML = point.info;
        document.getElementById('img').innerHTML = point.img;
      });
    });
});
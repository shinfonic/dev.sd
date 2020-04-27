function initMap() {
  var latlng = {
    lat: 35.694057,
    lng: 139.761723
  }
  var mapstyle = 
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

  var map = new google.maps.Map(document.getElementById('gmap'), {
    center: latlng,
    zoom: 16,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
    scaleControl: false,
    rotateControl: false,
    styles: mapstyle
  });

  var image = {
    url: '/img/logo-map.png',
    anchor: new google.maps.Point(66, 64),
    scaledSize: new google.maps.Size(132, 64)
  };

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP,
    title: 'SUGIYAMA DESIGN'
  });

  // var infowindow = new google.maps.InfoWindow({
  //   content: 'SUGIYAMA DESIGN'
  // });

  // google.maps.event.addListener(marker, 'click', function () {
  //   infowindow.open(map, marker);
  // });

  // google.maps.event.trigger(marker, 'click');
}

// const head = document.getElementsByTagName('head')[0]
// const insertBefore = head.insertBefore
// head.insertBefore = (newElement, referenceElement) => {
//   if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0)
//   return
//   insertBefore.call(head, newElement, referenceElement)
// }

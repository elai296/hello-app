// let map;
// document.addEventListener('DOMContentLoaded', ()=>{
//     let s = document.createElement('script');
//     document.head.appendChild(s);
//     s.addEventListener('load', () => {
//         console.log('script had loaded');
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: {
//                 lat: 48.44073,
//                 lng: 2.21296
//             },
//             zoom: 2,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         });
//     });
//     s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`
// });

var map, popup, Popup;

/** Initializes the map and the custom popup. */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.44073, lng: 2.21296},
    zoom: 2,
  });

//   Popup = createPopupClass();
//   popup = new Popup(
//       new google.maps.LatLng(-33.866, 151.196), 'text');
// popup.setMap(map);
createPopup(-33.866, 151.196, 'text');
createPopup(48.44073, 2.21296, 'hello');
}

function createPopup(long, lat, text){
    Popup = createPopupClass();
    popup = new Popup(
        new google.maps.LatLng(long, lat), text);
    popup.setMap(map);
}
function createPopupClass() {
    function Popup(position, text){
        this.position = position;
        var content = document.createElement('div')
        content.innerText = text;
        content.classList.add('popup-bubble');

        const bubbleAnchor = document.createElement('div');
        bubbleAnchor.classList.add('popup-bubble-anchor');
        bubbleAnchor.appendChild(content);

        this.containerDiv = document.createElement('div');
        this.containerDiv.classList.add('popup-container');
        this.containerDiv.appendChild(bubbleAnchor);

        google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
    }

    Popup.prototype = Object.create(google.maps.OverlayView.prototype);

    Popup.prototype.onAdd = function(){
        this.getPanes().floatPane.appendChild(this.containerDiv);
    };

    Popup.prototype.onRemove = function () {
        if(this.containerDiv.parentElement){
            this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
    };

    Popup.prototype.draw =  function(){
        const divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
        const display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? 'block': 'none';

        if(display === 'block'){
            this.containerDiv.style.left = divPosition.x + 'px';
            this.containerDiv.style.top = divPosition.y + 'px';
        }
        if(this.containerDiv.style.display !== display){
            this.containerDiv.style.display =display;
        }
    };
    return Popup;
}
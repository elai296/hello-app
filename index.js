let map;
document.addEventListener('DOMContentLoaded', ()=>{
    let s = document.createElement('script');
    document.head.appendChild(s);
    s.addEventListener('load', () => {
        console.log('script had loaded');
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 48.44073,
                lng: 2.21296
            },
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`
});
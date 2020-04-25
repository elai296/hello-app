
console.log(GOOGLE_API_KEY);

let map;
document.addEventListener('DOMContentLoaded', ()=>{
    let s = document.createElement('script');
    document.head.appendChild(s);
    s.addEventListener('load', () => {
        console.log('script had loaded');
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 45.3496711,
                lng: -75.7569551
            },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`
});
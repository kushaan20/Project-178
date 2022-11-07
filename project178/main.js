mapboxgl.accessToken = 'pk.eyJ1Ijoia3VzaGFhbmFnYXJ3YWwiLCJhIjoiY2xhMTRzeTIwMDN1NTNvcGZrdTV2MDgxaCJ9.D_6nrH3kon9pDM1b2Jd5sg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ 77.231743, 28.596729],
    zoom: 4
});
 
var img1 = document.querySelector("#amber")

var marker1  = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85,26.98])
.addTo(map);

var img2 = document.querySelector("#red-fort")

var marker2  = new mapboxgl.Marker({
    element: img2
})
.setLngLat([77.2410,28.656473])
.addTo(map);

var img3 = document.querySelector("#gateway")

var marker3  = new mapboxgl.Marker({
    element: img3
})
.setLngLat([72.8347,18.9220])
.addTo(map);

var img4 = document.querySelector("#victoria")

var marker4  = new mapboxgl.Marker({
    element: img4
})
.setLngLat([88.3426,22.5448])
.addTo(map);

var img5 = document.querySelector("#taj-masjid")

var marker5  = new mapboxgl.Marker({
    element: img5
})
.setLngLat([77.3928,23.2630])
.addTo(map);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
    'top-left'
);
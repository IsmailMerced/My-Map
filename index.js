mapboxgl.accessToken = 'pk.eyJ1IjoiaXNtYWlsLXNhbGFoIiwiYSI6ImNsMHNnZXphMTBjeDEza3FvN2N4M3NwZGIifQ.o7-ne6T3XqSpnoGISpOU6w';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});

function successLocation(postion) {
    console.log(postion);
    setupMap([postion.coords.longitude, postion.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken}), 'top-left')
    }


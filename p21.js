navigator.geolocation.getCurrentPosition(function(position){
    document.write("Latitude= "+position.coords.latitude);
    document.write(" Longitude= "+position.coords.longitude);
})
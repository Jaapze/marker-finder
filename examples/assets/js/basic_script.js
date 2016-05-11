$(function(){
	$('.storefinder').MarkerFinder({
	    googleMapsKey: 'AIzaSyAO5wypAcrxI37yQ0VL5unnkN0DIF1rHJQ',
	    googleMapsOptions: {
	    center: {
	            lat: 51.98150,
	            lng: 5.28434
	        },
	            zoom: 6,
	        },
	    fitBounds: true,
	    data: '../assets/data/data.json',
	    dataRoot: 'power_stations'
	});
	$('.storefinder').MarkerFinder('ready', function(data, map, markers){
	    console.debug(data);
	});
})
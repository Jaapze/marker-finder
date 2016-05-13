$(function(){
	$('.power_stations').MarkerFinder({
	    googleMapsKey: 'AIzaSyAO5wypAcrxI37yQ0VL5unnkN0DIF1rHJQ',
	    googleMapsOptions: {
	    center: {
	            lat: 51.98150,
	            lng: 5.28434
	        },
	            zoom: 6,
	        },
	    customIconField: 'icon',
	    customIconSizeField: 'iconSize',
	    fitBounds: true,
	    searchRadius: 5,
	    data: 'assets/data/data.json',
	    dataRoot: 'power_stations'
	});

	$('.power_stations').MarkerFinder('ready', function(data, map, markers){
		// trigger when clicking the search button
		$('.filter button').on('click', function(){
			// Do a search trough the data
			var address = $('.filter input').val();
		    $('.power_stations').MarkerFinder('closestMarkers', address, function(data){
		    	console.debug(data);
		    });
		});
		$('.radius_dd').change(function() {
			$('.power_stations').MarkerFinder('setOption', 'searchRadius', parseInt($(this).val()));
		});
	});
})
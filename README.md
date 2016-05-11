#Marker finder plugin for jQuery
this plugin can be used for building a custom storefinder or something with similar functionalities.

## options and it's defaults:

	{
		googleMapsKey: '',
		googleMapsID: 'map',
		googleMapsOptions: {
		center: {
				lat: 51.98150,
				lng: 5.28434
			},
				zoom: 6,
			},
		latLngKeys: ['lat', 'lng'],
		fitBounds: false,
		customIcon: false,
		data: {},
		dataRoot: 0,
		searchFields : ['title'],
		onClickMarker : null,
		distanceUnit : 'km',
		searchRadius : 80,
	}

## Initialize plugin
    $('.storefinder').MarkerFinder(options);

## functions:

### ready
Returns a callback when everything is loaded

##### example:
    $('.storefinder').MarkerFinder('ready', function(data, map, markers){
        //ready for coding
    });

### getFilterValues (filterfield)
Get all the values from a filter in the json

##### example:
    $('.storefinder').MarkerFinder('getFilterValues', 'categories');

### closestMarkers (address, hideMarkers)
Find the closest marker within the searchRadius

##### example:
    $('.storefinder').MarkerFinder('closestMarkers', 'place', true).done(function(data){
        console.debug(data);
    });

### resetFilters
Removes any filter on the markers, and show them all on the map

##### example:
    $('.storefinder').MarkerFinder('resetFilters');

### filterData (filterfield, values)
Filters the data by the given values

##### example:
    $('.storefinder').MarkerFinder('filterData', 'categories', ['value', 'value2']);

### search (searchTerm, callback)
Search trough the marker data within the given fields

##### example:
    $('.storefinder').MarkerFinder('search', 'search_term', function(data){
        // do stuff with the data
    });

### setOption (optionName, value)
Set a option after the plugin is initialized

##### example:
    $('.storefinder').MarkerFinder('setOption', 'onClickMarker', function(data){
        //do your magic here
    });

### setBounds (includeHiddenMarkers)
Set the bounds to the (visible) markers

##### example:
    $('.storefinder').MarkerFinder('setBounds');


###TODO'S
* Change marker on select (click)
* Update this documentation
* Make some examples
* Add minified version

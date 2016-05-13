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
	      zoom: 6
	    },
	    customIcon: false,
	    customIconSize: false,
	    customIconField: '',
	    customIconSizeField: '',
	    latLngFields: ['lat', 'lng'],
	    fitBounds: false,
	    data: {},
	    dataRoot: 0,
	    searchFields : ['title'],
	    onClickMarker : null,
	    distanceUnit : 'km',
	    searchRadius : 50
	}

## Initialize plugin
    $('.storefinder').MarkerFinder(options);

## Options
__googleMapsKey__ : Key for the Google Maps API ([link](https://developers.google.com/maps/documentation/javascript/get-api-key))
	
	googleMapsKey : 'YOUR_API_KEY'

__googleMapsID__ : ID attribute of the map DIV
	
	googleMapsID : 'map'

__googleMapsOptions__ : All options here are passed trough the google maps object ([link](https://developers.google.com/maps/documentation/javascript/tutorial))

	googleMapsOptions: {
		center: {
			lat: 51.98150,
			lng: 5.28434
		},
		zoom: 6
	}

__customIcon__ : Custom icon for all the markers on the map

	customIcon : '../img/icon.png'

__customIconSize__ : Custom icon size for all the markers on the map (width,height)

	customIconSize : '35,30'

__customIconField__ : Custom icon from field in data

	customIconField : 'fieldname'

__customIconSizeField__ : Custom icon size from field in data

	customIconSizeField : 'fieldname'

__latLngFields__ : Fields in the data for the latitude and longitude

	latLngFields : ['lat', 'lng']

__fitBounds__ : Fit bounds after the markers are loaded for the first time

	latLngFields : true

__data__ : Data for the markers on the map (json, or url to a json file)

	data : '../data/data.json'
	// OR YOU CAN USE DIRECT JSON DATA
	data : {
			"power_stations": [{
				"icon": "assets/img/gas_icon.svg",
				"iconSize": "35,30",
				"fuel": "Gas",
				"power": 256,
				"emissions": "406988",
				"lat": 51.91017,
				"lng": 4.423916
			},
			...

__dataRoot__ : The root of the data

	dataRoot : 'power_stations'

__searchFields__ : Fields within the data to search in

	searchFields : ['title', 'description']

__onClickMarker__ : Here you can pass a function when you click on a marker

	onClickMarker : function(marker, data){
		// do your magic
	}

__distanceUnit__ : Here you can choose between miles or kilometers

	distanceUnit : 'km'

__searchRadius__ : The radius used by the `closestMarkers` function

	searchRadius : 50

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

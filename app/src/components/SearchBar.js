import React from 'react';

export default class extends React.Component {
	constructor() {
	    super();
	    this.state = { 
	    	distance: 0,
	    	isLoading: false
	    };

	    //window.addEventListener("hashchange", this.doSomething, false);
	  }

	render() {
		return(
		<div id="inputs">

			<form name="test">
				<h1>Calculate distances</h1>
				<h4>Origin:</h4>
				<input type="text" id="Origin" name="Pickup" />
				<h4>Destination:</h4>
				<input type="text" id="Destination" name="DropOff" />
			</form>

			<div>
				<div id="outputDiv"></div>
				<a class="btn btn-primary" role="button" onClick={this.calculateDistances.bind(this)}>Calculate Distance</a>
			</div>

			<span class={  'result-value ' + (this.state.distance != 0 ? '' : 'hide') }>{ this.state.distance } KM</span>
			<img class={this.state.isLoading ? '' : 'hide'} src="img/loading.gif" />

		</div>
		);
  }

	calculateDistances() {
		var context = this;
      	var service = new google.maps.DistanceMatrixService();
      	var origin1 = document.getElementById('Origin').value;
      	var destinationA = document.getElementById('Destination').value;

      	this.updateUrl(origin1, destinationA);

      	context.setState({
            isLoading: true
        });

    	this.getPositionByAddress(origin1, function(posA) {
        	context.getPositionByAddress(destinationA, function(posB) {
	          	var result = context.getDistance(posA.lat(), posA.lng(), posB.lat(), posB.lng());

		      	context.setState({
		            distance: Math.round(result * 100) / 100,
		            isLoading: false
		        });
        	});
      	});
	}

	updateUrl(origin, destination) {
        window.location.hash = origin + ";" + destination;
	}


    getPositionByAddress(address, callback) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { "address": address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
              var location = results[0].geometry.location;
              callback(location);
          }
      });
    }

    getDistance(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }

    deg2rad(deg) {
      return deg * (Math.PI/180)
    }

}
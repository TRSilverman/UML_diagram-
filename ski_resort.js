<script>
function Customer(pass, hasOwnGear, rideType) {
	this.pass = pass;
	this.hasOwnGear = this.hasOwnGear
	this.rideType = rideType;
	usesRuns = true;
	rentsGear = function() {
		if (this.hasOwnGear === false) {
			// put rent equipment function  here
			if (this.rideType === ski){
				console.log("You Rented Ski's!");
		} else {
			console.log("You Rented a Snowboard!");
		}

	}

}
</script>
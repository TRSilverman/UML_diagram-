
//resort object 

function Resort(location, minCustomer, maxCustomer, ticketPrice) {
	this.location = location;
	this.minCustomer = minCustomer;
	this.maxCustomer = maxCustomer;
	this.ticketPrice = ticketPrice;
}
//calc the amount made from ticket revenue 
Resort.prototype.customerRev = function() {
	var numCustomers = Math.round(this.minCustomer + (this.maxCustomer - this.minCustomer) * Math.random());
	var ticketSales = numCustomers * this.ticketPrice;
	console.log(this.location + " will have " + numCustomers + " customers today with a projected ticketSales revenue of " + ticketSales);
};

var snoqualmie = new Resort("Snoqualmie", 2000, 4000, 80);

snoqualmie.customerRev();

function Customer(percentSki, percentSnob, needGear) {
	percentSki = 0.6;
	percentSnob = 0.4;
	needGear = 0.3;
}
//calc. number of customers renting skis and snowboards 
customers.protoype.numRenting = function() {};
customers.prototype.numSki = function() {};
customers.prototype.numSnowb = function() {};

function Equipment(ski, snowb) {
	ski = 35;
	snowb = 40;
}
//calc the abount made from ski and snowB rentals 
Equipment.protoype.skiSales = function(){};
Equipment.prototype.snowbSales = function(){};

// calc. total money made
var totalRev = function() {};




'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


//EXERCICE 1

function getRental( id )
{
	for ( var i = 0 ; i < rentals.length ; i++)
	{
			if ( id == rentals[i].id)
			{
				return rentals[i];
			}
	}
	return ;
}

function getDate(id)
{
	var rental = getRental(id);
	var returnDate = new Date (rental.returnDate);
	var pickupDate = new Date(rental.pickupDate);
	var time = 1+ (returnDate - pickupDate )/(24*3600*1000) ;
	return time ; 
}


function rental_time(time,price)
{
	var rentaltime_result=time*price;
	return rentaltime_result;
}

function rental_distance(distance, price){
	var rentaldistance_result=distance*price;
	return rentaldistance_result;
}


function update_rentalPrice ()
{
	for(var i=0; i<rentals.length;i++)
	{
			
		if(rentals[i].carId==cars[i].id)	
		{	
			var time_day = getDate(rentals[i].id);		
		
			var rental_time_result = rental_time(time_day,cars[i].pricePerDay);
			var rental_distance_result=rental_distance(rentals[i].distance, cars[i].pricePerKm);
			var rental_price=rental_time_result + rental_distance_result;
	
			rentals[i].price= rental_price;
	
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price : ' + rentals[i].price + ' ' + 'euros');
		}
	}
}



//EXERCICE 2

function discount_rentalPrice()
{
		
	for(var i=0; i<rentals.length;i++){ 
	
		var time_day = getDate(rentals[i].id);		
		var rental_discount;
	
		if(time_day==1)
		{
			rental_discount = rentals[i].price;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price (no discount) : '  + rental_discount  + ' euros');
		}
	
		else if(time_day>1 && time_day<=4) 
		{ 
			rental_discount = rentals[i].price*0.90; 
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price Discount (-10%) : ' + rental_discount + ' euros'); 
			rentals[i].price= rental_discount;
		} 
	
		else if(time_day>4 && time_day<=10) {
	
			rental_discount =rentals[i].price*0.70; 
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price Discount (-30%) : ' + rental_discount + ' euros');
			rentals[i].price= rental_discount;
		}
			
		else if(time_day>10) { 
	
			rental_discount = rentals[i].price*0.50; 
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + ' ' + '\nRental Price Discount(-50%) : ' + rental_discount + ' euros');
			rentals[i].price= rental_discount;
		} 
	
	}
}
	
	
	
//EXERCICE 3

function give_commission()
{
	for(var i=0; i<rentals.length;i++)
	{
		var time_day = getDate(rentals[i].id);	
	
		var commission = rentals[i].price * 0.70;
		alert('The commission for ' + rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + 'course is ' + commission + '.');
	
		var insurance = commission / 2;
		alert('The insurrance for ' + rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + 'course is ' + insurance + '.');
		rentals[i].commission.insurance = insurance;
	
		var roadAssistance = time_day * 1;
		alert('The road assistance for ' + rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + 'course is ' + roadAssistance + '.');
		rentals[i].commission.assistance = roadAssistance;
	
		var drivy =commission - insurance - roadAssistance;
		alert('Drivy for ' + rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + 'course is ' + drivy + '.');
		rentals[i].commission.drivy = drivy;
	}
		
}




// EXERCICE 4 

function options_deductible()
{
	for(var i=0; i<rentals.length;i++)
	{
		var time_day = getDate(rentals[i].id);			
		var optionDeductible=4*time_day;
		var rental_price_deduitoption;
	
		if(rentals[i].options.deductibleReduction==true)
		{
			rental_price_deduitoption = rentals[i].price + optionDeductible;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + '\n' + ' rental price (deduit option) : ' + rental_price_deduitoption);
			rentals[i].price=rental_price_deduitoption;
		}
	
		else{
			rental_price_deduitoption=rentals[i].price;
			alert(rentals[i].driver.firstName + ' ' + rentals[i].driver.lastName + '\n' + ' rental price (without deduit option) : ' + rental_price_deduitoption);
		}
	
	}

}



function all_payment()
{
	for ( var i = 0 ; i < actors.length ; i++)
	{
	var price = 0;
	var commission = 0;
	var insurance = 0;
	var assistance = 0 ;
	var deductibleReduction = true ; 
	var day = getDate(actors[i].rentalId);
	
		for ( var j = 0 ; j < rentals.length ; j++)
		{
			if ( actors[i].rentalId == rentals[j].id ) 
			{
				price = rentals[j].price;
				var commission = rentals[j].price * 0.70;
				var insurance = commission / 2;
				var roadAssistance = day * 1;
				var drivy = commission - insurance - roadAssistance;	
			
			for ( var k = 0 ; k < actors[i].payment.length; k++)
			{
				switch(actors[i].payment[k].who)
			
				{
					case 'driver' : 
					actors[i].payment[k].amount=price;
					alert('Driver Amount : ' + actors[i].payment[k].amount);
					break;
				
					case 'owner' :
					actors[i].payment[k].amount=price-commission;
					alert('Owner Amount : ' + actors[i].payment[k].amount);
					break;
				
					case 'insurance' :
					actors[i].payment[k].amount=insurance;
					alert('Insurance Amount : ' + actors[i].payment[k].amount);
					break;
				
					case 'assistance' :
					actors[i].payment[k].amount=roadAssistance;
					alert('Assistance Amount : ' + actors[i].payment[k].amount);
					break;
				
					case 'drivy' :
					if(rentals[i].options.deductibleReduction==true)
					{
						var option_deductible=4*day;
						actors[i].payment[k].amount=drivy + option_deductible;
						alert('Drivy Amount : ' + actors[i].payment[k].amount);
						break;
					}
	
					else {
						var option_deductible=0;
						actors[i].payment[k].amount=drivy + option_deductible;
						alert('Drivy Amount : ' + actors[i].payment[k].amount);
					break;
					}
					
				
				}			
			}			
			}
		}
		
	}

}




//Exercice 6 

function update_modification(){
	
	for(var i=0; i<rentalModifications.length; i++){
			
		for(var j=0; j<rentals.length; j++){
				
				if(rentalModifications[i].rentalId == rentals[j].id){
					
					if( typeof rentalModifications[i].returnDate != "undefined"){
					rentals[j].returnDate = rentalModifications[i].returnDate;
					}

					if(typeof rentalModifications[i].pickupDate != "undefined"){
					rentals[j].pickupDate = rentalModifications[i].pickupDate;
					}
			
					if(typeof rentalModifications[i].distance != "undefined"){
					rentals[j].distance = rentalModifications[i].distance;
					}
					
					if(typeof rentalModifications[i].options!="undefined"){
					rentals[j].options.deductibleReduction=rentalModifications[i].options.deductibleReduction;
					}
					
					if(typeof rentalModifications[i].carId!="undefined"){
					rentals[j].carId=rentalModifications[i].carId;
					}
				}
		}

	}
}


function apply_modif()
{
	alert('Payment with the modifications');
	update_rentalPrice();
	discount_rentalPrice();
	options_deductible();
	all_payment();
	
}



	

update_rentalPrice();

discount_rentalPrice();

give_commission();

options_deductible();

all_payment();

update_modification();
apply_modif();


console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
 
function generate_vegetarian_sandwich(){
	let sandwich = "";
	var bread_choices = ["9-Grain Wheat", "Multi-grain Flatbread" , "Italian ", "Italian Herbs & Cheese", "Flatbread"];
	var num = getRandomInt(bread_choices.length);
	sandwich += "<b>[Bread]: </b>" + bread_choices[num] + " <br>";
	
	sandwich += "<b>[Meat]: </b> (Yeah, right) <br>";
				
	var sauce_choices = ["Chipotle Southwest", "Light Mayonnaise" , "Regular Mayonnaise" , "Ranch", "Oil", "Subway vinaigrette"];
	num = getRandomInt(sauce_choices.length);
	sandwich += "	<b>[Sauce]: </b>" + sauce_choices[num] + " <br>";
							
	var cheese_choices =  ["American", "Monterey Cheddar"];
	num = getRandomInt(cheese_choices.length);
	sandwich += "	<b>[Cheese]: </b>" + cheese_choices[num] + " <br> ";
				
	var veggie_choices = ["Cucumbers", "Green Peppers", "Lettuce", "Red Onions", "Spinach", "Tomatoes"];
	var num_of_choices = getRandomInt(veggie_choices.length);
	var toppings = "";
	for (var i = 0; i < num_of_choices; i++) {
		var pos = getRandomInt(veggie_choices.length);
		if(!toppings.includes(veggie_choices[pos])){
			if(i != num_of_choices-1)
				toppings += veggie_choices[pos] + " , ";
			else toppings += veggie_choices[pos];
		}
		else i--;
	}
	sandwich += "	<b>[Veggies]: </b>" + toppings + " <br>";
	
	sandwich += "	<b>[Extra(s)]: </b> (Who needs em?!) <br> <br> Enjoy the vegetarian sandwich!";
	var feedback = document.getElementById("generate");
	feedback.innerHTML = sandwich;
	return sandwich;
}
			
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
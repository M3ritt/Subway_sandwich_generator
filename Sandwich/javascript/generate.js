function generate_sandwich(){
	let sandwich = "";
	var bread_choices = ["9-Grain Wheat", "Multi-grain Flatbread" , "Italian ", "Italian Herbs & Cheese", "Flatbread"];
	var num = getRandomInt(bread_choices.length);
	sandwich += "<b>[Bread]: </b>" + bread_choices[num] + " <br>";
							
	var meat_choices = ["Turkey breast", "Ham" , "Chicken breast", "Roast Beef", "Tuna", "Turkey salami", "Beef steak", "Bacon", "Meatballs", "Genoa Salami", "Turkey bologna", "Shaved Steak"]; 
	var meat_pos = getRandomInt(meat_choices.length);
	sandwich += "<b>[Meat]: </b>" + meat_choices[meat_pos] + " <br>";
				
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
	sandwich += "	<b>[Veggies]: </b>" + toppings + " <br> ";
				
	var extra_choices = ["Pepperoni", "Bacon"];
	num_of_choices = getRandomInt(extra_choices.length);
	toppings = "";
	for (var i = 0; i < num_of_choices; i++) {
		var pos = getRandomInt(extra_choices.length);
		if(!toppings.includes(extra_choices[pos])){
			if(i != num_of_choices-1)
				toppings += extra_choices[pos] + " , ";
			else toppings += extra_choices[pos];
		}
		else i--;
	}
	sandwich += "	<b>[Extra(s)]: </b>" + toppings + "<br> <br> Enjoy the sandwich!";
	var feedback = document.getElementById("generate");
	feedback.innerHTML = sandwich;
	return sandwich;
}
			
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
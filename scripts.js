/**
 * @author
 */

	console.log("Javascript file loaded"); 
	
	function loadedJSON(FREDdata){
		//console.log the "count" property of our FREDdata object
		
		//I expect that this console.log will show 409. 
		console.log(FREDdata.count); 
		
		
	}
	
	//function means 'create a new recipe and call it DataLoaded'
	//The curly braces wrap all of the stuff that should be included
	//The round paretheses are part of declaring a function 
	//There is no ";" at the end - functions don't take these, but statements do
	
	//This is my custom dataLoaded function:
	function dataLoaded(){
		
		console.log("I got the document ready!");
		
	//use jQuery to create a new div element 
		var myDiv = $("<div>");
	
	//use jQuery to add some text to it
	//hello jQuery, take the div I just ctreated called "myDiv", and add some html (in this case just a string)
	
		$(myDiv).html("This is my new div");
	
	//hey jQuery, grab the div with the id "conentContainer" and put my new div inside it
	//We do that with a function called "apend"
	
	//I expect to see a new div containing the text "This is my new div" appear inside the div with the id "contentContainer"
		$("#contentContainer").append(myDiv);
	
	//use the jQuery get function to load my JSON file, takes three parametres:
	//first is the name of the file
	//second parametre is the function to call once the file is loaded
	//the third parametre is a string of the file type to expect
		$.get("UEMP270V_data.json", loadedJSON, "json");
	
	}
	
	//document ready happens when the entire webpage has laoded\
	//When that has happened I want to initiate the "dataLoaded" function activity that I defined above
	
	//dollar sign and () is a way of telling the browser that "this function comes from jquery"
	
	//What we're doing with document ready is asynchronous 
	//if we have mulitple document ready we have no way of knowing the order that they will execute.
	// But there are ways to make sure the order is as you want it to be
	
	$( document ).ready(dataLoaded);

	console.log("this state is after document ready")

//check off specific Todos by clicking
	//on has to be on sth existing thats why we put it ul (li are not all existing yet)
	//change: 2d argument "li"
	//when an li is clicked inside of an ul, run this code
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})
	//event.stopPropagation() allow us to access the li 
	//dont forget (event)

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul	
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});
	//append to NEW METHOD-----------------------------

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});
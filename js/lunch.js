
//top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//random menu
var cities=[
    "American", "Asian","BBQ", "Bagel",
    "Cajun", "Chicken", "Chinese",
    "Coffee and Tea", "Dim Sum", "Diner",
    "Dominican","Fast Food", "French", "Fresh Fruits", "Frozen Yogurt",
    "Gluten Free", "Hamburgers","Italian","Japanese","Hot Dogs","Korean",
    "Mediterranean", "Mexican", "Middle Eastern","Organic", "Pizza",
    "Poke", "Salad","Sandwiches", "Soup", "Spanish", "Steak", "Sushi",
    "Thai","Vegan", "Vegetarian","Wings","Wraps"
    ];
    
function pick(){
    var x = cities[Math.round(Math.random()*(cities.length-1))];
    document.getElementById("choose").innerHTML = x;
}

$('body').scrollspy({ target: '#list-example' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

 
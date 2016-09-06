
//Topbar
var affixTop = document.getElementsByClassName("topbar");
console.log("got topbar");

$(document).ready(function() {
    $('.context').css('margin-top', $('.topbar').height() + 40 + 'px' );   
}); 

$(window).resize(function() {
    $('.context').css('margin-top', $('.topbar').height() + 'px');        
}); 

//P: It looks bad when shrunk(devices)
//S: Fix nav

//create a select and append to menu
var $select = $('<select></select>');
$('.links').append($select);

//cycle over menu links
$('.links a').each(function(){
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  
  }
  
  $option.val($anchor.attr("href"));
  
  $option.text($anchor.text());
  
  $select.append($option);


});
  

$select.change(function(){
  window.location = $select.val();


});   
//Topbar

//Adventures 

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$(".context").append($overlay);


$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).children("img").attr("src");
	$image.attr("src", imageLocation);
	console.log(imageLocation)
	$overlay.show();
	console.log("overlay shown");
	

	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	console.log(captionText);

});

$overlay.click(function(){
  $(this).hide()
  console.log("overlay hidden");


});


  var about = new XMLHttpRequest();
    about.onreadystatechange = function () {
      if (about.readyState === 4) {
        document.getElementById('about').innerHTML = about.responseText;
      }
    };
    about.open('get', 'about.html.erb');
    function sendAbout(){
      about.send()
    }
    
//Adventures 








// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

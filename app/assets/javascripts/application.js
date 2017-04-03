
//Topbar
// var affixTop = document.getElementsByClassName("topbar");
// console.log("got topbar");

// $(document).ready(function() {
//     $('.context').css('margin-top', $('.topbar').height() + 40 + 'px' );   
// }); 

// $(window).resize(function() {
//     $('.context').css('margin-top', $('.topbar').height() + 'px');        
// }); 

// //P: It looks bad when shrunk(devices)
// //S: Fix nav

// //create a select and append to menu
// var $select = $('<select></select>');
// $('.links').append($select);

// //cycle over menu links
// $('.links a').each(function(){
//   var $anchor = $(this);
//   //create an option
//   var $option = $("<option></option>");
  
//   if($anchor.parent().hasClass("selected")){
//     $option.prop("selected", true);
  
//   }
  
//   $option.val($anchor.attr("href"));
  
//   $option.text($anchor.text());
  
//   $select.append($option);


// });



  

// $select.change(function(){
//   window.location = $select.val();


// });   
// //Topbar

// //Adventures 

// var $overlay = $('<div id="overlay"></div>');
// var $image = $('<img>');
// var $caption = $("<p></p>");

// $overlay.append($image);
// $overlay.append($caption);

// $(".context").append($overlay);


// $("#imageGallery a").click(function(event){
// 	event.preventDefault();
// 	var imageLocation = $(this).children("img").attr("src");
// 	$image.attr("src", imageLocation);
// 	console.log(imageLocation)
// 	$overlay.show();
// 	console.log("overlay shown");
	

// 	var captionText = $(this).children("img").attr("alt");
// 	$caption.text(captionText);
// 	console.log(captionText);

// });

// $overlay.click(function(){
//   $(this).hide()
//   console.log("overlay hidden");


// });


//   var about = new XMLHttpRequest();
//     about.onreadystatechange = function () {
//       if (about.readyState === 4) {
//         document.getElementById('about').innerHTML = about.responseText;
//       }
//     };
//     about.open('get', 'about.html.erb');
//     function sendAbout(){
//       about.send()
//     }
    
// //Adventures 

//   var ratio = .6;
//   var para = $(".about");
//     para.scroll(function(){
//       $(".paraimg").scroll() * ratio;


//     });

// var $filter = $('<li></li>');
//   $('.filter').append($filter);
//   $filter.val = "hello";
//   $tag = "hello";









// //filter-fly 
// var $filter = document.getElementById('filter');
// var $filters = document.getElementById('filters');
// var $tagSearch = $('<input class="tagSearch form-control" type="text" placeholder="Tag"/>');  
// var $addFilter = $('<button id="addFilter">Add Filter</button>');
// var $filterInput = $('<input class="filterInput form-control" type="textbox" placeholder="Filter Name"/>');
// var $filterName =  $('<li id="filterName"></li>');       //document.getElementById('msg');
// var $getFilter = $('<button id="Get">Get Filter Name</button>');
// var $getTag = $('<button id="getTag">Get Tag</button>');
// var $newFilter = $('input.filterInput').val()


// $filterInput.hide();
// $tagSearch.hide();
// $getFilter.hide();
// $getTag.hide();
// $('#filter').append($addFilter);
// $('#filter').append($tagSearch);
// $('#filter').append($filterInput);
// $('#filters').append($filterName);
// $('#filter').append($getFilter);
// $('#filter').append($getTag);
// $('#filterName').append($newFilter);
// $('#adventures').append($filter);


// $("button").addClass("btn btn-default");
// //$('.filterInput').append($getFilter);
//   //var $filterName = $tagSearch.val();

//   $('#addFilter').click(function(){
//     console.log("expanse created");
//     var $expanse = '';
//     $expanse += '<ul class="filterExpanse"'
//     $expanse += '<li>';
//     $expanse += '<a href="product_tag">';
//     $expanse += '<span class="refinementLink"></span>';
//     $('.refinementLink').text($newFilter);
//     $expanse += '</a>';
//     $expanse += '</li>';
//     $expanse += '</ul>';
//     console.log("expanse compiled");
//     $('#filter').append($expanse);

//       $filterInput.show();
//       $getFilter.show();
//       $('button#Get').click(function(){
//         $('#filters').append('<li id="filterName"</li>')
//         var $newFilter = $('input.filterInput').val();
//         //$('#filters').html('<li class="filterLi"></li>')
//         //$('#filters').html("<li></li>");
//         $filters += ('<li></li>')
//         $('#filters li').each(function(){
//           $(this).text($newFilter);

//         });
//         //var $li = document.createElement("li");
//         //$('li').addClass('filterLi')//.addClass('filterLi')
       
        
//           //$('li#filters').text($('input.filterInput').val());
//        // $('.filterInput').on("keyup change", function(){
//           //$('li#filterName').text(this.value);

//         var $filterName = $('<li id="filterName"></li>'); 
//         $('#msg').html($newFilter);  //#msg
//         $filterName.text($newFilter);
//         console.log($newFilter);
//         //$('#msg').html($('input.filterInput').val());
//         $tagSearch.show();
//         $getTag.show();
//         $('button#getTag').click(function(){
//         var $newTag = $('input.tagSearch').val()
//         $('#tag').html($newTag);
            
//         });
//       });
//   });
//   console.log($newFilter);

      

 




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
//= require main

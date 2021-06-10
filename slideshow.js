var homeImage = document.getElementById("homeImage");

var imageArray =["food2.jpg","food3.jpg","food4.jpg","food5.jpg","food6.jpg"];

var i = 0;

function changeImage(){
	homeImage.setAttribute("src",imageArray[i]);
	i++;
	if(i>=imageArray.length){
		i=0;
	}

}
setInterval(changeImage, 2000);


$(function(){
	$( "#datepicker" ).datepicker({
		changeMonth: true,
		changeYear: true,
		dateformat: "mm/dd/yy"		
	})
});

//var winHeight = screen.height;

// $(document).ready(function() { 
// 		var $winwidth = $(window).width();
// 		$("homeImage").attr({
// 			width: $winwidth
// 		});
// 		$(window).bind("resize", function(){ 
// 			var $winwidth = $(window).width();
// 			$("homeImage").attr({
// 				width: $winwidth
// 			});
// 		 });
// }); 

// function resize(){
// 	homeImage.setAttribute("height", screen.height-60);
// 	homeImage.setAttribute("width", 100%);
// }

// resize();

	// var title = document.getElementById("centerTitle");

	// var color =["black","white","grey","red","yellow","pink","orange","violet"];

	// var index = 0;
	// function changeTitleColor(){
	// 	title.setAttribute("color",color[index]);
	// 	index++;
	// 	if(index>=color.length){
	// 		index=0;
	// 	}
	// }
	// setInterval(changeTitleColor,2000);
//var intervalHandle = setInterval(changeImage, 2000);

//homeImage.onclick = function(){
//	clearInterval(intervalHandle);
//}
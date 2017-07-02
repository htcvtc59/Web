// JavaScript Document
$(document).ready(function() {
	$(".dropdown").hide();
 
$(".btn").click(function(){
	 $(this).next().slideToggle();
 });
 $(function(){
	$(".menu").hover(function(){
		$(this).toggleClass('active');
	});
});


 });

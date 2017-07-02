// JavaScript Document
$(document).ready(function() {
  $(function(){
	$("#submit_post").click(function(){
		var fname=$("#fname").val();
		var lname=$("#lname").val();
		var email=$("#email").val();
		var message=$("#area").val();
		$.post("process.php",{fname:fname,lname:lname,email:email,areamessage:message},function(result){
			$('#result').append(result);
			});
		});
	});
});    
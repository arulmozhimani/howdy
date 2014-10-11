var id_stat = localStorage.getItem("usrid");

if(id_stat !== null ){
if(id_stat != ""){
window.location.assign('dashboard.html');
}
}

$("#email").blur(function(){
var getmail = this.value;
$.post('http://palwhack.com/checkmail.php',{
   gmail:getmail  
  },
    function(data){
       if(data == '1'){
   $.mobile.changePage('#prog', {transition: 'pop', role: 'dialog'}); 
	 
    $("#data-res p").html('This email id is already in use .. ');
     $("#prog h1").html('Checked..');
     var email = $("#email").val("");
	  $("#email").focus();
   
   }
   
		})
});
$("#signup").click(function(){

  var name = $("#name").val();
  var email = $("#email").val();
  var mobile = $("#mobile").val();
   var password = $("#password").val();
   if(email=="" && password=="" && mobile=="" && name==""){
   alert('fields cannot be empty');}else{
    $.mobile.loading( "show" );
  	$.post('http://palwhack.com/signup.php',{
  name:name,
  email:email,
  mobile:mobile,
  password:password
  
  },
    function(data){
     $.mobile.loading( "hide" );
	 $.mobile.changePage('#prog', {transition: 'pop', role: 'dialog'}); 
	 
    $("#data-res p").html('Hurray!! Done');
     $("#prog h1").html('Success..');
     
		})}
	});
	$(".close").click(function(){	
	  $.mobile.loading( "hide" );
	})
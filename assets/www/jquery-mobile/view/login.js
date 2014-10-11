
$("#loginbtn").click(function(){
 $.mobile.loading( "show" );
  var email = $("#lemail").val();
  var password = $("#lpassword").val();
  if(email=="" && password==""){
	   $.mobile.loading( "hide" );
    alert('Field Fields be empty');
  }else{
   $.mobile.loading( "show" );
  	$.post('http://palwhack.com/login.php',{
  email:email,
  password:password
  
  },
    function(data){
		 $.mobile.loading( "hide" );
    if(data !='login failed'){
		localStorage.setItem("usrid", data);
		$.mobile.changePage('#prog', {transition: 'pop', role: 'dialog'}); 
	 
    $("#data-res p").html(data);
     $("#prog h1").html('Welcome..');
		window.location.assign('dashboard.html');
     }else{
		 
		 $.mobile.changePage('#prog', {transition: 'pop', role: 'dialog'}); 
	 
    $("#data-res p").html(data);
     $("#prog h1").html('Sorry !!');
	
		 }
		})}
	});
	$(".close").click(function(){	
	 $(".modal-backdrop").hide();
	})
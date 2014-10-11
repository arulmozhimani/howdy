// JavaScript Document
function create(){
	$.mobile.changePage('#vcard', {transition: 'pop'}); 
	       var uname = window.localStorage.getItem("username");
			var uemail = window.localStorage.getItem("useremail");
			var ugender = window.localStorage.getItem("usergender");
			var udob = window.localStorage.getItem("userdob");
			var ufbid = window.localStorage.getItem("userfbid");
			var upic = window.localStorage.getItem("userpic");
			var empl = window.localStorage.getItem("useremp");
			var lc = window.localStorage.getItem("userloc");
			var ps = window.localStorage.getItem("userpos");
	$("#prof_pic").attr("src",upic);
	$(".name").text(uname);
	$(".email").text(uemail);
	$(".dob").text(udob);
	$(".emp").text(empl);
	$(".loc").text(lc);
	$(".pos").text(ps);
	
	
	$("#vcard_pic").attr("src",upic);
	}
	
	function setData(response){
		            console.log(response);
					var url = response['picture']['data']['url']; 
					 var email =response['email'] ;
					 var gender= response['gender'];
					 var name = response['name'];
					 var fbid = response['id'];
					 var dob = response['birthday'];
					 var emp = response['work'][0]['employer']['name'];
					  var loc = response['work'][0]['location']['name'];
					   var pos = response['work'][0]['position']['name'];
					 window.localStorage.setItem("username",name);
							 window.localStorage.setItem("useremail",email);
							 window.localStorage.setItem("usergender",gender);
							 window.localStorage.setItem("userdob",dob);
							 window.localStorage.setItem("userfbid",fbid);
							 window.localStorage.setItem("userpic",url);
							  window.localStorage.setItem("useremp",emp);
							   window.localStorage.setItem("userloc",loc);
							    window.localStorage.setItem("userpos",pos);
							 
							 loader();
							  remove();
					 $.post('http://palwhack.com/signup.php',{
						 NAME:name,
						 EMAIL:email,
						 GENDER:gender,
						 DOB:dob,
						 FBID:fbid,
						 PIC:url,
						 EMPLOYER:emp,
						 LOCATION:loc,
						 POSITION:pos
						 
						 },function(data){
							 						
							 window.localStorage.setItem("userid",data);
							 window.localStorage.setItem("username",name);
							 window.localStorage.setItem("useremail",email);
							 window.localStorage.setItem("usergender",gender);
							 window.localStorage.setItem("userdob",dob);
							 window.localStorage.setItem("userfbid",fbid);
							 window.localStorage.setItem("userpic",url);
							loader();
							  remove();
							 })
		}
function SubmitCard(){
	loading();
	var va = $(".name").val(), vb =	$(".email").val(), vc =	$(".dob").val(), vd =$(".mob").val();
	$.post('http://palwhack.com/vcard.php',{
		
		vname:va,
		vemail:vb,
		vmobile:vd,
		vdob:vc,
		vid : window.localStorage.getItem("userid")
		}, function(data){
			alert(data);
			 window.localStorage.setItem("userph",data);
			remove();
			$('.ui-dialog').dialog('close');
			})
	
	}

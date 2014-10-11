// JavaScript Document
var height = $(document).height()
undefined
$('.overlay').css('height',height);
$(document).ready(function(){
	$("#login_btn").parent().hide();
	$("#create_btn").parent().hide();
	var uid = window.localStorage.getItem("userid");
    console.log(uid);
	if(uid === null){
		$("#login_btn").parent().show();
		}else{
			loader();
			}
			
			
		})
function loader(){
		$("#login_btn").parent().hide();
			var uname = window.localStorage.getItem("username");
			var uemail = window.localStorage.getItem("useremail");
			var ugender = window.localStorage.getItem("usergender");
			var udob = window.localStorage.getItem("userdob");
			var ufbid = window.localStorage.getItem("userfbid");
			var upic = window.localStorage.getItem("userpic");
			var emps = window.localStorage.getItem("useremp");
			$("#header").html("<b>Hello</b>, <br />"+uname);
			$("#prof_pic").attr("src",upic);
			$("#create_btn").parent().show();
		}
function loading(){
	$('div[data-role=content]').prepend('<div class="overlay"></div>')
	$.mobile.loading( 'show', {
	text: 'Loading..',
	textVisible: true,
	theme: 'c',
	html: ""
});

	}
	
	function remove(){
		$.mobile.loading( "hide" );
		$(".overlay").remove();
		}
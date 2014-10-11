$("#personal").click(function(){
	window.location.assign('personal_acc.html');
	localStorage.setItem("acc_type", "Personal");
	})
$("#group").click(function(){
	window.location.assign('group_acc.html');
	localStorage.setItem("acc_type", "Group");
	})
$(".back").click(function(){
	var current_id = window.location.hash;
	
	if(current_id=="#persoanl_page"){
		$.mobile.changePage( "#dashboard", { transition: "fade" })

		}
		if(current_id=="#group_page"){
		$.mobile.changePage( "#dashboard", { transition: "fade" })

		}
	})
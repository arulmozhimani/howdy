var nav = '<div data-role="panel" data-position="left" data-position-fixed="false" data-display="reveal" id="nav-panel" data-theme="a" ><ul data-role="listview" data-theme="a" data-divider-theme="a" style="margin-top:-16px;" class="nav-search ui-listview"><li><a href="#" id="er">Expense Report</a></li><li><a href="#">Budget Planning</a></li><li><a href="#">Account Setting</a></li><li><a href="#">Logout</a></li></ul></div>';

$(document).ready(function(){
	var header = $("div[data-role='header']");
	
	
	
	})
$("#er").click(function(){

$.mobile.changePage( "#expense_report", { transition: "fade" })

})

$("#er").click(function(){

$.mobile.changePage( "#budget_panning", { transition: "fade" })

})

$(document).on('pagecreate', '[data-role="page"]', function(){                
    $('<div>').attr({'id':'nav-panel','data-role':'panel'}).appendTo($(this));
    $(document).on('click', '.menu_btn', function(){   
         $.mobile.activePage.find('#nav-panel').panel("open");       
    });    
});
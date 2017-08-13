$('ul.tabs li').click(function(){
 var tab_id = $(this).attr('data-tab');
 //Removing Activation of Tab
 $(this).parent().parent().find('ul.tabs li').removeClass('current');
 $(this).parent().parent().find('.tab-content').removeClass('current');
 //Adding Activation to Tab
 $(this).addClass('current');
 $("#"+tab_id).addClass('current');
})

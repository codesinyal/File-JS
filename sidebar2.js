var mql = window.matchMedia('screen and (min-width: 641px)');if (mql.matches){
$(document).ready(function(){
$('a[name="link-download"]').before($('.download-sidebar').html());
$('.download-sidebar').html('');
});
}

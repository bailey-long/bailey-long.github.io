$(document).ready(function(){
    $(".navDropdown").click(function(){
        if($(".navBar").first().is(":hidden")){
            $(".navBar").slideDown("slow");
        } else {
            $(".navBar").slideUp("slow");
        }    
    });
    // ajdust margins when page size changes (ie rotate mobile device)
$(window).resize(function() {
    if (window.innerWidth < 830){
        $(".navBar").slideUp();
    } else {
        if($(".navBar").first().is(":hidden")){
            $(".navBar").slideDown();
        }
    }
  });
});
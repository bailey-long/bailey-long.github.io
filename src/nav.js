$(document).ready(function(){
    //ANCHOR Slideup navbar on mobile by default and when new page is loaded in
    if (window.innerWidth < 830){
        $(".navBar").slideUp();
    }
    //ANCHOR Functionality for clicking nav button
    $(".navDropdown").click(function(){
        if($(".navBar").first().is(":hidden")){
            $(".navBar").slideDown("slow");
        } else {
            $(".navBar").slideUp("slow");
        }    
    });
    //ANCHOR hide nav when page size changes (ie rotate mobile device, move into developer tools)
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
$(document).ready(function(){
    $(".navDropdown").click(function(){
        if($(".navBar").first().is(":hidden")){
            $(".navBar").slideDown("slow");
        } else {
            $(".navBar").slideUp("slow");
        }    
    });

});
$(document).ready(function(){

    let text = 	`<h3>The above options are my prefered contact methods</h3>`

    $(".textbox").append(text);

    $(".box").on("click", "img", function (event){
        var target = this.id;
        //HTML IMG
       if(target == "1"){
            text = 	`<h3>HTML5</h3>` + 
			`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>`

            $("#1").addClass("active");
            $("#2").removeClass("active");
            $("#3").removeClass("active");
            $(".textbox").empty();
            $(".textbox").append(text);
            return true;
        //CSS IMG
       }else if(target == "2"){
            text = 	`<h3>CSS3</h3>` + 
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>`

            $("#1").removeClass('active');
            $("#2").addClass('active');
            $("#3").removeClass('active');
            $(".textbox").empty();
            $(".textbox").append(text);
            return true;
        //JS IMG
       } else if (target == "3"){
            text = 	`<h3>JavaScript</h3>` + 
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>`

            $("#1").removeClass('active');
            $("#2").removeClass('active');
            $("#3").addClass('active');
            $(".textbox").empty();
            $(".textbox").append(text);
            return true;
       }
    });
});
$(function(){
    $(window).on("scroll" , function (){
        if($(this).scrollTop() > 700){
            $("#header-left a").addClass("change-color");
            $("#header-right li").addClass("change-bg");
        }else{
            $("#header-left a").removeClass("change-color");
            $("#header-right li").removeClass("change-bg");
        }
    });

    $(function(){
        if(window.matchMedia("(min-width:800px)").matches){
        $("#header-left").hide();
        $("#header-left").fadeIn().animate({"marginTop" : "20px"},600);
        $("#header-right").hide();
        $("#header-right").fadeIn().animate({"marginTop" : "20px"},600);
    }
})

$(function(){
    
    $("#header-bottom-left").hide();
    $("#header-bottom-left").fadeIn().animate({"marginBottom" : "20px"},600);
    $("header-bottom-right p").hide();
    // $("#header-bottom-right span").animate({"marginBottom" : "-20px"});
    $("#header-bottom-right p").animate({"marginBottom" : "-20px"});
    }) 
    
    $(function(){
        $("h1").fadeIn(1500);
    });

});


$(function(){
    $(window).scroll(function(){
        $(".scroll").each(function(){

            let scroll = $(window).scrollTop();
            let blockPosition = $(this).offset().top
            let windowHeight = $(window).height();
            if(scroll >blockPosition - windowHeight +300){
                $(this).addClass("blockIn");
            };
        })
    })
})


$(function(){
    // $(".menu-content").hide();

    if($(".menu-content").css("display") === "none"){
        $(".menu-btn").click(function(){
            $(".menu-content").fadeIn();
            $(".menu-content").css("display","block");
        });
    }

    else{
        $(".menu-btn").click(function(){
            $(".menu-content").fadeOut();
            $(".menu-content").css("display","none");
        });
        

    }


    
});


$(function(){
    $(".icon").click(function(){
        $(this).parent().siblings("ul").slideToggle();


        return false
    })
})


$(function(){
    let toggles = $(".icon");
    toggles.click(function(){
         $(this).toggleClass("on");
    })
})






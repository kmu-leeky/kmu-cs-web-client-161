function myFunction() {
    document.getElementById("clickme").innerHTML = "사진을 클릭해보세요 ! (사진 설명)";
}
function magic(x) {
    x.style.opacity = "0.5";
}
function normal(x) {
    x.style.opacity = "1";
}

$("#show_1").click(function(){
    $("#showed_1").toggle(1000);
})
$("#show_2").click(function(){
    $("#showed_2").toggle(1000);
})
$("#show_3").click(function(){
    $("#showed_3").toggle(1000);
})
$("#show_4").click(function(){
    $("#showed_4").toggle(1000);
})
$("#show_5").click(function(){
    $("#showed_5").toggle(1000);
})

$(window).scroll(function() {
  $(".scroll").css( "display", "inline");
});
$(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: 0
        }, 700);
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        scrollTop: $target.offset().top
	    }, 700);
	});
});

$(document).ready(function(){
    $("#image_1").click(function(){
        $("#image_text_1").slideDown()
        setTimeout(function(){
            $("#image_text_1").slideUp();}, 800);
    });
});
$(document).ready(function(){
    $("#image_2").click(function(){
        $("#image_text_2").slideDown();
        setTimeout(function(){
            $("#image_text_2").slideUp();}, 800);
    });
});
$(document).ready(function(){
    $("#image_3").click(function(){
        $("#image_text_3").slideDown();
        setTimeout(function(){
            $("#image_text_3").slideUp();}, 800);
    });
});
$(document).ready(function(){
    $("#image_4").click(function(){
        $("#image_text_4").slideDown();
        setTimeout(function(){
            $("#image_text_4").slideUp();}, 800);
    });
});
$(document).ready(function(){
    $("#image_5").click(function(){
        $("#image_text_5").slideDown();
        setTimeout(function(){
            $("#image_text_5").slideUp();}, 800);
    });
});
$(document).ready(function(){
    $("#image_6").click(function(){
        $("#image_text_6").slideDown();
        setTimeout(function(){
            $("#image_text_6").slideUp();}, 800);
        });
});

$(document).ready(function(){
    $("#send").click(function(){
            setTimeout(function(){alert("전송이 완료되었습니다!!!"); }, 1000);
        });
});
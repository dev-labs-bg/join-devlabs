$(document).ready(function(){
    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 

    function valid(a){    
        if($.trim($(a).val()).length > 0){
           $(a).css("background-color","red");
           if(a.attr("name")=='email'){
                if(validateEmail(a.val())){
                    $(a).css("background-color","red");        
                }
                else{
                    $(a).css("background-color","red");
                    return false;        
                }
           }
           $(a).css("background-color","#fff"); 
           return true;
        }
        else{
            $(a).css("background-color","red");
            return false;
        }
    }


	//Fix Layout height: 100%;
	$(".item").height($(window).height());
	$("body").css("margin-top", -$("#zero").height());

	//Nav:
	$("#pageNav > ul > li").click(function(){
		$("li").removeClass("active");
		$(this).addClass("active");
	});
	$("#play_button, #nav_video a").click(function(){
		$("body").animate({ "margin-top": "0" });
		$("#pageHeader").animate({"top": $("#zero").height()});
	});
	$("#close_button, #nav_home a").click(function(){
		$("body").animate({ "margin-top": -$("#zero").height() });
		$("#pageHeader").animate({"top": "0"});
	});
	$("#nav_requirements a").click(function(){
		$('html, body').animate({
			scrollTop: $("#second").offset().top
			 }, 1000);
	});
	$("#apply a").click(function(){
		$('html, body').animate({
			scrollTop: $("#six").offset().top
		}, 1000);
	});

	$("#bechind_scenes").hover(function(){
		$("#beckind_scenes_active").fadeIn();
	}, function(){
		$("#beckind_scenes_active").fadeOut();
	});
	$("#beckind_scenes_action").click(function(){
		$("#seven").show();
		$('html, body').animate({
			scrollTop: $("#seven").offset().top
		}, 1000);
		return false;
	});
	$("#close_button_bechind").click(function(){
		$('html, body').animate({
			scrollTop: $("#six").offset().top
		}, 1000, function(){
			$("#seven").hide();
		});

		return false;
	});
	

	//Cocktail Hovers:
	$(".plus:first-child p").css({color: "#33bdf2"});
	$(".plus").hover(function(){
		$(".plus p").css({color: "#DCDCDC"});
		$(this).find("p").css({color: "#33bdf2"});
	}, function(){
		$(".plus p, .dev_plus p").css({color: "#b9b9b9"});
	});
	$(".dev_plus").hover(function(){
		//$(".plus p").css({color: "#b9b9b9"});
		$(this).find("p").css({color: "#33bdf2"});
	}, function(){
		$(".dev_plus p").css({color: "#b9b9b9"});
	});
	$(".plus1").hover(function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus.png' + '")');
	});
	$(".plus2").hover(function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_2_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_3.png' + '")');
	});
	$(".plus3").hover(function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_3_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_2.png' + '")');
	});
	$(".plus_right_1").hover(function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_4_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_4.png' + '")');
	});
	$(".plus_right_2").hover(function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_5_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_5.png' + '")');
	});
	$(".plus_right_3").hover(function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_6_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/cocktail_plus_6.png' + '")');
	});


	//DevLabSTAR:
	$(".dev_plus1").hover(function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_1_active.png' + '")').fadeIn();
	}, function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_1.png' + '")');
	});
	$(".dev_plus2").hover(function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_2_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_2.png' + '")');
	});
	$(".dev_plus3").hover(function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_3_active.jpg' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_3.png' + '")');
	});
	$(".dev_plus4").hover(function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_4_active.png' + '")');
	}, function(){
		$(this).css("background-image", 'url("' + 'img/devlabster_plus_4.png' + '")');
	});


	//Fire slider:
	$('.bxslider').bxSlider({
		mode: 'horizontal'
	});
	//Slider Action:
	$(".team_item").hover(function(){
		$(this).find(".item_info").stop(true, true).animate({"top": "0"});
	}, function(){
		$(this).find(".item_info").stop(true, true).animate({"top": "265px"});
	});


	//Contact Form:
	var res1, res2, res3, res4, res5;
	$(".submitBut").click(function(){
		res1 = valid($("input[name='first_name']"));
		res2 = valid($("input[name='last_name']"));
		res3 = valid($("input[name='email']"));
		res4 = valid($("input[name='phone']"));
		res5 = valid($("textarea[name='message']"));

		if(res1 && res2 && res3 && res4 && res5) {
			var jqxhr = $.post("sender.php", { first_name:  $("input[name='first_name']").val(), last_name:  $("input[name='last_name']").val(), email:  $("input[name='email']").val(), phone:  $("input[name='phone']").val(), message:  $("textarea[name='message']").val()} );
			jqxhr.success(function(){
				$(".contacts_holder h2").append("<h2 style='font-size: 18px;'>Благодарим ви.<br /> Ще се свържем с вас :)</h2>");
			});
			jqxhr.fail(function(){
				$(".contacts_holder h2").append("<h2 style='font-size: 18px;'>Грешка... нещо се обърка... </h2>");
			});
		}
	});



});
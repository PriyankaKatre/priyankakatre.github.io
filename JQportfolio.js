$(document).ready(function(){

	/*image slider*/
	$("#slideshow > a:gt(0)").hide();

            setInterval(function() {
              $('.slideshow > a:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideshow');
            },  2000);


            /* page scroll*/

			$(".indexnav, .navbar-brand").click(function(){
				$(".indexPage").slideDown(1500);
			});
			$(".portfolionav, .seeMyWork").click(function(){
				$(".indexPage").slideUp(2000);
				$(".portfolioPage").slideDown(2000);
			});
			$(".aboutnav").click(function(){
				$(".indexPage, .portfolioPage").slideUp(2000);
				$(".aboutPage").slideDown(2000);
			});
			$(".contactnav").click(function(){
				$(".indexPage, .portfolioPage, .aboutPage").slideUp(3000);
				$(".contactInfo").slideDown(3000);
			});
			$(".goToTop").click(function(){
				$("body,html").animate({scrollTop:0}, 1000);
			});

			/*nav hover background */

			 $(".indexli li").hover( function(){
            	var index =$(this).index();
        		var navwidth=[];
        		var navheight=[];
        		var arrleft=[];
				var arrtop=[];
				$(".indexli li").each(function(){
					navwidth.push($(this).outerWidth(true));
					navheight.push($(this).outerHeight(true));
					arrleft.push($(this).position().left);
					arrtop.push($(this).position().top)
				})
            	$(".hoveranimation").animate({"width":navwidth[index], "height":navheight[index], "left":arrleft[index],"top":arrtop[index]});
            })




});
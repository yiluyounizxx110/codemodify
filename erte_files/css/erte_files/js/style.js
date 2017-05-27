	$(function(){
				initPage();
				window.onresize=function(){
					initPage();
				}
				bindEvent();
			});
			
		function initPage(){
			
				$(".nav_tree").css("min-height", ($(window).height() - 86) + 'px');
				$(".nav_tree").attr("min-height",($(window).height() - 86));
				$(".content").css("min-height",($(window).height() - 86) + 'px');
				$(".content").attr("min-height",($(window).height() - 86));
				$(".table").attr("min-height",$(window).height() - 86);
				$(".table").css("min-height",($(window).height() - 86) + 'px');
				
				var rightHeight = $(".content").outerHeight();
				if(rightHeight < $(".nav_tree").outerHeight()){
					$(".table").css("min-height",$(".nav_tree").outerHeight() + 'px');
					$(".table").attr("min-height",$(".nav_tree").outerHeight());
				}else{
					$(".nav_tree").css("min-height",rightHeight + 'px');
					$(".table").css("min-height",rightHeight+ 'px');
					$(".table").attr("min-height",rightHeight);
				}
			}
			function bindEvent(){
				$(".p_menue").on('click',function(){
					if($(this).parent(".menue").hasClass("down")){
						$(this).parent(".menue").removeClass("down").addClass("up");
						$(this).find("span").attr("class","folder_icon_on");
					}else{
						$(this).parent(".menue").removeClass("up").addClass("down");
						$(this).find("span").attr("class","folder_icon");
					}
					calculateHeight();
				});
				$(".c_menue_item").on("click",function(){
					if(!$(this).hasClass("checked")){
						$(".nav_tree_list .c_menue_item").removeClass("checked");
						$(this).addClass("checked");
					}
				})
				
			}
			
			function calculateHeight(){
				var currentRightHeight = $(".table").height();
				var currentNavHeight = $(".nav_tree").height();
				if(currentRightHeight < currentNavHeight){
					$(".table").height(currentNavHeight);
				}else{
					if(currentNavHeight > $(".nav_tree").attr("min-height")){
						$(".table").height(currentNavHeight);
					}else{
						$(".table").height($(".nav_tree").attr("min-height"));
					}
				}
			}
	 $(".search_btn").click(function(){
        var query  = $('.search_right input').val();
        query = query.replace(/(&|^)(\w*?\d*?\-*?_*?)*?=?((?=&)|(?=$))/g,'');
        query = query.replace(/^&/g,'');
		if(query){
			query = 'title=' +query ;
        }
        if( url.indexOf('?')>0 ){
            url += '&' + query;
        }else{
            url += '?' + query;
        }
		window.location.href = url;
	  });	
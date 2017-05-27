			$(function(){
				initPage();
				window.onresize=function(){
					initPage();
				}
				bindEvent();
			});
			
			function initPage(){
			
				$(".nav_tree").css("min-height",($(window).height() - 86) + 'px');
				
				$(".nav_tree").attr("min-height",$(window).height() - 86);
				

				var currentRightHeight = $(".content").height();
				var currentNavHeight = $(".nav_tree").height();
				if(currentRightHeight < currentNavHeight){
					if($(".tips_msg:hidden").length > 0){
						$(".edit_box").css("height",$(".content").height() + (currentNavHeight - currentRightHeight));
					}else{
						$(".edit_box").css("height",$(".edit_box").height() + (currentNavHeight - currentRightHeight));
					}
				}else{
					$(".nav_tree").css("min-height",$(".nav_tree").height() + (currentRightHeight - currentNavHeight));
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
					
				});
				$(".c_menue_item").on("click",function(){
					if(!$(this).hasClass("checked")){
						$(".nav_tree_list .c_menue_item").removeClass("checked");
						$(this).addClass("checked");
					}
				})
				$(".close_tips").click(function(){
					$(".tips_msg").hide();
					
				});
				
			}
			$(".tab_option").click(function(){
					if(!$(this).hasClass("on")){
						var index = $(".tab_option").index($(this));
						$($(".edit_content_tab").get(index)).removeClass("none").siblings(".edit_content_tab").addClass("none");
						$(this).addClass("on").siblings().removeClass("on");
					}
					calculateHeight();
			});
			function calculateHeight(){
				var currentRightHeight = $(".content").height();
				var currentNavHeight = $(".nav_tree").height();
				if(currentRightHeight < currentNavHeight){
					if($(".tips_msg:hidden").length > 0){
						$(".edit_box").css("height",$(".content").height() + (currentNavHeight - currentRightHeight));
					}else{
						$(".edit_box").css("height",$(".edit_box").height() + (currentNavHeight - currentRightHeight));
					}
				}else{
					if(currentNavHeight > $(".nav_tree").attr("min-height")){
						$(".edit_box").css("height",$(".edit_box").height() + (currentNavHeight - currentRightHeight));
					}else{
						$(".edit_box").css("height",$(".edit_box").height() + ( $(".nav_tree").attr("min-height") - currentRightHeight));
					}
				}
			}
//dom加载完成后执行的js
$(function(){
	//全选的实现
	$(".check-all").click(function(){
		$(".ids").prop("checked", this.checked);
	});
	$(".ids").click(function(){
		var option = $(".ids");
		option.each(function(i){
			if(!this.checked){
				$(".check-all").prop("checked", false);
				return false;
			}else{
				$(".check-all").prop("checked", true);
			}
		});
	});
 }); 

 $(window).scroll(function(event){
      var height= $(document).scrollTop();
	  if(height>25){
		  $(".tips_msg").css("top","0px");
	  }
	  else{
		  $(".tips_msg").css("top","76px");
	  }
  });

$(".confirm_btn").click(function(){
      var self = $(".group-form");
	  var height= $(document).scrollTop();
	  if(height>25){
		  $(".tips_msg").css("top","0px");
	  }
	  else{
		  $(".tips_msg").css("top","76px");
	  }
      $.post(self.attr("action"),self.serialize(),function(data){
          if(data.code){
			 if($(".tips_msg").hasClass("error")){
				  $(".tips_msg").removeClass("error");
			 }
		     $(".tips_msg").show(); 
			 $(".tips").html(data.msg+ ' 页面即将自动跳转~'); 	
			 setTimeout(function(){
                        if (data.url) {
                            location.href=data.url;
                        }
                    },3000);
		  }else{
		    $(".tips").html(data.msg); 
            $(".tips_msg").addClass("error"); 		   
		    $(".tips_msg").show();
		  }
      });
});
$(".del_btn").click(function(){
      var self =  $(this);
	  if(!confirm('确认要执行该操作吗?')){
                return false;
       }
	 var target = $(this).attr('data-url');
      $.post(target,function(data){
          if(data.code){
			 if($(".tips_msg").hasClass("error")){
				  $(".tips_msg").removeClass("error");
			 }
		     $(".tips_msg").show(); 
			 $(".tips").html(data.msg+ ' 页面即将自动跳转~'); 	
			  setTimeout(function(){
                        if (data.url) {
                            location.href=data.url;
                        }
                    },1500);
		  }else{
		    $(".tips").html(data.msg); 
            $(".tips_msg").addClass("error"); 		   
		    $(".tips_msg").show();
		  }
      });
});
$(".delete").click(function(){
      var self =  $(this);
	  if(!confirm('确认要执行该操作吗?')){
                return false;
       }
	 var target = $(this).attr('data-url');
	  var ids=getIds();
      $.post(target,{id:ids},function(data){
          if(data.code){
			 if($(".tips_msg").hasClass("error")){
				  $(".tips_msg").removeClass("error");
			 }
		     $(".tips_msg").show(); 
			 $(".tips").html(data.msg+ ' 页面即将自动跳转~'); 
            setTimeout(function(){
                        if (data.url) {
                            location.href=data.url;
                        }
                    },1500);			 
			
		  }else{
		    $(".tips").html(data.msg); 
            $(".tips_msg").addClass("error"); 		   
		    $(".tips_msg").show(); 
		  }
      });
});
$(".cancel_btn").click(function(){
   history.go(-1);	
});
function getIds() {     
		   //全选遍历
		    var result=new Array();
			var option = $(".ids");
		    option.each(function(i){
		 	if(this.checked){
				result.push($(this).val());
			}
		  });
			
		 return result.join(",");		
	}


function del(id,url){
    $.post(url,{id:id},function(data,status){
			 if(data.code){
			        $(".tips").html(data.msg);
    				window.location.href =data.url;
    			} else {
				      $(".tips").html(data.msg);
    				
    			}
      });
}



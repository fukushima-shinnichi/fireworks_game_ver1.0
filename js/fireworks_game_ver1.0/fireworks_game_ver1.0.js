$(function(){
  
  $(document).ready(function(){
    
    ////   start page fadeOut & discription page fadeIn   /////
    $(".topPage button").one("click",function(){
      $(".topPageImg").fadeOut(500,function(){
        $(".discriptionPageImg").fadeIn(500);
      });
    });
    
    //////   count down control   /////////////
    (function(){
      $(".descriptionPage button").one("click",function(){
        $(".discriptionPageImg").fadeOut(500,function(){
          var timerID = setTimeout(function(){
            $(".countDown3Img").fadeOut(0,function(){
              var timerID = setTimeout(function(){
                $(".countDown2Img").fadeOut(0,function(){
                  var timerID = setTimeout(function(){
                    $(".countDown1Img").fadeOut(0,function(){
                      var timerID =setTimeout(function(){
                        $(".countDownStartImg").fadeOut(0,function(){
                          var timerID = setTimeout(function(){
                            
                            ///   target speed control   //////
                            $(".target").each(function(){
                              var speedID = Math.floor(Math.random()*64)+7;
                              console.log(speedID);
                              $(this).animate({
                                top:"-310px"
                              },speedID*1000);
                            });
                            
                            ///   game view fadeOut   ////////
                            var timerID = setTimeout(function(){
                              $(".gameView").fadeOut(0);
                            },70000);
                            
                          },1000);
                        });
                      },1000);
                    });
                  },1000);
                });
              },1000);
            });
          },1000);
        });
      });
    })();
    
    
    ////////  points control & fireworks control /////////////
      ////////   target each position save   /////////
    (function(){
      var timerID = setInterval(function(){
        $(".target").each(function(){
          var eachPosition =parseInt($(this).css("top"));
          $(this).data("pointTop",eachPosition);
        });
      },500);
    })();
    
      //////////   target image control   ////////////
    $(".target").each(function(){
      var target = $(this);
      $(this).find("label").click(function(){
        var targetPosition = target.data("pointTop");
        var eachLabel = $(this);
        var input = $(this).find("input");
        target.stop();
        var smoke = target.find(".smoke img");
        
        ///////   fire works image control   ////////
        var fireWorksControl = function(){
          console.log(input.attr("value"));
          eachLabel.find("img.ball").fadeOut(0);
          eachLabel.find("img.halfhalf").fadeIn(0,function(){
            var timerID = setTimeout(function(){
              eachLabel.find("img.halfhalf").fadeOut(0);
              smoke.css("marginTop","150px");
              eachLabel.find("img.half").fadeIn(0,function(){
                var timerID = setTimeout(function(){
                  eachLabel.find("img.half").fadeOut(0);
                  smoke.css("marginTop","205px");
                  eachLabel.find("img.all").fadeIn(0,function(){
                    var timerID = setTimeout(function(){
                      target.fadeOut(500);
                    },500);
                  });
                },500);
              });
            },500);
          });
          return;
        };
        
        /////   points 2 function   ////////////
        if(targetPosition<=200){
          input.attr("value",2);
          fireWorksControl();
          
          /////   points 1 function   ////////////
        }else if(targetPosition<=500){
          input.attr("value",1);
          fireWorksControl();
          
          /////   points -1 function   ////////////
        }else if(targetPosition>500){
          input.attr("value",-1);
          console.log(input.attr("value"));
          eachLabel.find("img.ball").fadeOut(0);
          smoke.css("marginTop","150px");
          eachLabel.find("img.explosion").fadeIn(0,function(){
            var timerID = setTimeout(function(){
              target.fadeOut(500);
            },500)
          });
        }else{
          input.attr("value",0);
        };
    });
  });
    
    
    ///////   target position control    /////////////
        var timerID = setTimeout(function(){
      $(".target").each(function(){
        var top = Math.floor(Math.random()*4001)+700;
        var left = Math.floor(Math.random()*833)+84;
        console.log(top,left);
        $(this).css({
          top:top+"px",
          left:left+"px"
        });
      });
    },500);
    
    
    ///////   points sum & score fadeIn   ///////////
        ///////   points sum   /////////////////
    (function(){
      $(".target label").click(function(){
        var sum = 0;
         $(".target input").each(function(){
           console.log(parseInt($(this).val()));
           sum += parseInt($(this).val());
           return;
         });
        var sumsum = sum*2;
        
        /////   score fadeIn   ///////////////////////
        if(sumsum===100){
          $(".scoreImgGood").fadeIn(0);
          $(".scoreImgAcceptable").fadeOut(0);
          $(".scoreImgPoor").fadeOut(0);
        }else if(sumsum>=80){
          $(".scoreImgGood").fadeOut(0);
          $(".scoreImgAcceptable").fadeIn(0);
          $(".scoreImgPoor").fadeOut(0);
        }else if(sumsum<80){
          $(".scoreImgGood").fadeOut(0);
          $(".scoreImgAcceptable").fadeOut(0);
          $(".scoreImgPoor").fadeIn(0);
        };
        $(".speechBalloonComment p:nth-of-type(2)").text(sumsum + " points");
      });
    })();
    
    ///////   try again, page reload   //////////////////
    $("div.score button").one("click",function(){
      location.reload();
    });
    
    
    
  });
});



/////////   javascript   ////////////////////
window.onload = function(){

  ////////   audio control   ////////////////////
  var audioControl1 = document.getElementById("songs1");
  var audioControl2 = document.getElementById("songs2");
  var audioControl3 = document.getElementById("songs3");
  var soundUP = document.getElementById("up");
  var soundDOWN = document.getElementById("down");
  var soundMUTE = document.getElementById("mute");
  var songsNumber = Math.floor(Math.random()*3)+1;
  
  ///////   suond up button   /////////////////
  soundUP.addEventListener("click",function(){
    audioControl1.volume += 0.05;
    audioControl2.volume += 0.05;
    audioControl3.volume += 0.05;
  });
  
  ///////   suond down button   /////////////////
  soundDOWN.addEventListener("click",function(){
    audioControl1.volume -= 0.05;
    audioControl2.volume -= 0.05;
    audioControl3.volume -= 0.05;
  });
  
  ///////   suond mute button   /////////////////
  soundMUTE.addEventListener("click",function(){
    audioControl1.volume = 0;
    audioControl2.volume = 0;
    audioControl3.volume = 0;
  });
  
  ////////   audio play control   ///////////////
  if(songsNumber===1){
    audioControl1.play();
    audioControl1.addEventListener("ended",function(){
      audioControl2.play();
      audioControl2.addEventListener("ended",function(){
        audioControl3.play();
      });
    });
  }else if(songsNumber===2){
    audioControl2.play();
    audioControl2.addEventListener("ended",function(){
      audioControl3.play();
      audioControl3.addEventListener("ended",function(){
        audioControl1.play();
      });
    });
  }else if(songsNumber===3){
    audioControl3.play();
    audioControl3.addEventListener("ended",function(){
      audioControl1.play();
      audioControl1.addEventListener("ended",function(){
        audioControl2.play();
      });
    });
  };
  
  
  
};
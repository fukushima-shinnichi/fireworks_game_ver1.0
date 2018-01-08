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
                              var speedID = Math.floor(Math.random()*54)+7;
                              console.log(speedID);
                              $(this).animate({
                                top:"-310px"
                              },speedID*1000);
                            });
                            
                            ///   game view fadeOut   ////////
                            var timerID = setTimeout(function(){
                              $(".gameView").fadeOut(0);
                            },60000);
                            
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
    
    
    
    //////  target speed   ///////////////////
    //////delete
    /*
    (function(){
      var timerID =setInterval(function(){
      $(".countDownStartImg").data("ImgDisplay",$(".countDownStartImg").css("display"));
        console.log($(".countDownStartImg").data("ImgDisplay"));
      },100);
      var countDownImgDisplay = $(".countDownStartImg").data("ImgDisplay");
      if(countDownImgDisplay==="none"){
      var timerID =setTimeout(function(){
      $(".target").each(function(){
        var speedID = Math.floor(Math.random()*54)+7;
        console.log(speedID);
        $(this).animate({
          top:"-310px"
        },5000);
      })
      },1000);
      };
    })();
    */
    
    ////////  points control & fireworks control /////////////
      ////////   target each position save   /////////
    (function(){
      var timerID = setInterval(function(){
        $(".target").each(function(){
          //console.log(parseInt($(this).css("top")));
          var eachPosition =parseInt($(this).css("top"));
          $(this).data("pointTop",eachPosition);
          //console.log($(this).data("pointTop"));
        });
      },500);
    })();
    
      //////////   target image control   ////////////
    
    $(".target").each(function(){
      //var eachPosition = $(this).data("pointTop");
      //console.log($(this).data("pointTop"));
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
        
        
        if(targetPosition<=200){
          input.attr("value",2);
          fireWorksControl();
          /*
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
          
          */
        }else if(targetPosition<=500){
          input.attr("value",1);
          fireWorksControl();
          
          /*
          console.log(input.attr("value"));
          eachLabel.find("img.ball").fadeOut(0);
          eachLabel.find("img.halfhalf").fadeIn(0,function(){
            var timerID = setTimeout(function(){
              eachLabel.find("img.halfhalf").fadeOut(0);
              smoke.css("marginTop","115px");
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
          */
          
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
    
    (function(){
      
        //////////   points sum   /////////////////
      $(".target label").click(function(){
        var target1 = parseInt($("input[name='target1']").val());
        var target2 = parseInt($("input[name='target2']").val());
        var target3 = parseInt($("input[name='target3']").val());
        console.log(target1,target2,target3);
        var sum = target1+target2+target3;
        $(".speechBalloonComment").text(sum);
        
        ////////   score fadeIn   ////////////////
        if(sum===2){
          $(".scoreImgGood").fadeIn(0);
          $(".scoreImgAcceptable").fadeOut(0);
          $(".scoreImgPoor").fadeOut(0);
        }else if(sum===1){
          $(".scoreImgGood").fadeOut(0);
          $(".scoreImgAcceptable").fadeIn(0);
          $(".scoreImgPoor").fadeOut(0);
        }else if(sum===-1){
          $(".scoreImgGood").fadeOut(0);
          $(".scoreImgAcceptable").fadeOut(0);
          $(".scoreImgPoor").fadeIn(0);
        };
      });
    })();
    
    
    ///////   try again, page reload   //////////////////
    $("div.score button").one("click",function(){
      location.reload();
    });
    
    //////   audio control   /////////////////
    /*
    (function(){
      
      //$("#songs").get(0).play();
      //console.log($("#aaa").get(0).play());
      console.log($("#songs").get(0).volume);
      //console.log($("#aaa").get(0).volume);
      var nowVolume = $("#songs").get(0).volume;
      
      //nowVolume += 0.1;
      //console.log(nowVolume);
      $("#up").click(function(){
        nowVolume += 10;
        console.log(nowVolume);
      });
      $("#down").click(function(){
        nowVolume -= 10;
        console.log(nowVolume);
      });
    
    })();

    */
    
    
    
    
    
    
    
    
    
    /////////   question No,1   //////////////
    //////////   eachでの値の取得の仕方  質問する   ///////////////
    /*
    $(".target label").click(function(){
    $(".target input").each(function(){
      var score = $(this).val();
      //console.logで各valueは確認できました。
      console.log(score);
      //合計を出すために配列に入れて、
      //[0,1,0]などとし、
      //下記for文を用いて
      
      var sum = function(array){
        var sum = 0;
        for(var i=0,len=array.length; i<len; ++i){
          sum += array[i]
        };
        return sum;
      }
      
      //算出しようと考ええていますが、
      //console.log()で確認すると配列に[0]のように各要素の1つの値しか
      //代入されません。
      //なにかしら良い方法や別の方法はないかご教授頂きたいです。
      var array = [score];
      console.log(array);
    });
    });
    */
    
    ///////  .dataに各値を入れてみて、配列が出来るか確認してみた /////////
    /*
    var aaa = [$(".target input").data("aaa")];
    console.log(aaa);
    */
    
    ///  どういう風に表示されるか見てみた  /////
    /*
    var ccc = [$(".target input").val()];
    console.log(ccc);
    */
    
    /*
    //changeで各inputのvalueの取得を試みた結果、chageが発動しない
    //chageが機能しない
    (function(){
      $(".target").each(function(){
        var label = $(this).find("label");
        //labelをクリックするとradioのvalueが変化するため
        $(this).find("input[type='radio']").change(function(){
          var eachLabelPoint = label.find("input").val();
          var sum = parseInt(eachLabelPoint+0);
          console.log(sum);
          $(".scoreImgGood p").text(sum);
        });

      });
    })();
    */
    
    
    
    
    /////////   question No,2   //////////////
 
      //////// 関数のまとめ方を質問する /////////////////
    /*
    $(".target").each(function(){
    //var eachPosition = $(this).data("pointTop");
    //console.log($(this).data("pointTop"));
      var target = $(this);
    $(this).find("label").click(function(){
        var targetPosition = target.data("pointTop");
        var eachLabel = $(this);
        var input = $(this).find("input");
        
        var functionFireworks = (function(){
          console.log(input.attr("value"));
          eachLabel.find("img.ball").fadeOut(0);
          eachLabel.find("img.halfhalf").fadeIn(0,function(){
            var timerID = setTimeout(function(){
              eachLabel.find("img.halfhalf").fadeOut(0);
              eachLabel.find("img.half").fadeIn(0,function(){
                var timerID = setTimeout(function(){
                  eachLabel.find("img.half").fadeOut(0);
                  eachLabel.find("img.all").fadeIn(0,function(){
                    var timerID = setTimeout(function(){
                      eachLabel.find("img.all").fadeOut(500);
                    },500);
                  });
                },500);
              });
            },500);
          });
            return;
          })();
      
      
      
      
      
        if(targetPosition===700){
          input.attr("value",2);
          functionFireworks();

        }else if(targetPosition===710){
          input.attr("value",1);
          functionFireworks();
        };
    });
  });

*/
    



  
  
  
  
  
    
    
    
    
    
    
    ///////////////////////
  
  });
  
  
  
});



/////////   javascript   ////////
window.onload = function(){

  ////////   audio control   ////////////////////
  var audioControl1 = document.getElementById("songs1");
  var audioControl2 = document.getElementById("songs2");
  var audioControl3 = document.getElementById("songs3");
  var soundUP = document.getElementById("up");
  var soundDOWN = document.getElementById("down");
  var soundMUTE = document.getElementById("mute");
  var songsNumber = Math.floor(Math.random()*3)+1;
//audioControl.play();
//audioControl.volume;
//console.log(audioControl.volume);
  console.log(songsNumber);
  
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
  /*
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
  */
  
  /*
  audioControl1.play();
  audioControl1.addEventListener("ended",function(){
    audioControl2.play();
    audioControl2.addEventListener("ended",function(){
      audioControl3.play();
    });
  });
  */
  /*
  var timerID = setTimeout(function(){
    audioControl.ended;
    console.log(audioControl.ended);
    console.log(audioControl.duration);
    //var songTime = audioControl.duration;
  },1000);
  */
  /*
  var songTime = audioControl.duration;
  var nextStart = setTimeout(function(){
    audioControl2.play();
  },songTime*1000);
  */
  
  /*
  var nextStart = setInterval(function(){
    var end1 = audioControl.ended;
    if(end1==="true"){
      audioControl2.play();
    };
  },1000);
  */
  /*
  if(audioControl.ended=="true"){
    audioControl2.play();
  };
  */
  
};
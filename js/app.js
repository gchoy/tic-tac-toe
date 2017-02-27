// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var mark = function(numClicks,box){
     if (numClicks<10 && numClicks%2===0  && $(box).text() =="blank"){
       $(box).text("X");
     } else if(numClicks<10 && numClicks%2 ===1 && $(box).text()=="blank"){
       $(box).text("O");
     }

   }


   var numClicks = 0;

   $("div#a.col-md-4.box").on("click",function(){
     console.log("I clicked div#a.col-md-4.box")
     numClicks += 1;
     var box = "div#a.col-md-4.box";
     mark(numClicks,box);
   });

   $("div#b.col-md-4.box").on("click",function(){
     console.log("I clicked div#b.col-md-4.box")
     numClicks += 1;
     var box = "div#b.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#c.col-md-4.box").on("click",function(){
     console.log("I clicked div#c.col-md-4.box")
     numClicks += 1;
     var box = "div#c.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#d.col-md-4.box").on("click",function(){
     console.log("I clicked div#d.col-md-4.box")
     numClicks += 1;
     var box = "div#d.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#e.col-md-4.box").on("click",function(){
     console.log("I clicked div#e.col-md-4.box")
     numClicks += 1;
     var box = "div#e.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#f.col-md-4.box").on("click",function(){
     console.log("I clicked div#f.col-md-4.box")
     numClicks += 1;
     var box = "div#f.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#g.col-md-4.box").on("click",function(){
     console.log("I clicked div#g.col-md-4.box")
     numClicks += 1;
     var box = "div#g.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#h.col-md-4.box").on("click",function(){
     console.log("I clicked div#h.col-md-4.box")
     numClicks += 1;
     var box = "div#h.col-md-4.box";
     mark(numClicks,box);
   });
   $("div#i.col-md-4.box").on("click",function(){
     console.log("I clicked div#i.col-md-4.box")
     numClicks += 1;
     var box = "div#i.col-md-4.box";
     mark(numClicks,box);
   });

   $("button").on("click",function reset(){
     location.reload();



   });

});

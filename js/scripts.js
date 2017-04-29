$(document).ready(function() {
      $("form").submit(function(event) {
        var a = parseInt($("input#sidea").val());
        var b = parseInt($("input#sideb").val());
        var c = parseInt($("input#sidec").val());
        var results="";



      if(c> a+b || b>a+c || a>b+c){
        results = "Not a Triangle";
      }else {
        if(a===b && a===c){
          results = "Equilateral";
        }else {
          if(a===b || a===c || b===c ){
          results = "Isosceles";
        }
        else {
          if(a!=b && a!=c){
             results = "Scalene";
          }
        }
      }
      }
        setImageSource(results);
        $(".output").text(results);

        event.preventDefault();
      });

      function setImageSource(results) {
      var imageSrc="";
      if (results === "Equilateral") {
         imageSrc="img/e.png";
      }else if (results === "Isosceles") {
         imageSrc="img/i.png";
      }else if (results === "Scalene") {
         imageSrc="img/s.png";
      }else {
        imageSrc="img/n.gif";
      }

        $('#tri').attr('src', imageSrc);
      
      }
    });

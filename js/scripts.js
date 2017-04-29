$(document).ready(function() {
  var name;
  var accbal;
  var pin;

      $("#newuser form").submit(function(event) {
        name = $("input#name").val();
        pin  = $("input#pin").val();
        accbal = parseInt($("input#initialbal").val());

        $(".name").text(name);
        $(".bal").text(accbal);

        $("#transaction").show();
        $("#newuser").hide();

        event.preventDefault();
      });

      $("#transaction form").submit(function(event) {
        var transaction = $('input[name=transaction]:checked').val();
        var amt = parseInt($("input#amount").val());
        var message ="";

        if (transaction === "1") {
           accbal = accbal + amt;
           message = "Your transaction has been Successful!!";
        } else {
          var Tempaccbal = accbal - amt;
          if (Tempaccbal < 0) {
            message = "SORRY: transaction Failed. You do not have sufficient funds";
          } else {
            accbal = accbal - amt;
            message = "Your transaction has been Successful!!"
          }
        }

        $(".name").text(name);
        $(".bal").text(accbal);
        $(".msg").text(message);

        $("#message").show();
        $("#transaction").hide();
        $("#newuser").hide();

        event.preventDefault();
      });

      $("#back").click(function(event) {
        $("input#amount").attr("placeholder", "0.00");
          $("input#amount").val("");
        $("#message").hide();
        $("#transaction").show();
        $("#newuser").hide();

        event.preventDefault();
      });


    });

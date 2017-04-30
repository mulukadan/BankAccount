$(document).ready(function() {
  // var name;
  // var accbal;
  // var pin;
  // var account = {
  //   name: "",
  //   accbal: "0",
  //   pin: ""
  // };
  function account(name, pin, accbal) {
    this.name = name;
    this.pin = pin;
    this.accbal = accbal;
  }

      $("#newuser form").submit(function(event) {
        name = $("input#name").val();
        pin  = $("input#pin").val();
        accbal = parseInt($("input#initialbal").val());

        var newAccount = new account(name, pin, accbal);

        $(".name").text(newAccount.name);
        $(".bal").text(newAccount.accbal);

        $(".btns").show();
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

      $("#logout").click(function(event) {
        $("#message").hide();
        $("#transaction").hide();
        $("#newuser").hide();
        $("#login").show();
        $("#logout").hide();
        $(".wrongpin").text("");
        $("input#logpin").val("");
        event.preventDefault();
      });

      $("#login form").submit(function(event) {
        var enteredpin  = $("input#logpin").val();

        if (enteredpin === pin) {
          $("#transaction").show();
          $("#logout").show();
          $("#login").hide();
        } else {
              $(".wrongpin").text("Wrong Pin!!");
        }

        event.preventDefault();
      });

      $("#off").click(function(event) {
        $("#message").hide();
        $("#transaction").hide();
        $("#newuser").hide();
        $("#login").hide();
        $("#logout").show();
        $(".btns").hide();

        $(".bye").delay("slow").fadeIn();
        $(".bye").delay("slow").fadeOut();
        $(".bye").delay("slow").fadeIn();
        $(".bye").delay("slow").fadeOut();
        $("input#name").val("");
        $("input#pin").val("");
        $("input#initialbal").val("");

       $("#newuser").delay(4200).fadeIn();


        event.preventDefault();
      });


    });

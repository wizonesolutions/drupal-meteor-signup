(function ($) {
  Drupal.behaviors.meteor_signup = {attach: function(context, settings) {

    $("form#meteor-signup-form #edit-submit").click(function(e){

      e.preventDefault();

      var email = $("#edit-email").val();
      var updates = false;

      if (email == undefined || email == "" || email == $("#edit-email").attr('default_value')) {
        $("#edit-email").addClass("error");
        alertify.error("Email address is required.");
        return;
      }

      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(email) === false) {
        $("#edit-email").addClass("error");
        alertify.error("Invalid Email");
        return;
      } else {
        $("#edit-email").removeClass("error");
      }

      socket = false;

      if (settings.meteor_signup != undefined && settings.meteor_signup.socket != undefined) {
        socket = settings.meteor_signup.socket;
      }

      createUser(socket, email, updates);
    });


  }};

  function createUser(websocket, email, updates) {
    if (websocket === undefined || websocket === false) {
      alertify.error("Cannot sign-up at this time, please try again later!");
    }

    var ddp = new MeteorDdp(websocket);
    ddp.connect().done(function() {
      var createUser = ddp.call('drupalCreateNewUserByEmail', [email, updates]);

      createUser.fail(function(ret) {
        alertify.error(ret);
      });

      createUser.done(function(ret) {
        alertify.success(ret.confirmation);
        $(".meteor_signup_wrap input.form-submit").attr("disabled", "disabled").addClass("disabled");
      });
    });
  }
})(jQuery);

$(function() {
    $(".chgStatus").on("click", function(event) {
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("changed status", id);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#new_burger").val().trim(),
        devoured: false,
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("burger added");
          location.reload();
        }
      );
    });
  });
  
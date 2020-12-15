$(function() {
    $(".chgDevoured").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log("changed status to", newBurger);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#new_burger").val().trim(),
        devoured: 0,
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
  
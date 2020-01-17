// Front-end

.btn-primary {
  display: block;
}

#code {
  display: none;
}

// Back-end

$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    var skills = ($("#skill-level").val();
    var results = $("input:radio[name=desired-results]:checked").val();
    var money = $("#money").val();
    var dominance = $("select#dominance").val();
    var monitor = $("select#monitor").val();

    if (skills === 'Intermediate, ') {
      $("#suggestion") = JavaScript;
    } else if (dominance === 'left') {
      $("#suggestion")= React;
    } else {
      $("#suggestion") = Cow;
    }

    $("#suggestion".show();

    event.preventDefault();
  });
});
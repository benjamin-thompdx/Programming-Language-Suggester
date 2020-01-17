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
//    var skills = $("#skill-level").val();
//    var results = $("input:radio[name=desired-results]:checked").val();
//    var money = $("#money").val();
    var dominance = $("select#dominance").val();
//    var monitor = $("select#monitor").val();

    if (dominance === 'left') {
      code = JavaScript;
    } else if (dominance === 'right') {
      code = React;
    } else {
      code = Cow;
    }

      $("#suggestion").empty().append(code);
      $("#code").show();

    event.preventDefault();
  });
});
// Front-end

.btn {
  display: block;
}

#quote {
  display: none;
}

// Back-end

$(document).ready(function() {
  $("form#language-suggester").submit(function(event) {
    var skills = $("#skill-level").val();
    var results = $("input:radio[name=desired-results]:checked").val();

    if (age) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && age < 26) {
        quote += 50;
      }

      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});
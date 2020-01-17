// Front-end

.btn {
  display: block;
}

#quote {
  display: none;
}

// Back-end

$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#coding-experience').show();
  }
});
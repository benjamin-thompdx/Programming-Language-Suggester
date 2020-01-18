$(document).ready(function(){
  $("form#language-suggester").submit(function(){
    $("#language-suggester").hide();
    $(".opening").hide();
    userSkill = $("input:radio[name=skill]:checked").val();
    userResults = $("input:radio[name=results]:checked").val();
    userMoney = $("input:radio[name=money]:checked").val();
    userDominance = $("input:radio[name=dominance]:checked").val();
    userMonitor = $("input:radio[name=monitor]:checked").val();


    if (userMoney === "kinda" || userMoney === "sorta") {
      $(".money-kinda-sorta").show();
    } else if (userMoney === "no" || userMoney === "hmmm") {
      $(".money-no-hmmm").show();
      if (userSkill === "intermediate" && userResults === "basics" && userMonitor === "single") {
        $(".javascript").show();
      } else if (userSkill === "advanced" && userResults === "more" && userMonitor === "multiple") {
        $(".react").show();
      } else if (userSkill === "expert" && userResults === "new" && userMonitor  === "multiple") {
        $(".cow").show();
      } else {
        $(".sql").show();
      }
    } else if (userMoney === "yes") {
      $(".money-yes").show();
      if (userSkill === "intermediate" && userResults === "basics" && userMonitor === "single") {
        $(".javascript").show();
      } else if (userSkill === "advanced" && userResults === "more" && userMonitor === "multiple") {
        $(".react").show();
      } else if (userSkill === "expert" && userResults === "new" && userMonitor  === "multiple") {
        $(".cow").show();
      } else {
        $(".sql").show();
      }
    } else {
      alert("Answer all questions to see your suggested language!")
      $(".opening").show();
      $("#language-suggester").show();
    }

    $("button.btn-primary").click(function(){
      $(".result").hide();
      $(".opening").show(); 
      $("#language-suggester").show();
    });
    event.preventDefault();
  });
});
$(document).ready(function(){
  $("form#language-suggester").submit(function(){
    $("#language-suggester").hide();
    $(".opening").hide();
    userSkill = $("input:radio[name=skill]:checked").val();
    userResults = $("input:radio[name=results]:checked").val();
    userMoney = $("input:radio[name=money]:checked").val();
    userDominance = $("input:radio[name=dominance]:checked").val();
    userMonitor = $("input:radio[name=monitor]:checked").val();
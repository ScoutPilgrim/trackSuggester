$(document).ready(function(){
  let webChk = 'webdev';
  $('#whichCareer').change(function(){
    var careerChk = $('#whichCareer').val();
    console.log(careerChk);
    if(careerChk === webChk){
      $('#langCheck').show();
    }
  });
});

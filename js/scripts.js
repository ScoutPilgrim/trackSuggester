$(document).ready(function(){
  let webChk = 'webdev';
  $('#whichCareer').change(function(){
    var careerChk = $('#whichCareer').val();
    console.log(careerChk);
    if(careerChk === webChk){
      $('#langCheck').show();
    }
  });
  $('#trackForm').submit(function(event){
    event.preventDefault();
    console.log('trackForm is being submitted')
    var name = $('#nameInput').val();
    var tech = $('#whichCareer').val();
    var optLang = $('#whichLang').val();
    var whichTime = $('#timeInput').val();
    var whichIntern = $('#internInput').val();
    var isCheck = $('#introCheck:checked').val();
    showReturn(name);
    trackReturn(tech, optLang);
    checkReturn(isCheck);
  });
  function showReturn(myName){
    console.log('showName is being called');
    $('#returnTrack').show();
    $('#returnTrack').find('p > .nameClass').show();
    $('.nameClass').text(myName);
  }
  function trackReturn(myTrack, myLang){
    console.log('trackReturn is being called');
    switch (myTrack) {
      case 'android':
        $('.myTrack').text('Java/Android');
        break;
      case 'webdev':
        langReturn(myLang);
        break;
      case 'game':
        $('.myTrack').text('C#/.NET');
        break;
    }
  }
  function langReturn(myLang){
    console.log('langReturn is being called');
    switch (myLang) {
      case 'php':
        $('.myTrack').text('PHP/Drupal');
        break;
      case 'js':
        $('.myTrack').text('Ruby/Rails');
        break;
    }
  }
  function checkReturn(myCheck){
    console.log('checkReturn is being called');
    if(myCheck){
      $('#returnTrack').append($('#yesIntro > p'));
    }else{
      $('#returnTrack').append($('#noIntro > p'));
    }
  }
});

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
    $('#returnTrack').find("p:not('#originalP')").remove();
    console.log('trackForm is being submitted');
    var name = $('#nameInput').val();
    var tech = $('#whichCareer').val();
    var optLang = $('#whichLang').val();
    var whichTime = $('#timeInput').val();
    var whichIntern = $('#internInput').val();
    var isCheck = $('#introCheck:checked').val();
    showReturn(name);
    trackReturn(tech, optLang);
    checkReturn(isCheck);
    timeReturn(whichTime);
    internReturn(whichIntern);
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
  function timeReturn(myTime){
    console.log('timeReturn is being called');
    switch (myTime) {
      case 'parttime':
        $('#returnTrack').append($('#partTime > p'));
        $('.yesPartTime').show();
        break;
      case 'fulltime':
        break;
    }
  }
  function internReturn(myIntern){
    console.log('internReturn is being called');
    switch (myIntern) {
      case 'internY':
        $('#returnTrack').append($('#yesIntern > p'));
        break;
      case 'internN':
        break;
    }
  }
});

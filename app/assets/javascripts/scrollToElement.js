$(document).on('click', 'a[href^="#"]', function(e){

  var scroll = function(that,e) {
    var target = $(that.getAttribute('href'));
    if(target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  };

  var changePageTitle = function(that) {
    var target = $(that.getAttribute('href'));
    if(target.length) {
      var title = document.title;
      var title = title.split("|")[0];
      var pageSection = target.selector;
      pageSection = pageSection.split("#")[1];
      document.title = title +" | "+pageSection;
    }
  };

  scroll(this,e);
  changePageTitle(this);
});


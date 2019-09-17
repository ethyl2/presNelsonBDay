$(document).ready(function(){

  //Show active styling to nav when scrolling. Code is modified from https://codetheory.in/change-active-state-links-sticky-navigation-scroll/
  var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    //console.log("Clicked");

    var $el = $(this)
      , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - (nav_height*1.5)
    }, 500);

    return false;
    });

//Resizing video code is from https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='//www.youtube.com']"),

        // The element that is fluid width
        $fluidEl = $("body");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

      $(this)
        .data('aspectRatio', this.height / this.width)

        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');

    });

    // When the window is resized
    $(window).resize(function() {
      console.log("Window is resized");
      var newWidth = $fluidEl.width();

      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {

        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));

      });

      // Kick off one resize to fix all videos on page load
      }).resize();





});

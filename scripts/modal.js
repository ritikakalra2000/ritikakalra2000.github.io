$(document).ready(function(){

  // MODAL
  var modalText = {
    selectionjs: {
      title: 'Selection.JS',
      tag: 'JS Library',
      detail: 'A lightweight javascipt library which provides users with a set of options in the form of a small popover over the selected portion of text',
      link: 'https://prateekkalra.github.io/Selection-js/'
    },
    newsinone: {
      title: 'News In One',
      tag: 'News App',
      detail: 'Web Application which fetches country based news from multiple sources and allows news search from 30,000 news sources and blogs.',
      link: 'https://prateekkalra.github.io/news-in-one/'
    },
    guessgame: {
      title: 'Guess Game',
      tag: 'Javascript Game',
      detail: 'The classic guess the number game with some extra features built in javascript.Try it!',
      link: 'https://prateekkalra.github.io/guess-game/'
    },
    healthily: {
      title: 'Healthily',
      tag: 'Nutrionist App',
      detail: 'Personal Nutritionist app built in PHP using FatsecretAPI',
      link: 'https://github.com/prateekkalra/healthily-nutrionist-app'
    },
    todoapp: {
      title: 'Todo App',
      detail: "A simple Todo app which stores data in browser's local storage",
      link: 'https://prateekkalra.github.io/todoapp/'
      },
    mdt: {
      title: 'Medical Diagnostic Tool',
      tag: 'Medical App',
      detail: 'A web application that diagnoses a disease using the symptoms entered by the user. The user can enter symptoms from different body parts ,then the disease matching all the symptoms is shown to the user along with other possible symptoms, disease description and the treatment description.',
      link: 'https://github.com/prateekkalra/medical-diagnostic-tool'
    },
     larablog: {
      title: 'LaraBlog',
      tag: 'Blog App',
      detail: 'A blog web application built in Laravel',
      link: 'https://github.com/prateekkalra/blog-laravel'
    },
     moviepy: {
      title: 'Movie-PY-CLI',
      tag: 'CLI App',
      detail: 'A python script for fetching movie details right from the terminal',
      link: 'https://github.com/prateekkalra/movie-py-cli'
    },
    jsdrum: {
      title: 'JS Drumkit',
      tag: 'Fun App',
      detail: 'Drum Kit built in Vanilla JS',
      link: 'https://prateekkalra.github.io/drum-kit/'
    },
    inspireme: {
      title: 'Inspire me',
      tag: 'Quotes App',
      detail: 'A motivational quote generator along with tweet functionality built using basic web technologies.',
      link: 'https://prateekkalra.github.io/inspire-me/'
    },
    weather: {
      title: 'Local Weather App',
      tag: 'Weather App',
      detail: 'A very basic web app which shows current live weather to the user.',
      link: 'https://prateekkalra.github.io/local-weather/'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  /*carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });*/

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".bmp') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})

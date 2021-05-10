$(document).ready(function(){

  // MODAL
  var modalText = {
    selectionjs: {
      title: 'Checking abnormality in spine',
      tag: 'Supervised learning Algorithms',
      detail: '3 classification algorithms applied on data of spinal assessments to figure out the normality or abnormality in the spine.',
      link: 'https://github.com/ritikakalra2000/Checking-abnormality-in-spine/blob/main/Classification%20on%20data.ipynb'
    },
    newsinone: {
      title: 'Clustering on Wholesale data',
      tag: 'Unsupervised learning Algorithms',
      detail: 'K-Means and hierarchical Clustering algorithms applied on data referring to the spending habits of consumers.',
      link: 'https://github.com/ritikakalra2000/Clustering-on-wholesale-data/blob/main/Clustering%20on%20wholesale%20data.ipynb'
    },
    guessgame: {
      title: 'Predicting chance of admission',
      tag: 'Regression and Classificatiion Algorithms',
      detail: 'Predicting whether the student has a chance of graduate admission or not based on the inputs of various exam scores using Regrssion and Classification Algorithms.',
      link: 'https://github.com/ritikakalra2000/Predicting-chance-of-admission/blob/main/Predicting%20admission.ipynb'
    },
    healthily: {
      title: 'Tanzania Water Pumps Project',
      tag: 'Classification Modelsp',
      detail: 'Applying different classification models such as Random forest, XG Boost on Tanzania Water Pumps Dataset to build a predictive model to determine the functionality status of the water pumps in the country.',
      link: 'https://github.com/ritikakalra2000/Tanzania-water-pumps/blob/main/Tanzaria%20project.ipynb'
    },
    todoapp: {
      title: 'Predicting Avocado prices',
      tag: 'Facebook Prophet',
      detail: "Predicting future prices of avocados using Facebook prophet which is an open source tool for time series forecasting",
      link: 'https://github.com/ritikakalra2000/Facebook-Prophet/blob/main/Facebook%20Prophet.ipynb'
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

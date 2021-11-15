if ($('body').find('.scroll') && $('body').find('.scroll').length > 0) {
    $(window).on('beforeunload', function() {
        $('body').hide();
        $(window).scrollTop(0);
    });

    $(window).on('load', function() {
        $('.fifth-block__marquee').marquee({
            duration: 20000,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            startVisible: true
        });
    });

    function rootValues(){
        let vh = window.innerHeight * (1/100);
        let vw = window.innerWidth * (1/100);
        let coof = 1;
        if (window.innerWidth < vh*23*7*0.75){
            coof = window.innerWidth/(vh*23*7*0.75);
        }

        document.documentElement.style.setProperty('--vh', vh+'px');
        document.documentElement.style.setProperty('--vw', vw+'px');
        document.documentElement.style.setProperty('--coof', coof);
    }
    rootValues();

    var tl1 = new TimelineMax();
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-first",
            id: "block-1",
            pin: true,
            start: "top top",
            end: "+=300%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var slide = gsap.utils.toArray('.phone-slider__slide');
    var sliderWrap = $('.phone-slider__wrapper');
    var tlSlider = new TimelineMax();

    var tlScroll = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-second",
            id: "block-2",
            pin: true,
            start: "top top",
            end: "+=600%",
            scrub: 1,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                tlSlider.play(1.5);
                $('.phone-slider__dot').removeClass('phone-slider__dot--active');

                if (self.progress <= 0.4) {
                    tlSlider.to(slide, 0.6, {xPercent: 0, ease: Linear.easeNone}, 0);
                    $('.phone-slider__dot:first-child').addClass('phone-slider__dot--active');
                } else if (self.progress > 0.4 && self.progress <= 0.6) {
                    tlSlider.to(slide, 0.6, {xPercent: -100, ease: Linear.easeNone}, 0);
                    $('.phone-slider__dot:nth-child(2)').addClass('phone-slider__dot--active');
                } else if (self.progress > 0.6) {
                    tlSlider.to(slide, 0.6, {xPercent: -200, ease: Linear.easeNone}, 0);
                    $('.phone-slider__dot:nth-child(3)').addClass('phone-slider__dot--active');
                }
                tlSlider.pause(1);
            }
        },
        ease:Linear.easeNone
    });

    var tlScroll2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-third",
            id: "block-3",
            pin: true,
            start: "top top",
            end: "+=400%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var tlScroll3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fourth-block",
            id: "block-4",
            pin: true,
            start: "top top",
            end: "+=400%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var tlScroll4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-block",
            id: "block-5",
            pin: true,
            start: "top top",
            end: "+=600%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var tlScroll5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sixth-block",
            id: "block-6",
            pin: true,
            start: "top top",
            end: "+=300%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var tlScroll6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh-block",
            id: "block-7",
            pin: true,
            start: "top top",
            end: "+=500%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var tlScroll7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".eighth-block",
            id: "block-8",
            pin: true,
            start: "top top",
            end: "+=300%",
            scrub: 0.7,
            //markers: true,
            pinSpacing: false,
            invalidateOnRefresh: true
        },
        ease:Linear.easeNone
    });

    var dwidth = $(window).width();
    $(window).on('resize',function (){
        var wwidth = $(window).width();
        if(dwidth!==wwidth){
            rootValues();
            tl.clear();
            tl1.clear();
            tlScroll.clear();
            tlScroll2.clear();
            tlScroll3.clear();
            tlScroll4.clear();
            tlScroll5.clear();
            tlScroll6.clear();
            tlScroll7.clear();
            gsap.set(".first-block__center,.first-block__bottom, .first-block__top, .phone-animation__icon, .phone-animation__icon-inner, .phone-animation__bg, .first-block, .phone-block, .phone-animation__bg," +
              ".second-block__bg, .second-block__center, .second-block__bottom, .second-block__top, .phone-slider, .second-block__bg-2," +
              ".third-block__top, .third-block__center, .third-block__bg, .third-block__gadgets .laptop, .third-block__gadgets .phone," +
              ".fourth-block__top, .fourth-block__center, .fourth-block__video, .fourth-block__phone," +
              ".fifth-block__center, .fifth-block__top, .fifth-block__marquee, .fifth-block__hand," +
              ".sixth-block__center, .sixth-block__bg," +
              ".seventh-block__row, .seventh-block__wrapper" +
              ".eighth-block__bg, .eighth-block__center, .eighth-block__btn, .footer--anim", {clearProps:"all"});
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
            $('body').addClass('scroll-hide');
            dwidth = wwidth;
            initScrollAnimtaion();
        }
    });

    $(window).on('load',function (){
        gsap.registerPlugin(ScrollTrigger);

        initScrollAnimtaion();
    });

    fixedHeader();

    function fixedHeader() {
        var headerStatic = $('.header__static');
        var headerFixed = $('.header__fixed');
        var body = $('body');
        if (headerStatic.length) {
            var headerOffset = headerStatic.offset().top;
            var headerHeight = headerStatic.outerHeight();
        }
        var fixed = 'header__fixed--visible';
        var scroll = $(window).scrollTop();
        var isScroll = false;

        $(window).on('scroll', function() {
            if (window.matchMedia('(min-width: 1080px)').matches) {
                scroll = $(window).scrollTop();
                var previousTop = 0;

                if (scroll >= headerOffset + headerHeight) {
                    isScroll = true;

                    headerHeight = isScroll ? headerStatic.outerHeight() : null;
                    headerFixed.addClass(fixed);

                    if (!headerStatic.hasClass('is-fixed')) {
                        headerStatic.css({'transform': ' translateY(' + -headerHeight + 'px)'}).addClass('is-fixed');
                        body.css('padding-top', headerHeight + 'px');
                    }

                    if (scroll < this.previousTop) {
                        headerFixed.addClass(fixed);
                    } else {
                        headerFixed.removeClass(fixed);
                    }
                    this.previousTop = scroll;
                } else {
                    isScroll = false;
                    headerFixed.removeClass(fixed + ' is-fixed').removeAttr('style');
                    headerStatic.css({'transform': ' translateY(0)'}).removeClass('is-fixed');
                    body.css('padding-top', 0);
                }
            }
        });
    }

    function initScrollAnimtaion(){
        /* Block 1 */
        let icons = gsap.utils.toArray(".phone-animation__icon");
        var offsetMob = document.querySelector('.scroll').clientHeight - window.innerHeight;
        var navbarOffset;

        setIconsOffset();

        $(window).on('resize orientationchange',function () {
            setIconsOffset();
        });

        function setIconsOffset() {
            /* For mobile safari */
            if (CSS.supports('-webkit-touch-callout', 'none') && window.matchMedia('(max-width: 767px)').matches) {
                navbarOffset = offsetMob;
            }
            /* For tablet safari */
            else if (window.matchMedia('(min-device-width: 767px) and (max-device-width: 1079px)').matches) {
                navbarOffset = 30 + 'px';
            }
            /* For tablet safari landscape */
            else if (window.matchMedia('(min-device-width: 768px) and (max-device-width: 1079px) and (orientation: landscape)').matches) {
                navbarOffset = 50 + 'px';
            }
            /* For other mobile browsers */
            else if (window.matchMedia('(max-width: 767px)').matches) {
                navbarOffset = offsetMob;
            }
            /* For desktop */
            else {
                navbarOffset = 0 + 'px';
            }
        }

        tl1.fromTo('.first-block__center', 0.9, {autoAlpha: 0, top: 200},{autoAlpha: 1, top:0, ease: Linear.easeNone}, 0.2);
        tl1.to('.first-block__bottom, .first-block__top', 0.5, {autoAlpha: 1, ease: Linear.easeNone}, 1.2);

        tl1.to('.phone-animation__bg', 0.6, {autoAlpha: 1, ease: Power1.easeOut}, 0.1);
        icons.forEach((icon, index) => {

            switch (index) {
                case 0:
                    tl1.to(icon, 0.5, {autoAlpha: 1, bottom: navbarOffset, ease: Power1.easeOut}, 0.2);
                    break;
                case 1:
                case 2:
                    tl1.to(icon, 0.5, {autoAlpha: 1, bottom: navbarOffset, ease: Power1.easeOut}, 0.3);
                    break;
                case 3:
                case 4:
                    tl1.to(icon, 0.5, {autoAlpha: 1, bottom: navbarOffset, ease: Power1.easeOut}, 0.4);
                    break;
                case 5:
                case 6:
                    tl1.to(icon, 0.5, {autoAlpha: 1, bottom: navbarOffset, ease: Power1.easeOut}, 0.5);
                    break;
            }
        });

        gsap.delayedCall(1, function () {
            $('body').removeClass('scroll-hide');
        });

        tl.addLabel('start',0);
        tl.addLabel('middle',1);

        icons.forEach((icon, index) => {
            let inner = $(icon).find('.phone-animation__icon-inner')[0];
            switch (index) {
                case 1:
                    tl.fromTo(inner, 0.7, {right: '92.6%'}, {right: '99.6%'}, 'start');
                    break;
                case 2:
                    tl.fromTo(inner, 0.7, {left: '92.6%'}, {left: '99.6%'}, 'start');
                    break;
                case 3:
                    tl.fromTo(inner, 0.7, {right: '167.6%'}, {right: '179.6%'}, 'start');
                    break;
                case 4:
                    tl.fromTo(inner, 0.7, {left: '167.6%'}, {left: '179.6%'}, 'start');
                    break;
                case 5:
                    tl.fromTo(inner, 0.7, {right: '228.9%'}, {right: '246.9%'}, 'start');
                    break;
                case 6:
                    tl.fromTo(inner, 0.7, {left: '228.9%'}, {left: '246.9%'}, 'start');
                    break;
            }
        });

        if (window.matchMedia('(min-width: 1080px)').matches) {
            tl.fromTo('.phone-animation__icons', 1, {bottom: "0%"},{bottom: "50%"}, 'start');
        } else {
            tl.fromTo('.phone-animation__icons', 1, {bottom: "0%"},{bottom: "46.2%"}, 'start');
        }


        tl.to('.first-block', 0.8, {top: "-30%", scaleX:0.7, scaleY:0.7}, 0.1);
        tl.to('.first-block', 0.3, {alpha: 0}, 0.5);

        tl.to('.phone-block', 1, {top:0}, 0.5);
        tl.to('.phone-block__bg', 0.8, {alpha: 1}, 'middle');

        tl.to('.phone-animation__bg', 0.5, {autoAlpha: 0}, 0.8);

        icons.forEach((icon, index) => {
            let inner = $(icon).find('.phone-animation__icon-inner');
            tl.to(inner, 1, {boxShadow: 'none', backgroundColor: '#1f1f1f'}, 0.7);
            let coof = parseFloat(document.documentElement.style.getPropertyValue('--coof'));
            switch (index) {
                case 0:
                    tl.fromTo(icon, 1, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 0.7);
                    break;
                case 1:
                    tl.fromTo(icon, 0.6, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 0.8);
                    tl.fromTo(inner, 0.6, {width: "83.6%", height: "83.6%",top:"16.4%"}, {width: "100%", height: "100%", right: '85%', top: "0%"}, 0.8);
                    break;
                case 2:
                    tl.fromTo(icon, 0.5, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 1);
                    tl.fromTo(inner, 0.5, {width: "83.6%", height: "83.6%",top:"16.4%"}, {width: "100%", height: "100%", left: '85%', top: "0%"}, 1);
                    break;
                case 3:
                    tl.fromTo(icon, 0.4, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 1);
                    tl.fromTo(inner, 0.4, {width: "67.6%", height: "67.6%", top: "32.4%"}, {width: "100%", height: "100%", right: '170%', top: "0%"}, 1);
                    break;
                case 4:
                    tl.fromTo(icon, 0.4, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 1);
                    tl.fromTo(inner, 0.4, {width: "67.6%", height: "67.6%", top: "32.4%"}, {width: "100%", height: "100%", left: '170%', top: "0%"}, 1);
                    break;
                case 5:
                    tl.fromTo(icon, 0.5, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 1.1);
                    tl.fromTo(inner, 0.5, {width: "51.2%", height: "51.2%", top: "48.8%"}, {width: "100%", height: "100%", right: '255%', top: "0%"}, 1.1);
                    break;
                case 6:
                    tl.fromTo(icon, 0.4, {width: (window.innerHeight * (23/100)*coof), height: (window.innerHeight * (23/100)*coof)},{width: (window.innerHeight * (5/100)), height: (window.innerHeight * (5/100)), bottom: window.innerHeight * (-27.3/100),ease:Linear.easeNone}, 0.9);
                    tl.fromTo(inner, 0.4, {width: "51.2%", height: "51.2%", top: "48.8%"}, {width: "100%", height: "100%", left: '255%', top: "0%"}, 0.9);
                    break;
            }
        });

        tl.to('.phone-block', 1, {top: "-120%", ease: "none"}, 2, 'middle');
        tl.to('.phone-animation__icons', 0.83, {bottom: "150%", ease: "none"}, 2, 'middle');

        /* Block 2 */
        tlScroll.to('.second-block__bg', 1.2, {autoAlpha: 1, ease: Linear.easeNone}, 0.5);
        tlScroll.fromTo('.second-block__center', 0.9, {autoAlpha: 0, top: 200},{autoAlpha: 1, top:0, ease: Linear.easeNone}, 0.7);
        tlScroll.to('.second-block__bottom, .second-block__top', 0.5, {autoAlpha: 1, ease: Linear.easeNone}, 1.7);
        tlScroll.to('.second-block__center, .second-block__bottom, .second-block__top', 1, {autoAlpha: 0}, 4);
        tlScroll.to('.second-block__bg', 1, {autoAlpha: 0.2, ease: Linear.easeNone}, 4);
        tlScroll.to('.phone-slider', 2, {autoAlpha: 1, top: '50%', ease: Linear.easeNone}, 4);
        tlScroll.to('.second-block__bg-2', 2, {autoAlpha: 1, ease: Linear.easeNone}, 4);

        tlScroll.to('.phone-slider', 4, {top: '-100%', ease: Linear.easeNone}, 16);
        tlScroll.to('.second-block', 4, {top: '-100%'}, 16);
        tlScroll.to('.second-block', 3, {autoAlpha: 0}, 16);
        //tlScroll.to('.second-block__bg', 1.2, {autoAlpha: 0, top: -100}, 0.5, 'middle');

        /* Block 3 */
        //tlScroll2.to('.third-block__top, .third-block__center', 10, {top: '-100%'}, 0.7);
        tlScroll2.fromTo('.third-block__top, .third-block__center', 10, {top: '100%'},{top: '-72%', ease: Linear.easeNone}, 0);
        tlScroll2.to('.third-block__bg', 1.5, {autoAlpha: 1, ease: Linear.easeNone}, 0.9);
        if (window.matchMedia('(min-width: 1080px)').matches) {
            tlScroll2.to('.third-block__gadgets .laptop', 5, {left: 110}, 7.5);
            tlScroll2.to('.third-block__gadgets .laptop', 3, {autoAlpha: 1}, 7.5);
            tlScroll2.to('.third-block__gadgets .phone', 5, {right: 200}, 7.5);
            tlScroll2.to('.third-block__gadgets .phone', 3, {autoAlpha: 1}, 7.5);
        } else if (window.matchMedia('(min-width: 768px) and (max-width: 1079px)').matches) {
            tlScroll2.fromTo('.third-block__gadgets .laptop', 6, {left: '36%'}, {left: '48%'}, 7.5);
            tlScroll2.to('.third-block__gadgets .laptop', 4, {autoAlpha: 1}, 7.5);
            tlScroll2.fromTo('.third-block__gadgets .phone', 6, {right: 0}, {right: 110}, 7.5);
            tlScroll2.to('.third-block__gadgets .phone', 4, {autoAlpha: 1}, 7.5);
        } else {
            tlScroll2.fromTo('.third-block__gadgets .laptop', 6, {left: '36%'}, {left: '48%'}, 7.5);
            tlScroll2.to('.third-block__gadgets .laptop', 4, {autoAlpha: 1}, 7.5);
            tlScroll2.fromTo('.third-block__gadgets .phone', 6, {right: 0}, {right: 82}, 7.5);
            tlScroll2.to('.third-block__gadgets .phone', 4, {autoAlpha: 1}, 7.5);
        }

        tlScroll2.to('.third-block', 8, {top: '-100%'}, 14);
        tlScroll2.to('.third-block', 7, {autoAlpha: 0}, 14);

        /* Block 4 */
        tlScroll3.to('.fourth-block__top, .fourth-block__center', 0.5, {autoAlpha: 1}, 0.1);
        tlScroll3.to('.fourth-block__top, .fourth-block__center', 3, {top: '-150%'}, 0.3);
        tlScroll3.to('.fourth-block__video', 0.5, {autoAlpha: 1}, 0.5);
        tlScroll3.fromTo('.fourth-block__phone', 1.5, {top: '150%'},{top: '50%', ease: Linear.easeNone}, 0.3);

        tlScroll3.to('.fourth-block', 2, {top: '-100%'}, 4);
        tlScroll3.to('.fourth-block', 1, {autoAlpha: 0}, 4);

        /* Block 5 */
        tlScroll4.fromTo('.fifth-block__center', 0.9, {autoAlpha: 0, top: 200},{autoAlpha: 1, top:0, ease: Linear.easeNone}, 0.7);
        tlScroll4.to('.fifth-block__top', 0.5, {autoAlpha: 1, ease: Linear.easeNone}, 1.7);
        tlScroll4.to('.fifth-block__marquee', 1, {autoAlpha: 1, ease: Linear.easeNone}, 0.7);
        tlScroll4.to('.fifth-block__hand', 1.8, {autoAlpha: 1, bottom: 0, ease: Linear.easeNone}, 2.5);

        tlScroll4.to('.fifth-block', 7, { top: '-100%', ease: Linear.easeNone}, 5);
        tlScroll4.to('.fifth-block', 3, {autoAlpha: 0, ease: Linear.easeNone}, 5);

        /* Block 6 */
        tlScroll5.fromTo('.sixth-block__center', 8, {autoAlpha: 0, top: 200},{autoAlpha: 1, top:0, ease: Linear.easeNone}, 6);
        tlScroll5.to('.sixth-block__bg', 2, {autoAlpha: 1, ease: Linear.easeNone}, 10);

        tlScroll5.to('.sixth-block', 8, { top: '-100%', ease: Linear.easeNone}, 23);
        tlScroll5.to('.sixth-block', 8, {autoAlpha: 0, ease: Linear.easeNone}, 23);

        /* Block 7 */
        let text = gsap.utils.toArray('.seventh-block__row');
        //tlScroll6.to('.seventh-block__wrapper', 1, {autoAlpha: 1, ease: Linear.easeNone}, 0.2);
        tlScroll6.fromTo('.seventh-block__wrapper', 15, {top: '60%'}, {top: '-130%', ease: Linear.easeNone}, 1);
        //tlScroll6.to('.seventh-block__wrapper', 15, {top: '-120%'}, 4);

        text.forEach((elem, index) => {
            switch (index) {
                case 0:
                    tlScroll6.fromTo(elem, 2, {autoAlpha: 0, left: -200}, {autoAlpha: 1, left: 0, ease: Power1.easeOut}, 3);
                    break;
                case 1:
                    tlScroll6.fromTo(elem, 2, {autoAlpha: 0, right: -200}, {autoAlpha: 1, right: 0, ease: Power1.easeOut}, 5);
                    break;
                case 2:
                    tlScroll6.fromTo(elem, 2, {autoAlpha: 0, left: -200}, {autoAlpha: 1, left: 0, ease: Power1.easeOut}, 7);
                    break;
            }
        });

        //tlScroll6.to('.seventh-block__wrapper', 3, {autoAlpha: 0}, 12);

        /* Block 8 */
        tlScroll7.to('.eighth-block__bg', 0.5, {autoAlpha: 1, ease: Linear.easeNone}, 0.2);
        tlScroll7.fromTo('.eighth-block__center', 0.5, {autoAlpha: 0},{autoAlpha: 1, ease: Linear.easeNone}, 0.2);
        tlScroll7.to('.eighth-block__btn', 0.5, {autoAlpha: 1, ease: Linear.easeNone}, 0.2);
        tlScroll7.fromTo('.footer--anim', 0.5, {autoAlpha: 0},{autoAlpha: 1, ease: Linear.easeNone}, 0.2);
    }
}
window.addEventListener('load', () => {
  const accordions = document.querySelectorAll('.accordion');

  if (accordions.length) {
    const activeClass = 'accordion__item--active';

    accordions.forEach(accordion => {
      accordion.onclick = e => {
        const current = e.target.closest('.accordion__item-control');

        if (current) {
          //const control = current.querySelector('.accordion__item-control');
          const content = current.nextElementSibling;

          if (current.parentElement.classList.contains(activeClass)) {
            current.parentElement.classList.remove(activeClass);
            $(content).slideUp(300);
          } else {
            current.parentElement.classList.add(activeClass);
            $(content).slideDown(300);
          }
        }
      }
    })
  }
})
window.addEventListener('load', () => {
  const {log, clear} = console;
  const maxFilesCount = 4;
  const maxFileSize = 1048576 * 8; //8mb
  const fileSizeErrorText = 'Invalid file size. The file size must be 8 mb or less';
  const fileDublicateErrorText = 'This file has already been selected. Select another file.';
  
  const FileModClass = {
    NOT_EMPTY: 'custom-file--not-empty',
    COMPLETE: 'custom-file--complete'
  };

  const customFiles = document.querySelectorAll('.custom-file');

  if (customFiles.length) {
    customFiles.forEach(file => {
      let selectedFiles = [];

      const fileOutput = file.querySelector('.custom-file__output');
      const fileOutputList = fileOutput.querySelector('.custom-file__output-list');

      file.onchange = function(e) {
        const input = e.target.closest('.custom-file__btn input');
        
        if (input) {
          const label = file.querySelector('.custom-file__btn');

          if (input.files[0].size <= maxFileSize) {
            if (selectedFiles.includes(input.files[0].name)) {
              
              file.append(setErrorMessage(fileDublicateErrorText));
              label.querySelector('input').remove();
              label.append(setInput());

            } else {
              repositionField(input, fileOutputList.children.length + 1, fileOutputList);
              label.append(setInput());

              changeFileState(file, fileOutputList);
              selectedFiles.push(input.files[0].name)
            }
          } else {
            file.append(setErrorMessage(fileSizeErrorText));
            label.querySelector('input').remove();
            label.append(setInput());
          }

        }
      }

      file.onclick = function(e) {
        const removeBtn = e.target.closest('.custom-file__output-item-remove');

        if (removeBtn) {
          const parentElement = removeBtn.parentElement;
          const fileName = parentElement.querySelector('input').files[0].name;

          parentElement.remove();

          if (fileOutputList.children.length) {
            renameFields(fileOutputList);
            
            const index = selectedFiles.indexOf(fileName);
            log(selectedFiles[index])
            selectedFiles[index] = null;
          } else {
            selectedFiles = [];
          }
          changeFileState(file, fileOutputList);
        }
      }
    });
  }

  function changeFileState(file, fileOutputList) {
    const isComplete = fileOutputList.children.length === maxFilesCount;
    const btn = file.querySelector('.custom-file__btn');

    if (fileOutputList.children.length) {
      file.classList.add(FileModClass.NOT_EMPTY)
    } else {
      file.classList.remove(FileModClass.NOT_EMPTY)
    }

    if (isComplete) {
      file.classList.add(FileModClass.COMPLETE);
      btn.classList.add('btn--disabled');
    } else {
      file.classList.remove(FileModClass.COMPLETE);
      btn.classList.remove('btn--disabled');
    }
    
    file.querySelector('.custom-file__btn input').disabled = isComplete;

  }

  function repositionField(input, num, fileOutputList) {
    const item = setItem(input.files[0].name);
    input.className = 'visually-hidden';
    input.name += num;
    item.append(input);
    
    fileOutputList.append(item);
  }

  function setItem(name) {
    const item = document.createElement('div');
    item.classList.add('custom-file__output-item');
    
    const itemName = document.createElement('div');
    itemName.classList.add('custom-file__output-item-name');
    itemName.textContent = name;
    
    const itemRemove = document.createElement('button');
    itemRemove.classList.add('custom-file__output-item-remove');
    itemRemove.setAttribute('type', 'button');
    itemRemove.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.984 6.422 13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578 1.406 1.406Z"/></svg>';
    
    item.append(itemName, itemRemove)

    return item;
  }

  function setInput() {
    const input = document.createElement('input');
    input.classList.add('visually-hidden');
    input.setAttribute('type', 'file');
    input.setAttribute('name', 'file');
    return input;
  }

  function renameFields(fileOutputList) {
    for (let i = 0; i < fileOutputList.children.length; i++) {
      fileOutputList.children[i].querySelector('input').name = 'file' + (i + 1);
    }
  }

  function setErrorMessage(text) {
    const message = document.createElement('div');
    message.className = 'custom-file__message custom-file__message--error';
    message.textContent = text;
    
    setTimeout(() => {
      message.remove();
    }, 3000)
    return message;
  }
});
window.addEventListener('load', () => {
  const fieldCloseBtns = document.querySelectorAll('.field__clear');

  const selects = document.querySelectorAll('select');

  if (fieldCloseBtns.length) {
    fieldCloseBtns.forEach(it => {
      it.onclick = () => {
        it.parentElement.querySelector('input').value = '';
      }
    })
  }

  if (selects.length) {
    selects.forEach(it => {
      const choices = new Choices(it, {
        silent: false,
        items: [],
        choices: [],
        renderChoiceLimit: -1,
        maxItemCount: -1,
        addItems: true,
        addItemFilter: null,
        removeItems: true,
        removeItemButton: false,
        editItems: false,
        duplicateItemsAllowed: true,
        delimiter: ',',
        paste: true,
        searchEnabled: false,
        searchChoices: true,
        searchFloor: 1,
        searchResultLimit: 4,
        searchFields: ['label', 'value'],
        position: 'auto',
        resetScrollPosition: true,
        shouldSort: true,
        shouldSortItems: false,
        //sorter: () => {...},
        placeholder: true,
        placeholderValue: null,
        searchPlaceholderValue: null,
        prependValue: null,
        appendValue: null,
        renderSelectedChoices: 'auto',
        loadingText: 'Loading...',
        noResultsText: 'No results found',
        noChoicesText: 'No choices to choose from',
        itemSelectText: 'Press to select',
        addItemText: (value) => {
          return `Press Enter to add <b>"${value}"</b>`;
        },
        maxItemText: (maxItemCount) => {
          return `Only ${maxItemCount} values can be added`;
        },
        valueComparer: (value1, value2) => {
          return value1 === value2;
        },
        classNames: {
          containerOuter: 'choices',
          containerInner: 'choices__inner',
          input: 'choices__input',
          inputCloned: 'choices__input--cloned',
          list: 'choices__list',
          listItems: 'choices__list--multiple',
          listSingle: 'choices__list--single',
          listDropdown: 'choices__list--dropdown',
          item: 'choices__item',
          itemSelectable: 'choices__item--selectable',
          itemDisabled: 'choices__item--disabled',
          itemChoice: 'choices__item--choice',
          placeholder: 'choices__placeholder',
          group: 'choices__group',
          groupHeading: 'choices__heading',
          button: 'choices__button',
          activeState: 'is-active',
          focusState: 'is-focused',
          openState: 'is-open',
          disabledState: 'is-disabled',
          highlightedState: 'is-highlighted',
          selectedState: 'is-selected',
          flippedState: 'is-flipped',
          loadingState: 'is-loading',
          noResults: 'has-no-results',
          noChoices: 'has-no-choices'
        },
        // Choices uses the great Fuse library for searching. You
        // can find more options here: https://github.com/krisk/Fuse#options
        fuseOptions: {
          include: 'score'
        },
        callbackOnInit: null,
        callbackOnCreateTemplates: null
      });
    })
  }
})
window.addEventListener('load', () => {
  const html = document.documentElement;
  const burger = document.querySelector('.header__burger');
  const canvas = document.querySelector('.header__canvas');
  const breakpoint = 1079;

  const ModifierClass = {
    OPEN: 'is-open',
    ANIMATE: 'is-animate'
  };

  if (burger && canvas) {

    burger.addEventListener('click', () => {
      burger.classList.toggle(ModifierClass.OPEN);

      const isOpen = burger.classList.contains(ModifierClass.OPEN);

      document.body.style.overflow = isOpen ? 'hidden' : '';
      document.body.style.marginRight = isOpen ? getScrollbarWidth() + 'px' : '';

      canvas.classList.add(ModifierClass.ANIMATE);
      canvas.classList[isOpen ? 'add' : 'remove'](ModifierClass.OPEN);

      canvas.ontransitionend = () => {
        canvas.ontransitionend = null;
        canvas.classList.remove(ModifierClass.ANIMATE);
        
      }
    });

    window.addEventListener('resize', () => {
      if (html.clientWidth > 1079) {
        document.body.style.overflow = '';
        document.body.style.marginRight = '';
        burger.classList.remove(ModifierClass.OPEN);
        canvas.classList.remove(ModifierClass.OPEN);
      }
    });
  }
  
  
  
  function getScrollbarWidth() {
    const block = document.createElement('div');
    block.style.width = '50px';
    block.style.height = '50px';
    block.style.overflow = 'auto';

    const innerBlock = document.createElement('div');
    innerBlock.style.height = '200px';

    block.appendChild(innerBlock);
    document.body.appendChild(block);

    const width = block.offsetWidth - block.clientWidth;

    block.remove();
    return width;
  }
})
//# sourceMappingURL=maps/main.js.map

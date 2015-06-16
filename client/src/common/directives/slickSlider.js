cloudStbApp.directive('slickSlider',function($timeout){
    return {
        restrict: 'A',
        link: function(scope,element,attrs) {
            $(element).on('init', function(event, slick, index){
                console.log("event.type ==> "+event.type);
                 if(event.type == 'init') {
                    var firstSlide = slick.$slides.first();
                    if (slick.currentSlide == 0 && !firstSlide.hasClass('animateFirst')) {
                        $('div.slick-list').css({
                            '-webkit-transform': 'translate3d(10px, 0px, 0px)',
                            '-webkit-transition' : 'transform 633ms ease-in-out 0s',
                            'background' : 'none'
                        });
                        slick.$slides.first().addClass('animateFirst');
                        //slick.asNavFor(slick.currentSlide);
                    }
                }

                $(element).on('keydown', function(e, key){
                    console.log('keydown'+e.keyCode);
                    switch (e.keyCode) {
                        case 13:
                        case 83:
                            console.log("confirm");
                            //this.redirect('confirm');
                            break;
                        case 38:
                       // case 9:
                            console.log("up");
                            $('#section1 div.animateFirst').css({
                                'border' : '1px solid #fff'
                            });
                            $('#section1 div.animateFirst').focus();
                            // this.redirect('up');
                            break;
                        case 40:
                            console.log("down");
                            // this.redirect('down');
                            break;
                        case 37:
                            console.log("left");
                            //this.redirect('left');
                            break;
                        case 39:
                            console.log("right");
                            //this.redirect('right');
                            break;
                    }
                });

                $('div.slick-list').focusout(function(){
                    //$('div.slick-list').css("border", "none");
                });

            });
            $timeout(function() {
                $(element).slick(scope.$eval(attrs.slickSlider));

                /*  $('#section1 div.slick-list').focus(function(e){
                   // $('#section1 div.animateFirst').css({
                    //    'border': '1px solid #000'
                    //});
                   // $('#section1 div.animateFirst').css('outline',0).attr('tabindex',-1);
                    $('#section1 div.animateFirst').focus();
                    $('#section1 .slick-track').find('.animateFirst').attr({
                        'aria-hidden': 'false',
                        'tabindex': '0'
                    });
                    //event.stopImmediatePropagation();
                    //$(document.activeElement).focus();
                    //$('#section1 .slick-track').find('.animateFirst').focus();
                    //e.stopPropagation();
                });*/
                $(element).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                   // console.log('beforeChange'+currentSlide);
                    $(slick.$slides[currentSlide]).removeClass('animateFirst');
                    $(slick.$slides[nextSlide]).addClass('animateFirst');
                });
            }, 0);


        }
    }
});
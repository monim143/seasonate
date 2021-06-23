/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // for select#select-country
    $(function () {
        if ($('#select-lang').length) {
            function custom_template(obj) {
                var data = $(obj.element).data();
                var text = $(obj.element).text();
                if (data && data['img_src']) {
                    img_src = data['img_src'];
                    template = $("<span class='img-option'><img src=\"" + img_src + "\" style=\"width:20px;height:12px;\" /> " + text + "</span>");
                    return template;
                }
            }
            $('#select-lang').select2({
                minimumResultsForSearch: -1,
                'templateSelection': custom_template,
                'templateResult': custom_template,
            });
        }
    });


    // parallax with jarallax
    $(function () {
        if ($('.pricing-switch').length) {
            let lightPlan = $('.light-plan').find('.widget-price').text();
            let proPlan = $('.pro-plan').find('.widget-price').text();
            let businessPlan = $('.business-plan').find('.widget-price').text();
            $('#pricing-switch-input').on('change', function (e) {
                if ($(this).is(':checked')) {
                    $('.light-plan').find('.widget-price').text('$449.99');
                    $('.pro-plan').find('.widget-price').text('$549.99');
                    $('.business-plan').find('.widget-price').text('$699.99');

                    $('.billed-monthly').removeClass('active');
                    $('.billed-annually').addClass('active');
                } else {
                    $('.light-plan').find('.widget-price').text(lightPlan);
                    $('.pro-plan').find('.widget-price').text(proPlan);
                    $('.business-plan').find('.widget-price').text(businessPlan);

                    $('.billed-monthly').addClass('active');
                    $('.billed-annually').removeClass('active');
                }
            });
        }
    });


    // testimonial-carousel
    $(function () {
        if ($('.testimonial-carousel').length) {
            $(".testimonial-carousel").owlCarousel({
                loop: true,
                items: 1,
                center: true,
                margin: 30,
                nav: $(window).width() > 992 ? true : false,
                dots: true,
                autoplay: false,
                navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
                autoplayHoverPause: true,
            });
        }
    });


    // parallax with jarallax
    $(function () {
        if ($('.jarallax').length) {
            jarallax(document.querySelectorAll('.jarallax'));
        }
    });


    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });


});

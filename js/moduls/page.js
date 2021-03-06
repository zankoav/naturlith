/**
 * Created by alexandrzanko on 2/9/18.
 */
export function page() {
    jQuery(document).ready(function ($) {
        $('.sow-form-field-textarea textarea').attr('rows', 8);
        let advantageTop = $("#advantage-items").offset().top;
        let advantageHeight = $("#advantage-items").height();
        let show = true;
        let windowHeight = $(window).height();

        showElements($(window).scrollTop());

        $(window).scroll(function () { // bind window scroll event
            showElements($(window).scrollTop());
        });

        function showElements(num) {
            if ($('#advantage-items').length > 0) { // if target element exists in DOM
                if ((windowHeight + num > advantageTop + advantageHeight / 2) && show) { // if target element is visible on screen after DOM loaded
                    show = false;
                    $('#advantage-items').addClass('animation');
                    let count = $('#advantage-items .item').length;
                    $('#advantages .banner').addClass('animation');
                    for (let i = 0; i < count; i++) {
                        $('#advantage-items .item').eq(i).addClass(`item-${i + 1}`);
                    }
                }
            }
        }
    });


}
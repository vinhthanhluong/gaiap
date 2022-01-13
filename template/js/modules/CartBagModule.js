export default function CartBagModule() {

    if ($('.header-cart')) {

        const $cart = $('.header-cart');
        $(document).mouseup(function (e) { 
            if (!$cart.is(e.target) &&  $cart.has(e.target).length === 0) {
                $cart.removeClass('active');
            }
        });

        $('.cart-btn').on('click', function () {
           $cart.toggleClass('active');
        });   
    }
}
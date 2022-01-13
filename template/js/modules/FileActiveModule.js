export default function FileActiveModule() {

    if ($('.header-subjects')) {

        const $subject = $('.header-subjects');

        $(document).mouseup(function (e) { 
            if (!$subject.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                && $subject.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
                { 
                $subject.removeClass('active');
            }
        });

        $('.subject-title').on('click', function () {
            $subject.toggleClass('active');
        });
    }

    if ($('.header-user')) {

        const $user = $('.header-user');

        $(document).mouseup(function (e) { 
            if (!$user.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                && $user.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
                { 
                $user.removeClass('active');
            }
        });

        $('.user-btn').on('click', function () {
            $user.toggleClass('active');
        });
    }

    if ($('.product-home')) {
        $('.product-tt-mobi').on('click', function () {
            $('.product-title').toggleClass('active');
            $('.product-list').slideToggle('fast');
        });
    }

    document.querySelectorAll('.policy-drop').forEach(el => {
        const drop = el;
        const arrow = document.createElement('i');
        arrow.classList.add('fa', 'fa-angle-down');
        drop.querySelector('a').appendChild(arrow);
        $('.policy-link').on('click', function () {
            // $(this).toggleClass('active');
            $(this).next('.policy-sub').slideToggle('fast');
        });
    });

    if ($('.product-list')) {
        $('.product-tt').on('click', function () {
            $(this).next('.product-item-content').slideToggle();
            $(this).children().toggleClass('active');
            $(this).closest('.product-item').siblings().find('.product-item-content').slideUp();
            $(this).closest('.product-item').siblings().find('i').removeClass('active');
        });
    }

}
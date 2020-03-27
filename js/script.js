$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    // console.log(tabsItem);

    tabsItem.on('click', function(event) {
        event.preventDefault();
        // console.log('Клик по табу');
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active')
    });

});

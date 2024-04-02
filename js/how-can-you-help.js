$(document).ready(function () {

    // ---------------------------------------------HEADER MENU BUTTONS-----------------------------------------

    $('#how-can-you-help-volunteer').click(function () {
        $('html, body').animate({
            scrollTop: $('#volunteer-content').offset().top
        }, 800);
    });

    $('#how-can-you-help-pick-up-a-pet').click(function () {
        $('html, body').animate({
            scrollTop: $('#pick-up-a-pet').offset().top
        }, 800);
    });

    $('#how-can-you-help-donation').click(function () {
        $('html, body').animate({
            scrollTop: $('#donation').offset().top
        }, 800);
    });

    $('#how-can-you-help-pr').click(function () {
        $('html, body').animate({
            scrollTop: $('#pr').offset().top
        }, 800);
    });


    // ---------------------------------------------БУРГЕРНОЕ МЕНЮ-----------------------------------------



// При клике на бургерное меню
    $('#nav-icon6').click(function(event) {
        event.stopPropagation(); // Остановить всплытие события, чтобы не сработало событие клика на документе
        $(this).toggleClass('open');
        $('#sidebar').toggleClass('open');
        $('.overlay').toggle(); // Показать или скрыть слой затемнения
    });

// При клике в любую область экрана, кроме бургерного меню
    $(document).click(function(event) {
        if (!$(event.target).closest('#sidebar').length && !$(event.target).is('#sidebar') && !$(event.target).is('#nav-icon6')) {
            $('#nav-icon6').removeClass('open'); // Закрываем бургерное меню
            $('#sidebar').removeClass('open'); // Скрываем бургерное меню
            $('.overlay').hide(); // Скрываем слой затемнения
        }
    });


// При клике на пункт меню "Срочная помощь"
    $('#sidebar-header-emergency-button').click(function() {
        $('#nav-icon6').removeClass('open'); // Закрываем бургерное меню
        $('#sidebar').removeClass('open'); // Скрываем бургерное меню
        $('.overlay').hide(); // Скрываем слой затемнения
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#emergency-title', '_self');
        // $('body').removeClass('no-scroll'); // Удаляем класс, предотвращающий скроллинг страницы
    });





// При нажатии на пункт меню закрывать бургерное меню
    $('.sidebar-menu-item a').click(function() {
        $('#nav-icon6').removeClass('open');
        $('#sidebar').removeClass('open');
    });

// При нажатии на подпункт меню закрывать бургерное меню
    $('.sidebar-submenu a').click(function() {
        $('#nav-icon6').removeClass('open');
        $('#sidebar').removeClass('open');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#sidebar').length && !$(e.target).closest('#nav-icon6').length) {
            // Закрываем бургерное меню
            $('#nav-icon6').removeClass('open');
            $('#sidebar').removeClass('open');
        }
    });


    // ---------------------------------------------СКРИПТ ПОИСКА ПИТОМЦЕВ ПО ИМЕНИ ДЛЯ ГЛАВНОГО МЕНЮ-----------------------------------------

    $('#search-form').on('submit', function(e) {
        e.preventDefault(); // Предотвращаем отправку формы

        var searchText = $('#search-input').val().toLowerCase().replace(/[^a-zа-я]/g, ''); // Получаем введенный текст из поля поиска, приводим к нижнему регистру и удаляем все символы, кроме букв

        // Перенаправляем пользователя на страницу каталога с параметром поиска
        window.location.href = '../pages/cats-dogs-catalog.html?search=' + searchText;

        // Очищаем поле ввода после отправки формы
        $('#search-input').val('');
    });

// -------------------------------------------------------------------------------------------------------------------



    // ---------------------------------------------СКРИПТ ПОИСКА ПИТОМЦЕВ ПО ИМЕНИ ДЛЯ САЙДБАРА--------------------------------------


    $('#sidebar-search-form').on('submit', function(e) {
        e.preventDefault(); // Предотвращаем отправку формы

        var searchText = $('#sidebar-search-input').val().toLowerCase().replace(/[^a-zа-я]/g, ''); // Получаем введенный текст из поля поиска, приводим к нижнему регистру и удаляем все символы, кроме букв

        // Перенаправляем пользователя на страницу каталога с параметром поиска
        window.location.href = '../pages/cats-dogs-catalog.html?search=' + searchText;

        // Очищаем поле ввода после отправки формы
        $('#sidebar-search-input').val('');
    });

// -------------------------------------------------------------------------------------------------------------------



    // ---------------------------------------------POPUP-----------------------------------------

    $(document).on('click', '.how-can-you-help-button', function () {
        $('#how-can-you-help-popup').show();
        $('#donate-popup').hide();
    });

    $(document).on('click', '.humanitarian-assistance-button-food', function () {
        $('#humanitarian-assistance-food-popup').show();
        $('#how-can-you-help-popup').hide();
    });

    $(document).on('click', '.humanitarian-assistance-button-cereal', function () {
        $('#humanitarian-assistance-cereal-popup').show();
        $('#how-can-you-help-popup').hide();
    });

    $(document).on('click', '.humanitarian-assistance-button-other', function () {
        $('#humanitarian-assistance-other-popup').show();
        $('#how-can-you-help-popup').hide();
    });

    $(document).on('click', '.humanitarian-assistance-button-medicines', function () {
        $('#humanitarian-assistance-medicines-popup').show();
        $('#how-can-you-help-popup').hide();
    });

    $(document).on('click', '.how-can-you-help-donate-button', function () {
        $('#donate-popup').show();
        $('#how-can-you-help-popup').hide();
    });

    $(document).on('click', '.find-a-friend-button', function () {
        $('#pick-up-a-pet-popup').show();
        $('#how-can-you-help-popup').hide();
        $('#donate-popup').hide();
    });

    $(document).on('click', '.pick-up-a-pet-popup-button', function () {
        $('#pick-up-a-pet-popup').hide();

    });

    $(document).on('click', '#close-popup, #close-donate-popup, #pick-up-a-pet-close-popup, #close-humanitarian-assistance-food-popup, #close-humanitarian-assistance-medicines-popup, #close-humanitarian-assistance-cereal-popup, #close-humanitarian-assistance-other-popup', function () {
        $('#how-can-you-help-popup, #donate-popup, #pick-up-a-pet-popup, #humanitarian-assistance-food-popup, #humanitarian-assistance-medicines-popup, #humanitarian-assistance-cereal-popup, #humanitarian-assistance-other-popup').hide();
    });





    // $('#menu-help').click(function () {
    //     window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#help-title', '_self');
    // });

    $('#sidebar-menu-help').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#help-title', '_self');
    });

    // $('#menu-our-pets').click(function () {
    //     window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#our-pets-items', '_self');
    // });

    $('#sidebar-menu-our-pets').click(function () {
        window.open('http://localhost:63342/animal%20shelter/pages/cats-dogs-catalog.html', '_self');
    });

    $('#header-help-button').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#help-title', '_self');
    });

    $('#header-our-pets-button').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#our-pets-items', '_self');
    });

    // $('#header-emergency-button').click(function () {
    //     window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#emergency-title', '_self');
    // });

    $('#header-emergency-button').click(function () {
        window.open('https://underscore1349.github.io/animal-shelter/index.html#emergency-title', '_self');
    });

    $('.pick-up-a-pet-popup-button').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#our-pets-items', '_self');
    });





    $('#footer-help-button').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#help-title', '_self');
    });


    $('#footer-our-pets-button').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#our-pets-items', '_self');
    });

    $('#footer-emergency-button').click(function () {
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#emergency-title', '_self');
    });



    // -------------------------------Кнопка наверх------------------------------------

    $('body').append('<div class="upbtn"></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.upbtn').css({
                bottom: '155px'
            });
        } else {
            $('.upbtn').css({
                bottom: '-80px'
            });
        }
    });
    $('.upbtn').on('click',function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    // -------------------------------------------------------------------------------------------------------------------

});


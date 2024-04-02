
$(document).ready(function() {

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

    // ---------------------------------------------СКРИПТ ПОИСКА ПИТОМЦЕВ ПО ИМЕНИ ДЛЯ ГЛАВНОГО МЕНЮ---------------------------

// Функция для фильтрации карточек питомцев по параметру поиска
    function filterPets(searchParam, elements) {
        elements.each(function() {
            var petName = $(this).find('.cats-description, .dogs-description').text().toLowerCase();

            if (searchParam && petName.includes(searchParam)) {
                $(this).show();
            } else if (!searchParam) {
                $(this).show(); // Показать все карточки при отсутствии параметра поиска
            } else {
                $(this).hide();
            }
        });
    }

// Функция для обновления карточек питомцев при изменении истории браузера
    function updatePetsOnHistoryChange() {
        var searchParam = new URLSearchParams(window.location.search).get('search');
        filterPets(searchParam, $('.cats-item, .dogs-item'));
    }

// Проверяем наличие параметра поиска в URL при загрузке страницы
    var searchParam = new URLSearchParams(window.location.search).get('search');
    if (searchParam) {
        filterPets(decodeURIComponent(searchParam), $('.cats-item, .dogs-item')); // Декодируем параметр поиска перед фильтрацией
    } else {
        filterPets(null, $('.cats-item, .dogs-item')); // Показать все карточки при отсутствии параметра поиска
    }

// Обработчик события для кнопки поиска
    $('.search-button').click(function(event) {
        event.preventDefault(); // Остановить действие по умолчанию (переход по ссылке)

        var searchParam = $('#search-input').val().toLowerCase(); // Получаем значение поискового запроса из поля ввода

        // Фильтруем карточки питомцев по параметру поиска
        filterPets(searchParam, $('.cats-item, .dogs-item'));

        // Формируем URL с параметром поиска и обновляем его без перезагрузки страницы
        var url = '../pages/cats-dogs-catalog.html?search=' + encodeURIComponent(searchParam);
        window.history.pushState({ path: url }, '', url);

        // Очищаем поле ввода после отправки формы
        $('#search-input').val('');
    });

// Проверяем наличие параметра поиска при загрузке страницы и сбрасываем фильтрацию, если параметр отсутствует
    var searchParamInitial = new URLSearchParams(window.location.search).get('search');
    if (!searchParamInitial) {
        filterPets(null, $('.cats-item, .dogs-item')); // Показать все карточки при отсутствии параметра поиска
    }

// Вызываем функцию для обновления карточек питомцев при изменении истории браузера
    window.addEventListener('popstate', updatePetsOnHistoryChange);


// -------------------------------------------------------------------------------------------------------------------




    // ---------------------------------------------СКРИПТ ПОИСКА ПИТОМЦЕВ ПО ИМЕНИ ДЛЯ САЙДБАРА--------------------------------------


// Функция для фильтрации карточек питомцев по параметру поиска для сайдбара
    function filterPetsSidebar(searchParam) {
        $('.cats-item, .dogs-item').each(function() {
            var petName = $(this).find('.cats-description, .dogs-description').text().toLowerCase();

            if (searchParam && petName.includes(searchParam)) {
                $(this).show();
            } else if (!searchParam) {
                $(this).show(); // Показать все карточки при отсутствии параметра поиска
            } else {
                $(this).hide();
            }
        });
    }

// Обработчик события для кнопки поиска в сайдбаре
    $('#sidebar-search-form').submit(function(event) {
        event.preventDefault(); // Остановить действие по умолчанию (отправку формы)

        var searchParamSidebar = $('#sidebar-search-input').val().toLowerCase(); // Получаем значение поискового запроса из поля ввода

        // Фильтруем карточки питомцев по параметру поиска для сайдбара
        filterPetsSidebar(searchParamSidebar);

        // Формируем URL с параметром поиска и обновляем его без перезагрузки страницы
        var urlSidebar = '../pages/cats-dogs-catalog.html?search=' + encodeURIComponent(searchParamSidebar);
        window.history.pushState({ path: urlSidebar }, '', urlSidebar);

        // Очищаем поле ввода после отправки формы
        $('#sidebar-search-input').val('');
    });

// Проверяем наличие параметра поиска в URL при загрузке страницы и сбрасываем фильтрацию, если параметр отсутствует
    var searchParamInitialSidebar = new URLSearchParams(window.location.search).get('search');
    if (!searchParamInitialSidebar) {
        filterPetsSidebar(null); // Показать все карточки при отсутствии параметра поиска
    }


// -------------------------------------------------------------------------------------------------------------------














//++++++++++++++++++++++++++++++++++++++++++++++++
//     // При клике на пункт меню "Срочная помощь" в Сабменю
//     $('#header-emergency-button').click(function () {
//         window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#emergency-title', '_self');
//     });
// ++++++++++++++++++++++++++++++++++++++++++++++++

    // При клике на пункт меню "Срочная помощь" в Сабменю
    $('#header-emergency-button').click(function () {
        window.open('https://underscore1349.github.io/animal-shelter/index.html#emergency-title', '_self');
    });



// При клике на пункт меню "Срочная помощь" в Сайдбаре
    $('#sidebar-header-emergency-button').click(function() {
        $('#nav-icon6').removeClass('open'); // Закрываем бургерное меню
        $('#sidebar').removeClass('open'); // Скрываем бургерное меню
        $('.overlay').hide(); // Скрываем слой затемнения
        window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#emergency-title', '_self');
        // $('body').removeClass('no-scroll'); // Удаляем класс, предотвращающий скроллинг страницы
    });


// // При клике на пункт меню "Помощь" в Сабменю
//     $('#menu-help').click(function () {
//         window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#help-title', '_self');
//     });


    //++++++++++++++++++++++++++++++++++++++++++++++++
    // $('#sidebar-menu-help').click(function () {
    //     window.open('http://localhost:63342/animal%20shelter/index.html?_ijt=6ne8j5i6uk3pho64eisd0kcnb3&_ij_reload=RELOAD_ON_SAVE#help-title', '_self');
    // });
    //++++++++++++++++++++++++++++++++++++++++++++++++

    $('#sidebar-menu-help').click(function () {
        window.open('https://underscore1349.github.io/animal-shelter/index.html#help-title', '_self');
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

//++++++++++++++++++++++++++++++++++++++++++++++++
// Скрол по странице при клике на пункт меню "Помощь, Срочная помощь, Наши питомцы"
//     $('#sidebar-header-emergency-button, #sidebar-menu-help, #sidebar-menu-our-pets').click(function() {
//         $('#nav-icon6').removeClass('open'); // Закрываем бургерное меню
//         $('#sidebar').removeClass('open'); // Скрываем бургерное меню
//         $('.overlay').hide(); // Скрываем слой затемнения
//         // $('body').removeClass('no-scroll'); // Удаляем класс, предотвращающий скроллинг страницы
//     });
    //++++++++++++++++++++++++++++++++++++++++++++++++

    $('#sidebar-header-emergency-button').click(function() {
        $('#nav-icon6').removeClass('open'); // Закрываем бургерное меню
        $('#sidebar').removeClass('open'); // Скрываем бургерное меню
        $('.overlay').hide(); // Скрываем слой затемнения
        window.open('https://underscore1349.github.io/animal-shelter/index.html#emergency-title', '_self');
        // $('body').removeClass('no-scroll'); // Удаляем класс, предотвращающий скроллинг страницы
    });


// Функция для фильтрации карточек питомцев по параметру поиска для сайдбара
    function filterPetsSidebar(searchParam) {
        $('.cats-item, .dogs-item').each(function() {
            var petName = $(this).find('.cats-description, .dogs-description').text().toLowerCase();

            if (searchParam && petName.includes(searchParam)) {
                $(this).show();

                // Закрываем бургерное меню при нахождении искомой карточки
                $('#nav-icon6').removeClass('open');
                $('#sidebar').removeClass('open');
                $('.overlay').hide();
            } else if (!searchParam) {
                $(this).show(); // Показать все карточки при отсутствии параметра поиска
            } else {
                $(this).hide();
            }
        });
    }


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

// -------------------------------------------------------------------------------------------------------------------


    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });




    function rearrangeElementsCatalog() {
        const windowWidth = $(window).width();
        const zoomGallery = $('.zoom-gallery');
        const qqq = $('.qqq');

        if (windowWidth <= 699) {
            zoomGallery.insertBefore(qqq);
        } else {
            zoomGallery.after(qqq);
        }
    }

    $(window).on('resize', rearrangeElementsCatalog);
    rearrangeElementsCatalog(); // Вызываем функцию при загрузке страницы






});
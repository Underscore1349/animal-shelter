$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();



        $('.menu-item').hover(function() {
            $(this).find('.submenu').stop(true, true).slideDown('fast');
        }, function() {
            $(this).find('.submenu').stop(true, true).slideUp('fast');
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


// ---------------------------------------------СКРИПТ ПОИСКА ПИТОМЦЕВ ПО ИМЕНИ ДЛЯ МЕНЮ--------------------------------------


    $('#search-form').on('submit', function(e) {
        e.preventDefault(); // Предотвращаем отправку формы

        var searchText = $('#search-input').val().toLowerCase().replace(/[^a-zа-я]/g, ''); // Получаем введенный текст из поля поиска, приводим к нижнему регистру и удаляем все символы, кроме букв

        // Перенаправляем пользователя на страницу каталога с параметром поиска
        window.location.href = 'pages/cats-dogs-catalog.html?search=' + searchText;

        // Очищаем поле ввода после отправки формы
        $('#search-input').val('');
    });




// -------------------------------------------------------------------------------------------------------------------





// ---------------------------------------------СКРИПТ ПОИСКА ПИТОМЦЕВ ПО ИМЕНИ ДЛЯ САЙДБАРА--------------------------------------


    $('#sidebar-search-form').on('submit', function(e) {
        e.preventDefault(); // Предотвращаем отправку формы

        var searchText = $('#sidebar-search-input').val().toLowerCase().replace(/[^a-zа-я]/g, ''); // Получаем введенный текст из поля поиска, приводим к нижнему регистру и удаляем все символы, кроме букв

        // Перенаправляем пользователя на страницу каталога с параметром поиска
        window.location.href = 'pages/cats-dogs-catalog.html?search=' + searchText;

        // Очищаем поле ввода после отправки формы
        $('#sidebar-search-input').val('');
    });



// -------------------------------------------------------------------------------------------------------------------



// ---------------------------------------------СЧЕТЧИК ДЛЯ САЙТА--------------------------------------
    // Получаем элементы счетчиков
        var counterElement1 = $("#cat-counter-1");
        var counterElement2 = $("#cat-counter-2");
        var counterElement3 = $("#cat-counter-3");

        // Устанавливаем начальные значения счетчиков
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;

        // Функция для обновления счетчика #cat-counter-1
        function updateCounter1() {
            // Увеличиваем значение счетчика на 1
            count1++;

            // Обновляем текст элемента счетчика #cat-counter-1
            counterElement1.text(count1);

            // Если достигнуто значение 500, останавливаем счетчик #cat-counter-1
            if (count1 === 500) {
                clearInterval(counterInterval1);
            }
        }

        // Функция для обновления счетчика #cat-counter-2
        function updateCounter2() {
            // Увеличиваем значение счетчика на 1
            count2++;

            // Обновляем текст элемента счетчика #cat-counter-2
            counterElement2.text(count2);

            // Если достигнуто значение 300, останавливаем счетчик #cat-counter-2
            if (count2 === 300) {
                clearInterval(counterInterval2);
            }
        }

        function updateCounter3() {
            // Увеличиваем значение счетчика на 1
            count3++;

            // Обновляем текст элемента счетчика #cat-counter-2
            counterElement3.text(count3);

            // Если достигнуто значение 300, останавливаем счетчик #cat-counter-2
            if (count3 === 200) {
                clearInterval(counterInterval3);
            }
        }

        // Функция для проверки видимости блоков с счетчиками
        function checkVisibility() {
            // Получаем позиции блоков с счетчиками относительно верха окна
            var counterPosition1 = counterElement1.offset().top;
            var counterPosition2 = counterElement2.offset().top;
            var counterPosition3 = counterElement3.offset().top;

            // Получаем текущую позицию прокрутки окна
            var scrollPosition = $(window).scrollTop();

            // Получаем высоту окна
            var windowHeight = $(window).height();

            // Проверяем, если блок #cat-counter-1 видим на экране
            if (counterPosition1 < scrollPosition + windowHeight) {
                // Запускаем счетчик #cat-counter-1
                counterInterval1 = setInterval(updateCounter1, 10);
                $(window).off("scroll", checkVisibility); // Отключаем обработчик события прокрутки после запуска счетчика #cat-counter-1
            }

            // Проверяем, если блок #cat-counter-2 видим на экране
            if (counterPosition2 < scrollPosition + windowHeight) {
                // Запускаем счетчик #cat-counter-2
                counterInterval2 = setInterval(updateCounter2, 10);
                $(window).off("scroll", checkVisibility); // Отключаем обработчик события прокрутки после запуска счетчика #cat-counter-2
            }

            if (counterPosition3 < scrollPosition + windowHeight) {
                // Запускаем счетчик #cat-counter-1
                counterInterval3 = setInterval(updateCounter3, 10);
                $(window).off("scroll", checkVisibility); // Отключаем обработчик события прокрутки после запуска счетчика #cat-counter-1
            }
        }

        // Добавляем обработчик события прокрутки
        $(window).on("scroll", checkVisibility);
// -------------------------------------------------------------------------------------------------------------------


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


// Скрол по странице при клике на пункт меню "Помощь, Срочная помощь, Наши питомцы"
    $('#sidebar-header-emergency-button, #sidebar-menu-help, #sidebar-menu-our-pets').click(function() {
        $('#nav-icon6').removeClass('open'); // Закрываем бургерное меню
        $('#sidebar').removeClass('open'); // Скрываем бургерное меню
        $('.overlay').hide(); // Скрываем слой затемнения
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

// -------------------------------------------------------------------------------------------------------------------













// ---------------------------------------------СМЕНА ПОРЯДКА СЛЕДОВАНИЯ ЭЛЕМЕНТОВ В БЛОКЕ MAIN-----------------------------------------

    function rearrangeElements() {
        const windowWidth = $(window).width();
        const mainInfo = $('.main-info');
        const mainButton = $('.main-button');
        const mainImage = $('.main-image');

        if (windowWidth <= 799) {
            mainImage.insertBefore(mainButton);
        } else {
            mainInfo.after(mainImage);

        }
    }

    $(window).on('resize', rearrangeElements);
    rearrangeElements(); // Вызываем функцию при загрузке страницы

// ---------------------------------------------slider-----------------------------------------

    let startX = 0
    let active = 0
    let isDown = false
    const speedDrag = -0.1
    const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))
    const carousel = document.querySelector('.carousel')
    const $items = document.querySelectorAll('.carousel-item')
    let progress = 10 * $items.length / 2
    const displayItems = (item, index, active) => {
        const zIndex = getZindex([...$items], active)[index]
        item.style.setProperty('--zIndex', zIndex)
        item.style.setProperty('--active', (index-active)/$items.length)
        item.style.setProperty('--items', $items.length)
    }
    const animate = () => {
        progress = Math.max(0, Math.min(progress, $items.length * 10))
        active = Math.floor(progress/($items.length * 10) * ($items.length-1))
        $items.forEach((item, index) => displayItems(item, index, active))
    }
    animate()
    $items.forEach((item, i) => {
        item.addEventListener('click', () => {
            progress = (i/$items.length) * $items.length * 10 + 10
            animate()
        })
    })
    const handleMouseMove = (e) => {
        if (!isDown) return
        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
        const mouseProgress = (x - startX) * speedDrag
        progress = progress + mouseProgress
        startX = x
        animate()
    }
    const handleMouseDown = e => {
        isDown = true
        startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    }
    const handleMouseUp = () => {
        isDown = false
    }
    carousel.addEventListener('mousedown', handleMouseDown)
    carousel.addEventListener('mousemove', handleMouseMove)
    carousel.addEventListener('mouseup', handleMouseUp)
    carousel.addEventListener('touchstart', handleMouseDown)
    carousel.addEventListener('touchmove', handleMouseMove)
    carousel.addEventListener('touchend', handleMouseUp)



    // $('#menu-help').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $('#help-title').offset().top
    //     }, 800);
    // });

    // $('#menu-our-pets').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $('.our-pets-item-frame').offset().top
    //     }, 800);
    // });

    $('#sidebar-menu-help').click(function () {
        $('html, body').animate({
            scrollTop: $('#help-title').offset().top
        }, 800);
    });

    // $('#sidebar-menu-our-pets').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $('.our-pets-item-frame').offset().top
    //     }, 800);
    // });

    $('#index-our-cats-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('.cat-image').offset().top
        }, 800);
    });


    $('.main-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#our-pets-items').offset().top
        }, 800);
    });

    $('#header-help-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#help-title').offset().top
        }, 800);
    });


    $('#header-emergency-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#emergency-title').offset().top
        }, 800);
    });

    $('#help-button-6').click(function () {
        $('html, body').animate({
            scrollTop: $('.emergency-title').offset().top
        }, 800);
    });


    $('#sidebar-header-emergency-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#emergency-title').offset().top
        }, 800);
    });


    $('#footer-help-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#help-title').offset().top
        }, 800);
    });

    $('#footer-our-pets-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#our-pets-items').offset().top
        }, 800);
    });

    $('#footer-emergency-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#emergency-title').offset().top
        }, 800);
    });



    $('#help-button-1').click(function () {
        window.open('pages/how-can-you-help.html#volunteer', '_self');
    });

    $('#help-button-2').click(function () {
        window.open('pages/how-can-you-help.html#pick-up-a-pet', '_self');
    });

    $('#help-button-3').click(function () {
        window.open('pages/how-can-you-help.html#humanitarian-assistance', '_self');
    });

    $('#help-button-4').click(function () {
        window.open('pages/how-can-you-help.html#donation', '_self');
    });

    $('#help-button-5').click(function () {
        window.open('pages/how-can-you-help.html#pr', '_self');
    });


    $('#volunteer').click(function () {
        window.open('pages/how-can-you-help.html#volunteer', '_self');
    });

    $('#pick-up-a-pet').click(function () {
        window.open('pages/how-can-you-help.html#pick-up-a-pet', '_self');
    });



    $('#cats-page').click(function () {
        window.open('pages/cats.html', '_self');
    });

    $('#index-our-cats-btn').click(function () {
        window.open('pages/cats.html', '_self');
    });

    $('#index-our-dogs-btn').click(function () {
        window.open('pages/dogs.html', '_self');
    });


});

// ---------------------------------------------СМЕНА ПОРЯДКА СЛЕДОВАНИЯ ЭЛЕМЕНТОВ В БЛОКЕ FOOTER-----------------------------------------

    //
    // $(window).on('resize', rearrangeElements);
    // rearrangeElements(); // Вызываем функцию при загрузке страницы
    //
    // function rearrangeElements() {
    //     const windowWidth = $(window).width();
    //     const footerContacts = $('.footer-contacts');
    //     const footerLogo = $('.footer-logo');
    //     // const mainImage = $('.main-image');
    //
    //     if (windowWidth <= 799) {
    //         footerContacts.insertBefore(footerLogo);
    //     }
    // }
    //
    // $(window).on('resize', rearrangeElements);
    // rearrangeElements(); // Вызываем функцию при загрузке страницы
    //





















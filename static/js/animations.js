window.addEventListener('load', function() {
    // Анимация заголовка и контейнера ссылок (базовая)
    // Дополнительная анимация для элементов при скролле
    const animateItems = document.querySelectorAll('.animate-item');

    function checkAnimation() {
        animateItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (itemPosition < screenPosition) {
                item.classList.add('in-view');
            }
        });
    }

    // Запускаем при загрузке
    checkAnimation();

    // И при скролле
    window.addEventListener('scroll', checkAnimation);
});

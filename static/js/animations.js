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

/* Анимация кнопоки меню */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Закрывать меню при клике на пункт (для мобильных)
    document.querySelectorAll('.nav-list a').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
});

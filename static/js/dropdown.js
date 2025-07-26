document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        const dropdownContent = btn.nextElementSibling;

        if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                dropdownContent.classList.toggle('active');
            });

            dropdownContent.querySelectorAll('a').forEach(item => {
                item.addEventListener('click', function() {
                    btn.classList.remove('active');
                    dropdownContent.classList.remove('active');
                });
            });
        }
    });
});

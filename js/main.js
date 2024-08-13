document.addEventListener("DOMContentLoaded", function () {
    const btnDarkMode = document.querySelector(".dark-mode-btn");
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Функция для применения темы
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            btnDarkMode.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            btnDarkMode.classList.remove('dark-mode-btn--active');
        }
    };

    // Проверяем, сохранена ли тема в localStorage
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Если темы нет в localStorage, применяем системную тему
        applyTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
    }

    // Слушатель на изменение системной темы
    darkModeMediaQuery.addEventListener('change', (event) => {
        if (!localStorage.getItem('darkMode')) {
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });

    // Слушатель на кнопку смены темы
    btnDarkMode.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        btnDarkMode.classList.toggle('dark-mode-btn--active');

        // Сохраняем выбор пользователя в localStorage
        if (isDark) {
            localStorage.setItem('darkMode', 'dark');
        } else {
            localStorage.setItem('darkMode', 'light');
        }
    });
});

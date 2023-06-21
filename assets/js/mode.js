function darkMode() {
    const container = document.getElementById('webPage');
    // const theme = container.getAttribute('data-theme');

    var light = document.getElementById('lightMode');

    var dark = document.getElementById('darkMode');

    var dataTheme = container.getAttribute('data-theme');

    localStorage.setItem("theme", dataTheme);

    if (localStorage.theme === 'dark') {
        container.setAttribute('data-theme', 'light');
        dark.classList.add('hide');
        light.classList.remove('hide');
    } else {
        container.setAttribute('data-theme', 'dark');
        dark.classList.remove('hide');
        light.classList.add('hide');
    }

}

let theme = localStorage.getItem('theme')
let theme_dots = document.querySelectorAll('.theme-dot')
let theme_style = document.querySelector('#theme_style')

init(theme)
init_buttons(theme)

theme_dots.forEach(theme_dot => {
    theme_dot.addEventListener('click', (event) => {
        let mode = event.target.dataset.mode
        setTheme(mode)
    })
})

function setTheme(mode) {
    switch (mode) {
        case 'light':
            theme_style.href = 'default.css';
            break;
        case 'blue':
            theme_style.href = 'themes/blue.css'
            break;
        case 'green':
            theme_style.href = 'themes/green.css'
            break;
        case 'purple':
            theme_style.href = 'themes/purple.css'
            break;
    }
    localStorage.setItem('theme', mode)
    init_buttons(mode)
}
function init(_) {
    if (_ == null || _ == undefined) {
        setTheme('light')
    } else {
        setTheme(_)
    }
}
function init_buttons(_) {
    theme_dots.forEach(theme_dot => {
        theme_dot.style.borderWidth = '';
        let mode = theme_dot.dataset.mode
        if (mode === _) {
            theme_dot.style.borderWidth = '5px';
            return;
        }
    })
}
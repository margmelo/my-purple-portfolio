/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme')
    const themeToggle = document.getElementById('theme-toggle')
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if (themeStylesheet.href.includes('light')) {
            themeStylesheet.href = 'themes/dark-theme.css'
            themeToggle.innerText = 'Light mode'
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'themes/light-theme.css'
            themeToggle.innerText = 'Dark mode'
        }
    })
})
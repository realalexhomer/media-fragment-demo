require('normalize.css/normalize.css');
require('./styles/index.scss');

const baseSrc = ''; // <-----

if (baseSrc.length < 1) {
    alert('copy and paste src into src/index.js')
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', () => {

        const root = document.getElementById('root');
        const useCachebuster = document.getElementById('cachebuster').checked;
        const startInput = document.getElementById('start').value;
        const endInput = document.getElementById('end').value;

        const render = html => root.innerHTML = html;

        const videoTemplate = (src) => (`
            <video controls autoplay>
                <source src=${src} type="video/mp4">
            </video>
        `);

        render(videoTemplate(`${baseSrc}${useCachebuster ? '?' + Date.now() : ''}#t=${startInput},${endInput}`));
    });
});

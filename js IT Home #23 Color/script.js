function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = `${name}=${JSON.stringify(value)}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
    return [];
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const paletteRGB = document.getElementById('paletteRGB');
const paletteRGBA = document.getElementById('paletteRGBA');
const paletteHEX = document.getElementById('paletteHEX');
let colors = getCookie('colors') || [];

function displayColors() {
    paletteRGB.innerHTML = '<h2>RGB</h2>';
    paletteRGBA.innerHTML = '<h2>RGBA</h2>';
    paletteHEX.innerHTML = '<h2>HEX</h2>';

    colors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'color';
        div.style.backgroundColor = convertColorCode(color.type, color.code);

        div.innerHTML = `
        <strong>Color: ${color.name}</strong><br>
        Type: ${color.type}<br>
        Code: ${color.code}
    `;

        if (color.type === 'RGB') {
            paletteRGB.appendChild(div);
        } else if (color.type === 'RGBA') {
            paletteRGBA.appendChild(div);
        } else if (color.type === 'HEX') {
            paletteHEX.appendChild(div);
        }
    });
}

function convertColorCode(type, code) {
    if (type === 'RGB') {
        return `rgb(${code})`;
    } else if (type === 'RGBA') {
        return `rgba(${code})`;
    } else if (type === 'HEX') {
        return code;
    }
    return '';
}

displayColors();

function validateForm(name, type, code) {
    const error = document.getElementById('error');
    error.textContent = '';

    if (!/^[A-Za-z\s]+$/.test(name)) {
        error.textContent = 'The name should only contain letters and spaces.';
        return false;
    }

    if (type === 'RGB') {
        if (!/^(\d{1,3},\d{1,3},\d{1,3})$/.test(code)) {
            error.textContent = 'RGB should be in the format 0-255,0-255,0-255.';
            return false;
        }
        const rgb = code.split(',').map(Number);
        if (rgb.some(n => n < 0 || n > 255)) {
            error.textContent = 'RGB values must be between 0 and 255.';
            return false;
        }
    } else if (type === 'RGBA') {
        if (!/^(\d{1,3},\d{1,3},\d{1,3},(0(\.\d+)?|1))$/.test(code)) {
            error.textContent = 'RGBA should be in the format 0-255,0-255,0-255,0-1.';
            return false;
        }
        const rgba = code.split(',').map((n, i) => i === 3 ? parseFloat(n) : Number(n));
        if (rgba.slice(0, 3).some(n => n < 0 || n > 255) || rgba[3] < 0 || rgba[3] > 1) {
            error.textContent = 'RGBA values must be between 0 and 255 (first three) and 0-1 (last one).';
            return false;
        }
    } else if (type === 'HEX') {
        if (!/^#([A-Fa-f0-9]{6})$/.test(code)) {
            error.textContent = 'HEX should be in the format #XXXXXX (six digits).';
            return false;
        }
    }

    return true;
}

document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const type = document.getElementById('type').value;
    const code = document.getElementById('code').value.trim();

    if (validateForm(name, type, code)) {
        colors.push({ name, type, code });
        setCookie('colors', colors, 3);
        displayColors();
        document.getElementById('colorForm').reset();
    }
});

document.getElementById('clearPalette').addEventListener('click', function() {
    colors = [];
    deleteCookie('colors');
    displayColors();
});

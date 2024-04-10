 let header = document.createElement('header');
 document.body.prepend(header);

 let h1 = document.createElement('h1');
 h1.textContent = 'Мене звати: Олександр!';
 header.appendChild(h1);

 let intro = document.createElement('div');
 intro.classList.add('intro');
 intro.textContent = 'Вступ до DOM!';
 header.parentNode.insertBefore(intro, header);

 let footer = document.createElement('footer');
 footer.textContent = '© 2024 Мій сайт!';
 header.parentNode.insertBefore(footer, header);

 let about = document.createElement('selection');
 about.classList.add('about');
 about.textContent = 'Цей сайт присвячений прикладом DOM!';
 intro.parentNode.replaceChild(about, intro);

 footer.parentNode.removeChild(footer);
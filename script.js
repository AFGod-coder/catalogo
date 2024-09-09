const section = document.querySelector('.grupo-medias.canilleras');

function renderArticle(tipoMedia, cantidad) {

for (let i = 1; i <= cantidad; i++) {
    const article = document.createElement('article');
    article.classList.add('media');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgen');

    const img = document.createElement('img');
    img.src = `img/${tipoMedia} (${i}).png`;
    img.alt = '';

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('tittle');

    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    if (tipoMedia === 'promo'){
        h3.textContent = 'Promo';
        p.textContent = '$22.000';

        p.style.color = '#197FE6';
        article.classList.add('promo');
    } else if (tipoMedia === 'tobillera'){
        h3.textContent = 'Tobillera';
        p.textContent = '$12.000';
        article.classList.add('tobillera');
    } else if (tipoMedia === 'baleta'){
        h3.textContent = 'Baleta';
        p.textContent = '$10.000';
        article.classList.add('baleta');
    } else if (tipoMedia === 'canillera'){
        h3.textContent = 'Canillera';
        p.textContent = '$14.000';
        article.classList.add('canillera');
    }

    titleDiv.appendChild(h3);
    titleDiv.appendChild(p);

    article.appendChild(imgDiv);
    imgDiv.appendChild(img);
    article.appendChild(titleDiv);

    section.appendChild(article);
}

}

renderArticle('promo', 5);
renderArticle('canillera', 9);
renderArticle('tobillera', 2);
renderArticle('baleta', 2);


const whatsappLink = document.querySelector('.whatsapp');

whatsappLink.addEventListener('click', () => {
    const phoneNumber = '+573204920412';
    const message = 'Deseo hacer un pedido de medias 🧦🎊';

    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
});



const promoButton = document.querySelector('#promos');
const canilleraButton = document.querySelector('#canilleras');
const tobilleraButton = document.querySelector('#tobilleras');
const baletaButton = document.querySelector('#baletas');

promoButton.addEventListener('click', () => {
    const mediaArticles = document.querySelectorAll('.media');
    
    mediaArticles.forEach(article => {
        if (article.classList.contains('promo')) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});

canilleraButton.addEventListener('click', () => {
    const mediaArticles = document.querySelectorAll('.media');
    
    mediaArticles.forEach(article => {
        if (article.classList.contains('canillera')) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});

tobilleraButton.addEventListener('click', () => {
    const mediaArticles = document.querySelectorAll('.media');
    
    mediaArticles.forEach(article => {
        if (article.classList.contains('tobillera')) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});

baletaButton.addEventListener('click', () => {
    const mediaArticles = document.querySelectorAll('.media');
    
    mediaArticles.forEach(article => {
        if (article.classList.contains('baleta')) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
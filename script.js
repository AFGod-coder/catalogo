class MediaCatalog {
    constructor(sectionSelector) {
        this.section = document.querySelector(sectionSelector);
    }

    renderArticle(tipoMedia, cantidad) {
        for (let i = 1; i <= cantidad; i++) {
            const article = document.createElement('article');
            article.classList.add('media');

            const img = document.createElement('img');
            img.alt = '';

            const titleDiv = document.createElement('div');
            titleDiv.classList.add('tittle');

            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            img.loading = 'lazy';

            if (tipoMedia === 'promo') {
                h3.textContent = 'Promo';
                p.textContent = '$22.000';
                p.style.color = '#197FE6';
                article.classList.add('promo');
                img.src = `img/${tipoMedia}/${tipoMedia} (${i}).png`;

            } else if (tipoMedia === 'tobillera') {
                h3.textContent = 'Tobillera';
                p.textContent = '$12.000';
                article.classList.add('tobillera');
                img.src = `img/${tipoMedia}/${tipoMedia} (${i}).png`;

            } else if (tipoMedia === 'baleta') {
                h3.textContent = 'Baleta';
                p.textContent = '$10.000';
                article.classList.add('baleta');
                img.src = `img/${tipoMedia}/${tipoMedia} (${i}).png`;

            } else if (tipoMedia === 'canillera') {
                h3.textContent = 'Canillera';
                p.textContent = '$14.000';
                article.classList.add('canillera');
                img.src = `img/${tipoMedia}/${tipoMedia} (${i}).png`;
            }

            titleDiv.appendChild(h3);
            titleDiv.appendChild(p);

            article.appendChild(img);
            article.appendChild(titleDiv);

            this.section.appendChild(article);
        }
    }

    setupWhatsAppLink(selector, phoneNumber, message) {
        const whatsappLink = document.querySelector(selector);
        whatsappLink.addEventListener('click', () => {
            window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        });
    }

    setupFilterButtons(buttonSelectors) {
        buttonSelectors.forEach(({ buttonSelector, mediaClass }) => {
            const button = document.querySelector(buttonSelector);
            button.addEventListener('click', () => {
                const mediaArticles = document.querySelectorAll('.media');
                mediaArticles.forEach(article => {
                    if (article.classList.contains(mediaClass)) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                });
            });
        });
    }
}

const catalog = new MediaCatalog('.grupo-medias.canilleras');

catalog.renderArticle('promo', 6);
catalog.renderArticle('canillera', 14);
catalog.renderArticle('tobillera', 6);
catalog.renderArticle('baleta', 2);

catalog.setupWhatsAppLink('.whatsapp', '+573026585140', 'Deseo hacer un pedido de medias 🧦🎊');

catalog.setupFilterButtons([
    { buttonSelector: '#promos', mediaClass: 'promo' },
    { buttonSelector: '#canilleras', mediaClass: 'canillera' },
    { buttonSelector: '#tobilleras', mediaClass: 'tobillera' },
    { buttonSelector: '#baletas', mediaClass: 'baleta' }
]);

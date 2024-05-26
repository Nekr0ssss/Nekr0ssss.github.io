document.addEventListener('DOMContentLoaded', () => {
    const swiperTop = new Swiper('.swiper-container-top', {
        slidesPerView: 4, // Número de imágenes visibles a la vez
        spaceBetween: 5, // Espacio entre las imágenes
        loop: true, // Bucle infinito
        navigation: {
            nextEl: '.swiper-button-next-top',
            prevEl: '.swiper-button-prev-top',
        },
        slidesPerGroup: 4, // Número de imágenes que se mueven en cada acción de navegación
    });

    const swiperBottom = new Swiper('.swiper-container-bottom', {
        slidesPerView: 4, // Número de imágenes visibles a la vez
        spaceBetween: 5, // Espacio entre las imágenes
        loop: true, // Bucle infinito
        navigation: {
            nextEl: '.swiper-button-next-bottom',
            prevEl: '.swiper-button-prev-bottom',
        },
        slidesPerGroup: 4, // Número de imágenes que se mueven en cada acción de navegación
    });
     // Sincronizar los Swipers
 swiperTop.controller.control = swiperBottom;
 swiperBottom.controller.control = swiperTop;
})
 

// Modal logic
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');


// Función para abrir el modal y mostrar el contenido adecuado
const openModal = (url) => {
    modalContent.innerHTML = `<iframe src="${url}" frameborder="0" style="width:100%; height:100%;"></iframe>`;
    modal.classList.add('show');
    
};

// Cerrar el modal al hacer clic en el botón de cerrar o fuera del modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

const iframeContentMap = {
    'item1': '',
    'item2': 'Descripción de los servicios ofrecidos.',
    'item3': 'Información sobre la línea de productos.',
    'item4': 'Detalles sobre Underfire.',
    'item5': 'Información sobre capacitaciones disponibles.',
    'item6': 'Exploración de nuestras marcas.',
    'item7': 'Guía técnica de seguridad eléctrica.',
    'item8': 'Últimas noticias y actualizaciones.',
    'imagen1': 'Detalles de CATU.',
    'imagen2': 'Detalles de MAKITA.',
    'imagen3': 'Detalles de MEGGER.',
    'imagen4': 'Detalles de MILWAUKEE.',
    'imagen5': 'Detalles de NOJA POWER.',
    'imagen6': 'Detalles de POWER LINE.',
    'imagen7': 'Detalles de RITZ.',
    'imagen8': 'https://interactivo.novamedios.cl'
};

document.querySelectorAll('.grid-item img, .grid-item2 img, .grid-item3 img, .swiper-slide img').forEach(img => {
    img.addEventListener('click', () => {
        const contentURL = iframeContentMap[img.dataset.id] || 'about:blank'; // Fallback a una página en blanco si no hay URL específica
        openModal(contentURL);
    });
});







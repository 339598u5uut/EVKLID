document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.section-work__list-btn').forEach(function(sectionWorkListBtn) {
        sectionWorkListBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-work__content').forEach(function(sectionWorkContent) {
                sectionWorkContent.classList.remove('section-work__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__content-active')
        })
    })
});


const swiper = new Swiper('.swiper-container', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    scrollbar: {
        hide: 'true',
    },
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})
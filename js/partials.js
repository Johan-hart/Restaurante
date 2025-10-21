/* header */

const btnToggleResponsive = document.querySelector('.btn-toggle');
const menuResponsive = document.querySelector('.menu-responsive');
const header = document.querySelector('header');

btnToggleResponsive.addEventListener('click', () => ) {
    const iconBars = document.querySelector('.fa-bars');
    const iconclose = document.querySelector('.fa-xmark');

    if ( iconBars.classList.contains('active')){
        iconBars.classList.remove('active');
        iconclose.classList.add('active');
        menuResponsive.classList.add('show');
    }
}
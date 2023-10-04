const slider = document.getElementById('friendSlider');
const sliderValue = document.getElementById('sliderValue');
const map = document.getElementById('map');

slider.addEventListener('input', function() {
    if (this.value == 0) {
        sliderValue.textContent = 'Off';
        map.classList.remove('red-filter', 'green-filter');  
    } else {
        sliderValue.textContent = 'On';
        map.classList.add('red-filter');  
    }
});
function toggleFilter() {
    const filterMenu = document.getElementById('filterMenu');
    filterMenu.style.display = filterMenu.style.display === 'none' ? 'block' : 'none';
}
function toggleFilter() {
    const filterMenu = document.getElementById('filterMenu');
    filterMenu.style.display = filterMenu.style.display === 'none' ? 'block' : 'none';
}
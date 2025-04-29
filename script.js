document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    const tooltip = document.getElementById('tooltip');

    areas.forEach(area => {
        area.addEventListener('mouseover', function(event) {
            const responsavel = event.target.getAttribute('data-responsavel');
            tooltip.textContent = responsavel;
            tooltip.style.display = 'block';
            tooltip.style.left = event.pageX + 'px';
            tooltip.style.top = event.pageY + 'px';
            event.target.classList.add('highlight'); // Adiciona a classe de destaque
        });

        area.addEventListener('mouseout', function(event) {
            tooltip.style.display = 'none';
            event.target.classList.remove('highlight'); // Remove a classe de destaque
        });
    });
});
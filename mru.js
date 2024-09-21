document.addEventListener('DOMContentLoaded', function() {
    const distanciaForm = document.getElementById('distanciaForm');
    const velocityForm = document.getElementById('velocityForm');
    const timeForm = document.getElementById('timeForm');

    distanciaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const velocity = parseFloat(document.getElementById('velo1').value);
        const time = parseFloat(document.getElementById('tiemp1').value);
        const distance = velocity * time;
        document.getElementById('resultdista').textContent = `La distancia recorrida es ${distance.toFixed(2)} metros.`;
    });

    velocityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const distance = parseFloat(document.getElementById('distance2').value);
        const time = parseFloat(document.getElementById('time2').value);
        const velocity = distance / time;
        document.getElementById('velocityResult').textContent = `La velocidad es ${velocity.toFixed(2)} m/s.`;
    });

    timeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const distance = parseFloat(document.getElementById('distance3').value);
        const velocity = parseFloat(document.getElementById('velocity3').value);
        const time = distance / velocity;
        document.getElementById('timeResult').textContent = `El tiempo necesario es ${time.toFixed(2)} segundos.`;
    });
});

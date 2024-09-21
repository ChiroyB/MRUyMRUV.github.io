
document.addEventListener('DOMContentLoaded', function() {
    const velocityFinalForm = document.getElementById('velocityFinalForm');
    const distanceForm = document.getElementById('distanceForm');
    const velocityFinalNoTimeForm = document.getElementById('velocityFinalNoTimeForm');

    velocityFinalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const initialVelocity = parseFloat(document.getElementById('initialVelocity1').value);
        const acceleration = parseFloat(document.getElementById('acceleration1').value);
        const time = parseFloat(document.getElementById('time1').value);
        const finalVelocity = initialVelocity + acceleration * time;
        document.getElementById('velocityFinalResult').textContent = `La velocidad final es ${finalVelocity.toFixed(2)} m/s.`;
    });

    distanceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const initialVelocity = parseFloat(document.getElementById('initialVelocity2').value);
        const acceleration = parseFloat(document.getElementById('acceleration2').value);
        const time = parseFloat(document.getElementById('time2').value);
        const distance = initialVelocity * time + 0.5 * acceleration * time * time;
        document.getElementById('distanceResult').textContent = `La distancia recorrida es ${distance.toFixed(2)} metros.`;
    });

    velocityFinalNoTimeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const initialVelocity = parseFloat(document.getElementById('initialVelocity3').value);
        const acceleration = parseFloat(document.getElementById('acceleration3').value);
        const distance = parseFloat(document.getElementById('distance3').value);
        const finalVelocity = Math.sqrt(initialVelocity * initialVelocity + 2 * acceleration * distance);
        document.getElementById('velocityFinalNoTimeResult').textContent = `La velocidad final es ${finalVelocity.toFixed(2)} m/s.`;
    });
});
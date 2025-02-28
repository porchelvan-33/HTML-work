document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Draw car body
    ctx.fillStyle = '#4F4F4F';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(350, 50);
    ctx.lineTo(350, 150);
    ctx.lineTo(50, 150);
    ctx.arcTo(50, 150, 50, 160, 10);
    ctx.lineTo(50, 160);
    ctx.arcTo(50, 160, 40, 160, 10);
    ctx.lineTo(40, 160);
    ctx.arcTo(40, 160, 40, 150, 10);
    ctx.lineTo(40, 150);
    ctx.arcTo(40, 150, 50, 150, 10);
    ctx.fill();

    // Draw front windshield
    ctx.fillStyle = '#AAAAAA';
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(250, 50);
    ctx.lineTo(200, 30);
    ctx.fill();

    // Draw wheels
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(100, 170, 30, 20, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(300, 170, 30, 20, 0, 0, 2 * Math.PI);
    ctx.fill();

    // Draw headlights
    ctx.fillStyle = '#FFFF00';
    ctx.beginPath();
    ctx.arc(120, 80, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(280, 80, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Draw grille (simplified)
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, 60);
    ctx.lineTo(250, 60);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 70);
    ctx.lineTo(250, 70);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 80);
    ctx.lineTo(250, 80);
    ctx.stroke();
});

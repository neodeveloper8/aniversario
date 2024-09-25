document.addEventListener('DOMContentLoaded', (event) => {
    const title = document.querySelector('.title');
    const message = document.querySelector('.message');
    const photo = document.getElementById('couple-photo');

    // Efecto de aparición gradual para el título y el mensaje
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    }, 1000);

    // Efecto de zoom suave al pasar el mouse sobre la foto
    photo.addEventListener('mouseover', () => {
        photo.style.transform = 'scale(1.1)';
    });

    photo.addEventListener('mouseout', () => {
        photo.style.transform = 'scale(1)';
    });

    // Cambiar el color del corazón cada 3 segundos
    const heart = document.querySelector('.heart');
    const colors = ['#ff6b6b', '#ff9ff3', '#feca57', '#54a0ff', '#5f27cd'];
    let colorIndex = 0;

    setInterval(() => {
        heart.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);
});
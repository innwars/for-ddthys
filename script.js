document.querySelector('.wrapper').addEventListener('click', function() {
    const flap = document.querySelector('.env::before');
    const letter = document.querySelector('.lettre');
    // Toggle open class or directly apply styles here for animation
    flap.style.transform = 'rotateX(-180deg)'; // This might need to be adjusted based on your setup
    letter.style.transform = 'translateY(-100%)';
});

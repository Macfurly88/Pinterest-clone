document.querySelector('.barra input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const images = document.querySelectorAll('.card-image');
    
    images.forEach(function(image) {
        const altText = image.querySelector('img').alt.toLowerCase();
        if (altText.includes(searchQuery)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});

const saveButtons = document.querySelectorAll('.button a');

saveButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        this.innerHTML = 'Guardado';
        this.parentElement.style.backgroundColor = '#0077b6';
        setTimeout(() => {
            this.innerHTML = 'Guardar';
            this.parentElement.style.backgroundColor = '#e60023';
        }, 2000);
    });
});

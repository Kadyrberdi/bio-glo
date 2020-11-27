const popup = () => {
    const popup = document.querySelector('.popup'),
    callBtn = document.querySelectorAll('.call-btn'),
    checkBtn = document.querySelector('.check-btn');

    callBtn.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            popup.style.display = 'block';
        });
    });
    checkBtn.addEventListener('click', (event) => {
            event.preventDefault();
            popup.style.display = 'block';
    });

    popup.addEventListener('click', event => {
        let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
    });


}

export  default popup;
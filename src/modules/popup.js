const popup = () => {
    const popup = document.querySelectorAll('.popup'),
    popupBtn = document.querySelectorAll('.button'),
    popupCall = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupCheck = document.querySelector('.popup-check'),
    popupConsultation = document.querySelector('.popup-consultation'),
    callBtn = document.querySelectorAll('.call-btn'),
    phone = document.querySelectorAll('input[name="user_phone"]'),   
    name = document.querySelectorAll('input[name="user_name"]'),
    getCalcBtn = document.querySelectorAll('.construct-btn')[3];

    callBtn.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            popupCall.style.display = 'block';
        });
    });

    popupBtn.forEach((elem) =>{
        elem.addEventListener('click', (event) =>{
            if(event.target.matches('.discount-btn')){
                popupDiscount.style.display = 'block';
            }else if(event.target.matches('.check-btn')){
                popupCheck.style.display = 'block';
            }
        });
    });
    
    
    getCalcBtn.addEventListener('click', () => {
        popupDiscount.style.display = 'block';
        popupCall.style.display = 'none';
    });
    
    popup.forEach(elem => {
        elem.addEventListener('click', event => {
            let target = event.target;
                if (target.classList.contains('popup-close')) {
                    phone.forEach(elem => {
                        elem.removeAttribute('required', '');
                    });
                    name.forEach(elem => {
                        elem.removeAttribute('required', '');
                    });
                    popupCall.style.display = 'none';
                    popupDiscount.style.display = 'none';
                    popupCheck.style.display = 'none';
                    popupConsultation.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        popupCall.style.display = 'none';
                        popupDiscount.style.display = 'none';
                        popupCheck.style.display = 'none';
                        popupConsultation.style.display = 'none';
                    }
                }
        });
    });
};

export  default popup;
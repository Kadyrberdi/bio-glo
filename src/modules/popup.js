const popup = () => {
    const popup = document.querySelectorAll('.popup'),
    popupCall = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupCheck = document.querySelector('.popup-check'),
    popupConsultation = document.querySelector('.popup-consultation'),
    callBtn = document.querySelectorAll('.call-btn'),
    getCalcBtn = document.querySelectorAll('.construct-btn')[3],
    checkBtn = document.querySelector('.check-btn'),
    discountBtn = document.querySelectorAll('.discount-btn'),
    consultationBtn = document.querySelector('.consultation-btn'),
    phone = document.querySelectorAll('input[name="user_phone"]'),   
    name = document.querySelectorAll('input[name="user_name"]'); 

    callBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
        });
    });
    getCalcBtn.addEventListener('click', () => {
        popupDiscount.style.display = 'block';
    });
    discountBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popupDiscount.style.display = 'block';
        });
    });
    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });
    consultationBtn.addEventListener('click', () => {
        popupConsultation.style.display = 'block';
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
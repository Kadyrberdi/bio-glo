const popup = () => {
    const popup = document.querySelector('.popup'),
    callBtn = document.querySelectorAll('.call-btn'),
    checkBtn = document.querySelector('.check-btn'),
    input = document.querySelectorAll('input'),
    phone = document.querySelectorAll('input[name="user_phone"]'),   
    name = document.querySelectorAll('input[name="user_name"]'); 
    console.log('input: ', input);
    console.log('phone: ', phone);
    console.log('name: ', name);

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
                phone[2].removeAttribute('required', '');
                name[1].removeAttribute('required', '');
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
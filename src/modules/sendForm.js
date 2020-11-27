const sendForm = () => {
        const errorMessage = 'Что то пошло не так ...',
            loadMessage = 'Загрузка ...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.querySelectorAll('form'), 
            phone = document.querySelectorAll('input[name="user_phone"]'),   
            name = document.querySelectorAll('input[name="user_name"]'), 
            question = document.querySelectorAll('input[name="user_quest"]');  

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2 rem;';
        statusMessage.style.color = 'grey';

        form.forEach(elem => {
            elem.addEventListener('submit', (event) => {
                const inputs = document.querySelectorAll('form input'),
                    popup = document.querySelector('.popup');
                event.preventDefault();
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(elem);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                }); 
                
                function hidePopup() {
                    popup.style.display = 'none';
                }
                function hideStsMsg() {
                    statusMessage.textContent = '';
                }
                
                postData(body, () => {
                    statusMessage.textContent = successMessage;
                    setTimeout(hideStsMsg, 2000);
                    setTimeout(hidePopup, 3000);
                }, (error) => {                
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setTimeout(hideStsMsg, 2000);
                });
                //4) После отправки инпуты должны очищаться
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            });
        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };

    for (let i = 0; i < form.length; i++) {
          const validator = function () {
              phone[i].value = phone[i].value.replace(/[^0-9+]/ig, '');
              name[i].value = name[i].value.replace(/[^а-яА-Я \ ]/ig, '');
          }
          phone[i].addEventListener('input', validator);
          name[i].addEventListener('input', validator);
    }
};

export  default sendForm;

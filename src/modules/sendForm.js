const sendForm = () => {
        const errorMessage = 'Что то пошло не так ...',
            loadMessage = 'Загрузка ...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.querySelectorAll('form');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2 rem;';
        statusMessage.style.color = 'grey';

        for (let i = 0; i < form.length; i++) {
            form[i].addEventListener('submit', (event) => {
                const inputs = document.querySelectorAll('form input');
                event.preventDefault();
                form[i].appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(form[i]);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });   
                
                postData(body, () => {
                    statusMessage.textContent = successMessage;
                }, (error) => {                
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
                //4) После отправки инпуты должны очищаться
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            });
        }

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
              console.log(request.readyState);
              console.log(request.status);
              console.log(request.statusText);
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
     //validator
    /* const form = document.querySelectorAll('form'),
        phone = document.querySelectorAll('.form-phone'),    
        name = document.querySelectorAll('input[name="user_name"]'),   
        message = document.querySelectorAll('input[name="user_message"]');    
    
    for (let i = 0; i < form.length; i++) {
        const validator = function () {
            phone[i].value = phone[i].value.replace(/[^0-9+]/ig, '');
            name[i].value = name[i].value.replace(/[^а-яА-Я \ ]/ig, '');
            message[i].value = message[i].value.replace(/[^а-яА-Я \ ]/ig, '');
        }
        phone[i].addEventListener('input', validator);
        name[i].addEventListener('input', validator);
        message[i].addEventListener('input', validator);
    }; */
};

export  default sendForm;
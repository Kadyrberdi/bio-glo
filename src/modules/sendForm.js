const sendForm = () => {
        const errorMessage = 'Что то пошло не так ...',
            loadMessage = 'Загрузка ...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const forms = document.querySelectorAll('form'), 
        directorForm = document.querySelector('.director-form'),
        popup = document.querySelector('.popup'),
        phone = document.querySelectorAll('input[name="user_phone"]'),   
        question = document.querySelector('input[name="user_quest"]'),   
        name = document.querySelectorAll('input[name="user_name"]');  
        
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2 rem;';

        function hidePopup() {
            popup.style.display = 'none';
        }
        function hideStsMsg() {
            statusMessage.textContent = '';
        }
        

        forms.forEach(elem => {    
            elem.addEventListener('submit', (event) => {
                const inputs = document.querySelectorAll('form input');
                let quest = question.value;
                console.log('quest: ', quest);
                event.preventDefault();
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(elem);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                }); 
                
                postData(body, () => {
                    statusMessage.textContent = successMessage;
                    setTimeout(hideStsMsg, 2000);
                    setTimeout(hidePopup, 3000);
                }, (error) => {                
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setTimeout(hideStsMsg, 2000);
                    setTimeout(hidePopup, 3000);
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

        phone.forEach(elem => {
            const validator = function () {
                elem.value = elem.value.replace(/[^0-9+]{7,12}/ig, '');
            };
            elem.addEventListener('input', validator);
        });
        name.forEach(elem => {
            const validator = function () {
                elem.value = elem.value.replace(/[^а-яА-Я \ ]/ig, '');
            };
            elem.addEventListener('input', validator);
        });
};

export  default sendForm;

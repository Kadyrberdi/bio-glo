const accordion = () => {
    const tabHeader = document.querySelectorAll('.panel-group'),
        tab = document.querySelectorAll('.panel'),
        tabContent = document.querySelectorAll('.collapse'),
        nextBtn = document.querySelectorAll('.construct-btn');

    const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tabContent[i].classList.add('in');
                } else {
                    tabContent[i].classList.remove('in');
                }
            }
    };
    tabHeader.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;            
            target = target.closest('.panel');
            if (target.classList.contains('panel')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        }); 
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.matches('.construct-btn') || event.target.tagName === 'SPAN') { // вторая условия не рабочий
                nextBtn.forEach((item, i) => {
                    if (item === event.target) {
                        toggleTabContent(i + 1);
                    }
                });
            }
            // не работающий код 
            if (event.target.tagName === 'SPAN') {
                nextBtn.forEach((item, i) => {
                    if (item === event.target) {
                        toggleTabContent(i + 1);
                    }
                });
            }
        });
    });
};

export  default accordion;

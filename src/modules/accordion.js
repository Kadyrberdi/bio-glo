const accordion = () => {
    const tabHeader = document.querySelectorAll('.panel-group'),
    tab = document.querySelectorAll('.panel'),
    tabContent = document.querySelectorAll('.collapse');

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
            target = target.closest('.panel'); // если не найдет поднимается на вверх и ищет его родителей
            if (target.classList.contains('panel')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        }); 
    }); 
};

export  default accordion;

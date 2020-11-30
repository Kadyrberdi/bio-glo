const accordion = () => {
    const firstAccordion = document.querySelector('#accordion');
    const SecondAccordion = document.querySelector('#accordion-two');

    const toggleBlock = (event) => {
        const { target } = event;

        if (target.closest('.panel-heading')) {
            const parent = target.closest('.panel-default');
            const child = parent.querySelector('.panel-collapse');
            document.querySelectorAll('.panel-collapse').forEach((item) => {
                if (item === child) {
                    child.classList.add('in');
                } else {
                    item.classList.remove('in');
                }
            });
        }
        if (target.closest('.next-btn')) {
            const parent = target.closest('.panel-default');
            const child = parent.querySelector('.panel-collapse');
            const nextBlock = parent.nextSibling.nextSibling;
            const nextBlockChild = nextBlock.querySelector('.panel-collapse');
            
            child.classList.remove('in');
            nextBlockChild.classList.add('in');
        }
    };
    firstAccordion.addEventListener('click', toggleBlock);    
    SecondAccordion.addEventListener('click', toggleBlock);   
    
    //Кнопка "Больше"
    const addBtn = document.querySelector('.add-sentence-btn'),
        hiddenElem = document.querySelector('.visible-sm-block'),
        hiddenElems = document.querySelectorAll('.hidden');
    addBtn.addEventListener('click', () => {
        hiddenElem.classList.remove('visible-sm-block');
        hiddenElems.forEach(elem => {
            elem.classList.remove('hidden');
        })
        addBtn.style.display = 'none';
    });
};

export  default accordion;

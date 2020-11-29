const calc = () => {
    const checkbox = document.querySelectorAll('[type=checkbox]');
    const grandParent = document.getElementById('collapseTwo');
    const parent = grandParent.querySelector('.panel-body');
    
    let onoffswitchOne = document.getElementById('myonoffswitch'),
        onoffswitchTwo = document.getElementById('myonoffswitch-two'),
        countSeptic;
        
    const oneChamber = 10000,
        TwoChamber = 15000;

    const hideSecondWell = () => {
        for (let i = 3; i < parent.children.length - 1; i++) {
            parent.children[i].style.display = 'none';
        }
    };
    const showSecondWell = () => {
        for (let i = 3; i < parent.children.length - 1; i++) {
            parent.children[i].style.display = 'inline-block';
        }
    };

    checkbox.forEach(elem => {
        elem.addEventListener('click', () => {
            if (onoffswitchOne.checked === true) {
                countSeptic = TwoChamber;
                console.log('countSeptic: ', countSeptic);
                hideSecondWell();
            } else {
                countSeptic = oneChamber;
                console.log('countSeptic: ', countSeptic);
                showSecondWell();
            }
        });
    });

};

export  default calc;

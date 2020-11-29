const calc = () => {
    const tabHeader = document.querySelectorAll('.panel-group');
    let onoffswitchOne = document.getElementById('myonoffswitch'),
        onoffswitchTwo = document.getElementById('myonoffswitch-two');
        
    const oneChamber = 10000,
        TwoChamber = 15000;

    onoffswitchOne = TwoChamber;


    tabHeader.forEach(elem => {
        elem.addEventListener('click', (event) => {
            let target = event.target;            
            if (target.id === 'myonoffswitch') {
                onoffswitchOne = oneChamber;
                console.log('onoffswitchOne: ', onoffswitchOne);
            }
            
        }); 
    });  

};

export  default calc;

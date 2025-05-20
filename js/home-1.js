
// step -1: add an event handler to the add money button inside the form 
document.getElementById('add-money-btn').addEventListener('click', function(event){
    // prevent pagereload
    event.defaultPrevented
    // step 2: get money to be added 
    const addMoneyInput = document.getElementById('add-money-input').value
    //  get the pin number 
    const pinNumber = document.getElementById('pin-number').value;
    
    // step 3: verify the pin number
    if(pinNumber === '1234'){
        console.log('Give him the access'); 

        // step 4 get the current balance
        const currentBalance = document.getElementById('current-balance').innerText;
        // step 5 : add money with the current account 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const currentBalanceNumber = parseFloat(currentBalance)
        const newBalance = addMoneyNumber + currentBalanceNumber;
        console.log(newBalance);

    }else{
        alert('Fail to add momey, pls try again')
    }


})
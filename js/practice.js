/* 1. Add event listner to the add money button (form submit) 
----> make sure to preventDefault so that page does'nt reload
2. get the money user wants to add and also get the pin number provided
3. verify the pin number, for wrong pin number => faild to add and for the right pin number allow to add number to the acc balance.
4. get the current balance
5. add money to be added with the current balance
6. display/update the balance in the DOM/UI
*/



document.getElementById('add-money-btn').addEventListener('click', function(evnet){
    event.defaultPrevented
    const addAmount = document.getElementById('add-amount').value ;
    const addPin = document.getElementById('pin').value;
    if(addPin === '1234'){
        const existingBalance = document.getElementById('existing-balance').innerText
        const newBalance = parseInt(existingBalance) + parseInt (addAmount)  
        document.getElementById('existing-balance').innerText = newBalance
        // console.log(newBalance);

    }else{
        alert ('failed to add money')
    }
})

document.getElementById('btn-money').addEventListener('click', function(event){
/* prevent page relaod after form submit */
event.preventDefault()
const addAmount = document.getElementById('add-amount').value ;
const pinNumber = document.getElementById('pin-number').value;
if(pinNumber === '1234'){
    const accountBalance = document.getElementById('account-balance').innerText;
    const addMoneyNumber = parseFloat(addAmount)
    const existingBalanceNumber = parseFloat(accountBalance)
    const updatedBalance = addMoneyNumber + existingBalanceNumber;
    console.log( updatedBalance);

    /* update the balance in the UI\DOM */
    document.getElementById('account-balance').innerText = updatedBalance

}else{
    alert('Fail to add money')
}

})
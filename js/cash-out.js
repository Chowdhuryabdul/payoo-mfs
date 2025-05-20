/* document.getElementById('add-amount').addEventListener('click', function(event){
    event.defaultPrevented;
    const amount = document.getElementById('amount').value ;
    const pin = document.getElementById('pin').value;
    if(pin === '1234'){
        // console.log('pls add money');
       const existinAmount = document.getElementById('existing-amount').innerText
       const totalAmount = parseInt(amount) + parseInt (existinAmount)
       document.getElementById('existing-amount').innerText = totalAmount
    }else{
        alert ('wrong password or wrong pin code')
    }
    
}) */


// Cash out section 

document.getElementById('cash-out').addEventListener('click', function(event){
    event.defaultPrevented
    const withdrawnAmount = document.getElementById('amount').value ;
    const pin = document.getElementById('pin').value;
    if(pin === '1234'){
        const existinAmount = document.getElementById('existing-amount').innerText;
        const updatedAmount = parseInt(existinAmount) - parseInt(withdrawnAmount)
        document.getElementById('existing-amount').innerText = updatedAmount
    }else{
        alert ('your pincode is wrong')
    }
})


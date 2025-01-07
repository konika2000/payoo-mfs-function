document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber =getInputFieldValueById('input-cashout-pin');
    // 
    if(pinNumber === 111){
       const balance =getTextFieldValueById('account-balance');
       const newBalance = balance - cashOut;
       document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('invalid pin number')
    }
})
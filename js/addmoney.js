document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('add money button clicked')
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);
    // const addMoney =document.getElementById('add-money-number').value;
    // const addMoneyNumber =parseFloat(addMoney);
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    if(pinNumber === 111){
       const balance = getTextFieldValueById('account-balance');
      const newBalance = balance + addMoney;
      document.getElementById('account-balance').innerText =newBalance
      
      document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money')
    }
    // console.log('add money with parameter', addMoney, pinNumber)
})
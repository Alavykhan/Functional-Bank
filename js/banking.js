// Deposit

document.getElementById('deposit-submit').addEventListener('click', function(){
    // Input integration
    const depositInput = document.getElementById('deposit-amount');
    const deposit = depositInput.value;
    console.log(deposit);

    // Balance Attached
    const depositBalance = document.getElementById('deposit-total');
    const previousBalance = depositBalance.innerText;
    const newBalance = parseFloat(deposit);
    if( newBalance >0){
        const balanceUpdate = parseFloat(previousBalance) + newBalance;
        depositBalance.innerText = balanceUpdate;
    }
    
    depositInput.value='';

    // Total Balance 
    const depositUpdate = document.getElementById('total-amount');
    const depositBalanceUpdate = depositUpdate.innerText;
    if(newBalance > 0){
        const totalDepositUpdate = parseFloat(depositBalanceUpdate) + newBalance;
        depositUpdate.innerText = totalDepositUpdate;
    }
})

// Withdraw

document.getElementById('withdraw-submit').addEventListener('click', function(){
    // Input Integration
    const inputWithdraw = document.getElementById('withdraw-amount'); 
    const withdraw = inputWithdraw.value;
    const newBalance = parseFloat(withdraw);
    console.log(newBalance); 

    // Balance Attached
    const withdrawBalance = document.getElementById('withdraw-total');
    const previousBalance = withdrawBalance.innerText;
    if(newBalance>0){
        const withdrawUpdate = parseFloat(previousBalance) + newBalance;
        withdrawBalance.innerText = withdrawUpdate; 
    }
    inputWithdraw.value = '';

    // Total Balance
    const totalWithdraw = document.getElementById('total-amount');
    const withdrawBalanceUpdate = totalWithdraw.innerText; 
    if(newBalance> 0){
        const totalWithdrawUpdate = parseFloat(withdrawBalanceUpdate) - newBalance; 
        totalWithdraw.innerText = totalWithdrawUpdate; 
    }
})
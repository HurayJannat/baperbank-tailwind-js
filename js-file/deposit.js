document.getElementById("btn-deposit").addEventListener('click', function () {
    const depositAmountElement = document.getElementById("deposit-field");
    const depositAmountString = depositAmountElement.value;
    const depositAmount = parseFloat(depositAmountString);

    

    const totalDepositAmountElement = document.getElementById("total-deposit");
    const totalDepositAmountString = totalDepositAmountElement.innerText;
    const totalDepositAmount = parseFloat(totalDepositAmountString);

    

    const finalDepositAmount = depositAmount+ totalDepositAmount;
    totalDepositAmountElement.innerText = finalDepositAmount;


    const balanceField = document.getElementById("total-balance");
    const totalBalanceString = balanceField.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const finalTotalBalance = totalBalance + depositAmount;
    balanceField.innerText = finalTotalBalance;


    depositAmountElement.value = '';
    

    
})
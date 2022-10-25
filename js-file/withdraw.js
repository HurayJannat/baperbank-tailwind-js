document.getElementById('btn-withdraw').addEventListener("click", function () {
    const withdrawAmountField = document.getElementById("withdraw");
    const withdrawAmountString = withdrawAmountField.value;
    const withdrawValue = parseFloat(withdrawAmountString);

    withdrawAmountField.value = '';

    if (isNaN(withdrawValue))
    {
        alert("Please Enter a number");
        return;
        }

    const withDrawField = document.getElementById("total-withdraw");
    const withDrawString = withDrawField.innerText;
    const withdraw = parseFloat(withDrawString);

    
    const balanceField = document.getElementById("total-balance");
    const balanceString = balanceField.innerText;
    const balance = parseFloat(balanceString);

    if (withdrawValue > balance)
    {
        alert("Baper Bank E Etttto money nai!!!!!");
        return;
    }

    const finalWithdraw = withdraw + withdrawValue;
    withDrawField.innerText = finalWithdraw;

    const totalBalance = balance - withdrawValue;
    balanceField.innerText = totalBalance;

    
})
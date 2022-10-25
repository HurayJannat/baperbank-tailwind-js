document.getElementById('btn-withdraw').addEventListener("click", function () {
    const withdrawAmountField = document.getElementById("withdraw");
    const withdrawAmountString = withdrawAmountField.value;
    const withdrawValue = parseFloat(withdrawAmountString);

    const withDrawField = document.getElementById("total-withdraw");
    const withDrawString = withDrawField.innerText;
    const withdraw = parseFloat(withDrawString);

    const finalWithdraw = withdraw + withdrawValue;
    withDrawField.innerText = finalWithdraw;

    const balanceField = document.getElementById("total-balance");
    const balanceString = balanceField.innerText;
    const balance = parseFloat(balanceString);

    const totalBalance = balance - withdrawValue;
    balanceField.innerText = totalBalance;

    withdrawAmountField.value = '';
})
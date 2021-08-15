//deposit
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositString = depositInput.value;
    const depositValue = parseFloat(depositString);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalVal = parseFloat(depositTotalText);

    const newDepositBal = depositTotalVal + depositValue;
    depositTotal.innerText = newDepositBal;


    // update balance
    const current = document.getElementById('current-bal');
    const currentBalText = current.innerText;
    const newCurrent = parseFloat(currentBalText);
    let currentNewBal = newCurrent + depositValue;
    console.log(currentNewBal);
    current.innerText = currentNewBal;

    depositInput.value = '';

})

//withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withDraw = parseFloat(withdrawText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalVal = parseFloat(withdrawTotalText);

    const newTotalWithDraw = withDraw + withdrawTotalVal;
    withdrawTotal.innerText = newTotalWithDraw;

    const current = document.getElementById('current-bal');
    const currentText = current.innerText;
    const currentBal = parseFloat(currentText);
    const newCurrentBal = currentBal - withDraw;
    current.innerText = newCurrentBal;

    withdrawInput.value = '';

})
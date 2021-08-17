// common function 
function getInputValue(inputBal) {
    const depositInput = document.getElementById(inputBal);
    const depositString = depositInput.value;
    const depositVal = parseFloat(depositString);
    depositInput.value = '';
    return depositVal;
}

function getInnerTextValue(innerTextBal) {
    const depositTotal = document.getElementById(innerTextBal);
    const depositTotalText = depositTotal.innerText;
    const depositTotalBal = parseFloat(depositTotalText);
    return depositTotalBal;
}

function setNewTotalBal(newBal) {
    const bal = document.getElementById(newBal);
    return bal;
}

function getCurrentBal(currentBalNew) {
    const current = document.getElementById(currentBalNew);
    const currentText = current.innerText;
    const currentBal = parseFloat(currentText);
    return currentBal;

}


//deposit
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositValue = getInputValue('deposit-input');
    const depositTotalVal = getInnerTextValue('deposit-total');

    const newDepositBal = depositTotalVal + depositValue;
    setNewTotalBal('deposit-total').innerText = newDepositBal;

    // update balance

    const newCurrent = getCurrentBal('current-bal');
    let currentNewBal = newCurrent + depositValue;
    setNewTotalBal('current-bal').innerText = currentNewBal;

})

//withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const witdrawValue = getInputValue('withdraw-input');
    const withdrawVal = getInnerTextValue('withdraw-total');


    const withDraw = witdrawValue;
    const withdrawTotalVal = withdrawVal;

    const newTotalWithDraw = withDraw + withdrawTotalVal;
    setNewTotalBal('withdraw-total').innerText = newTotalWithDraw;

    const current = document.getElementById('current-bal');
    const currentText = current.innerText;
    const currentBal = parseFloat(currentText);

    const newCurrentBal = currentBal - withDraw;
    current.innerText = newCurrentBal;



})
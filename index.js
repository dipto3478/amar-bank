// get input value
function getInputValue(value){
    const inputValue = document.getElementById(value);
    const input = parseFloat(inputValue.value);
    inputValue.value = '';
    return input;
}
// get inner text value
function getInnerTextValue(textValue){
    const innerTextValue = document.getElementById(textValue);
    const innerValue = parseFloat(innerTextValue.innerText);
    return innerValue;
}
// get element set
function getElementSet(elementId, newValue){
    const elementSet = document.getElementById(elementId);
    elementSet.innerText = newValue;
}

// deposit button add event
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-field');
    const perviousDepositAmount = getInnerTextValue('deposit-money');

    const currentDeposit = perviousDepositAmount + depositAmount;
    getElementSet('deposit-money', currentDeposit);

    const balancesAmount = getInnerTextValue('balances-money');
     
    const currentBalances = balancesAmount + depositAmount;
    getElementSet('balances-money', currentBalances);
})
// withdraw button add event
document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawAmount = getInputValue('withdraw-field');
    const previousWithdrawAmount = getInnerTextValue('withdraw-money');

    const currentWithdraw = previousWithdrawAmount + withdrawAmount;
    getElementSet('withdraw-money', currentWithdraw);

    const balancesAmount = getInnerTextValue('balances-money');

    const currentBalances = balancesAmount - withdrawAmount;
    getElementSet('balances-money', currentBalances);
})
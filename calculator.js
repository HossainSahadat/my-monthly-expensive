// All user inputid called in a on function 
function getUserInput(inputid) {
    const UserInput = document.getElementById(inputid);
    const UserInputText = UserInput.value;
    const UserInputAmount = parseFloat(UserInputText);
    return UserInputAmount;
}
document.getElementById("total-cost-calculate").addEventListener("click", function () {

    const netIncomeValue = getUserInput("net-income")
    const inputFoodCost = getUserInput("food-cost");
    const inputRentCost = getUserInput("rent-cost");
    const inputClothCost = getUserInput("cloth-cost");
    //sum total cost
    const totalCostBalance = inputFoodCost + inputRentCost + inputClothCost;
    if (isNaN(totalCostBalance) || totalCostBalance > netIncomeValue) {
        alert("Your Income money have not enough to expense");
    }
    else if (netIncomeValue <= 0 || inputFoodCost <= 0 || inputRentCost <= 0 || inputClothCost <= 0) {
        alert("Please Give positive Amount value");
    } else {
        const totalExpens = document.getElementById("total-expense")
        totalExpens.innerText = totalCostBalance;
        //  Add total expenses with balance  
        const balanceAdd = document.getElementById("total-balance");
        /* get ta balance */
        balanceAdd.innerText = netIncomeValue - parseFloat(totalExpens.innerText);
    }

})
//save button handle with event
document.getElementById("saved-button").addEventListener("click", function () {

    const saveInputValue = document.getElementById("saveInput").value;
    const inputIncomeValue = document.getElementById("net-income").value;
    /* saviing uesr input income amount */
    const balanceAdded = document.getElementById("total-balance");
    const savingAmount = document.getElementById("saving-balance");
    const remainigBalance = document.getElementById("remainig-balance");
    let inputParsentValue = (saveInputValue * inputIncomeValue) / 100;

    if (isNaN(saveInputValue) || inputParsentValue > parseFloat(balanceAdded.innerText)) {
        alert("You have not enough money for save");
    } else if (saveInputValue < 0) {
        alert("Please Give A positive Amount Value");
    } else {
        /* get to remainig balance */
        remainigBalanceValue = parseFloat(balanceAdded.innerText) - inputParsentValue;
        savingAmount.innerText = inputParsentValue;
        remainigBalance.innerText = remainigBalanceValue;
    }
})
document.getElementById("depo").addEventListener("click", function () {
  const depositInput = parseFloat(document.getElementById("deposit").value);

  const depositTotal = document.getElementById("de");
  const currentdepositAmmount = parseFloat(depositTotal.innerText);
  const updatedepositTotal = parseFloat(currentdepositAmmount + depositInput);

  depositTotal.innerText = updatedepositTotal;

  //    update totalbalance
  const tba = document.getElementById("tba");
  const balanceTotal = document.getElementById("t");
  const currentbalanceTotal = parseFloat(balanceTotal.innerText);
  const updatetotalBalance = currentbalanceTotal + depositInput;
  balanceTotal.innerText = updatetotalBalance;
  tba.innerText = updatetotalBalance;
});

// withdraw balance
document.getElementById("withd").addEventListener("click", function () {
  const withdrawInput = parseFloat(document.getElementById("withdraw").value);

  const withdrawTotal = document.getElementById("wi");
  const currentwithdrawAmmount = parseFloat(withdrawTotal.innerText);
  const updatewithdrawTotal = parseFloat(
    currentwithdrawAmmount + withdrawInput
  );
  withdrawTotal.innerText = updatewithdrawTotal;

  // update total balance
  const tba = document.getElementById("tba");
  const balanceTotal = document.getElementById("t");
  const currentbalanceTotal = parseFloat(balanceTotal.innerText);
  const updatetotalBalance = currentbalanceTotal - withdrawInput;
  balanceTotal.innerText = updatetotalBalance;
  tba.innerText = updatetotalBalance;
});

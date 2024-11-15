function getEmi() {
  let amount = document.getElementById("amount").value;
  let intrest = document.getElementById("rate").value;
  let tenure = document.getElementById("tenure").value;

  // Calculate EMI
  let intrestRate = (amount * (intrest * 0.01)) / tenure;
  const total = (amount / tenure + intrestRate).toFixed(2);

  // Display EMI
  document.getElementById("emi").innerHTML = "EMI : " + total + "/- RS";
}
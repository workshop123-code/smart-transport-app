function planJourney() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let time = document.getElementById("time").value;

  if(from && to && time) {
    document.getElementById("journeyResult").style.display = "block";
    document.getElementById("journeyResult").innerHTML = `
      <h3>Best Route Found ✅</h3>
      <p><b>From:</b> ${from} → <b>To:</b> ${to}</p>
      <p><b>Departure Time:</b> ${time}</p>
      <p>Suggested Bus: <b>Bus #25</b> | Fare: ₹35</p>
      <p>Eco-Score: Saved <b>2.3 kg CO₂</b> compared to private car</p>
    `;
  } else {
    alert("Please fill all details to plan your journey.");
  }
}

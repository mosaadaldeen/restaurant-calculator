const calculate = () => {
  const bill = Number(document.getElementById("bill").value);

  const people = Number(document.getElementById("people").value);

  const option = Number(document.getElementById("option").value);

  document.getElementById("each").style.display = "none";

  const results = ((bill * option) / people).toFixed(2);

  document.getElementById("result").innerHTML = results;

  if (people === "" || people <= 1) {
    document.getElementById("each").style.display = "none";
    people = 1;
  } else {
    document.getElementById("each").style.display = "block";
  }
};

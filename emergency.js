function countTotalCopy() {
  let totalCount = parseInt(document.getElementById("total-count").innerText);
  totalCount += 1;
  document.getElementById("total-count").innerText = totalCount;
}

function callCalculation() {
  let totalCoin = parseInt(document.getElementById("total-coin").innerText);
  if (totalCoin < 20) {
    alert("");
  } else {
    totalCoin = totalCoin - 20;
    document.getElementById("total-coin").innerText = totalCoin;

    const serviceName = document.getElementById("national-emergence").innerText;
    const serviceNumber = document.getElementById(
      "national-emergence-number"
    ).innerText;

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    console.log(formattedTime);
  }
}

const historyData = [];

function clearData() {
  const transctionContainer = document.getElementById("transction-container");
  transctionContainer.innerHTML = "";
}

function countTotalCopy() {
  let totalCount = parseInt(document.getElementById("total-count").innerText);
  totalCount += 1;
  document.getElementById("total-count").innerText = totalCount;
}

function callHistoryCalculation(serviceName, serviceNumber) {
  let totalCoin = parseInt(document.getElementById("total-coin").innerText);
  if (totalCoin < 20) {
    alert("Invalid");
  } else {
    totalCoin = totalCoin - 20;
    document.getElementById("total-coin").innerText = totalCoin;

    const sName = document.getElementById(serviceName).innerText;
    const sNumber = document.getElementById(serviceNumber).innerText;

    const date = new Date().toLocaleTimeString();

    const data = {
      name: sName,
      number: sNumber,
      cdate: date,
    };

    historyData.push(data);

    const transctionContainer = document.getElementById("transction-container");
    transctionContainer.innerHTML = "";

    for (const hdata of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
                    <div class="flex justify-between items-center bg-[#FAFAFA] px-2 py-2 mt-2 rounded-xl">
                        <div>
                            <h2>${hdata.name}</h2>
                            <p class="text-[#5C5C5C]">${hdata.number}</p>
                        </div>
                        <div>
                            <p>${hdata.cdate}</p>
                        </div>
                    </div>  `;

      transctionContainer.appendChild(div);
    }
  }
}

function copyText() {
  const phoneNumber = document.getElementById(
    "national-emergence-number"
  ).innerText;
  navigator.clipboard.writeText(phoneNumber);
}

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
  const sName = document.getElementById(serviceName).innerText;
  const sNumber = document.getElementById(serviceNumber).innerText;

  let totalCoin = parseInt(document.getElementById("total-coin").innerText);
  if (totalCoin < 20) {
    alert("❌" + "আপনার পর্যাপ্ত কয়েন নেই । কল করতে কমপক্ষে ২০ কয়েন লাগবে ।");
  } else {
    alert("📞 " + "Calling " + sName + " " + sNumber + "...");
    totalCoin = totalCoin - 20;
    document.getElementById("total-coin").innerText = totalCoin;

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

function copyText(serviceNumber) {
  const phoneNumber = document.getElementById(serviceNumber).innerText;
  navigator.clipboard.writeText(phoneNumber);
  alert("নাম্বার কপি হয়েছে : " + phoneNumber);

  let totalCopy = parseInt(document.getElementById("total-copy").innerText);
  totalCopy = totalCopy + 1;
  document.getElementById("total-copy").innerText = totalCopy;
}

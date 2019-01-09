var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates){
  var salesResults = {};
  var companyName = "";
  var companySalesTotals = 0;


  for(let i = 0; i < salesData.length; i++){
    companyName = salesData[i].name;
    companySalesTotals = calcSales(salesData[i].sales)


    if(!salesResults[companyName]){
      salesResults[companyName] = {
        totalSales: companySalesTotals,
        totalTaxes: calcTaxes(companySalesTotals, taxRates, salesData[i])
      }
    }
    else{
      salesResults[companyName].totalSales += companySalesTotals;
      salesResults[companyName].totalTaxes += calcTaxes(companySalesTotals, taxRates, companySalesData[i])
    }
  }

  return salesResults;
}

function calcTaxes(calculatedSales, taxData, companyInfo){
  let province = companyInfo.province;
  let taxes = calculatedSales * taxData[province];

  return taxes;
}

function calcSales(salesInfo){
  let salesTotal = 0;

  for(let j = 0; j < salesInfo.length; j++){
    salesTotal += salesInfo[j];
  }
  return salesTotal;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));
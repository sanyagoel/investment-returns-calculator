
export default  function  returnInvestment(startAmount,annualContribution,rateOfReturn,duration){
     startAmount = Number(startAmount);
     annualContribution = Number(annualContribution);
     rateOfReturn = Number(rateOfReturn);
     duration = Number(duration);
    let arrayData = [];

    let startingAmount = startAmount;   
    let totalInterest = 0;
    let totalContribution = 0;
    for(let i=0;i<duration;i++){
        let year = i+1;
        let yearlyInterest = (startingAmount * rateOfReturn)/100;
        totalInterest += yearlyInterest;
        totalContribution += annualContribution;
        let endBalance = startingAmount + annualContribution + yearlyInterest;
        arrayData.push({
            year : year,
            startAmount : startingAmount,
            totalContribution : totalContribution,
            yearlyInterest : yearlyInterest,
            totalInterest : totalInterest,
            endBalance : endBalance
        })
        startingAmount = endBalance;
    }
    return arrayData;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
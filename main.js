const incomeSalary=document.getElementById('income-salary'),
      incomeFreelance=document.getElementById('income-freelance'),
	  incomeExtra1=document.getElementById('income-extra-1'),
      incomeExstra2=document.getElementById('income-extra-2');

const costsFlat=document.getElementById('costs-flat'),
	  costsHouseServices=document.getElementById('costs-house-services'),
	  costsTrnsport=document.getElementById('costs-transport'),
      costsCradit=document.getElementById('costs-credit');

const totalMonthInput=document.getElementById('total-month'),
	  totalDayInput=document.getElementById('total-day'),
	  totalYearInput=document.getElementById('total-year');

let   totalMonth,  totalDay,  totalYear;

const moneyBoxRange=document.getElementById('money-box-range'),
	  accumulationInput=document.getElementById('accumulation'),
	  spend=document.getElementById('spend');

	  
let   accumulation=0,  
      totalPrecents=0;

const inputs = document.querySelectorAll('.input');

for(input of inputs){
	input.addEventListener('input', () => {
		countingAvailableMoney();
		calculationPrecents();
	})
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvailableMoney = () => {
	const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExstra2);
	const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTrnsport) + strToNum(costsCradit);

	totalMonth = totalPerMonth - totalCosts;
	totalMonthInput.value = totalMonth;

}

moneyBoxRange.addEventListener('input', (e)=>{
	const totalPrecentEl = document.getElementById('total-precents');
	totalPrecents=e.target.value;
	totalPrecentEl.innerHTML = totalPrecents;

	calculationPrecents ();
});

const calculationPrecents = () => {

	accumulation = ((totalMonth*totalPrecents)/100).toFixed();
	accumulationInput.value = accumulation;

	spend.value=totalMonth-accumulation;

	totalDay = (spend.value/30).toFixed();
	totalDayInput.value = totalDay;

	totalYear = accumulation*10;
	totalYearInput.value = totalYear;

}


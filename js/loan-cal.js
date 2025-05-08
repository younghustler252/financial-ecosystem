const loanAmountInput = document.getElementById('loanAmount');
const durationInput = document.getElementById('duration');
const monthlyOutput = document.getElementById('monthly');
const totalOutput = document.getElementById('total');
const amountDisplay = document.querySelector('.amount-display');
const durationDisplay = document.querySelector('.duration-display');

const INTEREST_RATE = 0.3; // 2.5% monthly interest

function calculateLoan() {
  const principal = parseInt(loanAmountInput.value);
  const months = parseInt(durationInput.value);

  const totalInterest = principal * INTEREST_RATE * months;
  const totalRepayment = principal + totalInterest;
  const monthlyPayment = totalRepayment / months;

  amountDisplay.textContent = `₦${principal.toLocaleString()}`;
  durationDisplay.textContent = `${months} month${months > 1 ? 's' : ''}`;
  monthlyOutput.textContent = `₦${monthlyPayment.toFixed(2).toLocaleString()}`;
  totalOutput.textContent = `₦${totalRepayment.toFixed(2).toLocaleString()}`;
}

loanAmountInput.addEventListener('input', calculateLoan);
durationInput.addEventListener('input', calculateLoan);


// Initial load
calculateLoan();

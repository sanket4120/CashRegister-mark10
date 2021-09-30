const userAmount = document.getElementById('cash-given');
const billAmount = document.getElementById('bill-amount');
const change = document.querySelectorAll('#change td');
const form = document.getElementById('my-form');
const msg = document.getElementById('msg');
const secInput = document.querySelectorAll('.form-group')[1];

const cash = [2000, 500, 100, 20, 10, 5, 1];

secInput.style.display = 'none';

billAmount.addEventListener('input', () => {
  secInput.style.display = 'block';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 1; i <= 7; i++) {
    change[i].innerText = '';
  }
  msg.innerText = '';

  let billAmt = parseInt(billAmount.value);
  let userAmt = parseInt(userAmount.value);

  if (billAmt > 0) {
    if (userAmt) {
      if (userAmt < billAmt) {
        msg.innerText = 'Do you want to wash plates?';
      } else {
        let returnAmt = userAmt - billAmt;
        findReturn(returnAmt);
      }
    } else {
      msg.innerText = 'Please enter cash given by user';
    }
  } else {
    msg.innerText = 'Invalid Bill Amount';
  }
});

function findReturn(returnAmt) {
  for (let i = 0; i <= 6; i++) {
    change[i + 1].innerText = parseInt(returnAmt / cash[i]);
    returnAmt = returnAmt % cash[i];
  }
}

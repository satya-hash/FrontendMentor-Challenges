let bill = document.getElementById('bill');
let num = document.querySelector('#num');
let discount = document.querySelectorAll('.btns button');
let sub = document.querySelector('.submit');
let amount = document.querySelectorAll('.amount');
let reset = document.querySelector('#reset');
let billValue,numValue,disc,tipAmount,totalAmount;
bill.addEventListener('change', () => {
     billValue = parseFloat(bill.value);
     console.log(billValue);
})
num.addEventListener('change', () => {
     numValue = parseInt(num.value);
     console.log(numValue);
})
discount.forEach(item => {
     item.addEventListener('click', () => {
          disc = parseFloat(item.value)
          console.log(disc);
     })
})

sub.addEventListener('click', () => {
     
     tipAmount = (billValue * disc / 100) / numValue;
     totalAmount = (billValue - tipAmount) / numValue;
     amount[0].innerHTML = tipAmount;
     amount[1].innerHTML = totalAmount;
     console.log(tipAmount,totalAmount);
})
reset.addEventListener('click', () => {
     amount[0].innerHTML = 0;
     amount[1].innerHTML = 0;
     bill.value = 0;
     num.value = 0;
})
let data = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
]
let now = new Date();
let day = now.getDay();
let dayName = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let graph = document.querySelector('.graph');
graph.addEventListener('DOMContentLoaded', showChart());
function showChart() {
  let style = '#ec755d';
  let charts = data.map((element) => {
    return `<div class="data">
    <div class='chart'  id='${element.day}' style="height:${element.amount}%; background-color:${style}">
    <span class = 'tooltip'>${element.amount}</span>
             </div>
             <p>${element.day}</p>
             </div>`;
     });
     charts = charts.join(' ');
  graph.innerHTML = charts;
  let chart = document.querySelectorAll('.chart');
  let spans = document.querySelectorAll('.data span');
  for (let index = 0; index < chart.length; index++) {
    // if(dayName[day])
    chart[index].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = '#FF9B87';
      spans[index].style.visibility = 'visible';
       if (dayName[day - 1] == chart[index].getAttribute('id')) {
      chart[index].style.backgroundColor = '#B4DFE5'
    }
    })
    chart[index].addEventListener('mouseout', (event) => {
      event.target.style.backgroundColor = '#ec755d';
      if (dayName[day - 1] == chart[index].getAttribute('id')) {
      chart[index].style.backgroundColor = '#B4DFE5'
    }
    })
     if (dayName[day - 1] == chart[index].getAttribute('id')) {
      chart[index].style.backgroundColor = '#B4DFE5'
    }
    
  }
  
}

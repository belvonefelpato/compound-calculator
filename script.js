setInterval(function(){
  var min = document.getElementById("min").value
  var max = document.getElementById("max").value
  disclaimer = document.getElementById("disclaimer")
 
      disclaimer.innerHTML = "*Compounding on an average of " + (parseFloat(min)+parseFloat(max))/2 + "%"

}, 100);


function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min)
  return parseFloat(str).toFixed(decimals);
}

function preF1(number)
{
  setTimeout(function() {
  document.getElementById("buttonResult").innerHTML = "Calculating...";
}, 10);
  setTimeout(function() {
  f1(number);
}, 300); 
}

function f1(number){
  document.getElementById("buttonResult").innerHTML = "Calculating...";
  switchButtons(number)
  document.getElementById('res').value = ""
  min = document.getElementById("min").value
  max = document.getElementById("max").value
  initial = document.getElementById("in").value
  days = document.getElementById("days").value
  x = 0
  percentages = 0.0
  result=parseFloat(initial) 
  textResults = document.getElementById('res')
  pres2Text = document.getElementById('res2')
  
  textResults.innerHTML = "";
  pres2Text.innerHTML = "";
 
  while(x < days){
    random = getRandomFloat(min, max, 3)
    percentages += parseFloat(random);
    result += result*random / 100
    pres2Text.innerHTML += "Day "+(x+1)+": " + result.toFixed(2) + " USDT" + " - with " + random + "% gain"+"<br>" 
    x += 1
   }
    pres2Text.innerHTML += "<br>" + "========================" + "<br>"
    textResults.innerHTML += "======= RESULTS ========" + "<br><br>"
    textResults.innerHTML += "Amount Invested: " + initial +" USDT" + "<br>"
    textResults.innerHTML += "Total revenue for " + days + " days is: " + (result-initial).toFixed(2) +" USDT" + "<br>"
    textResults.innerHTML += "A gain of: " + ((result - initial) * 100 /initial).toFixed(3) + "%" + "<br>"
    textResults.innerHTML += "The gain percentage average was: " + (percentages / days).toFixed(3) + "%" + "<br>"  
    textResults.innerHTML += "The total you have in: " + days + " days is: " + parseFloat(result+initial).toFixed(2) + " USDT" + "<br><br>" 
    textResults.innerHTML += "<br>" + "====== ITERATIONS ======" + "<br>"
  
  switchClasses(number);
}

function switchButtons(number){
  var button = document.getElementById("buttonResult");
  
  if(number === 1){
  button.classList.remove('resultButton');
  button.classList.add('closeButton');
  button.setAttribute('onclick','switchClasses(2)');
  setTimeout(function() {
  button.innerHTML = "X";
}, 130)
}
else{
  button.classList.remove('closeButton');
  button.classList.add('resultButton');
  button.setAttribute('onclick','preF1(1)');
  setTimeout(function() {
  button.innerHTML = "Calculate";
}, 180);
}
}

function switchClasses(number){
  
var textArea = document.getElementById("textArea");
 
if(number === 1){
  textArea.classList.remove('textAreaContainerHidden');
  textArea.classList.add('textAreaContainerShowed');
}
else{
  textArea.classList.remove('textAreaContainerShowed');
  textArea.classList.add('textAreaContainerHidden');
  switchButtons(2)
}
}

function scrollToTop(){
  var textArea = document.getElementById("textArea");
  textArea.scrollTo({ top: 0, behavior: 'smooth' });
}
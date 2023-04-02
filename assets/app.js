var payment=document.getElementById('payment')

var x =0
payment.innerHTML=x

function calc() {
    var month = Number(document.getElementById('months').value);
    var percent = Number(document.getElementById('int-rate').value); 
    var loan = Number(document.getElementById('amount').value);
    
    var result = ((loan + ((loan*percent)/100)) / month).toFixed(2)
    payment.innerHTML=result
}

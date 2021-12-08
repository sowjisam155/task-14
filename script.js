var intialPrice=document.querySelector
("#Inital_price");
var stockQuantity=document.querySelector
("#stock_quantity");
var currentPrice=document.querySelector
("#current_price");
var submitBtn=document.querySelector("#submit-btn")
;
var outputBox=document.querySelector("#output_box")
;
submitBtn.addEventListener('click',submitHandler);
function submitHandler() {
    var ip=Number(intialPrice.value);
    var qty=Number(stockQuantity.value);
    var curr=Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
    
}
function calculateProfitAndLoss(initial,quantity,
current) {
    console.log(initial,quantity,current);
    if (initial > current){
        var loss=(initial-current)*quantity;
        var lossPercentage =(loss/initial)*100;
        showOutput(`Hey the loss is  ${loss} and the percentage is ${lossPercentage}%`);
    }else if (current>initial){
            var profit=(current - initial)*quantity;
            var profitPercentage =(profit / initial)*100;
            showOutput(`Hey the loss is  ${profit} and 
            the percentage is ${profitPercentage}%`);

    }else{


        showOutput('No pain no gain and No gain no pain');
    }
}
function showOutput(message)

{
    console.log(message)
    outputBox.innerText=message;
    
}
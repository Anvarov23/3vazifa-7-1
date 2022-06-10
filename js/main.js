var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elResult = document.querySelector(".js-result")



elForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    var elInputSum = elInput.value;
    var elSelectSum = elSelect.value;
    var totalResult = elInputSum * elSelectSum;
    
    elResult.textContent = totalResult;
    
    if (elInputVal < 0 ){
        elResult.textContent = ("Musbat son kiriting!")
    }
})
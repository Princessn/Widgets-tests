const updateSettingsBttn = document.querySelector('.updateSettings');
const addButton = document.querySelector('.addButton');

var call1 = 1;
var sms1 = 0;
var criticalLevel1 = 0;
var warningLevel1 = 0;

var callBillTotal = 0;
var smsBillTotal = 0;
var totalBillCost = 0;

//let call = document.querySelector(".callCostSetting");
  //  let sms = document.querySelector(".smsCostSetting");
 //   let criticalLevel = document.querySelector(".criticalLevelSetting");
  //  let warningLevel = document.querySelector(".warningLevelSetting");

 //   let callValue = Number(call.value);
   // let smsValue = Number(sms.value);
   // let warning = Number(warningLevel.value);
   // let critical = Number(criticalLevel.value);

function updateCosts() {

    let call = document.querySelector(".callCostSetting");
    let sms = document.querySelector(".smsCostSetting");
    let criticalLevel = document.querySelector(".criticalLevelSetting");
    let warningLevel = document.querySelector(".warningLevelSetting");

    let callValue = Number(call.value);
    let smsValue = Number(sms.value);
    let warning = Number(warningLevel.value);
    let critical = Number(criticalLevel.value);

 call1 = callValue;
 sms1 = smsValue;
 warningLevel1 = warning;
 criticalLevel1 = critical;
 

    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");
    }
    totalBillCost = smsBillTotal + callBillTotal;

    if (totalBillCost >= warningLevel1) {
        document.querySelector(".totalSettings").classList.add("warning");
    }
    else if (totalBillCost >= critical) {
        document.querySelector(".totalSettings").classList.add("danger");

}


function billSettings() {
    const radioButtonItemCheck = document.querySelector('input[name="billItemTypeWithSettings"]:checked');
   // let radioBtnCheck = radioButtonItemCheck.value;
   let criticalLevel = document.querySelector(".criticalLevelSetting");
   let warningLevel = document.querySelector(".warningLevelSetting");

if(totalBillCost< criticalLevel.value){
    if (radioButtonItemCheck.value  === "call") {

        callBillTotal += call1
        
        
        }  if (radioButtonItemCheck.value  === "sms") {
        smsBillTotal += sms1;
    }
    
        totalBillCost = smsBillTotal + callBillTotal;
}
    

    document.querySelector(".callTotalSettings").innerHTML = callBillTotal.toFixed(2);
    document.querySelector(".smsTotalSettings").innerHTML = smsBillTotal.toFixed(2);
    document.querySelector(".totalSettings").innerHTML = totalBillCost.toFixed(2);

    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");

    
    
    if (totalBillCost >=  criticalLevel.value) {
        document.querySelector(".totalSettings").classList.add("danger");

    }
     if (totalBillCost >= warningLevel.value && totalBillCost < criticalLevel.value) {
        document.querySelector(".totalSettings").classList.add("warning");

    } 
  

}
addButton.addEventListener('click', billSettings);
updateSettingsBttn.addEventListener('click', updateCosts);
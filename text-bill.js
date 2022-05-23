function calculateBill(){
    let amountOfCall = 2.75;
    let amountOfSms = 0.65;
    let CallString = '';
    let SmsString = '';
    let theTotalSms = 0;
    let theTotalCall = 0;
    let warningLevel = 30;
    let criticalLevel = 50;

function checkCall(aCall){
  if(aCall === 'call'){
    CallString = aCall;
  }
}

function checkSms(theSms){
   if(theSms === 'sms'){
        SmsString = theSms; 
    }
}

    function getCall(){
        return theTotalCall;
    }

    function getSms(){
        return theTotalSms;
    }

    function makeCall(){
        if(CallString === 'call'){
            theTotalCall += amountOfCall;
        }
    }

    function smsSent(){
        if(SmsString === 'sms'){
            theTotalSms += amountOfSms;
        }
    }

   function getTheTotal(){
      return theTotalCall + theTotalSms;
   }

   function theLevels(){
       if(getTheTotal() >= criticalLevel){
           return 'critical';
       }
       if(getTheTotal() >= warningLevel){
           return 'warning'
       }
   }
    return {
        checkCall,
        checkSms,
        getCall,
        getSms,
        makeCall,
        smsSent,
        getTheTotal,
        theLevels
    }
}

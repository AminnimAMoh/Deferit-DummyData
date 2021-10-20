const paymentStates = ["processing", "scheduled", "unable to pay", "paid"];

const generateRandomStatus=(index)=>{
    return paymentStates[index];
}

module.exports.generateRandomStatus= generateRandomStatus;
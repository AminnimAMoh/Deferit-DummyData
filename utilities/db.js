class RecieptsData {
  date;
  status;
  amount;
  constructor() {
    this.date;
    this.status;
    this.amount;
  }
  populate() {
    this.date = this.generateRandomDate(new Date(2012, 0, 1), new Date());
    this.status = this.generateRandomStatus(parseInt(Math.random() * 4));
    this.amount = this.generateRandomAmount();
    return {date:this.date, status:this.status, amount:this.amount}
  }
  generateRandomAmount() {
    return "$" + parseInt(Math.random() * 1000);
  }
  generateRandomDate = (start, end) => {
    //Solution from https://www.codegrepper.com/code-examples/javascript/generate+random+date+in+javascript
    const date=new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    //Converting the date generated to formated string.
    const stringDate=date.toLocaleString();
    //Removing the time from the date.
    const formatDate=stringDate.split(',')[0];
    return formatDate
  };
  generateRandomStatus = (index) => {
    const paymentStates = ["processing", "scheduled", "unable to pay", "paid"];
    return paymentStates[index];
  };
}

module.exports.RecieptsData = RecieptsData;

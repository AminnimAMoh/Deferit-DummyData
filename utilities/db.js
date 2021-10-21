class RecieptsData {
  date;
  status;
  amount;
  img;
  constructor() {
    this.date;
    this.status;
    this.amount;
    this.img;
  }
  populate() {
    this.date = this.generateRandomDate(new Date(2012, 0, 1), new Date());
    this.status = this.generateRandomStatus(parseInt(Math.random() * 4));
    this.amount = this.generateRandomAmount();
    this.img = this.generatePlaceHolderImages();
    return {
      date: this.date,
      status: this.status,
      amount: this.amount,
      img: this.img,
    };
  }
  generateRandomAmount() {
    return "$" + parseInt(Math.random() * 1000);
  }
  generateRandomDate = (start, end) => {
    //Solution from https://www.codegrepper.com/code-examples/javascript/generate+random+date+in+javascript
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    //Converting the date generated to formated string.
    const stringDate = date.toLocaleString();
    //Removing the time from the date.
    const formatDate = stringDate.split(",")[0];
    return formatDate;
  };
  generateRandomStatus = (index) => {
    const paymentStates = ["processing", "scheduled", "unable to pay", "paid"];
    return paymentStates[index];
  };
  generatePlaceHolderImages() {
    //These are the image sizes I found usable for receipts.
    // 3x: https://via.placeholder.com/826x1169
    // thumb(15x): https://via.placeholder.com/165x233
    const backgroundColours = [
      "061621",
      "12393D",
      "E4E5E7",
      "9C3C41",
      "5C3B42",
    ];
    const textColours = ["E4E5E7", "E4E5E7", "061621", "E4E5E7", "E4E5E7"];
    const randomPick = parseInt(Math.random() * 4);
    const thumbnail = `https://via.placeholder.com/165x233/${backgroundColours[randomPick]}/${textColours[randomPick]}`;
    const url = `https://via.placeholder.com/826x1169/${backgroundColours[randomPick]}/${textColours[randomPick]}`;
    return { url: url, thumbnail: thumbnail };
  }
}

module.exports.RecieptsData = RecieptsData;

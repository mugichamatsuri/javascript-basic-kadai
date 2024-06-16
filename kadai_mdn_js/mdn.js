let d = new Date();


let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let dayofweek = d.getDay();



const today = () => {
    console.log(year + '年' + month + '月' + day + '日');
  }
  
today();


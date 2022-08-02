let countryid=[]

function output(event){
  
  event.preventDefault();
  async function findingcurrencycode1(){
  let country=document.getElementById('typeCountry1').value;
  let restcountries=await fetch(`https://restcountries.com/v3.1/name/${country}`)
  var country1=await restcountries.json();
  var currencycode1=Object.keys(country1[0].currencies);
  currencycode1= currencycode1[0].toLowerCase();
  //console.log(currencycode1)
 countryid.push(currencycode1)
}
findingcurrencycode1()
    async function findingcurrencycode2(){
      let country=document.getElementById('typeCountry2').value;
      let restcountries=await fetch(`https://restcountries.com/v3.1/name/${country}`)
      var country2=await restcountries.json();
      var currencycode2=Object.keys(country2[0].currencies);
      currencycode2=currencycode2[0].toLowerCase();
     //console.log(currencycode2)
     countryid.push(currencycode2)
      
  }

findingcurrencycode2()
console.log(countryid)




  
async function httpcode(){
 
  let codes=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryid['0']}/${countryid['1']}.json`);
  let httpcode1= await codes.json();
  console.log(httpcode1);

}
httpcode();

}
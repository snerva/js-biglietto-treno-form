const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click', function (){
    const kmNumber = document.getElementById('user_km').value;
    console.log(kmNumber);
    const userAge = document.getElementById('user_age').value;
    console.log(userAge)

    const trainFare = kmNumber * 0.21;
    console.log(trainFare);

    let trainFarePrice;
    let finalPrice;


    if (userAge <= 18){
       trainFarePrice = trainFare * 20 / 100;
       console.log(trainFarePrice);
       finalPrice = trainFare - trainFarePrice;
       console.log(finalPrice);
    } else if (userAge >= 65){
       trainFarePrice = trainFare * 40 / 100;
       console.log(trainFarePrice);
       finalPrice = trainFare - trainFarePrice;
       console.log(finalPrice);
    } else {
       finalPrice = trainFare;
       console.log(finalPrice);
    }
})
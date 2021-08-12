let maleName = document.querySelector('#maleName')
let femaleName = document.querySelector('#femaleName')
let btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    let error = document.querySelector('.error');
    let result = document.querySelector('.result');

    if(maleName.value == femaleName.value){
        error.style.display = "block";
        error.innerHTML = "Error : Same Name You Can't Entry";
    }else{
        let calculation = Math.random() * 100;
        calculation = Math.floor(calculation) + 1;
        console.log(calculation);
        result.innerHTML = "Result : "+maleName.value + " & "+ femaleName.value + "'s Love Percentage is "+ calculation + "%";
        error.style.display = "none";

    };
})


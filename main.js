// BMI = testsúly / (magasság / 100) ** 2

function cal() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let bmi = weight / (height / 100) ** 2

    
    unToggle();
    
    if(bmi <= 18.5){
        document.getElementById('no1').classList.toggle('result-color')
    } else if (bmi <= 24.9) {
        document.getElementById('no2').classList.toggle('result-color')
    } else if (bmi <= 29.9) {
        document.getElementById('no3').classList.toggle('result-color')
    } else if (bmi <= 34.9) {
        document.getElementById('no4').classList.toggle('result-color')
    } else if (bmi <= 39.9) {
        document.getElementById('no5').classList.toggle('result-color')
    } else {
        document.getElementById('no6').classList.toggle('result-color')
    }

    console.log(Math.round(bmi / 100) * 100)
    document.getElementById('bmi-result').textContent = Math.round(bmi * 10) / 10

}

function unToggle() {
    for (let i = 1; i < 7; i++) {
       let idName = 'no' + i
       let e = document.getElementById(idName);
       if(e.classList.contains('result-color')){
        document.getElementById(idName).classList.toggle('result-color')
       }
       
    }
}


function init(){
    document.getElementById('cal').addEventListener('click', cal)
}

document.addEventListener('DOMContentLoaded', init)
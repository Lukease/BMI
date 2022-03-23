const weightElement = document.querySelector('.weight__input')
const heightElement = document.querySelector('.height__input')
const femaleElement = document.querySelector('.sex__female')
const maleElement = document.querySelector('.sex__male')

function calculateBMI(){
    const weight = Number(weightElement.value)
    const height = Number(heightElement.value)
    const valueBMI = weight/((height/100) * (height/100))
    console.log(valueBMI)

    if(height===0 || weight===0){
        alert('wpisz wartość!!')
    } else {
    
    let BMI

    if(valueBMI < 16){
        BMI = 'wygłodzenie'
    } else if(valueBMI >=16 && valueBMI < 17 ){
        BMI = 'wychudzenie'
    } else if(valueBMI >=17 && valueBMI < 18.5 ){
        BMI = 'Niedowaga'
    } else if(valueBMI >=18.5 && valueBMI < 25 ){
        BMI = 'OPTIMUM'
    } else if(valueBMI >=25 && valueBMI < 30 ){
        BMI = 'Nadwaga'
    } else if(valueBMI >=30 && valueBMI < 35 ){
        BMI = 'Otyłość I st.'
    } else if(valueBMI >=35 && valueBMI < 40 ){
        BMI = 'Otyłość II st.'
    } else if(valueBMI >=40){
        BMI = 'Otyłość III st.'
    } 

    const sex = femaleElement.checked ? 'Jesteś Kobietą' : 'Jesteś Mężczyzną'

    alert(sex + ' Twoje BMI wynosi '+ valueBMI +' twoje BMI wskazuje '+BMI)
    }
}
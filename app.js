const celsius = document.querySelector("#celsius > input")
const fahrenheit = document.querySelector("#fahrenheit > input")
const kelvin = document.querySelector("#kelvin > input")

function roundNum(num){
  return  Math.round(num*100) / 100
}

function celsiusToFandK(){
    const cTemp = parseFloat(celsius.value)
    const fTemp = (cTemp * (9/5)) + 32
    const kTemp = cTemp + 273.15

    fahrenheit.value = roundNum(fTemp)
    kelvin.value = roundNum(kTemp)
}

function fahrenheitToCandK(){
    const fTemp = parseFloat(fahrenheit.value)
    const cTemp = (fTemp - 33) * (5/9)
    const kTemp = (fTemp + 459.67) * 5/9

    celsius.value = roundNum(cTemp)
    kelvin.value = roundNum(kTemp)

}

function kelvinToFandC(){
    const kTemp = parseFloat(kelvin.value)
    const fTemp = 9/5 * (kTemp - 273) + 32;
    const cTemp = kTemp - 273.15

    kelvin.value = roundNum(kTemp)
    celsius.value = roundNum(cTemp)
}

celsius.addEventListener('input', celsiusToFandK)


fahrenheit.addEventListener('input', fahrenheitToCandK)


kelvin.addEventListener('input', kelvinToFandC)




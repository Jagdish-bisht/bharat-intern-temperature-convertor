console.log("converator")

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numberTemp = document.getElementById('input-data').value;
    // console.log(numberTemp);

    

    const tempSelected = document.querySelector('#input-type');
    const valeTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valeTemp);


    // Convert temperature from Celcius to Fahrenheit
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }
    let result;
    if(numberTemp !== ''){
        if (valeTemp == "cel") {
            result = celTOfah(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}° Fahrenheit`;
        } else {
            result = fahTOcel(numberTemp);
            document.getElementById('resultContainer').innerHTML = ` ${result}° Celsius`;
        } 
    }

    // setTimeout(() => {
    //     window.location.reload();
    // }, 1500);



})



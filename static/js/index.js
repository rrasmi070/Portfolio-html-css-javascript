const validateText = (wne_val) => {
    const regex = /\d/;
    // Test if the string contains any digit
    return regex.test(wne_val);
    
};
const validateNumber = (wne_val) => {
    const regex = /^\d+$/;
    // Test if the string contains any digit
    return regex.test(wne_val);
    
};
let formName = document.getElementById('name');
let formPhome = document.getElementById('phone');
formName.addEventListener('input',function(event){
    let res = validateText(event.target.value)
    console.log(res);
    if (res === true){
        document.getElementById('name-val').innerText="Can not contain integer value"        
    }else{
        document.getElementById('name-val').innerText=''
    }

})
formPhome.addEventListener('input',function(event){
    let res = validateNumber(event.target.value)
    console.log(res);
    if (res === true){
        document.getElementById('phone-val').innerText=''
    }else{
        document.getElementById('phone-val').innerText="Cotains numerical values."        
    }

})

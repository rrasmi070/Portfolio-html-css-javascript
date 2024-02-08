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
let formMessage = document.getElementById('message');


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


// send message validation
function sendMessage(){
    console.log(formMessage.value,"===========");
    let res = textboxValidation(formMessage.value)
    if (String(formName.value).length === 0 || String(formPhome.value).length === 0 || res === false ){
        document.getElementById('name-val').innerText = 'Name is required';
        document.getElementById('phone-val').innerText = 'Phone number is required';
    }else if (res != false) {
        document.getElementById('phone-val').innerText='';
        document.getElementById('name-val').innerText='';
        document.getElementById('message-val').innerText='';
        document.getElementById('contact-form').reset();
    }
}

var textboxValidation = (text_msg) => {
    if (String(text_msg).trim().length === 0) {
        document.getElementById('message-val').innerText="It can't be empty or whitespace."        
        return false
    }
}

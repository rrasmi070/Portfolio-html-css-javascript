const validateText = (wne_val) => {
    const regex = /\d/;
    // Test if the string contains any digit
    return regex.test(wne_val);
    
};
let formName = document.getElementById('name');
let formEmail = document.getElementById('email');
formName.addEventListener('input',function(event){
    let res = validateText(event.target.value)
    console.log(res);
    if (res === true){
        document.getElementById('name-val').innerText="Can not contain integer value"        
    }else{
        document.getElementById('name-val').innerText=''
    }

})
// const sendMessage = () => {
//     console.log(formName);
// };
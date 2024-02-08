const validateText = (wne_val) => {
    console.log("formName");
};
let formName = document.getElementById('name');
formName.addEventListener('input',function(event){
    console.log(event.target.value);
    let res = validateText(event.target.value)
    document.getElementById('name-val').innerText="Can not contain integer value"
})
// const sendMessage = () => {
//     console.log(formName);
// };
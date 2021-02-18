const button = document.querySelector('.btn-primary');
const mailInput = document.querySelector('.input-mail');

button.addEventListener('click', function(){
if (mailInput.validity.valid == false){
alert('error, kindly input email');
}
else{
    alert('submitted successfully');
}
});

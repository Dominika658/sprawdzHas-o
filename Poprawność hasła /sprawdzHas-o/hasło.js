const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = 'Bardzo dobre hasło'
        p.style.color ='green'
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
         p.textContent = 'Masz poprawne hasło'
        p.style.color = 'yellow'
    } else { 
        p.textContent = 'Słabe hasło'
        p.style.color = 'red'
    }
}    
    
const chackPassword = () => {
    if(pass.value != '') {
        showMsg()
    } else {
        p.textContent = 'Nie podałeś hasła'
        p.style.color = ''
    }
}

pass.addEventListener('keyup', chackPassword)

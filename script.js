// 1. input type => Text, Number, checkbox, password, email, color, radio, time, date, date-time, week, month, url, tel, File
// 2. select
// 3. Textarea
// ----------------------------------
// text 
let all = [];
let input = document.querySelector('#input-value input[type=text]');
input.addEventListener('change', inputText);
function inputText(event) {
    console.log(event.target.value);
}
//number
let number = document.querySelector('#input-value input[type=number]');
number.addEventListener('change', numberval);
function numberval(event) {
    console.log(event.target.value);
}
// checkbox 
let check = document.querySelectorAll('input[type=checkbox]');
Array.from(check).map((checkboxes) => {
    checkboxes.addEventListener('change', checkbox);
})
function checkbox(event){
    if(event.target.checked){
        console.log(event.target.value); 
    }
}
// mail 
let mail = document.querySelector('input[type=email]');
mail.addEventListener('change', mailChanged);
function mailChanged(event){
    console.log(event.target.value);
}
let password = document.querySelector('input[type=password]');
password.addEventListener('change', function(e){
    console.log(e.target.value);
})
// radio 
let radio = document.querySelectorAll('input[type=radio]');
Array.from(radio).map((hobbies => {
    hobbies.addEventListener('change', function(e){
        console.log(e.target.value);
    })
}))
// color 
let color = document.querySelector('input[type=color]');
color.addEventListener('change', function(event){
    console.log(event.target.value);
})
// file 
let file = document.querySelector('input[type=file]');
file.addEventListener('change', function(e){
    const file = e.target.files[0];
    console.dir(file);
})
// select 
let select = document.getElementById('major');
select.addEventListener('change', function(e){
    console.log(e.target.value);
})
let tarea = document.querySelector('textarea');
tarea.addEventListener('change', function(e){
    console.log(e.target.value);
})
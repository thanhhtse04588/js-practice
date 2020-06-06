// function validateForm() {
//   let x = document.forms['myForm']['fname'].value;
//   if (x === '') {
//     alert('Name muust be filled out');
//     return false;
//   }
// }

function myFunction() {
  let mess = document.getElementById('demo');
  mess.innerHTML = '';
  let inpObj = document.getElementById('id1');
  if (inpObj.validity.rangeOverflow) {
    mess.innerHTML = 'Value too large';
  }
}

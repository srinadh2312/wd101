let userForm = document.getElementById('user-form');
const getEntries = () =>{
    let entries = localStorage.getItem("user-entries");
    if(entries){
        entries = JSON.parse(entries);
    }
    else{
        entries = []
    }
    return entries
}
let userEntries = getEntries();



const saveForm = (event) =>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTermsandConditions = document.getElementById('acceptTermsandConditions').checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptTermsandConditions
    }
    userEntries.push(entry);

    localStorage.setItem("user-entries" , JSON.stringify(userEntries));
    userEntries = getEntries();
    displayEntries();
}

userForm.addEventListener("submit", saveForm);
displayEntries();

document.addEventListener("DOMContentLoaded", function() {
    var inputDate = document.getElementById('dob');
    var minDate = new Date('1967-11-09');
    var maxDate = new Date('2004-11-09');
  
    inputDate.addEventListener('input', function() {
      var selectedDate = new Date(this.value);
  
      if (selectedDate < minDate) {
        this.setCustomValidity('Value must be 9/11/1967 or later.');
      } 
      else if(selectedDate > maxDate){
        this.setCustomValidity('Value must be 9/11/2004 or before.')
      }
      else {
        this.setCustomValidity('');
      }
    });
  });

const displayEntries = () =>{
    const entries = getEntries();

    const tableEntries = entries.map((entry) =>{
        const nameCell = `<td> ${entry.name}</td>`;
        const emailCell = `<td> ${entry.email}</td>`;
        const passwordCell = `<td> ${entry.password}</td>`;
        const dobCell = `<td> ${entry.dob}</td>`;
        const acceptTermsCell = `<td> ${entry.acceptTermsandConditions}</td>`;
        const row =  `<tr> ${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    
    const table = `<table><tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Dob</th>
    <th>Accepted terms?</th>
    </tr>${tableEntries}</table>`;

    let details = document.getElementById('display-entries');
    details.innerHTML = table;
} 

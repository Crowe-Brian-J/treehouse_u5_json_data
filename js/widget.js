/* --- Steps to work through
Processing JSON Data

1. Create a new HTML list item
statusHTML

2. Check the "inoffice" property

3. Get the value for the "name" property; insert it inside the <li> tag

4. Close the <li> tag
*/

// 1. create an XMLHTTP Request Object
const xhr = new XMLHttpRequest()

// 2. create a callback function
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const employees = JSON.parse(xhr.responseText)
    let statusHTML = '<ul class="bulleted">'
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">'
      } else {
        statusHTML += '<li class="out">'
      }
      statusHTML += employees[i].name + '</li>'
    }
    statusHTML += '</ul>'
    document.getElementById('employeeList').innerHTML = statusHTML
  }
}

// 3. open a request
xhr.open('GET', 'data/employees.json')

// 4. send a request
xhr.send()

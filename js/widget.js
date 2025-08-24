// 1. create an XMLHTTP Request Object
const xhr = new XMLHttpRequest()

// 2. create a callback function
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const employees = JSON.parse(xhr.responseText)
  }
}

// 3. open a request
xhr.open('GET', 'data/employees.json')

// 4. send a request
xhr.send()

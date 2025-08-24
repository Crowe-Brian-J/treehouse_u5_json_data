// Work for Employees
// 1. create an XMLHTTP Request Object
const xhrEmployees = new XMLHttpRequest()

// 2. create a callback function
xhrEmployees.onreadystatechange = () => {
  if (xhrEmployees.readyState === 4) {
    const employees = JSON.parse(xhrEmployees.responseText)
    let employeeStatusHTML = '<ul class="bulleted">'
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        employeeStatusHTML += '<li class="in">'
      } else {
        employeeStatusHTML += '<li class="out">'
      }
      employeeStatusHTML += employees[i].name + '</li>'
    }
    employeeStatusHTML += '</ul>'
    document.getElementById('employeeList').innerHTML = employeeStatusHTML
  }
}

// 3. open a request
xhrEmployees.open('GET', 'data/employees.json')

// 4. send a request
xhrEmployees.send()

// Work for Rooms
// 1. create an XMLHTTP Request Object
const xhrRooms = new XMLHttpRequest()

// 2. create a callback function
xhrRooms.onreadystatechange = () => {
  if (xhrRooms.readyState === 4) {
    const rooms = JSON.parse(xhrRooms.responseText)
    let roomStatusHTML = '<ul class="bulleted">'
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available) {
        roomStatusHTML += '<li class="open">'
      } else {
        roomStatusHTML += '<li class="occupied">'
      }
      roomStatusHTML += rooms[i].room + '</li>'
    }
    roomStatusHTML += '</ul>'
    document.getElementById('roomList').innerHTML = roomStatusHTML
  }
}

// 3. open a request
xhrRooms.open('GET', 'data/rooms.json')

// 4. send a request
xhrRooms.send()

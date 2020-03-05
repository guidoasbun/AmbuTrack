const createUser = () => {
  axios.post('/api/user', {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    employer: document.getElementById('employer').value
  })

}


document.getElementById('btnCreateUser').addEventListener('click', event => {
  event.preventDefault()
  console.log('ping')
  createUser()
})

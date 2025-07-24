let addBtn = document.getElementById('addS')
addBtn.addEventListener('click', () => {
  let formBox = document.getElementById('formBox')

  addBtn.style.display = 'none'
  formBox.innerHTML = `  
<form action="" id="form" class="formCss">
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter Student Name">
    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="Enter Student Email">
    <label for="num">Number:</label>
    <input type="number" id="num" placeholder="Enter Number">
    <label for="course">Course:</label>
    <select name="" id="selections">
      <option disabled selected>Select Course</option>
    </select>
    <div class="gender-container">
    <div class="gender-option">
    <input type="radio" name="gender" class="radio" value="Male" id="male">
    <label for="male">Male</label>
    <input type="radio" class="radio" name="gender" value="Female" id="female">
    <label for="female">Female</label>
    </div>
    </div>
    <div class='btnBox'>
    <button type="button" id="add">Add</button>
    <button type="button" id="check">Check Student Data</button>
    </div>
</form>`

  const data2 = JSON.parse(localStorage.getItem('data2')) || []
  let selections = document.getElementById('selections')
  data2.forEach((s) => {
    if (s.courses) {
      selections.innerHTML += `
      <option value="${s.courses}">${s.courses}</option>`
    }
  })

  let arr = JSON.parse(localStorage.getItem('data'))
  if (!Array.isArray(arr)) arr = []
  document.getElementById('add').addEventListener('click', () => {
    let date = new Date().toLocaleDateString()
    let Name = document.getElementById('name')
    let Email = document.getElementById('email')
    let number = document.getElementById('num')
    let Radio = document.getElementsByClassName('radio')

    let rValue
    for (let i = 0; i < Radio.length; i++) {
      if (Radio[i].checked) {
        rValue = Radio[i].value
      }
    }

    let obj = {
      name: Name.value,
      course: selections.value,
      email: Email.value,
      radio: rValue,
      num: number.value,
      date: date
    }
    arr.push(obj)
    localStorage.setItem('data', JSON.stringify(arr))


    document.getElementById('form').reset()
  })

  let check = document.getElementById('check')
  check.addEventListener('click', () => {
    window.location.href = 'admin.html'
  })
})
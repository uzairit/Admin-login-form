const data = JSON.parse(localStorage.getItem('data')) || []
let Email = "admin@gmail.com";
let Password = "1234";
const emailInp = document.getElementById('email')
const passwordInp = document.getElementById('password')
const enterBtn = document.getElementById('enterBtn')
const adminLog = document.getElementById('adminLog')

function adminPage() {
    const Container = document.getElementById('Container')
    main.remove()
    Container.innerHTML += `
    <div id="navBar">
  <div class="left">
    <h1>Admin</h1>
    <label for="courseInp"></label>
    <input type="text" id="courseInp" placeholder="Enter Course">
    <button type="button" id="addCourse">Add</button>
  </div>

  <div class="right">
    <label for="num"></label>
    <input type="text" id="num" placeholder="Enter Number">
    <button id="check">Check Student</button>
    <p id="totalStudents">Total Students: ${data.length === '' ? data.length === 0 : data.length}</p>
  </div>
</div>

<div id="box"></div>
`

    function addCourseFunction() {
        let courseInp = document.getElementById('courseInp');
        let addCourse = document.getElementById('addCourse');
        let arr = JSON.parse(localStorage.getItem('data2')) || []
        if (courseInp.value.trim() == '') {
            alert('Add Course')
            return
        }
        if (arr.some(item => item.courses && item.courses.toLowerCase() === courseInp.value.toLowerCase())) {
            alert('This Course is alerady added')
            courseInp.value = ''
            return
        }
        let obj = {
            courses: courseInp.value
        }
        arr.push(obj)
        localStorage.setItem('data2', JSON.stringify(arr))
        courseInp.value = ''
    }
    addCourse.addEventListener('click', addCourseFunction)
    courseInp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addCourseFunction()
    })

    const checkButton = document.getElementById('check');
    let div = document.getElementById('box')
    let numInput = document.getElementById('num')

    function studentData() {
        let found = false
        div.innerHTML = ''
        let searchNum = numInput.value.trim();
        data.forEach(e => {
            if (searchNum === e.num) {
                found = true;
                div.innerHTML += `
                                        <h1>Student Data</h1>
                                        <div class="box2Css">
                                            <p>Name: ${e.name}</p>
                                            <p>Course: ${e.course}</p>
                                            <p>Email: ${e.email}</p>
                                            <p>Gender: ${e.radio}</p>
                                            <p>Mobile Number: ${e.num}</p>
                                            <p>Date: ${e.date}</p>
                                            </div>
                                            `
            }

        });
        numInput.value = '';
        if (!found) {
            alert('Not in a list')
        }
    }

    checkButton.addEventListener('click', studentData)
    numInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            studentData()
        }
    })

}

function load() {
    if (emailInp.value === Email && passwordInp.value === Password) {
        alert('Login Successfully')
        adminPage()
    }
    else {
        alert('Try again')
    }
}

enterBtn.addEventListener('click', load)
passwordInp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') load()
})
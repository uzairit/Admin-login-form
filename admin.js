
const data = JSON.parse(localStorage.getItem('data')) || []
let Email = "admin@gmail.com";
let Password = "1234";
const emailInp = document.getElementById('email')
const passwordInp = document.getElementById('password')
const enterBtn = document.getElementById('enterBtn')
const adminLog = document.getElementById('adminLog')

enterBtn.addEventListener('click', () => {
    const adminpage = document.getElementById('adminpage')

    if (emailInp.value === Email && passwordInp.value === Password) {
        alert('Login Successfully')
        const Container = document.getElementById('Container')
        main.remove()
        Container.innerHTML = `
                        <div id="navBar">
                        <div>
                            <h1>Admin</h1>
                        <select name="" id="selections">
                        <option disabled selected>Select Course</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Grafic Designing">Grafic Designing</option>
                        </select>
                        </div>
                        <div>
                            <input type="text" id="num" placeholder="Enter Number">
                            <button id="check">Check Student</button>
                            <p>Total Students: ${data.length}</p>
                        </div>
                        </div>
                        <div id="box"></div>`

        const checkButton = document.getElementById('check');
        let div = document.getElementById('box')
        const numInput = document.getElementById('num');
        const selections = document.getElementById('selections');

        numInput.addEventListener('input', function () {
            if (numInput.value.trim() !== "") {
                selections.disabled = true;
                selections.selectedIndex = 0;
            } else {
                selections.disabled = false;
            }
        });

        checkButton.addEventListener('click', function () {
            let found = false
            div.innerHTML = ''
            data.forEach(e => {
                const numberMatch = numInput.value === e.num;
                const courseMatch =
                    selections.value !== "Select Course" && selections.value.toLowerCase() === e.course.toLowerCase();

                if (numberMatch || courseMatch) {
                    div.innerHTML += `
                                        <h1>Student Data</h1>
                                        <div class="box2Css">
                                            <p>Name: ${e.name}</p>
                                            <p>Course: ${e.course}</p>
                                            <p>Email: ${e.email}</p>
                                            <p>Radio: ${e.radio}</p>
                                            <p>Mobile Number: ${e.num}</p>
                                            <p>Date: ${e.date}</p>
                                            </div>
                                            `
                }

            });
        })
        if (!found) {
            alert('Not in a list')
        }

    }
    else {
        alert('Try again')
    }
})

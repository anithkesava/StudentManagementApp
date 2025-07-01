console.log(window.screen.width+' x '+window.screen.height)
//note realme mobile width: 1080px;
const parent = document.getElementById('ParentCourseId');
const courseInput = document.getElementById('coursenameId');
const child_select = document.createElement('select');
child_select.id = 'studentCourseNameId'
const course = ['Select a Course', 'Java', 'Python', 'JavaScript', 'C#', 'SQL', 'Angular', 'React', 'TypeScript'];
let child_option;
course.forEach((c) => {
    child_option = document.createElement('option');
    if (c === 'Select a Course') {
        child_option.value = '';
    } else {
        child_option.value = c;
    }
    child_option.textContent = c;  
    child_select.appendChild(child_option);
})
parent.replaceChild(child_select, courseInput)
child_select.classList.add('custom-input-box')
const btn = document.getElementById('submitbtnId')
let sName = document.getElementById('studentNameId')
let sAge = document.getElementById('studentAgeId');
let sCourseName = document.getElementById('studentCourseNameId')
let sEmail = document.getElementById('studentEmailId')
let students;
let deletebtn;
let childtr;
//here we declare a reset function() =>
function resetFunction() {
    document.getElementById('studentNameId').value = '';
    document.getElementById('studentAgeId').value = '';
    document.getElementById('studentCourseNameId').value = course;
    document.getElementById('studentCourseNameId').selectedIndex = 0;
    document.getElementById('studentEmailId').value = '';
}
btn.addEventListener('click', (e) => {
    if (btn.innerText == 'Submit') {
        if (sName.value != '' && sAge.value != '' && sCourseName.value != '' && sEmail.value != '') {
            if (e.type == 'click') {
                console.log('student name: ' + sName.value)
                console.log('student age: ' + sAge.value)
                console.log('student course: ' + sCourseName.value)
                console.log('student email: ' + sEmail.value)
            }
            students = { studentname: sName.value, studentage: sAge.value, studentcourse: sCourseName.value, studentEmail: sEmail.value };
            const parenttbody = document.getElementById('studentDetailstbody')
            //table row creation
            childtr = document.createElement('tr');
            childtr.id = 'childtrId'
            //edit and delete btn creation =>
            const editbtn = document.createElement('button');
            editbtn.textContent = 'Edit';
            editbtn.id = 'editbtnId';
            deletebtn = document.createElement('button');
            deletebtn.textContent = 'Delete';
            deletebtn.id = 'deletebtnId';
            editbtn.classList.add('edit-btn');
            deletebtn.classList.add('delete-btn');
            //loop =>
            Object.values(students).forEach((c) => {
                let childtd = document.createElement('td');
                childtd.textContent = c;
                childtr.append(childtd);
            })
            //edit and delete btn cell creation =>
            const edittd = document.createElement('td');
            const deletetd = document.createElement('td');
            //edit and delete btn added to the cell =>
            edittd.append(editbtn);
            deletetd.append(deletebtn);
            //edit and delete btn cell added to the row in the table =>
            childtr.append(edittd);
            childtr.append(deletetd);
            //overall child row in the table add to table =>
            parenttbody.appendChild(childtr);
            //after the data entered into the table the input fields needs to be empty  
            resetFunction();
            //delete btn function =>
            deletebtn.addEventListener('click', () => {                
                parenttbody.removeChild(childtr);
                //after delete the child make sure the input fields are empty
                /*  *********************************************************************************************************  */
                resetFunction();
            })
            //edit btn function =>
            editbtn.addEventListener('click', () => {
                console.log('edit button clicked')
                const editbutton = document.getElementById('editbtnId')
                const editbtnrow = editbutton.closest('tr'); //************* need to explore this line ***********************
                const cells = editbtnrow.querySelectorAll('td');
                document.getElementById('studentNameId').value = cells[0].textContent;
                document.getElementById('studentAgeId').value = cells[1].textContent;
                document.getElementById('studentCourseNameId').value = cells[2].textContent;
                document.getElementById('studentEmailId').value = cells[3].textContent;
                document.getElementById('submitbtnId').textContent = 'Update';
            })
        } else {
            alert('some fields are empty')
        }
    } else {
        console.error('button is currently not in submitting')
    }    
})
btn.addEventListener('click', () => {
    if (btn.innerText == 'Update') {
        let name = document.getElementById('studentNameId').value;
        let age = document.getElementById('studentAgeId').value;
        let coursename = document.getElementById('studentCourseNameId').value;
        let newemail = document.getElementById('studentEmailId').value; 
        const editbutton = document.getElementById('editbtnId')
        const editbtnrow = editbutton.closest('tr'); //************* need to explore this line ***********************
        const cells = editbtnrow.querySelectorAll('td');
        cells[0].textContent = name;
        cells[1].textContent = age;
        cells[2].textContent = coursename;
        cells[3].textContent = newemail;
        //after update the values from the input field remove the input values
        resetFunction();
        document.getElementById('submitbtnId').innerText = 'Submit';
        alert('Data Updated Successfully');
    }
})
const showbtn = document.getElementById('showtableId');
let i = 0;
showbtn.addEventListener('click', () => {
    i++;
    const inputtable = document.getElementById('inputtableId');
    
    if (i % 2 != 0) {
        inputtable.style.display = 'block'
        showbtn.textContent = 'Hide table'
        showbtn.style.border = 'none';
    } else {
        inputtable.style.display = 'none'
        showbtn.textContent = 'Show table'
        showbtn.style.border = 'none';
    } 
    
});

let searchBox = document.getElementById('searchinputboxId');
searchBox.addEventListener('input', () => {
    let inputvalue = searchBox.value.toLowerCase();
    let rows = document.querySelectorAll('#studentDetailstbody tr')
    rows.forEach((row) => {
        let rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(inputvalue) ? '' : 'none'
    })
})

let ball = document.getElementById('theme-innerbtn');
let outer = document.getElementById('theme-outerbtn');
let sun = document.getElementById('suniconId');
ball.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    ball.classList.toggle('active')
    outer.classList.toggle('active')
    sun.classList.toggle('active')   
    if (sun.classList.contains('fa-sun'))
    {
        sun.classList.add('fa-moon')
        sun.classList.remove('fa-sun')
    } else {
        sun.classList.remove('fa-moon')
        sun.classList.add('fa-sun')
    }
});



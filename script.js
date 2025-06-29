const parent = document.getElementById('ParentCourseId');
const courseInput = document.getElementById('coursenameId');
const child_select = document.createElement('select');
child_select.id = 'studentCourseNameId'
const course = ['Select a Course','Java', 'Python', 'JavaScript', 'C#', 'SQL', 'Angular', 'React', 'TypeScript'];
course.forEach((c) => {
    const child_option = document.createElement('option');
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
btn.addEventListener('click', (e) => {
    if (sName.value != '' && sAge.value != '' && sCourseName.value !='' && sEmail.value != '') {
        if (e.type == 'click') {
            console.log('student name: ' + sName.value)
            console.log('student age: ' + sAge.value)
            console.log('student course: ' + sCourseName.value)
            console.log('student email: ' + sEmail.value)
        }
        students = { studentname: sName.value, studentage: sAge.value, studentcourse: sCourseName.value, studentEmail: sEmail.value };
        const parenttbody = document.getElementById('studentDetailstbody')
        const childtr = document.createElement('tr');

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
        
        //delete btn function =>
        deletebtn.addEventListener('click', () => {
        console.log('whether this will execute automatically')
        parenttbody.removeChild(childtr);        
        })
        
        //edit btn function =>
        editbtn.addEventListener('click', () => {
            console.log('edit button clicked')
            const editbtnrow = editbtn.closest('tr'); //************* need to explore this line ***********************
            const cells = editbtnrow.querySelectorAll('td');

            document.getElementById('studentNameId').value = cells[0].textContent;
            document.getElementById('studentAgeId').value =  cells[1].textContent;
            document.getElementById('studentCourseNameId').value = cells[2].textContent;
            document.getElementById('studentEmailId').value = cells[3].textContent;  
            
        })
        
    } else {
        console.log('some fields are empty')
    }    
})

const showbtn = document.getElementById('showtableId');
let i = 0;
showbtn.addEventListener('click', () => {
    i++;
    const tableContainer = document.getElementById('tableId');
    if (i % 2 != 0) {
        tableContainer.style.visibility = 'visible';
        showbtn.textContent = 'Hide table'
        showbtn.style.border = 'none';
    } else {
        tableContainer.style.visibility = 'hidden';
        showbtn.textContent = 'Show table'
        showbtn.style.border = 'none';
    }    
});

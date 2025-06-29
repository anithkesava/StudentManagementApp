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

btn.addEventListener('click', (e) => {
    if (e.type == 'click') {
        console.log('student name: ' + sName.value)
        console.log('student age: ' + sAge.value)
        console.log('student course: ' + sCourseName.value)
        console.log('student email: ' + sEmail.value)
    }
    students = { studentname: sName.value, studentage: sAge.value, studentcourse: sCourseName.value, studentEmail: sEmail.value };
    
})

//table content: 
//


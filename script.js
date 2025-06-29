const parent = document.getElementById('ParentCourseId');
const courseInput = document.getElementById('coursenameId');
const child_select = document.createElement('select');
const course = ['Select a Course','Java', 'Python', 'JavaScript', 'C#', 'SQL', 'Angular', 'React', 'TypeScript'];
course.forEach((c) => {
    const child_option = document.createElement('option');
    if (c === 'Select a Course') {
        child_option.value = '';
    } else {
        child_option.value = c;
    }
    console.log(child_option.value)
    child_option.textContent = c;  
    child_select.appendChild(child_option);
})
parent.replaceChild(child_select, courseInput)
child_select.classList.add('custom-input-box')

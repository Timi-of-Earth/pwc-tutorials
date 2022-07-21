let myForm = document.querySelector(".my-form")
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let age = document.getElementById("age");

const getSelectedGender = () => {
    let gender = document.querySelectorAll('input[name="gender"]');
    let selectedGender;
    for (i=0;i<gender.length;i++) {
        if (gender[i].checked) {
            selectedGender = gender[i];
        }
    }
    return selectedGender;
};

const getSelectedState = () => document.getElementById("state");

const getSelectedCourses = () => {
    let checkboxes = document.getElementsByClassName("courses");
    let checkedCourses = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
           checkedCourses.push(checkboxes[i].value);
        }
     }
    return checkedCourses;
}

const onSubmit = (e) => {
    e.preventDefault();
    if (firstName.value === "" || lastName.value == "" || !age.value || getSelectedGender() == undefined || getSelectedState() == undefined || getSelectedCourses().length == 0) {
        document.getElementById("data").innerHTML = '<p>Please enter all fields</p>'
    } else {
    document.getElementById("data").innerHTML = `
    <p>Name: ${firstName.value} ${lastName.value}</p><p>Age: ${age.value}</p><p>Gender: ${getSelectedGender().value}</p><p>State: ${getSelectedState().value}</p><p>Courses: ${getSelectedCourses().join(", ")}</p>
    `
    }
    
}

myForm.addEventListener("submit", onSubmit)
"use strict";
var _a, _b;
(_a = document.getElementById('sidebar-toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        if (!content.classList.contains('dashboard')) {
            content.style.display = 'none';
        }
    });
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var target = this.getAttribute('data-target');
            contents.forEach(function (content) {
                content.style.display = 'none';
            });
            if (target) {
                var targetContent = document.getElementById(target + '-content');
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            }
        });
    });
    var dashboardContent = document.getElementById('dashboard-content');
    if (dashboardContent) {
        dashboardContent.style.display = 'block';
    }
});
var usernameInput = document.getElementById('username');
var taskInput = document.getElementById('task');
var addButton = document.getElementById('submit');
var createElementOnClick = function (usernameValue, taskValue) {
    var _a;
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "Username: ".concat(usernameValue, "<br>Task: ").concat(taskValue);
    newDiv.className = 'cardTask';
    (_a = document.getElementById('dashboard-content')) === null || _a === void 0 ? void 0 : _a.appendChild(newDiv);
    usernameInput.value = '';
    taskInput.value = '';
};
if (addButton) {
    addButton.addEventListener('click', function () {
        var usernameValue = usernameInput.value;
        var taskValue = taskInput.value;
        if (usernameValue === '' || taskValue === '') {
            alert("Error: Please fill in all fields");
        }
        else {
            createElementOnClick(usernameValue, taskValue);
        }
    });
}
var Person = /** @class */ (function () {
    function Person(fname, lname, age, email, telephone) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.telephone = telephone;
    }
    Person.prototype.show = function () {
        return "Welcome user >>> ".concat(this.fname, " ").concat(this.lname, " your age : ").concat(this.age, " and email : ").concat(this.email, " \n        and telephone : ").concat(this.telephone, " Good Person :))");
    };
    return Person;
}());
var validateForm = function () {
    var form = document.getElementById('myForm');
    var elements = {
        fname: form.elements.namedItem('fname'),
        lname: form.elements.namedItem('lname'),
        age: form.elements.namedItem('age'),
        email: form.elements.namedItem('email'),
        telephone: form.elements.namedItem('telephone')
    };
    var person = {
        fname: elements.fname.value.trim(),
        lname: elements.lname.value.trim(),
        age: parseInt(elements.age.value.trim(), 10),
        email: elements.email.value.trim(),
        telephone: parseInt(elements.telephone.value.trim(), 10),
    };
    if (person.fname === "" || person.lname === "" || isNaN(person.age) || person.email === "" || isNaN(person.telephone)) {
        alert("Invalid");
    }
    else {
        var newPerson = new Person(person.fname, person.lname, person.age, person.email, person.telephone);
        var newDiv = document.createElement('div');
        newDiv.innerHTML = newPerson.show();
        newDiv.className = 'personDetails';
        var dashboardContent = document.getElementById('dashboard-content');
        if (dashboardContent) {
            dashboardContent.appendChild(newDiv);
        }
        form.reset();
    }
};
(_b = document.getElementById("add")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", validateForm);

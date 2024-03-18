"use strict";
var _a;
(_a = document.getElementById('sidebar-toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var contents = document.querySelectorAll('.content');
    // Hide all content except the default one
    // contents.forEach(function (content) {
    //     if (!content.classList.contains('block')) {
    //         content.style.display = 'none';
    //     }
    // });
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
});
var Username = document.getElementById('username');
var Task = document.getElementById('task');
var addButton = document.getElementById('submit');
var userValue = Username.value;
var taskValue = Task.value;
var Submit = function () {
    if (userValue === '' || taskValue === '') {
        alert("Error: Please fill in all fields");
    }
    else {
        alert("".concat(userValue, " === ").concat(taskValue));
    }
};
if (addButton) {
    addButton.addEventListener('click', Submit);
}
var targetDiv = document.getElementById('targetDiv');
var createElementOnClick = function (usernameValue, taskValue) {
    var newElement = document.createElement('div');
    newElement.textContent = "username :  ".concat(usernameValue, " >>> task : ").concat(taskValue, " ");
    newElement.className = 'cardTask';
    targetDiv.appendChild(newElement);
    Username.value = '';
    Task.value = '';
};

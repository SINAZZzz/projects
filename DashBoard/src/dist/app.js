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
    newDiv.innerHTML = "Username: " + usernameValue + "<br>Task: " + taskValue;
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

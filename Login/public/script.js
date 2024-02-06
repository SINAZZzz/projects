"use strict";
var themes = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460",
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560",
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1",
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F",
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36",
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430",
    },
];
var root = document.querySelector(":root");
var btnContainer = document.querySelector(".theme-btn-container");
// function
var setTheme;
setTheme = function (theme) {
    if (root) {
        root.style.setProperty("--background", theme.background);
        root.style.setProperty("--color", theme.color);
        root.style.setProperty("--primary-color", theme.primaryColor);
        if (theme.glassColor) {
            root.style.setProperty("--glass-color", theme.glassColor);
        }
    }
};
// function
var displayThemeButtons;
displayThemeButtons = function () {
    if (btnContainer) {
        themes.forEach(function (theme) {
            var div = document.createElement("div");
            div.className = "theme-btn";
            div.style.cssText = "background: ".concat(theme.background, "; width: 25px; height: 25px");
            btnContainer.appendChild(div);
            div.addEventListener("click", function () { return setTheme(theme); });
        });
    }
};
displayThemeButtons();
var validateForm;
validateForm = function () {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var username = usernameInput.value;
    var password = passwordInput.value;
    if (username === '' || password === '') {
        alert("Please fill in all fields");
        return false;
    }
    alert("Welcome ".concat(username));
    return true;
};

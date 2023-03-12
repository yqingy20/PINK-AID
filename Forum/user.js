var currentUser = {curr: null}
var users = [
    {   username: "Melody",
        password: "good"
    },
    {   username: "Heidi",
        password: "goodtwo"
    },
    {   username: "Ann",
        password: "goodthree"
    },
    {   username: "Cynthia",
        password: "goodfour"
    }
]

function submit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    json = JSON.parse(localStorage.getItem('users'));
    if (json != null) {
        users = json
    }

    for (i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in.");
            alert("Hi, " + username);
            currentUser = {curr : username}
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            return;
        }
    }
    console.log("Invalid username or password");
    alert("Invalid username or password. Please enter again. If you don't have an account, please register one first.");
}

function registerUser() {
    var newReg = document.getElementById("username").value;
    var newRegPass = document.getElementById("password").value;
    json = JSON.parse(localStorage.getItem('users'));
    if (json != null) {
        users = json
    }

    var newUser = {
        username: newReg,
        password: newRegPass
    }
    for (i = 0; i < users.length; i++) {
        if (newReg == users[i].username) {
            console.log(username + " is registered");
            alert("username already taken, please enter another one.");
            return;
        }
    }
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("successfully registered!");
}
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var emailArray=[];
var passwordArray=[];

function regTabFun(){
    event.preventDefault();
    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
        }

function loginTabFun(){
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
}
        
function forTabFun(){
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
}

function register(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email  == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + "  Thanks for registration. \nTry to login Now");
        event.addEventListener('submit', function (){
            window.location.href = "index.html"
        });

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(event){
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = emailArray.indexOf(email);
    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
     else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");
        event.addEventListener('submit', function (){
            window.location.href = "index.html"
        });
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}
function forgotPassword(){
    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}
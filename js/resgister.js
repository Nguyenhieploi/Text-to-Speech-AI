// menu
var menuMobile = document.getElementById("menu-mobile");
var toggleMobile = document.querySelector(".toogle-mobile");
var markMobile = document.querySelector(".icon-mark");

function showMenu() {
  menuMobile.style.transform = "translateX(0%)";
  toggleMobile.style.display = "none";
  markMobile.style.display = "block";

  document.addEventListener("click", closeMenuOnClickOutside);
}

function hideMenu() {
  menuMobile.style.transform = "translateX(-100%)";
  toggleMobile.style.display = "block";
  markMobile.style.display = "none";

 
  document.removeEventListener("click", closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  // Kiểm tra xem sự kiện click có phát sinh từ menu hay không
  if (!menuMobile.contains(event.target) && event.target !== toggleMobile) {
    hideMenu();
  }
}

toggleMobile.addEventListener("click", showMenu);
markMobile.addEventListener("click", hideMenu);
markMobile.style.display = "none";

// resgiter
async function handle(){
    try{
        event.preventDefault();
        var raw = {
            fullname: null,
            email: null,
            password:null,
        }
        var fullname = document.getElementById('fullname').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if(!fullname || !email || !password){
            document.getElementById('fullname').style.border = "1px solid red"
            document.getElementById('fullname').style.background = '#ff00001c'
            document.getElementById('email').style.border = "1px solid red"
            document.getElementById('email').style.background = '#ff00001c'
            document.getElementById('password').style.border = "1px solid red"
            document.getElementById('password').style.background = '#ff00001c'
            cuteToast({
                type:"warning",
                message:"Vui lòng nhập đầy đủ thông tin",
                timer:5000,
              });
            return;
        }

        var isValid = validatePassword(password);
        if(!isValid) {
            document.getElementById('password').style.border = "1px solid red"
            document.getElementById('password').style.background = '#ff00001c'
            document.getElementById('fullname').style.border = ""
            document.getElementById('fullname').style.background = ''
            document.getElementById('email').style.border = ""
            document.getElementById('email').style.background = ''
            cuteToast({
                type: "error", 
                message: "Password phải trên 6 kí tự và có chữ hoa và thường",
                timer: 5000
            });
            return;
        }

        raw.fullname = fullname;
        raw.email = email;
        raw.password= password;

        var resgister = await register(raw)
        var object = JSON.parse(resgister)

        if(object.errors && object.errors.email[0]){
            document.getElementById('email').style.border = "1px solid red"
            document.getElementById('email').style.background = '#ff00001c'
            document.getElementById('password').style.border = ""
            document.getElementById('password').style.background = ''
            cuteToast({
                type: "error", 
                message: "Email đã tồn tại",
                timer: 5000
            });
            return;
        }
        cuteToast({
            type:"success",
            message:"Đăng ký thành công",
            timer:5000,
          });
          setTimeout(() =>{
            cuteToast({
                type:"info",
                message:"Đang chuyển hướng",
                timer:5000,
              });
          },1000)
          setTimeout(() => {
            window.location.replace("login.html");
          }, 2000);
    }catch(error){
        console.log(error);
    }
}

function validatePassword(password) {

    // Password phải có ít nhất 6 ký tự
    if (password.length < 6) {
      return false;
    }
  
    //Password phải chứa cả chữ hoa và thường
    var regex = /(?=.*[a-z])(?=.*[A-Z])/;
    if (!regex.test(password)) {
      return false;
    }
  
    return true;
  
  }
  
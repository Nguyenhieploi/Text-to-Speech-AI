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

// Xử lý
async function login(){
  try{
    var data = {
      email: null,
      password:null,
      role:[
        "user"
      ]
    }
    var getEmail = document.getElementById("email").value;
    var getPassword = document.getElementById("password").value;
    
    if(!email || !password){
      alert("Vui lòng nhập đầy đủ");
      return;
    }

    data.email = getEmail;
    data.password = getPassword;
    event.preventDefault()
    var getCheckLogin = await checkLogin(data);
    
    
  
   
  }catch(error){
    console.log(error);
  }
}

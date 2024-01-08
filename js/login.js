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

// Login
async function login() {
  try {
    event.preventDefault();

      var data = {
          email: null,
          password: null,
          role: ["user"]
      };

      var getEmail = document.getElementById("email").value;
      var getPassword = document.getElementById("password").value;

      if (!getEmail || !getPassword) {
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

      data.email = getEmail;
      data.password = getPassword;

     
      var getCheckLogin = await loginUser(data); // trả về 1 chuỗi JSON
      var parsedData = JSON.parse(getCheckLogin); // chuyển sang đối tượng
      console.log(parsedData);
      // Do trường hợp nhập sai thông tin thì có trả về statusCode
      if(parsedData.statusCode >= 400){
        cuteToast({
          type:"error",
          message:"Đăng nhập thất bại",
          timer:5000,
        });
        return;
      }

      var dataUser = parsedData;
      var keyLocal = "tokenUser";
      localStorage.setItem(keyLocal, JSON.stringify(dataUser));

      // Lấy token ra
      var accessToken = dataUser.token.accessToken;
      // Setcookie
      document.cookie = "accessToken=" + accessToken + "; path=/;";
      cuteToast({
        type:"success",
        message:"Đăng nhập thành công",
        timer:5000,
      });
      // Gọi hàm loading sau khi đăng nhập hoàn tất
      await loading();
  } catch (error) {
      console.log(error);
  }
}

async function loading() {
  try {
      document.getElementById("loginText").style.display = "none";
      document.getElementById("loader").style.display = "block";

      // Chờ một khoảng thời gian trước khi chuyển hướng 
     
      await new Promise(resolve => setTimeout(resolve, 500));
    
      // Chuyển hướng sau khi xoay xong
      window.location.href = "index.html";
  } catch (error) {
      console.log(error);
  }
}

// Kiểm tra localstorage có tồn tại key chưa => Trường hợp người dùng truy cập qua URL
async function checkKeyLocal() {
  try {
      var keyLocal = "tokenUser";
      var tokenUser = localStorage.getItem(keyLocal);
      
      if (tokenUser) {
          // Kiểm tra trạng thái đăng nhập ở phía server
          var isValidToken = await checkTokenValidity(tokenUser);

          if (isValidToken) {
              // Key tồn tại và token hợp lệ, chuyển hướng sang index.html
              window.location.href = "index.html";
          }
      }

  } catch (error) {
      console.log(error);
  }
}

// Thực hiện kiểm tra token ở phía server
async function checkTokenValidity(token) {
  // Gửi yêu cầu kiểm tra token đến máy chủ
  // Trả về true nếu token hợp lệ, ngược lại trả về false
  return true; 
}

// Gọi hàm checkKeyLocal để kiểm tra trạng thái đăng nhập
checkKeyLocal();


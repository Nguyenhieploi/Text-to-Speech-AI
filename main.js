window.scrollTo({top: 0, behavior: 'smooth'});
document.addEventListener('DOMContentLoaded', () => {
    const billingMonthly = document.getElementById('billing-monthly');
    const billingYearly = document.getElementById('billing-yearly');
    const tabMonthly = document.getElementById('tab-monthly');
    const tabYearly = document.getElementById('tab-yearly');

    billingMonthly.addEventListener('click', () => {
        billingMonthly.classList.add('active');
        billingYearly.classList.remove('active');
        tabMonthly.classList.add('active');
        tabYearly.classList.remove('active');
    });

    billingYearly.addEventListener('click', () => {
        billingMonthly.classList.remove('active');
        billingYearly.classList.add('active');
        tabMonthly.classList.remove('active');
        tabYearly.classList.add('active');
    });
});

//
document.addEventListener("DOMContentLoaded", function () {
    // Chức năng cho sticky header và nút scroll to top
    function handleScrollActions() {
        var header = document.getElementById("sticky-header");
        var sticky = header.offsetTop;

        var scrollToTopButton = document.getElementById('scrollToTop');

        function handleStickyHeader() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        function toggleScrollToTopButton() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopButton.style.right = '5px';
            } else {
                scrollToTopButton.style.right = '-35px';
            }
        }

        // Gắn hàm vào sự kiện cuộn (scroll)
        window.onscroll = function () {
            handleStickyHeader();
            toggleScrollToTopButton();
        };

       
    }

    // Gọi hàm khi trang được tải
    handleScrollActions();
});




var swiper = new Swiper('.mySwiper', {
    // Default parameters
    loop:true,
    autoplay:true,
    // Responsive breakpoints
    breakpoints: {
        
        320: {
            slidesPerView: 2,
         
        },
        576: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        },
        820: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        },
        1024: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        },
        1200: {
            slidesPerView: 4,
            spaceBetweenSlides: 50
        },
        // từ 1366 trở đi sẽ áp dụng
        1366: {
            slidesPerView: 5,
            spaceBetweenSlides: 50
        },
        //từ  1600 sẽ áp dụng
        1600: {
            slidesPerView: 6,
            spaceBetweenSlides: 50
        },
        1700: {
            slidesPerView: 7,
            spaceBetweenSlides: 50
        }
    }
})


var swiper = new Swiper('.testimonialss', {
    // Default parameters
    loop:true,
    autoplay:true,
  
    
    // Responsive breakpoints
    breakpoints: {
        
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
        820: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
        1024: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
      
        // từ 1200 trở đi sẽ áp dụng
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        },
        //từ  1600 sẽ áp dụng
        1600: {
            slidesPerView: 4,
            spaceBetweenSlides: 50
        }
    }
})

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

// ===================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử có id là "fileAudio"
    var fileAudio = document.getElementById("fileAudio");
    var listenAudio = document.getElementById("listenAudio");
    var player = document.getElementById("player")
    if (fileAudio && listenAudio) {
        fileAudio.style.display = "none";    //////////TẠM THỜI
        listenAudio.style.display = "none";
       
    }
    if (player) {
        // Thiết lập controlsList bằng "nodownload"
        player.controlsList = "nodownload";
    }
    
});
// Kiểm tra đã đăng nhập hay chưa khi web load 
function hiddenBtn(){
    try{
        var keyLocal = "tokenUser";
        var tokenUser = localStorage.getItem(keyLocal);
        if(tokenUser){
            document.getElementById("btn-signup").style.display = "none";
            document.getElementById("btn-login").style.display = "none";
            infoUser(tokenUser)
        }
        else{
            console.log("khong tồn tại");
        }
       
    }catch(error){
        console.log(error);
    }
}
hiddenBtn()

// Kiểm tra khi click button Đăng nhập 
function checkLogin(){
    try{
        var keyLocal = "tokenUser";
        var tokenUser = localStorage.getItem(keyLocal);
        if(tokenUser){
            window.location.href = "index.html";
        }
        else{
            window.location.href = "login.html";
        }
    }catch(error){
        console.log(error);
    }
}

// Lấy thông tin user từ localstorage
function infoUser(tokenUser){
    try{
       
        var getData = JSON.parse(tokenUser);
        var getName = getData.user.fullname;
        var getCredit = getData.user.credit;
        document.getElementById("HelloUser").style.display = "flex"
        document.getElementById("nameUser").innerHTML = getName
        document.getElementById("credit").innerHTML = getCredit
    }catch(error){
        console.log(error);
    }
}


// Logout
document.getElementById("btn-logout").addEventListener("click", function() {
    try {
        // Xóa token khỏi localStorage hoặc thực hiện các bước đăng xuất cần thiết
        var keyLocal = "tokenUser";
        localStorage.removeItem(keyLocal);
        
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
});

// Đếm số lượng từ đã nhập
function countLength() {
    try {
      var textContent = document.getElementById("textContent"); // Textarea
      var lengthContent = document.getElementById("lengthContent"); // Số từ
        
      var textLength = textContent.value.length;  // Lấy độ đài từ textarea
      lengthContent.innerHTML = textLength; // gán 
      return textLength;
    } catch (error) {
      console.log(error);
    }
  }


async function checkTextToSpeech() {
    try {
        event.preventDefault();

        var keyLocal = "tokenUser";
        var tokenUser = localStorage.getItem(keyLocal);
       
        if (tokenUser) {
            var textContent = document.getElementById("textContent").value;
            var getData = JSON.parse(tokenUser);
            var getToken = getData.token.accessToken // lấy token
            var getCredit = getData.user.credit; // lấy credit
           
            if (textContent.trim() === "") {
                cuteToast({
                    type: "warning",
                    message: "Vui lòng điền đầy đủ thông tin",
                    timer: 5000,
                });
            } else {
                var data = {
                    text: null,
                    gender:null,
                    speed:null
                }
                 var textContent = document.getElementById("textContent").value;
                 var gender = document.getElementById("select_accent").value;
                 var speedVoice= document.getElementById("select_voice").value;
                
                 data.text = textContent;
                 data.gender = gender;
                 data.speed = speedVoice;
               
                 // Kiểm tra số kí tự nhập vào lớn hớn 1000 và lớn hơn credit kí tự đang có 
                 var lengthText = countLength();
                 
                 if(lengthText > 1000 && lengthText > getCredit ){
                    cuteToast({
                        type:"error",
                        message:"Vui lòng nạp tiền",
                        timer:10000,
                      });
                      return;
                 }
                 cuteToast({
                    type:"info",
                    message:"Vui lòng đợi trong giây lát",
                    timer:10000,
                  });
              
              
                await loading()
                 var callTextToSpeed = await textToSpeech(data,getToken);
                downloadFile(callTextToSpeed); // truyền giá trị trả về 
                liveVoice(callTextToSpeed)
                 cuteToast({
                    type:"success",
                    message:"Tạo thành công",
                    timer:5000,
                  });
                document.getElementById("fileAudio").style.display = "block"
                document.getElementById("listenAudio").style.display = "block"
                document.getElementById("textToSpeech").style.display = "flex";
                document.getElementById("loader").style.display = "none";
              
            }
        } else {
            cuteToast({
                type: "warning",
                message: "Vui lòng đăng nhập để sử dụng",
                timer: 5000,
            });
        }
    } catch (error) {
        console.log(error);
    }
}
async function loading() {
    try {
        document.getElementById("textToSpeech").style.display = "none";
        document.getElementById("loader").style.display = "block";
  
        // Chờ một khoảng thời gian
        await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
        console.log(error);
    }
  }

function downloadFile(data) {
    try {
        var fileAudio = document.getElementById("fileAudio");
        var jsonData = JSON.parse(data);
        var listIdsString = jsonData.join(','); // Chuyển mảng thành chuỗi, ngăn cách bởi dấu phẩy
        
        fileAudio.innerHTML =
        `
        <a href="https://audio-api.tailieure.net/audio/download?list_ids=${listIdsString}" target="_blank" rel="noopener noreferrer" 
        class="audioDownload flex items-center mt-[10px] justify-between border border-gray-200 w-[200px] py-2 px-4 rounded-lg text-[#fff]
         hover:text-[#00C39A] hover:border-[#00C39A] duration-300 transition-all">
        <div class="flex gap-[5px] items-center">
          <i class="fa-light fa-file-audio"></i>
          <span>File đầy đủ</span>
        </div> 
        <span>
          <i class="fa-thin fa-arrow-down-to-line"></i>
        </span>
      </a>
        `;
    } catch (error) {
        console.log(error);
    }
}

function liveVoice(data){
    try{
        var liveStudio = document.getElementById("listenAudio");
        var jsonData = JSON.parse(data);
        var listIdsString = jsonData.join(',');
        liveStudio.innerHTML = 
        `
        <audio id="player" controls> 
        <source src="https://audio-api.tailieure.net/audio/download?list_ids=${listIdsString}" type="audio/mp3">
      </audio>
        `
    }catch(error){
        console.log(error);
    }
}
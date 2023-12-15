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
        document.getElementById("HelloUser").style.display = "block"
        document.getElementById("nameUser").innerHTML = getName
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
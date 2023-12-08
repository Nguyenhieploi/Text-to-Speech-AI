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




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
   
  });
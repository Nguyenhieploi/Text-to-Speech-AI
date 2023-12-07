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

function scrollSticky() {
    // Lấy đối tượng header
    var header = document.getElementById("sticky-header");
    // Thêm sự kiện cuộn
    window.onscroll = function () {
      // Kiểm tra vị trí cuộn so với đối tượng header
      var scrolled = window.scrollY > 0;
      
      // Áp dụng lớp scrolled tùy thuộc vào việc cuộn hay không
      header.classList.toggle("scrolled", scrolled);
     
    };
  }
  
  // Gọi hàm scrollSticky để thiết lập sự kiện cuộn khi trang được tải
  scrollSticky();



function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Lặp qua tất cả các phần tử với thuộc tính data-include-html:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*Tìm một thuộc tính có tên là data-include-html:*/
        file = elmnt.getAttribute("data-include-html");
        if (file) {
            /* Tạo một yêu cầu HTTP (Ajax) mới:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Xóa thuộc tính và tiếp tục:*/
                    elmnt.removeAttribute("data-include-html");
                    includeHTML(); // Gọi lại hàm để xử lý các phần tử khác
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*Kết thúc hàm để tránh lặp vô hạn (chờ request hoàn thành):*/
            return;
        }
    }
}
// Gọi hàm khi tài liệu đã tải xong
document.addEventListener("DOMContentLoaded", includeHTML);


  // Lấy path hiện tại (ví dụ: gioithieu.html)
  const currentPath = window.location.pathname.split("/").pop();

  // Lấy toàn bộ link trong nav
  const navLinks = document.querySelectorAll(".navbar-links a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath || (currentPath === "" && linkPath === "trangchu.html")) {
      link.classList.add("bg-pink-200", "text-pink-600", "px-3", "py-1", "rounded");
    } else {
      link.classList.remove("bg-pink-200", "text-pink-600");
    }
  });


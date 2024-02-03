"use client";
import React from "react";

const Tabs = () => {
  const openTab = (evt, cityName) => {
    console.log("click");
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
  return (
    <div>
      <div className="tab">
        <button
          className="tablinks"
          onClick={(e) => openTab(e, "DeliveryTime")}
        >
          Delivery time
        </button>
        <button
          className="tablinks"
          onClick={(e) => openTab(e, "TransportFee")}
        >
          Transport fee
        </button>
      </div>

      <div id="DeliveryTime" className="tabcontent">
        <h3>Thời gian giao hàng</h3>
        <p>
          Sau khi Printub nhận được thông tin đơn đặt hàng, chúng tôi sẽ tiến
          hành sản xuất và vận chuyển sản phẩm.{" "}
        </p>
        <p>
          Khách hàng nhận được sản phẩm đã đặt sau 5 – 14 ngày làm việc (tùy
          từng khu vực) kể từ khi xác nhận đặt hàng (không kể chủ nhật, ngày lễ
          và ngày Tết). Cụ thể là:
        </p>
        <ul>
          <li>Hà Nội & Thành phố Hồ Chí Minh: 5 – 7 ngày làm việc.</li>
          <li>
            Các thành phố lớn và lân cận như Đà Nẵng, Cần Thơ…: 7 – 9 ngày làm
            việc.
          </li>
          <li>
            Khu vực khác (vùng xa) như Tây Bắc, Tây Nguyên, các huyện lỵ hẻo
            lánh: 9 – 14 ngày làm việc.
          </li>
        </ul>
      </div>

      <div id="TransportFee" className="tabcontent">
        <h3>Phí vận chuyển</h3>
        <p>
          Printub sử dụng dịch vụ vận chuyển của Giao Hàng Tiết Kiệm (GHTK) và
          Giao Hàng Nhanh (GHN). Phí giao hàng được tính theo bảng giá vận
          chuyển của các đối tác vận chuyển.{" "}
        </p>
        <p>
          Hiện nay Printub áp dụng mức giá vận chuyển cho tất cả các đơn hàng
          như sau (Không phân biệt khu vực nhận hàng)
        </p>
        <ul>
          <li>
            Đơn hàng sử dụng dịch vụ giao hàng của Giao Hàng Tiết Kiệm: 30.000đ
          </li>
          <li>
            Đơn hàng sử dụng dịch vụ giao hàng của Giao Hàng Nhanh: 28.000đ
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;

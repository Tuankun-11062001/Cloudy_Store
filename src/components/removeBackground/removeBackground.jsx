"use client";
import React, { useEffect, useState } from "react";

const RemoveBackground = ({ dataImage }) => {
  const [resultSrc, setResultSrc] = useState(null);

  const removeBackground = (image) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Cho phép truy cập hình ảnh từ domain khác
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const newData = context.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Điều kiện tách nền (tùy chỉnh theo yêu cầu)
        if (r > 240 && g > 240 && b > 240) {
          newData.data[i + 3] = 0; // Đặt alpha thành 0 cho pixel trắng
        } else {
          newData.data[i] = r;
          newData.data[i + 1] = g;
          newData.data[i + 2] = b;
          newData.data[i + 3] = data[i + 3]; // Giữ nguyên alpha
        }
      }

      context.putImageData(newData, 0, 0);
      const resultImageSrc = canvas.toDataURL("image/png");
      setResultSrc(resultImageSrc);
    };
  };

  useEffect(() => {
    if (dataImage) {
      removeBackground(dataImage);
    }
    return () => {
      setResultSrc(null); // Đặt lại kết quả khi component bị unmounted hoặc dataImage thay đổi
    };
  }, [dataImage]);

  return (
    <div className="remove_image">
      {resultSrc && (
        <img
          src={resultSrc}
          alt="Result"
          style={{ maxWidth: "300px", margin: "10px" }}
        />
      )}
    </div>
  );
};

export default RemoveBackground;

"use client";
import { appSvg } from "@/data/svg";
import React, { useEffect, useState } from "react";
import { communicationApi } from "@/api/communication";
import Tiptap from "../editor/boxEditor";
import { getLocalStorage } from "@/components/storage/local";

const BoxFeeling = () => {
  const [data, setdata] = useState({
    user: "",
    feeling: "",
    content: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const IdLocal = getLocalStorage("_CM_id");
    if (!IdLocal) {
      return setMessage("You not Login");
    }
    setdata((prev) => {
      return {
        ...prev,
        user: IdLocal,
      };
    });
    setMessage("");
  }, []);

  const close = (e) => {
    const boxFeeling = e.target.closest(".box_feeling");
    boxFeeling.classList.remove("active");
  };

  const handleChangeEditor = (data) => {
    setdata((prev) => {
      return {
        ...prev,
        content: data,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const IdLocal = getLocalStorage("_CM_id");
      if (!IdLocal) {
        return setMessage("You not Login");
      }
      const res = await communicationApi.createCommunication(data);
      res.status === 200 && setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box_feeling">
      <div className="box_feeling_content">
        <div className="head">
          <p>Communication</p>
          <p onClick={close}>{appSvg.close}</p>
        </div>
        <select name="feeling" value={data.feeling} onChange={handleChange}>
          <option value="">How do you Feel?</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="cry">Cry</option>
        </select>
        <Tiptap change={handleChangeEditor} state={data.content} />

        {message && <span>{message}</span>}
        <p className="submit" onClick={handleSubmit}>
          Submit
        </p>
      </div>
    </div>
  );
};

export default BoxFeeling;

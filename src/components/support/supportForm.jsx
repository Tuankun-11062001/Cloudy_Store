"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import handleCreateSupport from "@/api/support";

export const locales = ["en", "vn"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

const SupportForm = () => {
  const t = useTranslations("Support");
  const [dataSupport, setDataSupport] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [message, setMessage] = useState({
    content: "",
    status: "",
  });
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setDataSupport((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage((prev) => ({
      ...prev,
      content: "",
      status: "",
    }));
  };

  const handleSubmit = async () => {
    if (
      dataSupport.name === "" ||
      dataSupport.email === "" ||
      dataSupport.content === ""
    ) {
      return setMessage((prev) => ({
        ...prev,
        content: t("missing_field"),
        status: "error",
      }));
    }

    if (!dataSupport.email.includes("@gmail.com")) {
      return setMessage((prev) => ({
        ...prev,
        content: t("emaill_incorrect"),
        status: "error",
      }));
    }

    try {
      const res = await handleCreateSupport(dataSupport);
      if (res.status === 200 && res.message === "success") {
        return setMessage((prev) => ({
          ...prev,
          content: t("success"),
          status: "success",
        }));
      }
    } catch (error) {
      console.log("error create support", error);
    }
  };

  return (
    <div className="support_form">
      <input
        placeholder={t("support_form_name")}
        name="name"
        value={dataSupport.name}
        onChange={handleChangeText}
      />
      <input
        placeholder={t("support_form_email")}
        name="email"
        value={dataSupport.email}
        onChange={handleChangeText}
      />
      <textarea
        placeholder={t("support_form_problem")}
        name="content"
        value={dataSupport.content}
        onChange={handleChangeText}
      />
      <p className={`message ${message.status}`}>{message.content}</p>
      <button onClick={handleSubmit}>{t("support_form_submit")}</button>
    </div>
  );
};

export default SupportForm;

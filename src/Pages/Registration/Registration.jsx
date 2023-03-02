import React from "react";
import styles from "../Registration/Registration.module.css";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";
import RegistrationLeft from "../../Components/RegistrationLeft/RegistrationLeft";

function Registration() {
  return (
    <>
      <RegistrationLeft />
      <RegistrationForm />
    </>
  );
}

export default Registration;

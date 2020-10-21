import React, { useState } from "react";
import { validation } from "./validation";

export default function FormInputs() {
  const [data, setData] = useState({
    email: {
      inputName: "email",
      value: "",
      elementConfig: {
        type: "text",
        placeholder: "Email",
      },
      rules: {
        minLength: 3,
      },
      is_invalid: null,
    },
    password: {
      inputName: "password",
      value: "",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      rules: {
        minLength: 6,
      },
      is_invalid: null,
    },
    confirmPassword: {
      inputName: "confirm_password",
      value: "",
      elementConfig: {
        type: "password",
        placeholder: "Confirm Password",
      },
      rules: {
        minLength: 6,
      },
      is_invalid: null,
    },
    age: {
      inputName: "age",
      value: "",
      elementConfig: {
        type: "number",
        placeholder: "Age",
      },
    },
    isValid: true,
  });

  const onChangeHandler = (e) => {
    const resultData = { ...data };
    if (resultData[e.target.name]) {
      resultData[e.target.name].value = e.target.value;
    }

    setData(resultData);

    if (e.target.name !== "age") {
      resultData.isValid = validation(resultData);
    }
    setData(resultData);
    console.log(data);
  };
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <input
            name="email"
            value={data.email.value}
            {...data.email.elementConfig}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="field">
          <label>Password</label>
          <input
            name="password"
            value={data.password.value}
            {...data.password.elementConfig}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            value={data.confirmPassword.value}
            {...data.confirmPassword.elementConfig}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="field">
          <label>Age</label>
          <input
            name="age"
            value={data.age.value}
            {...data.age.elementConfig}
            onChange={onChangeHandler}
          ></input>
        </div>
        <button
          className={`${data.isValid ? "disabled" : ""} ui green button`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

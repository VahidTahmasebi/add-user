import "./App.css";

import { useState } from "react";

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  return /^[0-9]{11}$/.test(phoneNumber);
};

const validatePassword = (password) => {
  return /.*@.*/.test(password);
};

function App() {
  const [dataForm, setDataForm] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const changeHandler = ({ target }) => {
    setDataForm({ ...dataForm, [target.name]: target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!dataForm.email || !dataForm.email || !dataForm.password) {
      alert("all fields are mandatory");
      return;
    }

    if (!validateEmail(dataForm.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!validatePhoneNumber(dataForm.phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    if (!validatePassword(dataForm.password)) {
      alert("The password must contain the @ symbol");
      return;
    }

    try {
      alert("Done");
      setDataForm({ email: "", phoneNumber: "", password: "" });
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <form onSubmit={submitForm}>
      <label>email</label>
      <input
        type="text"
        name="email"
        value={dataForm.email}
        onChange={changeHandler}
      />

      <label>Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        value={dataForm.phoneNumber}
        onChange={changeHandler}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={dataForm.password}
        onChange={changeHandler}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

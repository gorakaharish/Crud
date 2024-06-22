import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [formValue, setFormValue] = useState({
    id: "",
    username: "",
    email: "",
    phoneno: "",
    address: "",
    status: "",
  });

  const navigate = useNavigate();

  const handelInput = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const allInputvalue = {
      id: formValue.id,
      username: formValue.username,
      email: formValue.email,
      phoneno: formValue.phoneno,
      address: formValue.address,
      status: formValue.status,
    };
    console.log("Form Data:", allInputvalue);
    for (const key in allInputvalue) {
      if (formValue[key] === "") {
        console.log(`Please fill in ${key}`);
        return; // Exit early if any field is empty
      }
    }

    axios
      .post("http://localhost:8000/userData", allInputvalue)
      .then((response) => {
        console.log(response.status);
        setTimeout(() => {
          alert("Add Successfully");
          navigate("/userdata");
        }, 1000);
      });
  };

  return (
    <div className=" container mx-2 my-2">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2">Add New User</h5>
          <form className="mx-4" onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="number"
                className="form-control w-50"
                name="id"
                value={formValue.id}
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control w-50"
                name="username"
                value={formValue.username}
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control w-50"
                name="email"
                value={formValue.email}
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneno" className="form-label">
                Phone No
              </label>
              <input
                type="number"
                className="form-control w-50"
                name="phoneno"
                value={formValue.phoneno}
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control w-50"
                name="address"
                value={formValue.address}
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Status
              </label>
              <input
                type="text"
                className="form-control w-50"
                name="status"
                value={formValue.status}
                onChange={handelInput}
              />
            </div>
            <button type="submit" className="btn btn-primary w-50 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

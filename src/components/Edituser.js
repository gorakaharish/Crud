import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {
  const { id } = useParams();
  const [editUser, setEditUser] = useState({
    id: "",
    username: "",
    email: "",
    phoneno: "",
    address: "",
    status: "",
  });

  const navigate = useNavigate();

  const getUser = () => {
    axios.get(`http://localhost:8000/userData/${id}`).then((res) => {
      setEditUser(res.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handelInputs = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const allInputvalue = {
      id: editUser.id,
      username: editUser.username,
      email: editUser.email,
      phoneno: editUser.phoneno,
      address: editUser.address,
      status: editUser.status,
    };

    console.log(allInputvalue);

    axios
      .put("http://localhost:8000/userData/" + id, allInputvalue)
      .then((res) => setEditUser(res.data.editUser));
    setTimeout(() => {
      alert("Update Successfullty");
      navigate("/userdata");
    }, 1000);
  };

  return (
    <div className=" container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2">Edit User</h5>
          <form className="mx-4" onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="number"
                className="form-control w-50"
                name="id"
                value={editUser?.id}
                onChange={handelInputs}
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
                value={editUser?.username}
                onChange={handelInputs}
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
                value={editUser?.email}
                onChange={handelInputs}
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
                value={editUser?.phoneno}
                onChange={handelInputs}
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
                value={editUser?.address}
                onChange={handelInputs}
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
                value={editUser?.status} 
                onChange={handelInputs}
              />
            </div>
            <button type="submit" className="btn btn-success w-50 mt-2">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edituser;

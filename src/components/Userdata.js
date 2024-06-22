import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userdata = () => {
  const [userData, setUserData] = useState([]);
  // const navigate = useNavigate();

  const getData = () => {
    axios.get("http://localhost:8000/userData").then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handelDelete = (id) => {
    // console.log(id);
    alert("Can You Delete");
    axios.delete("http://localhost:8000/userData/" + id).then((res) => {
      // location.reload()
      window.location.reload()
      // console.log(res);
    });
  };

  return (
    <div className=" container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2"> Userdata</h5>
          <div className=" d-grid d-md-flex justify-content-md-end mb-3 mx-2">
            <Link to="/adduser" className="btn btn-warning btn-md">
              Add New User
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneno}</td>
                  <td>{user.address}</td>
                  <td>{user.status}</td>
                  <td>
                    <Link
                      to={"/edituser/" + user.id}
                      className="btn btn-success mx-1 btn-sm"
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger mx-1 btn-sm"
                      onClick={() => handelDelete(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userdata;

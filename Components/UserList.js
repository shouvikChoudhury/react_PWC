import { useEffect, useState } from "react";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <div className="container ">
        {users.map((data) => {
          return (
            <div className="p-4" key={data.id}>
              <div className="card ">
                <div className="row pt-5">
                  <div className="image col-5">
                    <img
                      className="picture"
                      src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                      alt="employee"
                    />
                  </div>
                  <div className="details col-7">
                    <div className="empName">{data.name}</div>
                    <div className="empPhone">{data.phone}</div>
                    <div className="empEmail">{data.email}</div>
                    <div className="empComapny">{data.company.name}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import userService from "../services/userService";
import {
  // MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  // MDBInput,
} from "mdb-react-ui-kit";
export default function Profile() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    username: "",
    phoneNumber: " ",
  });

  useEffect(() => {
    loadUser();
    console.log(user + " asdads");
  }, []);

  const loadUser = () => {
    userService.getCurrentUser().then((result) => {
      setUser(result.data);
    });
  };
  return (
    <MDBContainer className="my-2 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="container">
            <div className="rom">
              <div className="col-md-10 offset-md-0 border rounder p-4 mt-1 shadow">
                <h2 className="text-center m-4">INFORMACIJE O PROFILU:</h2>

                <div className="card">
                  <div className="card-header">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Ime: </b>
                        {user.firstName}
                      </li>
                      <li className="list-group-item">
                        <b>Prezime: </b>
                        {user.lastName}
                      </li>
                      <li className="list-group-item">
                        <b>Korisnicko ime: </b>
                        {user.username}
                      </li>
                      <li className="list-group-item">
                        <b>Email: </b>
                        {user.email}
                      </li>
                      <li className="list-group-item">
                        <b>Pol: </b>
                        {user.gender}
                      </li>
                      <li className="list-group-item">
                        <b>Broj telefona: </b>
                        {user.phoneNumber}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

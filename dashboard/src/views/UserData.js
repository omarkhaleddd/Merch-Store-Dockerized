/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useRef, useState } from "react";
import { addProduct, getUsers, handleFiles } from "../helper/helper";
import React from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import "./UserData.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import AuthService from "services/AuthService";


function UserProfile() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setProducts(data);
    };
    fetchData(); // Fetch data when the component mounts
  }, []);
  return (
    <>
      <div className="content margin-width">
        <Row>
          <Col md="12 ">
            <Card className="">
              <CardHeader>
                <h5 className="title text-center">User Data</h5>
                {AuthService.isAuthenticated() && (
                  <Link
                    to="http://localhost:5173/signin/"
                    onClick={() => {
                      AuthService.logout();
                    }}
                    className="btn btn-outline-dark ms-2"
                  >
                    Logout
                  </Link>
                )}
              </CardHeader>
              <CardBody className="">
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr  className="text-black">
                       <th>Email</th>
                        <th>Name</th>
                        <th>phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item, index) => (
                        <tr key={index}>
                          <td>{item.email}</td>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;

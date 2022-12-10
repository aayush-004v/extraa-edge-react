/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import ModalValidation from "./ModalValidation";

const FrontPage = () => {
  const [ApiData, setApiData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("black");

  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const getData = async () => {
    let resData = await axios("https://jsonplaceholder.typicode.com/users");
    setApiData(resData.data);
  };

  useEffect(() => {
    getData();
  },[]);
  

  function deleteItem(id) {
    const newArray = ApiData.filter((item) => item.id !== id);
    setApiData(newArray);
  }

  const editDetails = (element) => {
    setUpdateData({
      name: element.name,
      email: element.email,
      phone: element.phone,
      website: element.website,
    });
  };

  const changeHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleColor = () => {
    if(toggle) {
      setColor("red");
      setToggle(false);
    }
    else {
      setColor("black");
      setToggle(true);
    }
  }

  return (
    <>
      <div className="container-fluid mt-2">
        <div className="row">
          {ApiData.map((element,id) => {
                return (
                    <div key={id} className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mt-3 mb-2">
                      <div className="card mx-2">
                        <img
                          className="card-img-top"
                          src={`https://avatars.dicebear.com/v2/avataaars/${element.username}.svg?options[mood][]=happy`}
                          alt="Card image cap"
                          width="200px"
                          height="200px"
                        />
                        <div className="card-body">
                          <h5 className="card-title ms-2">{element.name}</h5>
                          <ul className="list-unstyled">
                            <li>
                              <span>
                                <i
                                  className="fa fa-envelope"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              {element.email}
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-phone"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              {element.phone}
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-globe"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              {element.website}
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer text-center">
                          <div className="footer-icon">
                            <div className="col-4">
                              <span
                                id="boot-icon dil"
                                className="bi bi-heart-fill dil"
                                style={{ color: color }}
                                onClick={handleColor}
                              ></span>
                            </div>
                            <div className="col-4">
                              <i
                                className="fa fa-pencil editt text-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={() => {
                                  editDetails(element);
                                }}
                              ></i>
                            </div>
                            <div className="col-4">
                              <i
                                className="fa fa-trash deletee text-danger"
                                onClick={() => {
                                  deleteItem(element.id);
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                );
              })
            }
        </div>
      </div>
      <ModalValidation updateData={updateData}
      changeHandle={changeHandle}/>
    </>
  );
};

export default FrontPage;

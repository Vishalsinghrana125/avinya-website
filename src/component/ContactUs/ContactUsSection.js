import axios from "axios";
import React from "react";
import { useState } from "react";
import "./ContactUsSection.css";
// import { div, div } from "react-bootstrap";
import Communication from "../../assets/Communicate.png";
import Vector from "../../assets/Vector.png";
import Home from "../../assets/HomeAddress.png";
function ContactUsSection() {
  const [data, setdata] = useState({
    Name: "",
    Phone: 0,
    Email: "",
    Message: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }
  const handleFormSubmit = async () => {
    const { Name, Email, Phone, Message } = data;
    var Mobile = parseInt(Phone, 10);
    axios
      .post(
        "https://avinyasale.azurewebsites.net/api/v1/CreateContactDetails", { Name, Message, Mobile, Email }
      )
      .then((res) => console.log(res.data));
  };
  return (
    <div className="ContactUsSection">
      <div className="contact-healine">
      <h1 className="about-hedline">conact us</h1>
      <h5 className="ContactUsSection-hedline-2">
        Are you ready to expand your business online ?
      </h5>
      </div>
      <div>
        <div className="contactsection">
        <div class="col-sm-6 ContactUsSection-div-1">
                <div class="leftctn">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={Communication} class="img-demo img-fluid"/>
                        </div>
                        <div class="col-lg-6 text-left">
                            <p class="leftctn-head"><h4>24 x 7 Live Support</h4></p>
                            <p class="leftctn-info">On working days, we try to respond to every inquiry within 24 hours.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={Vector  } class="img-demo img-fluid"/>

                        </div>
                        <div class="col-lg-6 text-left">
                            <p class="leftctn-head"><h4>Mail Us</h4></p>
                            <p class="leftctn-info">Would you like to learn more about the product? Write to us at support@avinya.app</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={Home} class="img-demo img-fluid"/>

                        </div>
                        <div class="col-lg-6 text-left">
                            <p class="leftctn-head"> <h4>Contact Us</h4></p>
                            <p class="leftctn-info"><b>eSparse Matrix solutions Private Limited</b></p>
                            <p class="leftctn-info">133/1, Spectrum Building, Akurdi,
                                Pune -411033</p>
                        </div>
                    </div>
                </div>
            </div>
        <div lag="3" className="ContactUsSection-div-2">
          <form
            className="demo-form"
          >
            <h4 className="ContactUsSection-hedline2">Get in Touch with Us </h4>
            <input
              className="demo-input"
              type="text"
              placeholder="Your Name"
              value={data.Name}
              name="Name"
              onChange={(event) => handleChange(event)}
            />
            <input
              className="demo-input"
              type="number"
              placeholder="Your Mobile Number  "
              value={data.Phone}
              name="Phone"
              onChange={(event) => handleChange(event)}
            />
            <input
              className="demo-input"
              type="email"
              placeholder="Your Email Id  "
              value={data.Email}
              name="Email"
              onChange={(event) => handleChange(event)}
            />
            <textarea
              className="demo-textarea"
              placeholder="Message"
              value={data.Message}
              name="Message"
              onChange={(event) => handleChange(event)}
            />
            <div className="submit-btn">
            <input type="Submit" onClick={() => handleFormSubmit()} className="demo-submit-btn" />
            </div>
          </form>

        </div>

      </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
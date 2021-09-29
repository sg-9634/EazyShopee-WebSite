import "../styles/Login.css";
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { url } from '../common/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useHistory } from 'react-router-dom'; 
axios.defaults.withCredentials = true
export default class Addrr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: "",
      state: "",
      city: "",
      addr: "",
      landmark: "",
      pincode: "",
    };

    //this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeStates = this.onChangeStates.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddr = this.onChangeAddr.bind(this);
    this.onChangeLandmark = this.onChangeLandmark.bind(this);
     this.onChangePincode = this.onChangePincode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 
   
    
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeStates(e) {
    this.setState({
     state : e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeAddr(e) {
    this.setState({
      addr: e.target.value,
    });
  }

  onChangeLandmark(e) {
    this.setState({
      landmark: e.target.value,
    });
  }

  onChangePincode(e) {
    this.setState({
      pincode: e.target.value,
    });
  }

   validator = () => {
    document.getElementById("country").innerHTML = "";
    document.getElementById("state").innerHTML = "";
    document.getElementById("city").innerHTML = "";
    document.getElementById("addr").innerHTML = "";
    document.getElementById("landmark").innerHTML = "";
    document.getElementById("pincode").innerHTML = "";
  };



  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
       
        if (this.state.country.length === 0) {
          this.validator();
          document.getElementById("country").innerHTML = "  Field is Empty *";
        } else if (this.state.state.length === 0) {
            this.validator();
          document.getElementById("state").innerHTML = "  Field is Empty *";
        } else if (this.state.city.length === 0) {
            this.validator();
            document.getElementById("city").innerHTML = "  Field is Empty *";
        } else if (this.state.addr.length === 0) {
            this.validator();
            document.getElementById("addr").innerHTML = "  Field is Empty *";
        } else if (this.state.landmark.length === 0) {
            this.validator();
            document.getElementById("landmark").innerHTML = "  Field is Empty *";
        } else if (this.state.pincode.length === 0) {
            this.validator();
            document.getElementById("pincode").innerHTML = "  Field is Empty *";
        } else {
          this.validator();
      await axios
        .post(
          url + "/address",
          {
            country: this.state.country,
            state: this.state.state,
            city: this.state.city,
            addr: this.state.addr,
            landmark: this.state.landmark,
            pincode: this.state.pincode,
          },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("Address Saved Successfully");
          let addid=res.data.data.addressid;
          localStorage.setItem("addressId",addid)
         //this.props.history.push("/order");
         window.location.href="/order"

          //alert("Registration successful " + this.state.first_name);
        })
        .catch((err) => {
          toast.error("Cannot Add Adress..!!!");
          // alert("email already exist");
        });
    }
  }

  render() {
    return (
        <div className="container">
        <ToastContainer />
        <h1 className="page-title page-name">Shipping Address</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="">Country</label>
            &nbsp;&nbsp;
            <span className="text validate" id="country"></span>
            <input
              onChange={this.onChangeCountry}
              placeholder="Enter Country Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">State</label>
            &nbsp;&nbsp;
            <span className="text validate" id="state"></span>
            <input
              onChange={this.onChangeStates}
              placeholder="Enter State Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">City</label>
            &nbsp;&nbsp;
            <span className="text validate" id="city"></span>
            <input
              onChange={this.onChangeCity}
              placeholder="Enter City Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Address</label>
            <span className="text validate" id="addr"></span>
            <textarea
              rows="3"
              onChange={this.onChangeAddr}
              placeholder="Enter Address"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="">Landmark</label>
            &nbsp;&nbsp;
            <span className="text validate" id="landmark"></span>
            <input
              onChange={this.onChangeLandmark}
              placeholder="Enter Landmark Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Pincode</label>
            <span className="text validate" id="pincode"></span>
            <input
              onChange={this.onChangePincode}
              placeholder="Enter pincode"
              type="number"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
          {/* <Link to="/success">
              <a className="btn btn-warning">Add</a>
            </Link> */}
          
          {/* <Link to="/order">
              <a className="btn btn-warning">Add</a>
            </Link> */}

            <button type="submit" className="btn btn-primary" >
              Add
            </button>
            &nbsp;     &nbsp;
            <Link to="/cart" >
              <a className="btn btn-warning"> Back</a>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
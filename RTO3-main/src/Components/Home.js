
import { useState } from "react";
import { BookContext } from "../Utils/BookContext";
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./Navbar/Navbar"
import Form from "./Form/Form"
import Slider from "./Carousel/Slider"
import Cars from "./Cars/Cars"
import Contact from "./Contact/Contact"
import Highlight  from "./HighLight/Highlight"


const Home = () => {

const[pickUp,setPickUp] = useState("");
  const[drop,setDrop] = useState("");
  const[passenger,setPassenger] = useState(1);
  const[date,setDate] = useState("");
  const[time,setTime] = useState("");
  const[phoneNum,setPhoneNum] = useState(0);
  const[book,setBook] = useState(false);

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="bg">{
    <div className="App">
    <BookContext.Provider
      value={{pickUp,setPickUp,
      drop,setDrop,
      passenger,setPassenger,
      date,setDate,
      time,setTime,
      phoneNum,setPhoneNum,
      book,setBook}}>
      <Navbar/>
      <Form/>
      <Slider/>
      <Highlight/>
      <Cars/>
      <Contact/>
      </BookContext.Provider>
      </div>
    }

    </div>

    </>
  );
};

export default Home;
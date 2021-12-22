import React from 'react';
import logo from './logo.svg';
import NavBar from './Components/NavBar';
import FirstRow from './Components/FirstRow';
import SecondRow from './Components/SecondRow';
import ThirdRow from './Components/ThirdRow';
import './App.css';

const AppointmentDetails = {
  name: "Alan Ford",
  eid: "00005152",
  time: "9:00 (24-05-2016)",
  email: "alan.form@email.nl",
  phone: "+3112346587",
};
const AppointmnetStatus = {
  status: "In Progress",
  door: "Mark",
  time: "10:30",
  date: "(25-05-2016)",
};
const Customer = {
  profilepicture: "https://www.w3schools.com/howto/img_avatar.png",
  name: "Boltaart Bosbessen",
  designation: "Full Stack Developer",
};

// var arrow="<"
function App() {
  return (
    <div className="site-container">
      <NavBar val = {AppointmentDetails} />
      <FirstRow val = {AppointmentDetails} />
      <SecondRow val = {AppointmnetStatus} />
      <ThirdRow val = {Customer} />
    </div>
  );
}

export default App;
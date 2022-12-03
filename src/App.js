import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

function App() {
  const [key, setKey] = useState("Welcome");
  return (
    <>
    <header style={{display:"flex", justifyContent:"right", backgroundColor:"#F9D5CD"}}> <a href="https://github.com/Charlie19255"><img
                className="logo"
                src="/img/project/hero/logo/logo1.webp"
                alt="First logo"
                style={{height:"30px"}}
              /> </a><a href="https://www.linkedin.com/in/charlie-sihaphong/"><img
              className="logo"
              src="/img/project/hero/logo/logo2.webp"
              alt="Second logo"
              style={{height:"30px", borderRadius:"15px"}}
            /></a></header>
      <Tabs
        style={{
          backgroundColor: "lightblue",
          width:"100%",
          height: "110px",
          fontSize: "25px",
          fontWeight:"bold",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Ultra"
        }}
        id="Tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="BigTab"
      >
        <Tab
          tabClassName="TabsSingle"
          eventKey="Welcome"
          title="Welcome"
          style={{ backgroundColor: "#9BF9AB"}}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "60%", margin: "auto" }}
              className="hero"
              src="/img/project/hero/hello.jpeg"
              alt="hero"
            />
          </div>
          <div>
            <h2 style={{fontFamily: "Holtwood One SC",fontSize: "25px",
          fontWeight:"bold",display: "flex", justifyContent: "center"}}>Charlie J. Sihaphong</h2>
            <h3 style={{fontFamily: "Holtwood One SC",fontSize: "25px", fontStyle:"italic",display: "flex", justifyContent: "center"}}>Junior Developer</h3>
          </div>
        </Tab>
        <Tab style={{textAlign:"center", backgroundColor:"#F5CBA7", padding:"20px",fontFamily: "Ultra", fontSize:"20px"}}
          tabClassName="TabsSingle"
          eventKey="About Me"
          title="About Me"
        >
          Hi, my name is Charlie. I’m currently enrolled in Learn Academy. It is the first step in my passion to help advance the future of gaming. It is because Learn Academy will help provide me the program language fundamentals into writing code for gaming. 
        <br></br><br></br>
        I am a US navy veteran and a major time killer for us during deployment was playing video games. It is a place mostly without wifi or service. I feel that I can innovate the gaming world to provide a more realistic experience where it isn’t dictated by how well connected you are to a service and more of the camaraderie that is made from the interactions you have with the people around you. 
        <div></div><br></br>
        There was a time during my military service where there was a game called Master-duel. My friend and I talked about the game’s past and how the duel disk was amazing. I felt that the company had all the hardware to innovate the game and add a new way of playing the game through my idea. So I submitted the idea to the company that majors in gaming innovation, Nintendo. My idea was rejected however due to timing constraints and their development team already deciding on how to approach the game. I hope that you could consider adding me to your gaming development team so we can innovate the future of gaming together. <br></br> <img
              style={{ width: "40%", margin: "auto" }}
              className="hero"
              src="/img/project/hero/hero1.jpeg"
              alt="hero"
            /></Tab>
        <Tab tabClassName="TabsSingle" eventKey="Projects" title="Projects">
          <Carousel>
            <CarouselItem>
              <img 
                className="FirstProject"
                src="/img/project/First.png"
                alt="First slide"
              />
              <Carousel.Caption style={{color:"black",fontSize:"50px",fontFamily: "Ultra"}} >Pig Latin</Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <img 
                className="FirstProject"
                src="/img/project/Second.png"
                alt="Second slide"
              />
              <Carousel.Caption style={{color:"black",fontSize:"50px",fontFamily: "Ultra"}}>Tic Tac Toe</Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <img 
                className="FirstProject"
                src="/img/project/Third.png"
                alt="Third slide"
              />
              <Carousel.Caption style={{color:"black",fontSize:"50px",fontFamily: "Ultra"}}>Treasure Hunt</Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <img 
                className="FirstProject"
                src="/img/project/Fourth.png"
                alt="Fourth slide"
              />
              <Carousel.Caption style={{color:"white", fontSize:"50px",fontFamily: "Ultra"}}>Text Based Game</Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
              <img 
                className="FirstProject"
                src="/img/project/Fifth.png"
                alt="Fifth slide"
              />
              <Carousel.Caption style={{color:"white", fontSize:"50px",fontFamily: "Ultra"}}>Car Project</Carousel.Caption>
            </CarouselItem>
          </Carousel>
        </Tab>
        <Tab tabClassName="TabsSingle" eventKey="Contact Me" title="Contact Me" style={{backgroundColor:"#AEC5F4"}}>
          <div style={{display:"flex", justifyContent:"center"}}>
        <a><img
                className="logo"
                src="/img/project/hero/logo/logo1.webp"
                alt="First logo"
                style={{height:"300px"}}
              /> </a><a href="https://www.linkedin.com/in/charlie-sihaphong/"><img
              className="logo"
              src="/img/project/hero/logo/logo2.webp"
              alt="Second logo"
              style={{height:"300px", borderRadius:"15px"}}
            /></a></div><div style={{display:"flex", justifyContent:"center", fontSize:"30px", fontFamily: "Ultra"}}>
            Email:charlie19255@gmail.com</div>
        </Tab>
      </Tabs>
    </>
  );
}

export default App;

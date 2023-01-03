import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import "./App.css";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Atom(props) {
  const point = useMemo(
    () =>
      new THREE.EllipseCurve(
        0,
        0,
        250,
        250,
        0,
        2 * Math.PI,
        false,
        1
      ).getPoints(100),
    []
  );
  return (
    <group {...props}>
      <Line points={point} color="gray" lineWidth={0.3} />
      <Text scale={[20, 20, 10]} color="red" position={[0, 5, 0]}>
        HELLO WORLD!
      </Text>
      <Text scale={[10, 10, 10]} color="lightgreen" position={[0, 3.7, 0]}>
        Hi, my name is Charlie.
      </Text>
      <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, 2.7, 0]}>
        I’m currently enrolled in a 
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, 1.7, 0]}>
        full-stack bootcamp at Learn Academy. 
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, 0.7, 0]}>
        It is the first step in pursuing my passion 
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, -0.2, 0]}>
        to help advance the future of
        gaming.
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, -1.2, 0]}>
        I'm mastering programming 
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, -2.2, 0]}>
        language fundamentals, so I can grow
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, -3.2, 0]}>
        into writing code for gaming that is 
        </Text>
        <Text scale={[10, 10, 10]} color="lightgreen"  position={[0, -4.2, 0]}>
        out of this world!
        </Text>
      
      <Venus position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 7]} speed={2} />
      <Mercury position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 8]} speed={3} />
      <Earth position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 9]} speed={0.5} />
      <Mars position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 10]} speed={0.4} />
      <Jupiter
        position={[0, 0, 0]}
        rotation={[0, 0, -Math.PI / 11]}
        speed={0.3}
      />
      <Saturn
        position={[0, 0, 0]}
        rotation={[0, 0, -Math.PI / 12]}
        speed={0.2}
      />
      <Uranus
        position={[0, 0, 0]}
        rotation={[0, 0, -Math.PI / 13]}
        speed={0.1}
      />
      <Neptune
        position={[0, 0, 0]}
        rotation={[0, 0, -Math.PI / 20]}
        speed={0.08}
      />
      <Sphere args={[10, 64, 64]}>
        <meshBasicMaterial color="yellow" toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Mercury({ radius = 30, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color="gray" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Venus({ radius = 60, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.4]} />
        <meshBasicMaterial color="orange" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Earth({ radius = 120, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.5]} />
        <meshBasicMaterial color="aquamarine" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Mars({ radius = 180, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.6]} />
        <meshBasicMaterial color="brown" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Jupiter({ radius = 240, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[5]} />
        <meshBasicMaterial color="#F5CBA7" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Saturn({ radius = 300, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 1.5, 2, 0, 2 * Math.PI, false, 1).getPoints(
        100
      ),
    []
  );
  return (
    <group {...props}>
      <mesh ref={ref}>
        <Line worldUnits points={points} color="tan" lineWidth={0.3} />
        <sphereGeometry args={[1]} />
        <meshBasicMaterial color="tan" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Uranus({ radius = 350, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[2]} />
        <meshBasicMaterial color="skyblue" toneMapped={false} />
      </mesh>
    </group>
  );
}
function Neptune({ radius = 360, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[2]} />
        <meshBasicMaterial color="blue" toneMapped={false} />
      </mesh>
    </group>
  );
}

const Texture = ({ texture }) => {
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[5, 4]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

const Image = ({ url }) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  return <Texture texture={texture} />;
};

function App() {
  const [key, setKey] = useState("Welcome");
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "right",
          backgroundColor: "#F9D5CD",
        }}
      >
        {" "}
        <a href="https://github.com/Charlie19255" target="_blank">
          <img
            className="logo"
            src="https://charlie19255.github.io/Profile/img/project/hero/logo/logo1.webp"
            alt="First logo"
            style={{ height: "30px" }}
          />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/charlie-sihaphong/"
          target="_blank"
        >
          <img
            className="logo"
            src="https://charlie19255.github.io/Profile/img/project/hero/logo/logo2.webp"
            alt="Second logo"
            style={{ height: "30px", borderRadius: "15px" }}
          />
        </a>
      </header>
      <Tabs
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          height: "110px",
          fontSize: "25px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Ultra",
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
          style={{ backgroundColor: "#9BF9AB" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "400px" }}
              className="hero"
              src="https://charlie19255.github.io/Profile/img/project/hero/hello.jpeg"
              alt="hero"
            />
          </div>
          <div>
            <h2
              style={{
                fontFamily: "Holtwood One SC",
                fontSize: "25px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Charlie J. Sihaphong
            </h2>
            <h3
              style={{
                fontFamily: "Holtwood One SC",
                fontSize: "25px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Junior Developer
            </h3>
          </div>
        </Tab>
        <Tab
          style={{
            textAlign: "center",
            backgroundColor: "#F5CBA7",
            padding: "20px",
            fontFamily: "Ultra",
            fontSize: "20px",
          }}
          tabClassName="TabsSingle"
          eventKey="About Me"
          title="About Me"
        >
          <Canvas camera={{ position: [0, 0, 10] }} style={{ height: "400px" }}>
            <Suspense fallback={null}>
              <color attach="background" args={["black"]} />
              <Float speed={1} rotationIntensity={1} floatIntensity={2}>
                <OrbitControls />
                <Atom />
              </Float>
              {/* <Image  position={[100, 100, 0]} rotation={[10, 10, 10]}/> */}
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <Stars saturation={1} count={800} speed={0.5} />
              <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} radius={1.7} />
              </EffectComposer>
            </Suspense>
          </Canvas>
          {/* Hi, my name is Charlie. I’m currently enrolled in a full-stack
          bootcamp at Learn Academy. It is the first step in pursuing my passion
          to help advance the future of gaming.I'm mastering programming
          language fundamentals, so I can grow into writing code for gaming that
          is <u>out of this world!</u> */}
          {/* Hi, my name is Charlie. I’m currently enrolled in Learn Academy. It is the first step in my passion to help advance the future of gaming. It is because Learn Academy will help provide me the program language fundamentals into writing code for gaming that is out of this world!  */}
          {/* <br></br><br></br>
        I am a US navy veteran and a major time killer for us during deployment was playing video games. It is a place mostly without wifi or service. I feel that I can innovate the gaming world to provide a more realistic experience where it isn’t dictated by how well connected you are to a service and more of the camaraderie that is made from the interactions you have with the people around you. 
        <div></div><br></br>
        There was a time during my military service where there was a game called Master-duel. My friend and I talked about the game’s past and how the duel disk was amazing. I felt that the company had all the hardware to innovate the game and add a new way of playing the game through my idea. So I submitted the idea to the company that majors in gaming innovation, Nintendo. My idea was rejected however due to timing constraints and their development team already deciding on how to approach the game. I hope that you could consider adding me to your gaming development team so we can innovate the future of gaming together. <br></br> */}
        </Tab>
        <Tab tabClassName="TabsSingle" eventKey="Projects" title="Projects">
          <Carousel>
            <CarouselItem>
              <a
                href="https://github.com/learn-academy-2022-golf/pig-latin-team-renarlie"
                target="_blank"
              >
                <img
                  className="FirstProject"
                  src="https://charlie19255.github.io/Profile/img/project/First.png"
                  alt="First slide"
                />
              </a>
              <Carousel.Caption
                style={{
                  color: "black",
                  fontSize: "50px",
                  fontFamily: "Ultra",
                }}
              >
                Pig Latin <br></br> React
              </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://github.com/learn-academy-2022-golf/tic-tac-toe-team-mayhem"
                target="_blank"
              >
                <img
                  className="FirstProject"
                  src="https://charlie19255.github.io/Profile/img/project/Second.png"
                  alt="Second slide"
                />
                <Carousel.Caption
                  style={{
                    color: "black",
                    fontSize: "50px",
                    fontFamily: "Ultra",
                  }}
                >
                  Tic Tac Toe<br></br> React
                </Carousel.Caption>
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://github.com/learn-academy-2022-golf/treasurehunt-Charlie19255"
                target="_blank"
              >
                <img
                  className="FirstProject"
                  src="https://charlie19255.github.io/Profile/img/project/Third.png"
                  alt="Third slide"
                />
                <Carousel.Caption
                  style={{
                    color: "black",
                    fontSize: "50px",
                    fontFamily: "Ultra",
                  }}
                >
                  Treasure Hunt<br></br> React
                </Carousel.Caption>
              </a>
            </CarouselItem>

            <CarouselItem>
              <a
                href="https://github.com/learn-academy-2022-golf/text-based-game-team-cast-away-1"
                target="_blank"
              >
                <img
                  className="FirstProject"
                  src="https://charlie19255.github.io/Profile/img/project/Fourth.png"
                  alt="Fourth slide"
                />
                <Carousel.Caption
                  style={{
                    color: "white",
                    fontSize: "50px",
                    fontFamily: "Ultra",
                  }}
                >
                  Text Based Game<br></br> Ruby
                </Carousel.Caption>
              </a>
            </CarouselItem>
            <CarouselItem>
              <a
                href="https://github.com/Charlie19255/threejs-practice"
                target="_blank"
              >
                <img
                  className="FirstProject"
                  src="https://charlie19255.github.io/Profile/img/project/Fifth.png"
                  alt="Fifth slide"
                />
                <Carousel.Caption
                  style={{
                    color: "white",
                    fontSize: "50px",
                    fontFamily: "Ultra",
                  }}
                >
                  Car Project <br></br> React
                </Carousel.Caption>
              </a>
            </CarouselItem>
          </Carousel>
        </Tab>
        <Tab
          tabClassName="TabsSingle"
          eventKey="Contact Me"
          title="Contact Me"
          style={{ backgroundColor: "#AEC5F4" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://github.com/Charlie19255" target="_blank">
              <img
                className="logo"
                src="https://charlie19255.github.io/Profile/img/project/hero/logo/logo1.webp"
                alt="First logo"
                style={{ width: "100px" }}
              />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/charlie-sihaphong/"
              target="_blank"
            >
              <img
                className="logo"
                src="https://charlie19255.github.io/Profile/img/project/hero/logo/logo2.webp"
                alt="Second logo"
                style={{ width: "100px", borderRadius: "15px" }}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Ultra",
            }}
          >
            Email: charlie19255@gmail.com
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default App;

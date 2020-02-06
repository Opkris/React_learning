import React from "react";

import {Joke} from "../JS/Joke";

/*import Header from "../JS/Header"
import MainContent from "../JS/MainContent"
import Footer from "../JS/Footer"
import {ContactCard} from "../JS/ContactCard";
*/

function App(){


    return(
        <div>

        <joke
            content={{
                punchLine: "123"
            }}
        />
        <Joke
            content={{
                Joke: "My wife told me to stop acting like a flamingo. ",
                punchLine: "I had to put my foot down.!",
            }}
        />
        <Joke
            content={{
                Joke: "What is Whitney Houston’s favorite type of coordination?",
                punchLine: "HAAANNNNND EYEEEEEEE.",
            }}
        />
        <Joke
            content={{
                Joke: "Why are gay people always smiling? ",
                punchLine: "Because they can’t keep a straight face.",
            }}
        />
        <Joke
            content={{
                Joke: "Why did David Hasselhoff change his name to “The Hoff?",
                punchLine: "It’s less hassle.",
            }}
        />
        <Joke
            content={{
                Joke:"",
                punchLine: "the guy with no arms and no legs says \"how do you think I rang the doorbell?\""
            }}
        />


        </div>
    )




   /* return(
        <div>
            <Header/>

            <MainContent/>

            <ContactCard
                contact={{
                    name: "Mr kitten",
                    imageURL: "https://i.pinimg.com/originals/66/8c/5e/668c5ef5c6ca438980fa78218af26e1a.jpg",
                    phone: "123 45 678",
                    email: "MrKitten@gmail.com",
                    address: "123 Oslo vest"
                }}
            />
            <ContactCard
                contact={{
                    name: "Felix",
                    imageURL: "https://image.shutterstock.com/image-photo/cute-persian-kitten-walking-on-260nw-767854171.jpg",
                    phone: "987 65 432",
                    email: "felix@gmail.com",
                    address:"Mainbrace 24A"
                }}
            />
            <ContactCard
                contact={{
                    name: "Matrix",
                    imageURL: "http://placekitten.com/400/300/",
                    phone: "666 65 422",
                    email: "Matrix@gmail.com",
                    address: "lolz 66"
                }}

            />
            <ContactCard
                contact={{
                    name: "Astrix",
                    imageURL: "http://placekitten.com/200/100/",
                    phone: "987 65 432",
                    email: "Astrix@gmail.com",
                    address: "the Moon"
                }}

            />

            <Footer/>

        </div>
    )
*/

/*

  return (
      <div>
    <h1>Hello World from .App.h1</h1>

        <nav>
          <ul>
            <li>Hello</li>
            <li>hi</li>
            <li>greetings</li>
          </ul>
        </nav>
        <main>
          <p>This is where most of my content wil go...</p>
        </main>
        <Footer/>
      </div>
        );

*/


  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App
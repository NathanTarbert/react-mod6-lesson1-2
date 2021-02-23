import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer.js';
import Book from './Book';
import reportWebVitals from './reportWebVitals';
import MyButton from './MyButton';
import MyInput from './MyInput';

function Person(props) {
  console.log('the Person props are', props);
return <div>My name is {props.name}</div>
}
function Welcome() {
  return <h1>Hello from React!</h1>
}

function Cya(props) {
return <h1>C ya, from {props.someName} {props.age} {props.galaxy} </h1>
}

const HelloMessage = (props) => <div> Hello {props.name} </div>

// Passing Props to Nested Components
const BookList = () => {
  return (
    <ul>
      <Book title="IT" author="Stephen Strang" price="2,000" />{" "}
      <Book title="The Hunger Gits" author="Suzanne Collins" price="1,000" />
    </ul>
  );
}; 



ReactDOM.render(
  // console.log('the current state of', this.state.seconds);
  <div>

    <Welcome/>

    <Timer/>

    <Cya someName="Some User"age="32" galaxy="Mars" />

    <Person name="Supermot"/>

    <HelloMessage name="Nate"/>

    <BookList/>

    <MyButton/>

    <MyInput/>

  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

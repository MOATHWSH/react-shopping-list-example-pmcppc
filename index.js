import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Name:</b> {props.name} <br />
      <b>Price:</b> ${props.price}
    </div>
  );
}

function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="Ice cream" price="24" />
    </div>
  );
}

const el = <App />;
ReactDOM.render(els, document.getElementById('root2'));

function hello(shoko) {
  return (
    <div className="shoko">
      <b>Name</b> {shoko.namew} <br />
      <b>price</b> {shoko.pricew} <br />
    </div>
  );
}
function App() {
  return (
    <div>
      <shoko namew="shkoleto" pricew="23" />
      <shoko namew="shkoleto2" pricew="234" />
      <shoko namew="shkoleto3" pricew="21" />
    </div>
  );
}

const el = <App />;
ReactDOM.render(el, document.getElementById('root'));

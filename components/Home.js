import React from "react";
import { useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.development";
import Header from "./Header";
import {Container} from '../styles/appStyles'
import ListItems from "./ListItems";
import Modal from "./ModalBox";

export default function Home() {
  let [text, setText] = useState("");
  let [innerText, setinnerText] = useState("");
  let [display, setDisplay] = useState(false);
  let [edited, setEdited] = useState("");
  let [todos, setTodos] = useState([]);
  const handleUpdate = () => {
    if (text !== "") {
      if (edited !== "") {
        todos.forEach((e) => {
          if (e.title === edited) {
            e.title = text;
            e.innerText=innerText;
            e.date=new Date().toUTCString();
          }
        });
      } else {
        const newTodo = {
          title: text,
          innerText: innerText,
          key: todos.length + 1,
          date:new Date().toUTCString(),
        };
        setTodos([...todos, newTodo]);
      }
    }
    setDisplay(false);
    setEdited("");
  };
  return (
    <><Container>
      <Header setTodos={setTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        setDisplay={setDisplay}
        setText={setText}
        setEdited={setEdited}
        setinnerText={setinnerText}
      />
      <Modal
        display={display}
        setDisplay={setDisplay}
        handleUpdate={handleUpdate}
        text={text}
        setText={setText}
        setinnerText={setinnerText}
        innerText={innerText}
      />
      </Container>
    </>
  );
}

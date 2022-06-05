import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import {
  TodoText,
  ListView,
  ListViewHidden,
  HiddenButton,
  TodoInnerText,
  TodoDate
} from "../styles/appStyles";
import { Entypo } from "@expo/vector-icons";
export default function ListItems({ todos, setTodos,setDisplay,setText,setEdited,setinnerText }) {
    const deleteTodo=(rowKey)=>{
        let newTodos=[];
        todos.forEach((ele)=>{
            if(ele.key!=rowKey){
                newTodos.push(ele);
            }
        })
        setTodos(newTodos);
    }
  return (
    <>
      <SwipeListView
        data={todos}
        renderItem={(data) => (
          <ListView onPress={()=>{
                setDisplay(true);
                setEdited(data.item.title);
                setText(data.item.title);
               setinnerText(data.item.innerText);
          }}>
              <>
            <TodoText>{data.item.title}</TodoText>
            <TodoInnerText>{data.item.innerText}</TodoInnerText>
            <TodoDate>{data.item.date}</TodoDate>
            </>
          </ListView>
        )}
        renderHiddenItem={(data) => 
          (
            <ListViewHidden>
                <HiddenButton onPress={()=>{
                    deleteTodo(data.item.key)
                }}>
                     <Entypo name="trash" size={24} color="black" />
                </HiddenButton>
            </ListViewHidden>
          )
        }
        leftOpenValue={75}
        previewRowKey={"2"}
        disableLeftSwipe={true}

      />
    </>
  );
}

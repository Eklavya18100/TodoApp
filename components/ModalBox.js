import React from "react";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
} from "../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { View, Text } from "react-native";
import { useState } from "react";

export default function ModalBox({
  display,
  setDisplay,
  handleUpdate,
  text,
  setText,
  setinnerText,
  innerText,
}) {
  let s = "";

  return (
    <>
      <ModalButton
        onPress={() => {
          setDisplay(true);
        }}
      >
        <AntDesign name="plus" size={24} color="black" />
      </ModalButton>
      <View></View>
      <Modal
        visible={display}
        transparent
        // style={{ backgroundColor: "rgba(0,0,0,0.5)" ,borderRadius:10}}
        onRequestClose={() => {
          setDisplay(false);
        }}
        animationType="slide"
        hardwareAccelerated
      >
        <ModalContainer   >
          <ModalView
          
          >
            <StyledInput  
              placeholder="Enter Title"
              value={text}
              onChangeText={(value) => {
                setText(value);
              }}
            ></StyledInput >
            <StyledInput
              placeholder="Enter Inner Text"
              value={innerText}
              multiline
              onChangeText={(value) => {
                setinnerText(value);
              }}
            ></StyledInput>
            <ModalActionGroup>
              <ModalAction
                onPress={() => {
                  setDisplay(false);
                  setText("");
                  setinnerText("");
                }}
              >
                <ModalIcon>
                  <Text style={{ color: "#fff" }}>
                    <Entypo name="circle-with-cross" size={24} color="white" />
                  </Text>
                </ModalIcon>
              </ModalAction>
              <ModalAction
                onPress={() => {
                  handleUpdate();
                  setText("");
                  setinnerText("");
                }}
              >
                <ModalIcon>
                  <Text style={{ color: "#fff" }}>
                    <AntDesign name="checkcircle" size={24} color="white" />
                  </Text>
                </ModalIcon>
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
}

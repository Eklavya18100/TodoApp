import React from 'react'
import {View,Text} from 'react-native'
import { HeaderView,HeaderTitle, HeaderButton } from '../styles/appStyles'
import { AntDesign } from '@expo/vector-icons';
export default function Header({setTodos}) {
  return (
    <HeaderView>
        <HeaderTitle>
            TODOS
        </HeaderTitle>
        <HeaderButton onPress={()=>{
          setTodos([]);
        }}>
        <AntDesign name="delete" size={40} color="white" />
        </HeaderButton>
    </HeaderView>
  )
}

// libs
import React from 'react'
import Styled from 'styled-components/native'

interface InputProps {
  hostValue: string
  portValue: string
  onHostValueChange: (value: string) => void
  onPortValueChange: (value: string) => void
}

export default ({ hostValue, portValue, onHostValueChange, onPortValueChange}: InputProps) => {
  return (
    <Input.Wrapper>
      <Input.Left>
          <Input.LeftLabel>host</Input.LeftLabel>
        <Input.LeftInput value={hostValue} placeholder="123.123.123.123" onChangeText={(newValue) => onHostValueChange(newValue)} />
      </Input.Left>
      <Input.Right>
        <Input.RightLabel>port</Input.RightLabel>
        <Input.RightInput value={portValue} placeholder="14002" onChangeText={(newValue) => onPortValueChange(newValue)} />
      </Input.Right>
    </Input.Wrapper>
  )
}

const Input = {
  Wrapper: Styled.View`
    display: flex;
    flex-direction: row;
    width: 80%;
  `,
  Left: Styled.View`
    display: flex;
    width: 70%;
  `,
  Right: Styled.View`
    display: flex;
    width: 30%;
  `,
  LeftLabel: Styled.Text`
    z-index: 2;
    position: absolute;
    background-color: #fff;
    width: 55px;
    height: 25px;
    color: #000;
    font-size: ${(props) => props.theme.font.size.smaller};
    font-family: ${(props) => props.theme.font.familySemiBold};
    top: -10px;
    left: 30px;
    padding: 0 8px;
  `,
  RightLabel: Styled.Text`
    z-index: 2;
    position: absolute;
    background-color: #fff;
    width: 50px;
    height: 25px;
    color: #000;
    font-size: ${(props) => props.theme.font.size.smaller};
    font-family: ${(props) => props.theme.font.familySemiBold};
    top: -10px;
    left: 15px;
    padding: 0 8px;
  `,
  LeftInput: Styled.TextInput`
    width: 100%;
    border-color: #000;
    border-width: 2px;
    padding: 7px 22px;
    background-color: transparent;
    border-top-left-radius: 90px;
    border-bottom-left-radius: 90px;
    color: #000;
    font-size: ${(props) => props.theme.font.size.small};
  `,
  RightInput: Styled.TextInput`
    position: absolute;
    left: -1px;
    border-color: #000;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 0px;
    padding: 7px 22px;
    background-color: transparent;
    border-top-right-radius: 90px;
    border-bottom-right-radius: 90px;
    color: #000;
    font-size: ${(props) => props.theme.font.size.small};
  `,
  Title: Styled.Text`
    font-size: ${(props) => props.theme.font.size.medium};
  `,
}

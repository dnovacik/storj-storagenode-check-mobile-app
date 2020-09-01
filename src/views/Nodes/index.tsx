// libs
import React, { useState } from 'react'
import Styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { FontAwesome5, SimpleLineIcons, EvilIcons } from '@expo/vector-icons'

// components
import TwoInput from '../../components/Input'

// store
import RootStore from '../../store/root'

export default () => {
  const [host, setHost] = useState('')
  const [port, setPort] = useState('')
  const [isCheckingNode, setIsCheckingNode] = useState(false)

  const onAddNodePressed = async () => {
    const result = await RootStore.getNode(host, port)

    if (result) {
      setHost('')
      setPort('')
    }
  }

  const onHostValueChange = (newValue: string) => {
    setHost(newValue)
  }

  const onPortValueChange = (newValue: string) => {
    setPort(newValue)
  }

  return (
    <Nodes.Layout>
      <Nodes.Row>
        {RootStore.nodes.map((node, index) => {
          return (
            <Nodes.Title key={index}>{node.wallet}</Nodes.Title>
          )
        })}
      </Nodes.Row>
      <Nodes.Row>
        <Nodes.NodeInput hostValue={host} portValue={port} onHostValueChange={onHostValueChange} onPortValueChange={onPortValueChange} />
        <Nodes.IconWrapper onPress={onAddNodePressed}>
          {isCheckingNode
            ? <Nodes.Loader size={30} color={'#000'} />
            : <Nodes.PlusIcon name={'plus'} size={65} color={'#000'} />
          }
        </Nodes.IconWrapper>
      </Nodes.Row>
    </Nodes.Layout>
  )
}

const Nodes = {
  Layout: Styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    flex: 1;
  `,
  PreReq: Styled.Text`
    margin-top: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    font-size: ${(props) => props.theme.font.size.small};
    font-family: ${(props) => props.theme.font.familySemiBold};
  `,
  Row: Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 10px;
    margin-top: 30px;
  `,
  NodeInput: Styled(TwoInput)`
    display: flex;
  `,
  IconWrapper: Styled.TouchableWithoutFeedback`
    display: flex;
  `,
  PlusIcon: Styled(EvilIcons)`
    display: flex;
  `,
  Loader: Styled(ActivityIndicator)`
    display: flex;
  `,
  Title: Styled.Text`
    display: flex;
    font-size: ${(props) => props.theme.font.size.medium};
  `,
}

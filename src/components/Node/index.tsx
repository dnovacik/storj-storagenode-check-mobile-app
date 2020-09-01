// libs
import React from 'react'
import Styled from 'styled-components/native'

interface NodeProps {
  nodeID: string
}

export default ({ nodeID }: NodeProps) => {
  return (
    <Node.Layout>
      <Node.Title>Home Component</Node.Title>
    </Node.Layout>
  )
}

const Node = {
  Layout: Styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Title: Styled.Text`
    font-size: ${(props) => props.theme.font.size.medium};
  `,
}

// libs
import React from 'react'
import Styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const navigation = useNavigation()

  const onContinuePressed = () => {
    navigation.navigate('AddNodes')
  }

  return (
    <Onboarding.Layout>
      <Onboarding.PreReq>
        {`Please make sure your storagenode were started with parameter [-p 14002:14002], so that they are accessible to the app`}
      </Onboarding.PreReq>
      <Onboarding.IconWrapper onPress={onContinuePressed}>
        <Onboarding.Icon name={'arrowright'} size={28} color={'#000'} />
      </Onboarding.IconWrapper>
    </Onboarding.Layout>
  )
}

const Onboarding = {
  Layout: Styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  IconWrapper: Styled.TouchableWithoutFeedback`
    display: flex;
  `,
  Icon: Styled(AntDesign)`
    display: flex;
  `,
  Title: Styled.Text`
    font-size: ${(props) => props.theme.font.size.medium};
  `,
}

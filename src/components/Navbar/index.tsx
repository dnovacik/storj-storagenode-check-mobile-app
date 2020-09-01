// libs
import React from 'react'
import Styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

import { navigate } from '../../navigation/rootNavigation'
import theme from '../../styled-components/theme'

export default () => {
    return (
        <Navbar.Wrapper>
            <Navbar.Layout>
                <Navbar.IconWrapperLeft
                    onPress={() => navigate({ name: 'User', params: { id: 3 } })}
                >
                    <FontAwesome name="user-circle-o" size={32} color={theme.colors.primaryGreen} />
                </Navbar.IconWrapperLeft>
                <Navbar.IconWrapperRight>
                    <FontAwesome name="bars" size={32} color={theme.colors.primaryGreen} />
                </Navbar.IconWrapperRight>
            </Navbar.Layout>
        </Navbar.Wrapper>
    )
}

const Navbar = {
    Wrapper: Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: 100%;
    position: relative;
  `,
    Layout: Styled.View`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `,
    IconWrapperLeft: Styled.TouchableOpacity`
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,
    IconWrapperRight: Styled.TouchableOpacity`
    margin-right: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
}

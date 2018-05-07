import React, { Component } from "react";
import { Text, View } from "react-360";
import styled from "styled-components";

const FlexBox = styled(View)`
  /* style containter */
  width: 1000px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);

  /* setup flexible grid */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
`;

const AppLauncher = styled(View)`
  padding: 20px;
  width: 300px;
  height: 200px;
  margin: 10px;

  background-color: #000000;
  border-color: #639dda;
  border-width: 2px;
`;

const Title = styled(Text)`
  font-size: 30px;
`;

export default class AppLaunchers extends Component {
  render() {
    return (
      <FlexBox>
        <AppLauncher>
          <Title>Banner</Title>
        </AppLauncher>
        <AppLauncher>
          <Title>Canvas</Title>
        </AppLauncher>
        <AppLauncher>
          <Title>Peoplesoft</Title>
        </AppLauncher>
        <AppLauncher>
          <Title>Learning Center</Title>
        </AppLauncher>
        <AppLauncher>
          <Title>Campus Services</Title>
        </AppLauncher>
        <AppLauncher>
          <Title>Oculus</Title>
        </AppLauncher>
      </FlexBox>
    );
  }
}

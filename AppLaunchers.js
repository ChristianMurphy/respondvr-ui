import React, { Component } from "react";
import { Text, View } from "react-360";
import styled from "styled-components";

const Panel = styled(View)`
  width: 1000px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  justify-content: center;
  align-items: center;
`;

const GreetingBox = styled(View)`
  padding: 20px;
  background-color: #000000;
  border-color: #639dda;
  border-width: 2px;
`;

const Greetings = styled(Text)`
  font-size: 30px;
`;

export default class AppLaunchers extends Component {
  render() {
    return (
      <Panel>
        <GreetingBox>
          <Greetings>uPortal VR 1</Greetings>
        </GreetingBox>
      </Panel>
    );
  }
}

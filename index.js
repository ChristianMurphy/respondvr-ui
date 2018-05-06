import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";
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

export default class respondvr_ui extends Component {
  render() {
    return (
      <Panel>
        <GreetingBox>
          <Greetings>uPortal VR</Greetings>
        </GreetingBox>
      </Panel>
    );
  }
}

AppRegistry.registerComponent("respondvr_ui", () => respondvr_ui);

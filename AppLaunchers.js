import React, { Component } from "react";
import { Text, View, Image, asset, NativeModules } from "react-360";
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

const Logo = styled(Image)`
  height: 100%;
  max-height: 75%;
`;

const Title = styled(Text)`
  font-size: 30px;
  text-align: center;
`;

export default class AppLaunchers extends Component {
  gotoApp = url => () => {
    NativeModules.LinkingManager.openURL(url);
  };
  render() {
    return (
      <FlexBox>
        <AppLauncher
          onInput={this.gotoApp(
            "https://www.ellucian.com/student-information-system/"
          )}
          pointerEvents="box-only"
        >
          <Logo source={asset("banner-by-ellucian.png")} />
          <Title>Banner</Title>
        </AppLauncher>
        <AppLauncher
          onInput={this.gotoApp("https://www.canvaslms.com/")}
          pointerEvents="box-only"
        >
          <Logo source={asset("canvas-by-instructure.png")} />
          <Title>Canvas</Title>
        </AppLauncher>
        <AppLauncher
          onInput={this.gotoApp("http://www.blackboard.com")}
          pointerEvents="box-only"
        >
          <Logo source={asset("blackboard.png")} />
          <Title>BlackBoard</Title>
        </AppLauncher>
        <AppLauncher
          onInput={this.gotoApp("https://en.wikipedia.org/wiki/University")}
          pointerEvents="box-only"
        >
          <Logo
            source={asset("learning-services.png")}
            style={{ backgroundColor: "white" }}
          />
          <Title>Learning Center</Title>
        </AppLauncher>
        <AppLauncher
          onInput={this.gotoApp("https://en.wikipedia.org/wiki/University")}
          pointerEvents="box-only"
        >
          <Logo
            source={asset("university.png")}
            style={{ backgroundColor: "white" }}
          />
          <Title>Campus Services</Title>
        </AppLauncher>
        <AppLauncher
          onInput={this.gotoApp("https://www.oculus.com")}
          pointerEvents="box-only"
        >
          <Logo source={asset("oculus.png")} />
          <Title>Oculus</Title>
        </AppLauncher>
      </FlexBox>
    );
  }
}

import { ExpandMore, Headset, Mic, Settings } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import color_code from "./color-code";
import "./Channel.css";
import { Avatar } from "@material-ui/core";

const Channel = () => {
  return (
    <ChannelList>
      <Header>
        <ChannelName>Rally Coding</ChannelName>
        <ExpandMore></ExpandMore>
      </Header>
      <ChannelSection>
        <SectionList>
          <Section>
            <span className="hash"># </span>
            announcements
          </Section>
          <Section>
            <span className="hash"># </span>
            announcements
          </Section>
          <Section>
            <span className="hash"># </span>
            announcements
          </Section>
          <Section>
            <span className="hash"># </span>
            announcements
          </Section>
        </SectionList>
        <UserInfo>
          <UserDetails>
            <Avatar src="/images/user.jpg" style={{ width: "40px" }} />
            <Description>
              <UserName>abhishekv5055</UserName>
              <IdNumber>#9837</IdNumber>
            </Description>
          </UserDetails>
          <Icons>
            <Mic className="icon" style={{ padding: "5px" }}></Mic>
            <Headset className="icon" style={{ padding: "5px" }}></Headset>
            <Settings className="icon" style={{ padding: "5px" }}></Settings>
          </Icons>
        </UserInfo>
      </ChannelSection>
    </ChannelList>
  );
};

export default Channel;

const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 15%;
  height: 100vh;
  color: ${color_code.discord__white};
  background-color: ${color_code.discord__channel_grey};
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
`;

const ChannelName = styled.h3`
  margin: 0;
`;

const Section = styled.p`
  font-size: 13pt;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin: 10px 0px;
  color: ${color_code.discord__font_color};

  &:hover {
    color: ${color_code.discord__white};
    cursor: pointer;
  }

  &:focus {
    color: ${color_code.discord__white};
  }
`;

const ChannelSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const SectionList = styled.div``;

const UserInfo = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${color_code.discord__down_header_grey};
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.div`
  margin: 4px;
  width: 90px;
`;

const UserName = styled.p`
  margin: 0;
  font-size: 11pt;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IdNumber = styled.p`
  margin: 0;
  font-weight: 200;
  font-size: 10pt;
`;
const Icons = styled.div`
  display: flex;
`;

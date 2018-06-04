import React from "react";
import { Header, Text, TextWrapper, StyledWrapper, Terms } from "./styles";

class PrivacyNotes extends React.Component {
  render() {
    return (
      <div>
        <StyledWrapper>
        <Terms>Terms of service</Terms>
          <TextWrapper>
            <Header> Personal information we collect </Header>
            <Text>
              We collect personal information from you when you use our Services,
              register for an account with us, provide us information on a web form,
              update or add information to your account, participate in a community
              board discussion chat, or when you otherwise correspond with us.
            </Text>
          </TextWrapper>

          <TextWrapper>
            <Header>How we use your personal information </Header>
            <Text>
              We use your personal information to provide and improve our Services,
              provide you with a personalized experience on our sites, contact you
              about your account and our Services, provide you customer service,
              provide you with personalized advertising and marketing, and to
              detect, prevent, mitigate and investigate fraudulent or illegal
              activities.
            </Text>
          </TextWrapper>

          <TextWrapper>
            <Header>Ways you can access, control, and correct your personal information</Header>
            <Text>
              You can see, review and change most of your personal information by
              signing in to your account. Please, update your personal information
              immediately if it changes or is inaccurate. We will honor any
              statutory right you might have to access, modify or erase your
              personal information. To request access and to find out whether any
              fees may apply, if permitted by applicable national laws, please
              contact us following the instructions in the Contact Us section below.
              Where you have a statutory right to request access or request the
              modification or erasure of your personal information, we can still
              withhold that access or decline to modify or erase your personal
              information in some cases in accordance with applicable national laws.
            </Text>
          </TextWrapper>

          <TextWrapper>
            <Header>How long we keep your personal information</Header>
            <Text>
              We retain your personal information for as long as necessary to
              provide the Services you have requested, or for other essential
              purposes such as complying with our legal obligations, resolving
              disputes, and enforcing our policies. Our specific retention times for
              personal information are documented in our regional records retention
              schedules. How long we retain personal information can vary
              significantly based on condiv of the Services we provide and on our
              legal obligations.
            </Text>
          </TextWrapper>

          <TextWrapper>
            <Header>How do we protect your personal information </Header>
            <Text>
              We protect your personal information using technical and
              administrative security measures to reduce the risks of loss, misuse,
              unauthorized access, disclosure and alteration. Some of the safeguards
              we use are firewalls and data encryption, physical access controls to
              our data centers, and information access authorization controls.
            </Text>
          </TextWrapper>

          <TextWrapper>
            <Header>Cookies and Similar Technologies</Header>
            <Text>
              When you visit or interact with our sites, services, applications,
              tools or messaging, we or our authorized service providers may use
              cookies and other similar technologies to help provide you with a
              better, faster, and safer experience, and for advertising and
              marketing purposes.
            </Text>
          </TextWrapper>

        </StyledWrapper>
      </div>
    );
  }
}

export default PrivacyNotes;

// Footer.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePay, faCcAmazonPay, faApplePay, faCcVisa } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #001F3F; /* Updated color palette to match the navbar */
  color: white;
  padding: 40px;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Logo = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  color: #f9f9f9; /* Updated color to match the navbar */
`;

const Desc = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
  color: #f9f9f9; /* Updated color to match the navbar */
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  svg {
    width: 40px;
    height: 40px;
    fill: white;
    margin-right: 20px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NextGen</Logo>
        <Desc>
        Explore the future with us, where technology meets imagination.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999"><FacebookOutlinedIcon /></SocialIcon>
          <SocialIcon color="#E4405F"><InstagramIcon /></SocialIcon>
          <SocialIcon color="#25D366"><WhatsAppIcon /></SocialIcon>
          <SocialIcon color="#1DA1F2"><TwitterIcon /></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Explore</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Help</ListItem> 
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <BusinessIcon style={{ marginRight: "10px" }} /> NextGen, Cityville, Sneakerland
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />+91 8590021248
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />NextGen2024@gmail.com
        </ContactItem>
        <PaymentIcons>
          <FontAwesomeIcon icon={faGooglePay} size="2x" color="#ff4e50" />
          <FontAwesomeIcon icon={faCcAmazonPay} size="2x" color="#ff4e50" />
          <FontAwesomeIcon icon={faApplePay} size="2x" color="#ff4e50" />
          <FontAwesomeIcon icon={faCcVisa} size="2x" color="#ff4e50" />
          {/* Add more payment icons as needed */}
        </PaymentIcons>
      </Right>
    </Container>
  );
};

export default Footer;
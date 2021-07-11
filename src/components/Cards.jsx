import React from "react";
import styled from "styled-components";
import Sedans from "../starterDesign/images/icon-sedans.svg";
import SUVs from "../starterDesign/images/icon-suvs.svg";
import Luxury from "../starterDesign/images/icon-luxury.svg";

const Cards = () => {
  return (
    <div className="wrapper">
        <div className="container">
            <Container className="cards">
            <Card1>
            <img src={Sedans} alt="Sedans" className="img"></img>
            <Title>SEDANS</Title>
            <Paragraph>
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
            </Paragraph>
            <Button>Learn More</Button>
            </Card1>
            <Card2>
            <img src={SUVs} alt="SUVs" className="img"></img>
            <Title>SUVS</Title>
            <Paragraph>
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
            </Paragraph>
            <Button2>Learn More</Button2>
            </Card2>
            <Card3>
            <img src={Luxury} alt="Luxury" className="img"></img>
            <Title>LUXURY</Title>
            <Paragraph>
                Cruise in the best car brands without the bloated prices. Enjoy the
                enhanced comfort of a luxury rental and arrive in style.
            </Paragraph>
            <Button3>Learn More</Button3>
            </Card3>
        </Container>
        </div>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Marcell Monoki</a>.
        </div>
    </div>
  );
};

//STYLING

const Container = styled.div`
  display: grid;
  grid-template-columns: 306px 306px 306px;
  grid-template-rows: 100%;
  width: 918px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 326px;
    height: 1320px;
    grid-template-columns: 326px;
    grid-template-rows: 440px 440px 440px;
  }
`;

const Card1 = styled.div`
  padding: 48px;
  background-color: hsl(31, 77%, 52%);
  grid-column: 1;
  width: 100%;

  @media screen and (max-width: 600px) {
    grid-row: 1;
  }
`;

const Card2 = styled.div`
  padding: 48px;
  background-color: hsl(184, 100%, 22%);
  grid-column: 2;

  @media screen and (max-width: 600px) {
    grid-column: 1;
    grid-row: 2;
  }
`;

const Card3 = styled.div`
  padding: 48px;
  background-color: hsl(179, 100%, 13%);
  grid-column: 3;

  @media screen and (max-width: 600px) {
      grid-column: 1;
      grid-row: 3;
  }
`;

const Title = styled.h1`
  color: hsl(0, 0%, 95%);
  font-family: "Big Shoulders Display", cursive;
  font-size: 2.125rem;
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  margin-bottom: 87px;
  color: hsla(0, 0%, 100%, 0.75);
  line-height: 21px;

  @media screen and (max-width: 600px) {
      margin-bottom: 28px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 147px;
  color: hsl(31, 77%, 52%);
  background-color: hsl(0, 0%, 95%);
  border: hsl(0, 0%, 95%) 2px solid;
  border-radius: 25px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: hsl(0, 0%, 95%);
  }
`;

const Button2 = styled(Button)`
  color: hsl(184, 100%, 22%);
`;

const Button3 = styled(Button)`
  color: hsl(179, 100%, 13%);
`;

export default Cards;

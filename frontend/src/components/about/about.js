import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsDescription>
        An Expense Tracker System is a tool or application that helps individuals or businesses keep track of their expenses and manage their financial activities effectively. It provides a centralized platform to record, categorize, and analyze expenses, enabling users to gain insights into their spending habits and make informed financial decisions. Here's a description of an Expense Tracker System:

The Expense Tracker System is a powerful tool designed to simplify and streamline expense management. With this system, users can easily track and monitor their expenses, ensuring better control over their finances. It offers a user-friendly interface that allows individuals or businesses to input and categorize various types of expenses, such as bills, groceries, transportation, and entertainment.



        </AboutUsDescription>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AboutUsContent = styled.div`
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const AboutUsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const AboutUsDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export default AboutUs;

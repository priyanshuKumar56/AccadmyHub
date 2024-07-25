import React, { memo } from "react";
import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 45%,
      7% 42%,
      13% 40%,
      20% 41%,
      26% 42%,
      32% 46%,
      37% 51%,
      44% 53%,
      51% 55%,
      55% 60%,
      64% 60%,
      71% 62%,
      80% 62%,
      84% 59%,
      90% 57%,
      94% 55%,
      98% 54%,
      100% 51%,
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 63%,
      4% 61%,
      9% 63%,
      14% 66%,
      20% 67%,
      29% 67%,
      36% 67%,
      45% 64%,
      52% 60%,
      60% 57%,
      67% 54%,
      74% 53%,
      79% 49%,
      85% 47%,
      89% 47%,
      94% 44%,
      96% 41%,
      100% 37%,
      100% 100%,
      0% 100%
    );
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Adjust as needed */
`;

const H2 = styled.h2`
  position: absolute;
  font-weight: 600;
  font-size: 15em;

  &:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 3px #333;
    filter: blur(3px);
  }

  &:nth-child(3) {
    color: #fff6;
    filter: drop-shadow(0 15px 15px #fff);
    z-index: 1;
    text-shadow: -15px 15px 15px rgba(0, 0, 0, 0.2),
      15px -15px 15px rgba(255, 255, 255, 0.2);
  }

  &:nth-child(2) {
    color: #1360ef;
    z-index: 2;
    animation: ${animate} 4s ease-in-out infinite;
  }

  @media (max-width: 1068px) {
    font-size: 9em; /* Adjust as needed */
  }

  @media (max-width: 680px) {
    font-size: 5em; /* Adjust as needed */
  }
`;

const CourseAnimation = () => {
  return (
    <Content>
      <H2>Course</H2>
      <H2>Course</H2>
      <H2>Course</H2>
    </Content>
  );
};

export default memo(CourseAnimation);

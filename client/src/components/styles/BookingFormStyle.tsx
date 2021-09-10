/* BookingFormComponent */
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const circleMain = keyframes`
  0% {
    border:3px solid white;
  }
  50% {
    border:3px solid white;
  }
  100% {
    opacity:1;
    border: 3px solid #00d46e;
  }
`;

const line1 = keyframes`
  0% {
    width:0px;
    opacity:0;
  }
  80%{
    opacity:0;
    width:0px;
    top: 60%;
    left:15px;
  }
  100% {
    top: 60%;
    left:15px;
    transform: rotate(40deg);
  }
`;

const line2 = keyframes`
    0% {
      width: 0;
      left:30px;
      top: 45px;
      opacity:0;
    }
    49%{
        opacity:0;
    }
    76%{
        opacity:0;
    }
    85% {
        opacity:1;
        width: 0;
        left:42px;
        top: 65px;
    }
    100% {
        width: 60px;
        left:30px;
        top: 45px;
    }
`;

export const FormWindow = styled.div`
  background-color: white;
  margin-top: 5px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin-top: 20px;
  width: 90%;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    margin: 0;
  }
`;

export const InputSpanBorder = styled.div`
  border-bottom: 1px solid darkgrey;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 90%;
`;

export const FormInput = styled.input`
  padding: 5px 0 0 10px;
  border: none;
  font-size: 1rem;
  background-color: white;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  &:focus-visible {
    outline: none;
    background-color: white;
  }
`;

export const FormLabel = styled.span`
  color: grey;
  font-size: 0.8rem;
  margin: 5px 0;
`;

export const FormButton = styled.button`
  width: 90%;
  font-size: 1rem;
  color: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 11px 0px darkgrey;
  border: none;
  background-color: #52a39f;
  margin: 10px 0;
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
`;

export const CloseForm = styled.button`
  background-color: #52a39f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 10px 4px 10px;
  align-self: flex-end;

  &:hover {
    background-color: white;
    border: 1px solid #52a39f;
    color: #52a39f;
  }
`;

export const AniDiv = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 40px 30px;
`;

export const AniSpan = styled.div`
  border: 3px solid #00d46e;
  height: 100px;
  animation: ${circleMain} 1.5s linear;
  width: 100px;
  position: absolute;
  border-radius: 50%;
  position: relative;

  &:after {
    content: "";
    animation: ${rotate} 1s linear;
    position: absolute;
    left: -1px;
    top: -3px;
    border: 3px solid #00d46e;
    border-bottom: none;
    border-left: none;
    height: 95px;
    width: 95px;
    border-radius: 50%;
  }
`;

export const AniSpanLine = styled.span`
  height: 5px;
  width: 30px;
  top: 60%;
  left: 15px;
  transform: rotate(40deg);
  background-color: #00d46e;
  border: 1px solid #00d46e;
  position: absolute;
  border-radius: 2px;
  animation: ${line1} 1.5s ease-in;
`;

export const AniSpanLine2 = styled.span`
  height: 5px;
  width: 60px;
  top: 45px;
  left: 30px;
  border-radius: 2px;
  transform: rotate(133deg);
  background-color: #00d46e;
  border: 1px solid #00d46e;
  position: absolute;
  animation: ${line2} 1.8s ease-in;
`;

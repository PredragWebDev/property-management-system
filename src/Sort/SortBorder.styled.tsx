import { styled } from "styled-components";

export const StyledSortBorder = styled.div`
  position: absolute;
  bottom: 290px;
  left: 20px;
  width: 30%;
  height: 40%;

  h1 {
    font-family: "Inter";
    font-size: 20px;
    font-weight: 700;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1;
    color: #ff4e4e;
    background-color: #ffffffe2;
    padding: 5px 25px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 4px 5px 0px 3px #ff4e4e;

    transition: color box-shadow background-color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

  }

  div {
    width: 100%;
    height: 100%;
    font-family: "Inter";
    font-size: 20px;
    font-weight: 700;
    z-index: 1;
    color: #ff4e4e;
    background-color: #ffffffe2;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 4px 5px 0px 3px #ff4e4e;

    transition: color box-shadow background-color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;
  }

  input {
    display:block;
    margin-right:10px;
  }

  label {
    color:black;
    display:flex;
    font-size:15px;
    margin-top:10px;

  }
  @media (min-width: 800px) {
    h1 {
      font-family: "Inter";
      font-size: 40px;
      top: 20px;
      left: 20px;
    }
  }
`
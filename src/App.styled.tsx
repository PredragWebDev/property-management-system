import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;

  button#popover {
    position:absolute;
    top: 300px;
    left: 20px;

    background-color: #ff4e4e;
      border-radius: 5px;
      border: 2px solid white;
      color: white;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      padding: 5px 10px;
      z-index: 1;
      cursor: pointer;
      box-shadow: 3px 3px 0px 0px #ff4e4e;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
      
  }

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

  @media (min-width: 800px) {
    h1 {
      font-family: "Inter";
      font-size: 40px;
      top: 20px;
      left: 20px;
    }
  }
`;

import { styled } from "styled-components";

export const StyledSortBorder = styled.div`
  height: 450px;
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

  div#checkbox_group {
    width:100%;
    height: 80%;

    overflow: auto;

  }

  div#button_group {
    width: 100%;
    height: 15%;

    position:absolute;
    bottom:0;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 15px 50px;
  
  }

  div#line {
    border-bottom:2px solid #ff4e4e;
  }

  div#label_time {
    display:flex;
    justify-content:space-between;
  }

  button {
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

  input {
    display:block;
    margin-right:10px;
  }

  input#time {
    width:100px;
    font-size:12px;
    margin-right:-10px
  }

  label {
    color:black;
    display:flex;
    font-size:15px;
    margin-top:10px;
    align-items:center;
  }

  @media (max-width: 800px) {
    h1 {
      font-family: "Inter";
      font-size: 40px;
      top: 20px;
      left: 20px;
    }

    p {
      font-size:20px;
    }
  }
`
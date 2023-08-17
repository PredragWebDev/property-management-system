import { styled } from "styled-components";

export const StyledDrawer = styled.div<{
  $isOpen: boolean;
}>`
  right: ${({ $isOpen }) => ($isOpen ? "0" : "100%")};
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: absolute;
  background-color: #fefefe;
  transition: right 0.3s ease-in-out;

  padding: 20px;

  h2 {
    font-size: 35px;
  }

  .details-row {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-size: 18px;
    }

    .status {
      color: #ff4e4e;
      border: 2px solid #ff4e4e;
      border-radius: 4px;
      padding: 1px 5px;
    }
  }

  @media (min-width: 800px) {
    width: 670px;
    right: ${({ $isOpen }) => ($isOpen ? "0px" : "-670px")};
  }
`;

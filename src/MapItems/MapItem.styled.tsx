import styled from "styled-components";

export const StyledMapItem = styled.div<{
  selected: boolean;
  background: string;
}>`
  width: 43px;
  height: 43px;
  background: ${({ background }) => background};
  border: 2px solid white;
  border-color: ${({selected}) => selected ? '#ff7a7a' : 'white'};
  
  transition: border-color 0.3s ease-in-out;
  border-radius: 50%;

  font-size: 20px;
  padding-top: -1px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  gap: 8px;
  padding: 16px;
  height: 52px;

  border: none;
  border-radius: 8px;

  font-family: inter;
  font-size: 14px;
  font-weight: 700;
  color: #F2F2F2;

  background-color: #1E6F9F;
  cursor: pointer;

  transition: .2s;

  &:hover {
    background-color: #4EA8DE;  
  }
`
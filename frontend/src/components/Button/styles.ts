import styled from "styled-components";

export const ButtonContainer = styled.input`
  padding: 16px;

  border: 1px solid #0D0D0D;
  border-radius: 8px;

  background-color: #1E6F9F;

  &:focus {
    outline: 1px solid #5E60CE;
  }

  &::placeholder {
    color: #808080;
  }
`
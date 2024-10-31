import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  padding: 16px;

  border: 1px solid #0D0D0D;
  border-radius: 8px;

  font-family: inter;
  font-size: 16px;
  font-weight: 400;
  color: #F2F2F2;

  background-color: #262626;

  &:focus {
    outline: 1px solid #5E60CE;
  }

  &::placeholder {
    color: #808080;
  }
`
import styled from "styled-components";

export const TaskContainer = styled.div`
  padding: 16px;

  border-radius: 8px;
  border: 1px solid #333333;

  background-color: #262626;

  box-shadow: 0px 2px 8px 0px #0000000F;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .checkText {
    width: 100%;
    gap: 5px;
    display: flex;
    align-items: center;
    
    input {
      border: none;
      border-radius: 50%;
    }

    label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #F2F2F2;
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .delete {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808080;
    background-color: transparent;
    border: none;
    transition: .2s;
    width: 24px;
    height: 24px;
    border-radius: 4px;

    &:hover {
      color: #E25858;
      background-color: #333333;
    }
  }
`
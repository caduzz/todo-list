import styled from "styled-components";

export const TaskContainer = styled.div<{ status: boolean }>`
  user-select: none;
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
    gap: 10px;
    display: flex;
    align-items: center;
    
    input[type="checkbox" i] {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;

      width: 18px;
      height: 17px;
      
      border: 2px solid #4EA8DE;
      border-radius: 50%;
      appearance: none;

      &::before {
        content: "";
        display: flex;
        position: absolute;
        margin-top: 6px;
        margin-right: 2px;
        width: 2px;
        height: 6px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        opacity: 0;
        transition: .2s;
      }

      &:checked::before {
        opacity: 1;
        transform: rotate(45deg) translate(-50%, -50%);
      }
  
      ${p => p.status && `
        background-color: #5E60CE;
        border-color: #5E60CE;
      `}
    }

    label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      color:${p => p.status ? "#808080" : "#F2F2F2"};
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;

      text-decoration: ${p => p.status ? " line-through" : "none"};
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
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  .headerHome {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: #0D0D0D;

    display: flex;
    align-items: center;
    justify-content: center;

    .headerSoon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 15px;

      .soonTitle {
        font-family: inter;
        font-size: 40px;
        font-weight: 900;
        color: #4EA8DE;

        .titleColor {
          color: #5E60CE;
        }
      }
    }

    .inputArea {
      bottom: -25px;
      position: absolute;

      width: 100%;
      max-width: 736px;

      display: flex;
    }
  }
`
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
      gap: 8px;
    }
  }

  #tasks {
    width: 100%;
    max-width: 736px;
    margin-top: 80px;

    .tasksHeader {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;

      .taskCreatCount {
        color: #4EA8DE;
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;

      }

      .taskFinishCount {
        color: #8284FA;
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
      }

      .taskCount {
        color: #D9D9D9;
        font-size: 12px;

        padding: 2px 8px;
        background-color: #333333;
        border-radius: 15px;
      }
    }

    .tasksList {
      width: 100%;

      border-top: 1px solid #333333;
      border-radius: 8px;

    }

  }
`
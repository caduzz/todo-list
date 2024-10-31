import styled from "styled-components";

export const EmptyContainer = styled.div`
  width: 100%;
  height: 244px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 55px;
    height: 55px;
    margin-bottom: 15px;
  }

  .emptyTilte {
    display: flex;
    flex-direction: column;

    color: #808080;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
  }

  .emptySubtitle {
    color: #808080;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
  }
`
import styled from "styled-components";

const CardStyle = styled.div`
  text-align: center;
  box-shadow: 0px 11px 14px 2px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px 1px gray;
    transform: scale(1.03);
    cursor: pointer;
  }

  .contain-img {
    background-color: #f5f5f5;

    .image {
      width: 135px;
      height: 135px;
      margin: 0 auto;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .contain-text {
    padding: 10px 0;
  }
`;

export default CardStyle;

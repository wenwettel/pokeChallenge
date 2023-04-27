import Container from "../../components/Commons/Container";
import styled from "styled-components";

const DetailStyle = styled(Container)`
  h1 {
    color: black;
  }
  h3 {
    margin-top: 20px;
  }

  .container-img-info {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .image {
      width: 50%;
      height: auto;
      object-fit: contain;
    }
  }

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    h1 {
      font-size: 30px;
    }

    .container-img-info {
      margin-bottom: 30px;
      .image {
        width: 30%;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    padding-top: 15px;
    h1.title-mobile {
      text-align: center;
      margin-bottom: 10px;
    }

    .container-img-info {
      .image {
        width: 50%;
      }
    }

    .container-img-info {
      flex-direction: column;
    }
  }
`;



export { DetailStyle};

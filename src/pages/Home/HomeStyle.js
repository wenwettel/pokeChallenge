import styled from "styled-components";
import Container from "../../components/Commons/Container";

const HomeStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 50px;
    color: #dd5d5d;
  }

  a {
    text-decoration: none;
  }

  .bar-search {
    position: relative;

    input {
      height: 33px;
      width: 221px;
      border: 1px solid #bfbdbd;
      border-radius: 5px;
      padding: 14px 10px;
    }

    .fas.fa-search {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 7px;
      color: #939393;
      font-size: 21px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .contain-cards {
    margin-top: 20px;
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    justify-content: center;
  }

  
`;



export {HomeStyle};

import styled from "styled-components";

const HomeStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  min-height: calc(100vh - 197px);
  

  h2 {
    margin-top: 50px;
    color: #dd5d5d;
  }

  a {
    color: black;
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
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    gap: 30px;
    justify-content: center;
   
    
  }

  @media screen and (max-width: 576px) {
    h2 {
      text-align: center;
    }
  }
`;

export default HomeStyle;

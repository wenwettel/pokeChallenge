import  Container from '../../components/Commons/Container'
import styled from "styled-components";

const DetailStyle = styled(Container)`

    display: flex;
    align-items: center;
    justify-content: space-evenly;

  .container-stats {
    display: flex;
    align-items: center;
    color: #999999;
    .percent {
      font-size: 12px;
    }
    .MuiLinearProgress-root {
      background-color: rgb(239 255 233);
      height: 10px;
      width: 200px;
      margin: 0 10px;
      border-radius: 8px;
    }
    .MuiLinearProgress-barColorPrimary {
      background-color: #19c94f;
    }
  }
`;

const TypeStyle = styled.div`
  background-color: #732984;
  display: inline-block;
  padding: 7px 10px;
  border-radius: 4px;
  color:white;
  margin: 10px 5px 10px 0;
`;

export { DetailStyle, TypeStyle };

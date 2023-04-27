import styled from "styled-components";

const FeatureStyles = styled.div`

  h1{
    font-style: italic;
    color: #0c0e0cc7;
    font-size: 38px;
  }
  .container-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .stat-name {
      min-width: 120px;
    }
    .percent {
      font-size: 12px;
    }
    .MuiLinearProgress-root {
      height: 10px;
      width: 200px;
      margin: 0 10px;
      border-radius: 8px;
    }
  }
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    width: 100%;
  }
`;

const TypeStyle = styled.div`
  background-color: ${(props) =>
    props.theme.colorsType[props.type] || "#732984"};
  display: inline-block;
  padding: 7px 10px;
  border-radius: 4px;
  color: white;
  margin: 10px 5px 20px 0;
  font-weight: 600;
`;

export { TypeStyle, FeatureStyles };

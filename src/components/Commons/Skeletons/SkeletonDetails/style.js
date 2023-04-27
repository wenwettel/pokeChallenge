import Container from "../../Container";
import styled from "styled-components";

const ContainerSkeleton = styled(Container)`
  margin-top: 80px;
  .flex {
    max-width: 100%;
    display: flex;
    margin-bottom: 40px;
    justify-content: space-around;
  }
  .types {
    span {
      margin-right: 10px;
    }
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    margin-top: 10px;
    .flex {
      justify-content: left;
    }
    .column {
      flex-direction: column;
    }
  }
`;
export { ContainerSkeleton };

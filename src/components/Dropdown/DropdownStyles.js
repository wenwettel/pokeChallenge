import styled from "styled-components";

const DropdownStyles = styled.div`
  width: 50%;

  .MuiFormControl-root {
    width: 100%;
    margin: 0;
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    width: 100%;
  }
`;

export { DropdownStyles };

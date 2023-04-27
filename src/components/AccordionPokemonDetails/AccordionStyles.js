import styled from "styled-components";

const AccordionStyles = styled.div`
  .MuiPaper-root.MuiAccordion-root {
    box-shadow: ${(props) =>
      `0px 2px 1px -1px ${
        props.theme.colorsType[props.color]
      }, 0px 1px 1px 1px ${
        props.theme.colorsType[props.color]
      }, 0px 1px 3px 0px ${props.theme.colorsType[props.color]}`};
  }
  .title {
    font-weight: 600;
  }

  .MuiChip-root {
    margin-right: 10px;
    border: 1px solid;
    color:${(props) => props.theme.colorsType[props.color]};
    font-size: 18px;
    height:35px;
  }
`;
export { AccordionStyles };

import styled from "styled-components";
import Container from '../../Container'

export const ContainerSkeleton = styled(Container)`
 margin-top: 120px;
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    justify-content: center;
`
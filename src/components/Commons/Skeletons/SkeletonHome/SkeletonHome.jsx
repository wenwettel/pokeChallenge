import { Skeleton } from "@mui/material";
import { ContainerSkeleton } from "./style";

function SkeletonHome() {
  return (
    <ContainerSkeleton>
        {Array.from(new Array(20)).map((_, i) => {
          return (
            <Skeleton
              key={i}
              variant="rectangular"
              height="180px"
              width="200"
            />
          );
        })}
      </ContainerSkeleton>
  )
}

export default SkeletonHome

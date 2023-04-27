import { Skeleton } from "@mui/material";
import { ContainerSkeleton } from "./style";

function SkeletonDetails() {
    return (
        <ContainerSkeleton>
          <div className={"flex column"}>
            <Skeleton  variant="rectangular" height="auto" width="50%" />
            <div>
              <Skeleton variant="text" height="80px" width="80%" />
              <div className={"flex"}>
                <Skeleton variant="rectangular" height="50px" width="100px" />
                <Skeleton variant="rectangular" height="50px" width="100px" />
              </div>
              <Skeleton variant="text" height="30px" width="100%" />
              <Skeleton variant="text" height="30px" width="100%" />
              <Skeleton variant="text" height="30px" width="100%" />
              <Skeleton variant="text" height="30px" width="100%" />
              <Skeleton variant="text" height="30px" width="100%" />
            </div>
          </div>
          <Skeleton variant="rectangular" height="100px" width="100%" />
        </ContainerSkeleton>
      );
    }

export default SkeletonDetails

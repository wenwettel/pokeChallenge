import { useEffect, useState } from "react";

 const useIntersector = (elementRef) => {
    const [isItersecting, setIsIntersecting] = useState(false)
    
    useEffect(()=> {

        if(!elementRef.current) return
      
        const handleScroll = (entries) => {
           
            if(entries[0].isIntersecting){
                setIsIntersecting(true)
            }else{
                setIsIntersecting(false)
            }
        };
        const observer = new IntersectionObserver(handleScroll, {
          rootMargin: "0px",
        });
        observer.observe(elementRef.current);

        return () => observer && observer.disconnect()
         
      });

    return {isItersecting}
      
}

export default useIntersector
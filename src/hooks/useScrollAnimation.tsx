import React, { useRef } from 'react'

const useScrollAnimation = () => {
  const [isInViewport, setisInViewport] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      
    }
  })
}

export default useScrollAnimation
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const FastCounting = ({ targetFastNumber }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          if (count < targetFastNumber) {
            setCount(count + 20);
          } else {
            clearInterval(interval);
          }
        },  1); // Adjust the interval as needed
    
        return () => clearInterval(interval);
      }, [count, targetFastNumber]);

  return (
    <Num>{count}</Num>
  )
}

const Num = styled.div`
    font-size: 2rem;
    font-weight:bold;
    color:#0047AB;
`

export default FastCounting
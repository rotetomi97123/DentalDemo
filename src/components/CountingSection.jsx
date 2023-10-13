import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const CountingSection = ({ targetNumber }) => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 120); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [count, targetNumber]);
  return (
    <Num>{count}</Num>
    )
}

const Num = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #0047AB;
`

export default CountingSection
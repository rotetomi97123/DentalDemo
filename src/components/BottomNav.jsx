import React, { useState } from 'react'
import {BsCartFill,BsFillTelephoneFill} from 'react-icons/bs'
import styled from 'styled-components'


const BottomNav = () => {

    const [selectedItem, setSelectedItem] = useState('Fooldal');

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  return (
    <Wrapper>
        <LeftDiv>
            <ul>
                <ListItem
                    selected={selectedItem === 'Fooldal'}
                    onClick={() => handleItemClick('Fooldal')}
                >
                Főoldal
                </ListItem>
                <ListItem
                    selected={selectedItem === 'Blog'}
                    onClick={() => handleItemClick('Blog')}
                >
                Blog
                </ListItem>
                <ListItem
                    selected={selectedItem === 'Esemenyek'}
                    onClick={() => handleItemClick('Esemenyek')}
                >
                Események
                </ListItem>
                <ListItem
                    selected={selectedItem === 'Rolunk'}
                    onClick={() => handleItemClick('Rolunk')}
                >
                Rólunk
                </ListItem>
                <ListItem
                    selected={selectedItem === 'Katalogus'}
                    onClick={() => handleItemClick('Katalogus')}
                >
                Katalógusok
                </ListItem>
                <ListItem
                    selected={selectedItem === 'Beszallitoink'}
                    onClick={() => handleItemClick('Beszallitoink')}
                >
                Beszállitóink
                </ListItem>
                <ListItem
                    selected={selectedItem === 'Shop'}
                    onClick={() => handleItemClick('Shop')}
                >
                <BsCartFill /> Shop
                </ListItem>
            </ul>
        </LeftDiv>
        <RightDiv>
            <BsFillTelephoneFill color='#0047AB'/>
            <p>+32 1533 331</p>
        </RightDiv>
    </Wrapper>
  )
}

export default BottomNav

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 0.5rem 4rem;
    background-color:#ECECEC;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    z-index: 100;
    @media (max-width: 1200px){
        display:none;
      }
`
const RightDiv = styled.div`
    display:flex;
    align-items:center;
    p{
        margin-left: 0.5rem;
    }
`

const LeftDiv = styled.div`
   
    ul{
        display:flex;
    }
`
const ListItem = styled.li`
    margin-right: 1rem;
    list-style-type: none;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    cursor: pointer;
    border-bottom: ${(props) => (props.selected ? '3px solid #0047AB' : 'none')};
    &:hover{
        border-bottom: 3px solid #0047AB;
    }
`

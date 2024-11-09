import React from 'react'
import styled from 'styled-components'
import {Container,ContainerWrap} from "./style"
import {About} from './data'
const about = () => {
  return (
<Container>
    <ContainerWrap>

  {/* ***********************       */}
  <div style={{ backgroundColor:'red',padding:'10px', width:"100%", display:'flex', flexWrap:'wrap', justifyContent:'center',  alignItems:'center', gap:'20px'}}>

  
<Card>
    <CardImg>
        <img src={About[0].img} alt="" />
    </CardImg>
    <div style={{display:'flex', gap:'20px'}}>
    <h3>{About[0].price}</h3>
    <button>{About[0].btnName}</button>
    </div>
</Card>
{/* ***************************** */}
<Card>
    <CardImg></CardImg>
    <div style={{display:'flex', gap:'20px'}}>
    <h3>{About[1].price}</h3>
    <button>add to cart</button>
    </div>
</Card>
{/* ************************************* */}

<Card>
    <CardImg></CardImg>
    <div style={{display:'flex', gap:'20px'}}>
    <h3>5000</h3>
    <button>add to cart</button>
    </div>
</Card>
{/* *********************************** */}
<Card>
    <CardImg></CardImg>
    <div style={{display:'flex', gap:'20px'}}>
        <h3>5000</h3>
<button>add to cart</button>
    </div>
</Card>

</div>
</ContainerWrap>
</Container>   

)
}

export default about


const Card = styled.div`
    
    width: 23.5%;
@media (max-width:768px) {
    width: 70%;
    
}

`
const CardImg = styled.div`
    width: 100%;
    height: 200px;
    background-color: rebeccapurple;
img{
    width: 100%;
    object-fit: cover;
}
`
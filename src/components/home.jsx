import styled from 'styled-components'
function Home() {


  return (
    <>
     <Container>
      <ContainerWrap>
        <div>
          <h1>MindVista</h1>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>contact US</li>
          </ul>
        </div>
        <div>
          <button>Click Here</button>
        </div>
      </ContainerWrap>
     </Container>
     
    
      
    </>
  )
}

export default Home

// **************************
 const Container = styled.div`
 width:100%;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
 `;
 const ContainerWrap = styled.div`
  padding: 10px;
  max-width: 1300px;
  background-color: green;
  width:100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  &> :nth-child(2){
    ul {
      display:flex ;
      list-style: none;
      gap: 30px;
    }
    @media (max-width:630px) {
      display: none;
    }
  }
 `
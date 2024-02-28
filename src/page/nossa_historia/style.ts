import styled from 'styled-components';

export interface TabProps {
  active: boolean;
}

export interface ContentProps {
    active: boolean;
  }

  export const H1 = styled.h1`
    display:flex;
    flex-direction:column;
    font-size:25px;
    text-align:center;
    padding-top:40px;

    .img{
      width:70px;
      display:flex;
      margin:auto;
      margin-top:10px;
    }

  
  `
export const TabContainer = styled.div`
  padding-top: 20px;
  
  width:90%;
  display: flex;
  margin:auto;
  

  h1{

  }

  .icnv{
    margin-right:12px;
  }
`;

export const Tab = styled.div<TabProps>` // Use o tipo TabProps aqui
 
  flex: 1;
  font-size:12px;
  font-weight:bolder;
  text-align:center;
  border-radius:10px 10px 0 0;
  margin-bottom:${(props) => (props.active ? '-1px' : '0px')};
 
 
  padding: 10px;
  padding-bottom:12px;
  background-color: ${(props) => (props.active ? 'white' : 'black')};
  color:${(props) => (props.active ? 'black' : 'white')};
  cursor: pointer;
`;

export const Content = styled.div<ContentProps>`
 display:flex;
 margin:auto;
 height:500px;
 width:90%;
 margin-bottom:20px;
 border-radius:0 0 10px 10px;
 
 
 
 
 
 background-color:white;
 
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const Container = styled.div`
margin:0;
padding:0;
background-color:#b5b5b5;
display:flex;
flex-direction:column;
margin:auto;
width:95%;
box-shadow: 0px 0px 10px 3px black;

`;
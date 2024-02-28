import styled from "styled-components"; 

export const Anunciar = styled.div`
display:flex;
flex-direction:column;
padding:0 20px 0 20px;

position:fixed;
top:0;

width:90%;
height:100vh;
z-index:1001;
background-color:rgba(0,0,0,0.8);

@media (min-width: 800px) {
    width:100%;

}


.logoIcnv{
   margin-top:-7px;
    width:55px;
    height:55px;
}

.informacao{

padding:10px;
display:flex;
margin:auto;
flex-direction:row;
justify-content:space-between;
margin-top:35px;
background-color:black;
height:70%;
width:350px;
box-shadow: 0px 0px 10px 5px white;

    @media (min-width: 800px) {
        display:flex;
        margin:auto;
        height:80vh;
        width:40%;
}
}

.fechar{
    
    background-color:transparent;
    width:50px;
    height:50px;
    border-radius:7px;
    border:none;
    color:white;
    align-items: center;
    &:hover{
        cursor:pointer;
    }

    
}
.textoFechar{
    margin-top:0px;
    color:#d10000;
    margin-left:-5px;
    font-size:16px;
    font-weight:bold;
}


`

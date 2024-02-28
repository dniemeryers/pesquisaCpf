import styled from "styled-components"; 
export const H1 = styled.h1`
color:black;
margin-top:80px;
text-align:center;

p{
    margin: 15px;
    font-size: 20px;
    text-align:center;
}
`

export const Container = styled.div`


margin-top:10px;
padding-bottom:50px;
margin:0px;

iframe{
    margin:auto;
}

p{   
    text-align: center;
    font-size:11px;    
    color:black;    
    padding:5px;
}

h1{
    margin-top:10px;
    color:black;
    text-align:center;
    font-size: 18px;
    @media (min-width: 800px) {
        font-size:25px;
    }
    
}
.icon{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    margin:5px;

   
    
}

h3{
    color:black;
    margin-top:-18px;
    text-align:center;
    color:white;
    @media (min-width: 800px) {
        font-size:18px;
    }
    
}
.sobre{
    display:flex;
    margin-top:30px; 
      
    margin:auto;
    margin:35px; 
    @media (min-width: 800px) {
        display: flex;
        flex-direction:column;
        text-align:justify;
        padding:20px;
        margin:auto;       
       
    margin-top:50px;

    }
}
.emprego{
   
   
    display:flex;
    background-color:rgba(179,179,179,0.4);       
    box-shadow: 0px 0px 15px 5px black;
    margin:auto;          
    flex-direction:column;
    
    @media (min-width: 800px) {
        display:none;
           
        }
   
    
}
.info{
    text-align:justify;
    width:310px;
    margin:30px;
    border-radius:10px;
    margin:auto;
    
    @media (min-width: 800px) {
        padding:20px;
        
    }
}
    

img{   
    display:flex;
    margin:auto;
    margin-top:20px;
    background-color: white;
    border-radius:10px;
    box-shadow: 0px 0px 10px 0px black;
}
    
    }

.map{
    width: 55px;
    padding-bottom:5px;
    padding:5px;
   
}

.waze{
    display:flex;

    @media (min-width: 800px) {
       
        
    }
}


`
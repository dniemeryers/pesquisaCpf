import styled from "styled-components"; 

export const Experiencia = styled.div`



.titulo{
    margin-top:100px;
    text-align:center;
    font-size:24px;
}
.container{
   
    color: black;
    margin:35px;    
    margin-top:50px;
    background-color:rgba(179,179,179,0.4); 
    box-shadow: 0px 0px 10px 5px black;
    height:235px;     
    

    @media(min-width: 800px){      
        width:790px;  
        display:flex;
        margin:auto;
        padding:20px;               
        flex-direction:row;
       
    }  

}

.info_banco{
    display:flex;
    flex-direction:row;
    text-align:center;
   

}
.ag_cc{
margin:auto;
margin-top:9px;
}
h1{
    font-size:18px;
}

h2{
    padding-top:3px;
    text-align:center;
    font-size:16px;
}
p{
    width:100%;
    margin:auto;
    
    
    
}
img{
    margin:10px 0 0 10px;
}

.container2{
    width:280px;
    
    display:flex;    
    flex-direction:row;    
    margin:auto;
}

.input{
    background-color:transparent;
    height:15px;
    caret-color: transparent;
    padding:8px;
    font-size:16px;
    width:200px;
    
}

.msg_copy{
    text-align:center;
    color:red;
    margin-top:2px;
    font-size:15px;
    font-weight:bold;

}
    


`
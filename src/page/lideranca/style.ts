import styled from "styled-components"; 


export const H1 = styled.h1`
color: #BFBFBF;
text-align:center;
margin-top:100px;
`
export const Container = styled.div`
padding-bottom:40px;
display:flex;
flex-direction:column;
margin:auto;

@media(min-width:1024px){
    
}


.educacao{      
    
    display:flex;
    flex-direction:column;
    
    margin:0 35px 0 35px;
    background-color:rgba(179,179,179,0.4);
    box-shadow: 0px 0px 10px 5px #00d7ff;
    
        
    
    @media(min-width: 800px){
        width:1100px;
        display:flex;
        flex-direction:row;
        padding:20px;
        margin:auto;
        margin-top:10px;
        justify-content:space-around; 
           
    }
    @media(min-width:1024px){
        width:720px;
    }
    
}
.escola{       
    margin:auto;
    height:170px;   
    padding:10px;
        
     
}
h1{
    margin-top:50px;
    color: #BFBFBF;
    text-align:center;  
}
h2{  
    color: #BFBFBF;
    text-align:center;
    margin-top:-15px;
}
h3{
    font-size:16px;
    color:white;    
    
    margin-top:5px;
    @media(min-width: 800px){
        font-size:22px;
        margin-top:0;
    }
}
h4{
    font-size:16px;
    margin-top:-10px;
    color: #BFBFBF;
   
}
p{
    margin-top:-15px;
    
    color: #BFBFBF;
    font-weight:bold;
    
} 
.cert{
    text-align:center;
}
img{
    width:70px;
    top:10px;
}

.certificados{
    background-color:rgba(179,179,179,0.4);
    box-shadow: 0px 0px 10px 5px #00d7ff;
    margin:0 35px 0 35px;
    padding:20px;
    display:flex;
    flex-direction:column;

    @media(min-width:800px){
        width:1100px;
        margin:auto;
        margin-top: 35px;
        flex-direction:column; 
    }

    @media(min-width:1024px){
        width:900px;
    }
}
.certificados2{
    display:flex;
    flex-direction:column;
    @media(min-width:800px){
        flex-direction:row; 
        justify-content:space-around;
    }
}
.curso{
    display:flex;
    flex-direction:column;

    @media(min-width:800px){
        width:1100px;
        flex-direction:row; 
        justify-content:space-around;
        
    }

    @media(min-width:1024px){
        width:900px;
    }
    
       
                  
    
}
}
.certlinha1{
    display:flex;      
    margin:auto;
    margin-top:20px;
    width:200px;
    box-shadow:0px 0px 10px 5px black;
   
    @media(max-width:800px){        
    &:hover{
        scale:1.9;
    }
    } 

    @media(min-width:800px){
        
        &:hover{
            cursor:pointer;
        }
        &:active{
            scale:3.0;
            position: absolute;
            top: 550px;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    @media(min-width:1024px){
        width:150px;
    }
}
    
.certlinha2{
    display:flex;
    margin:auto;
    margin-top:20px;
    width:200px;
    box-shadow:0px 0px 10px 5px black;
   
    @media(max-width:800px){
    &:hover{
        scale:1.9;
    }
}
    @media(min-width:800px){
        &:hover{
            cursor:pointer;
        }
        &:active{
            scale:3.0;
            position: absolute;
            top: 650px;
            left: 0;
            right: 0;
            bottom: 0;        

        }
    }
    @media(min-width:1024px){
        width:150px;
    }
}

`
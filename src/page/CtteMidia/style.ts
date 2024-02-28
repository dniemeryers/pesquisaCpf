import styled from "styled-components"; 

export const H1 = styled.h1`
margin-top:100px;
margin-bottom:40px;
color: #BFBFBF;
text-align:center;
`

export const Container1 = styled.div`
display:flex;
flex-direction:column;
margin:20px;
@media(min-width:800px){
    flex-direction:row;
    justify-content:space-around;
}  

a{
    text-decoration:none;
    text-align:center;
    color: #BFBFBF;
}
.imgorg{
    height:130px;
    width:200px;
    @media(min-width:800px){
        margin-bottom:70px;
    }
    
}

h2{
    margin-top:-1px;
    padding-top:20px;
    color: #BFBFBF;
    text-align:center;
}

.trabalho{
    display:flex;
    flex-direction:column;
    padding:5px;
    margin:5px;
    margin-bottom:40px;
    color: #BFBFBF;
    text-align:center;
    background-color:rgba(179,179,179,0.4);  
    box-shadow: 0px 0px 10px 5px #00d7ff;

   
    @media(min-width:800px){
        width:270px;
    } 
       
}
.imgcalc{
    height:160px;
    @media(min-width:1024px){
        width:150px;
        height:200px;
    }
}
.imgpc{
    height:200px;

    @media(min-width:1024px){
        width:130px;
    }
    }
h3{
    margin-top:10px;
    margin-bottom:5px;
    text-align:center;
}
h4{
    margin-top:10px;
    text-align:center;
}
.tec{
    margin-top:-10px;
    width:40px;
}

`
export const Container2 = styled.div`
display:flex;
flex-direction:column;
margin:20px;
@media(min-width:800px){
    flex-direction:row;
    justify-content:space-around;
}  
a{
    text-decoration:none;
    color:#bfbfbf;
}
h2{
    margin-top:-1px;
    padding-top:20px;
    color: #BFBFBF;
    text-align:center;
}

.trabalho{
    display:flex;
    flex-direction:column;
    padding:5px;
    margin-bottom:20px;
    color: #BFBFBF;
    text-align:center;
    box-shadow: 0px 0px 10px 5px #00d7ff;
    background-color:rgba(179,179,179,0.4);  


    @media(min-width:800px){
        width:270px;
        height:410px;
    }

   
       
}
.imgcalc{
    height:160px;
    @media(min-width:800px){
    margin-bottom:40px;
    }
    
    
}

.imgpc{
    height:200px;
    width:280px;
    @media(min-width:1024px){
        width:180px;
    }
}
h3{
    margin-top:10px;
    margin-bottom:5px;
    text-align:center;
}
h4{
    margin-top:10px;
}
.tec{
    margin-top:-10px;
    width:40px;
}

`
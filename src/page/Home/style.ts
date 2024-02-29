import styled from "styled-components"; 




export const Container = styled.div`

background-color: #e0e0e0;
width:100%;

.centralizar{
   width:80%;
   margin:auto;
}

.bio{    
 
  
}

.perfil{
    border-radius:50%;
}

.entradaCpf{
    margin:auto;
}

.body{
    display:flex;
}
.chat{
    margin:auto;
    background-color:#455a64;
    border-radius:30px 30px 30px 0;
    padding:2px 5px 2px 10px;
    margin:8px 0 0 8px;
    
    width: 250px;
    height:50px;
}

.chatClient{
    display:flex;
    margin:auto;
    background-color:#455a64;
    border-radius:30px 30px 0px 30px;
    padding:2px 5px 2px 10px;
    margin:8px 0 0 8px;
    justify-content:space-between;
    
    width: 250px;
    height:50px;
}

.chatClientNomeMae{
    
    display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 10px; /* Adjust the gap between grid items */
            height: 100vh; /* Adjust the height of the grid c
   
   
    background-color:#455a64;
    border-radius:30px 30px 0px 30px;
    padding:2px 5px 2px 10px;
    margin:8px 0 0 8px;
  
    
    width: 250px;
    height:150px;

   

}

.confirmaMae{
    padding:30px;

}
p{
    width:;
    font-size:14px;
    font-weight:bold;
    
}
h1{
    font-size:18px;
    
}

input{
    background-color:#455a64;
    border:none;
    focus:none;
    font-size:14px;
    font-weight:bold;
    border-radius:30%;
    margin-left:;
    
}

.enviar{
    width:70px;
    border-radius:30px;
    border:none;

} 

.loadChat{
    width: fit-content;
    background-color:#455a64;
    border-radius:30px 30px 30px 0px;
    background-color:#455a64;
    padding:2px 5px 2px 10px;
    margin:8px 0 0 8px;
    
}

.loadClient{
    width: fit-content;
    background-color:#455a64;
    border-radius:30px 30px 0px 30px;
    background-color:#455a64;
    border-radius:30px 30px 0px 30px;
    padding:2px 5px 2px 10px;
    margin:8px 0 0 8px;
    margin-left: auto;
    margin-right: 0;
    text-align: right;
}

.buttonNomeMae{
    height:50px;
    border-radius:40%;
    width:100px;
    color: white;
    background-color:blue;
    border:none;
}


`




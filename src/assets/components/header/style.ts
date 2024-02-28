import React from 'react';
import styled from "styled-components"; 


export const Container = styled.div`


position: sticky;
margin-top:-50px;
top:0;
background-color:#272727;
box-shadow: 0px 0px 30px 5px #454546 ;
z-index:1;
color:white;
font-family: 
justify-content:space-betweem;
width:100%;


.logo {
  display:flex;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 10px;
}

.button2{
  display:flex;
  padding:0;
  width: 130px;
  height: 30px;  
  flex-direction:row;
  margin:16px 15px 0 0;
  background-color:red;
  border-radius:30px;
  font-size:10px;

 

  &:hover {
    scale:1.2;
    transform: scale(1.01);
  }
}

p{
  margin:10px 0 0 10px;
}

.yt_aovivo{
  margin: 8px 10px 0 10px ;
  margin-left:10px;
}



.button {  
  margin-top:16px;
  padding:0;
  display:flex;
  width: 120px;
  height: 30px;  
  border-radius:30px;  
 
  text-align:center;
  color:black;
  font-size:10px;
  background-color:white;
  
  box-shadow: 0px 0px 5px 2px white;

  &:hover {
    scale:1.2;
    transform: scale(1.01);
  }

  .curriculo{
    display:flex;
    margin:auto;
    font-weight:bold;
 }
 
}
}
h1{  
  margin-left:15px;
  margin-top:14px;
  font-family: 'Raleway', sans-serif;
  font-size:18PX; 
}

.icons{
   display:flex;   
   justify-content:space-between;
   margin:0 40px 0px 0;     

   @media (max-width: 800px) {
    margin:0 40px 0px 0;  
  
   }
}

.links-desktop{
  position:relative;
  display:flex;
  margin:0px 0 0 20px;

  @media (max-width: 800px) {
    display:none;
    }
}

.igreja-links{
 
  margin-top:10px;
  margin-left:-8px;
  display:flex;
  flex-direction:column;
  position:absolute;
  background-color:#dddddd;
  padding:20px;
  border-radius: 0 10px 10px 10px;
 
}
.child_navlink{
  color:black;
  font-weight:bold;
  margin:15px 15px 10px 0;
  font-size:15px;

  &:hover{
    text-decoration:underline;
    
  }
}

.navlink{
  color:white;
  cursor:pointer;
  font-weight:bold;
  margin:25px 15px 10px 0;
  font-size:15px;

  &:hover{
    text-decoration:underline;
    
  }
}

  .navlink_igreja{
    color:white;
    cursor:pointer;
    font-weight:bold;
    margin:17px 15px 10px 0;
    font-size:15px;
    padding:  8px 8px 10px 8px;
   
  
    &:hover{
      
      background-color:#dddddd;
      color:black;
      border-radius:8px 8px 0 0;
      
    }
  }

.navlink1{
  padding-left-10px;
}
}

a{
   text-decoration:none; 
   color:white;
   @media (max-width: 800px) {
  
    }
}
.menu{
  margin-top: 8px;
     margin-right: 10px;
     width:0px;
    @media (min-width: 800px) {
      display:none;
      }    
}

.container{
    width:100%;
    height: 100%;
    display: flex;    
  }

#checkbox-menu{
  display:flex;
    padding:0;
    margin:auto;
    display:flex;
    justify-content:center;
    opacity: 0;
  }
  
  label{
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
  
  label span{
    position: absolute;
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 30px;
    background: white;
    transition: 0.25s ease-in-out;
  }
  
  label span:nth-child(1){
    top: 0;
  }
  
  label span:nth-child(2){
    top: 8px;
  }
  
  label span:nth-child(3){
    top: 16px;
  }
  
  #checkbox-menu:checked + label span:nth-child(1){
    transform: rotate(-45deg);
    top: 8px;
  }
  
  #checkbox-menu:checked + label span:nth-child(2){
    opacity: 0;
  }
  
  #checkbox-menu:checked + label span:nth-child(3){
    transform: rotate(45deg);
    top:8px;
  }

.list{
    background-color: #5fd3f4;
    width:40%;
    display:flex;
    justify-content: flex-end;
   


}
.itemList{
    color:black;
}
`


export const Container2 = styled.div`
color:white;
heigth:500px;


.perfil{
  margin-left:-20px;
  margin-top:100px;
  margin-bottom:20px;
}
h1{
  color:#8c8c8c;
  margin:0;
  margin-bottom:10px;
  border-top: 1px solid #4a4a4a;
  padding-top:10px;
}
h3{
  margin-top:10px;
  text-align:center;
}
a{
  color:white;
  text-decoration:none;
  font-weight:bold;
  font-size: 23px;
  display:flex;
  justify-content:left;
  padding:10px 0 10px 0;
  zIndex:100;
  border-top: 1px solid #4a4a4a;
 
}

.nav{
  font-family: 'Raleway', sans-serif;
  height:555px;
  width:95%;  
  margin-top:-425px;  
  display:flex;
  flex-direction:colunm;
  font-size: 12px;   
  padding:10px; 
  background-color: #272727 ;
  transition: transform 2s ease-in-out; 
  z-index:1;   
}

.nav .child{
  padding-left: 30px;
  color: white;
  font-size: 18px;
}

.child{
  padding: 13px 0 13px 0;
}

img{
  display:flex;
  margin-top:200px;
  margin:auto;
}


.button2 {  
  display:flex;
  width: 200px;
  height: 50px;
  padding-left:10px;    
  border-radius:30px;
  color: white;
  background-color:red;  
  font-size:16px;

`
export const Social = styled.div`
display:flex;
width:100%;
margin-left:-10px;
position:absolute;

justify-content:space-around;

.ic{
  border:none;
}

`




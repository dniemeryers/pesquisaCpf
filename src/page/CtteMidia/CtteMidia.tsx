import {Container1, Container2,H1} from './style'
import { NavLink } from 'react-router-dom'
import { Header } from "../../assets/components/header/header"
import Calc from "../../assets/img/projetos/calc.gif"
import Org from "../../assets/img/projetos/organizar-os-estudos.gif"




export function CtteMidia() {


    return(<>
        <Header/>
        <H1>Projetos</H1>
        <Container1>    
        <div className='trabalho'>                        
              
        </div>     
                                   
        <div className='trabalho'>                        
                                        
        </div>               
        </Container1>
        <Container2>
        <div className='trabalho'>                        
                                              
        </div>
        <div className='trabalho'>                        
                                                 
        </div>
        <div className='trabalho'>                        
                                                
        </div>
          

        </Container2>
   </> )
}
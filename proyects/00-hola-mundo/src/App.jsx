import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
    const formatUserName= (userName)=> `@${userName}`;

    
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName= {formatUserName} userName={"pepa"} >
                    Manola
            </TwitterFollowCard>
               
                
            <TwitterFollowCard 
                formatUserName= {formatUserName} userName={"pepe"} >
                    Pepe
            </TwitterFollowCard>
        </section>
        
    )
}
   


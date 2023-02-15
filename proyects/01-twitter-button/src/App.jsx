import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
    const [name, setName]=useState('Mario')
    const formatUserName= (userName)=> `@${userName}`;

    const changeName=()=>{
        if (name!=="Luigi"){
            setName("Luigi");
        }else{
            setName("Mario");
        }

    }
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName= {formatUserName} userName={"pepa"} initialIsFollowing={true}>
                    Manola
            </TwitterFollowCard>  
                
            <TwitterFollowCard 
                formatUserName= {formatUserName} userName={name} >
                    {name} 
            </TwitterFollowCard>

            <button onClick={changeName}>
                Cambio nombre
            </button>
        </section>
        
    )
}
   


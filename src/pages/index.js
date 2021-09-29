import React, { useState } from 'react'
import Link from 'next/link'
import css from './index.module.scss'
import Pagination from 'components/pagination'
import Header from 'components/header'
 
export default function Home({personnage}) {
    return (
        
        <main className={css.component}>

                <Header/>
                
                <h1>Liste des personnages</h1>
                <div className={css.personnage}>
                    {personnage.results.map((nomPerso) => (
                        <div key={nomPerso.id}>

                            <Link href={`/character/${nomPerso.id}`}>

                                <a style={{ color: nomPerso.status === 'Alive' ? 'green' : 'red'}}>

                                    <h2>{nomPerso.name}</h2><br/>
                                    <img src={nomPerso.image}/><br/><br/>

                                </a>

                            </Link>
                        </div>
                    ))}
                </div>
                <Pagination index={1} max={personnage.info.pages}/>
        </main>
            
    )
}

export async function getStaticProps() { 
    //const rep = await fetch('https://rickandmortyapi.com/api/character')
    //const personnage = await rep.json()

    const getContentFromAPI = require('../cache').default
    const personnage = await getContentFromAPI('api/character')
    
    return {
        props: { 
            personnage
        }
    }
    
}
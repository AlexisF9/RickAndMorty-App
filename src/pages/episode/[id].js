import Link from 'next/link'
import css from './index.module.scss'

export function Episode({episodeInfo, characters}) {
    
    return (
        <main>

            <Link href={`/`}>
                <a onClick={() => window.history.back()}>
                    Retour
                </a>
            </Link>
            <h1>{episodeInfo.name}</h1>
            <p>Date de diffusion : {episodeInfo.air_date}</p>
            
            <div className={css.listOfPerso}>
                {characters?.map(({name, id, image}) => ( // map retourne une valeur
                    <Link href={`/character/${id}`}>
                        <a key={id}>
                            <div></div>
                            <span>{name}</span>
                            <img src={image} /> 
                        </a>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export async function getStaticProps({params}) { 
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`)
    const episodeInfo = await response.json()

    const getContentFromAPI = require('../../cache').default
    // promise.all retourne dans un tableau dans l'ordre, une promesse qui attend que tout soit fini
    const characters = await Promise.all(episodeInfo?.characters?.map(async (chara) => { //parcours les perso

        const id = chara.match(/[0-9]{1,}$/)[0]
        const personnage = await getContentFromAPI(`api/character/${id}`)
        
        return personnage
    }))
    
    return {
        props: { 
            episodeInfo,
            characters
        }
    }
}

export async function getStaticPaths() { // liste les (routes) pages à l'avance
    const ep = await (await fetch('https://rickandmortyapi.com/api/episode')).json()

    return {
        paths: ep.results.map(e => ({
            params: {id: e.id.toString()}
        })),
        fallback: false, // met la page 404
    }
    
}

/*export async function getStaticPaths() { // liste les (routes) pages à l'avance
    // const perso = await (await fetch('https://rickandmortyapi.com/api/character')).json()

    return {
        // paths: perso.results.map(p => ({
        //     params: {id: p.id.toString()}
        // })),
        paths: [], // on telecharge les pages a la demande 
        fallback: 'blocking', // met la page 404
    }
    
}*/

export default Episode
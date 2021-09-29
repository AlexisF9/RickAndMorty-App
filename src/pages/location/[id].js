import Link from 'next/link'
import css from './index.module.scss'

export function Location({locationInfo, characters}) {
    return (
        <main className={css.localisation}>
            <Link href={`/`}>
                <a onClick={() => window.history.back()}>
                    Retour
                </a>
            </Link>
            <h1>{locationInfo.name}</h1>
            <ul>
                <li>Type : {locationInfo.type}</li>
                <li>dimension : {locationInfo.dimension}</li>
            </ul>
            <h3>Résidents :</h3>
            <div className={css.listOfChara}>
                {characters?.map(({name, id, image}) => ( // map retourne une valeur
                    <Link href={`/personnage/${id}`}>
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
    //const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
    //const locationInfo = await response.json()

    const getContentFromAPI = require('../../cache').default
    const locationInfo = await getContentFromAPI(`api/location/${params.id}`)

    const getContFromAPI = require('../../cache').default
    const characters = await Promise.all(locationInfo?.residents?.map(async (p) => { //parcours les perso

        const id = p.match(/[0-9]{1,}$/)[0]
        const personnage = await getContFromAPI(`api/character/${id}`)
        
        return personnage
    }))
    
    return {
        props: { 
            locationInfo,
            characters
        }
    }
}

export async function getStaticPaths() { // liste les (routes) pages à l'avance
    const loc = await (await fetch('https://rickandmortyapi.com/api/location')).json()

    return {
        paths: loc.results.map(l => ({
            params: {id: l.id.toString()}
        })),
        fallback: false, // met la page 404
    }
    
}

export default Location
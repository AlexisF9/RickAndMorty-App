import Link from 'next/link'
import css from './index.module.scss'

export function Perso({persoInfo = {}, episodeName}) {
    return (
        
        <main className={css.component}>

            <Link href={`/`}>
                <a className={css.lien}>
                    Retour
                </a>
            </Link>
            <h1>{persoInfo.name}</h1>

            <div className={css.content}>
                <div className={css.presentationContent}>
                    <div className={css.presentation}>
                        <div>
                            
                            <img src={persoInfo.image}/>  
                        </div>
                        <div>
                            <p>ID : {persoInfo.id}</p>
                            <p>Race : {persoInfo.species}</p>
                            <p>Gender : {persoInfo.gender}</p>
                            <p>Status : <span style={{ color: persoInfo.status === 'Alive' ? 'green' : 'red'}}>{persoInfo.status}</span></p>
                            <p>
                                {persoInfo?.origin?.url && (// Si l'url existe j'execute le code
                                    <>
                                        Localisation : <Link href={`/location/${persoInfo.location.url.match(/[0-9]{1,}$/)[0] }`}>
                                            <a className={css.lien}>{persoInfo.location.name}</a>
                                        </Link>  
                                    </>
                                )}
                            </p>
                            <p>
                                {persoInfo?.origin?.url && (// Si l'url existe j'execute le code
                                    <>
                                        Origine : <Link href={`/location/${persoInfo.origin.url.match(/[0-9]{1,}$/)[0] }`}>
                                            <a className={css.lien}>{persoInfo.origin.name}</a>
                                        </Link> 
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={css.info}>

                    <p>Episodes d'apparition :</p>
                    {episodeName?.results.map((ep) => (
                        <ul key={ep.id}>
                            <li>
                                <Link href={`/episodes/${ep.id}`}>
                                    <a className={css.lienEp}>
                                        {ep.name} ({ep.episode})<br/>
                                    </a>
                                </Link>
                                Date de diffusion : {ep.air_date}
                            </li>
                        </ul>
                    ))}
                </div>

            </div>

            
            
            
        </main>
    )
}

export async function getStaticProps({params}) { 
// export async function getServerSideProps({params}) { 
    //const response2 = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    //const persoInfo = await response2.json()

    const getContentFromAPI = require('../../cache').default
    const persoInfo = await getContentFromAPI(`api/character/${params.id}`)
    
    const response = await fetch(`https://rickandmortyapi.com/api/episode/`)
    const episodeName = await response.json()
    
    return {
        props: { 
            persoInfo,
            episodeName,
        },
        revalidate: 60,
    }
}

export async function getStaticPaths() { // liste les (routes) pages à l'avance
    // const perso = await (await fetch('https://rickandmortyapi.com/api/character')).json()

    return {
        // paths: perso.results.map(p => ({
        //     params: {id: p.id.toString()}
        // })),
        paths: [], // on telecharge les pages a la demande 
        fallback: 'blocking', // met la page 404
    }
    
}

export default Perso

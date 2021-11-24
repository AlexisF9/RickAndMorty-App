import Link from 'next/link'
import Pagination from '../../components/pagination'
import css from './index.module.scss'

export function Page({pagination, index}) {
    return (
        <main className={css.content}>
            
            <Link href={'/'}>
                <a>
                    <div className={css.logo}>
                        <img src="https://upload.wikimedia.org/wikipedia/fr/archive/7/74/20210714043526%21Rick_et_Morty_Logo_FR.png" />
                    </div>
                </a>
            </Link>

            <div className={css.listePerso}>
                    {pagination.results.map((nomPerso) => (
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
            <Pagination index={index} max={pagination.info.pages}/>
        </main>
    )
}

export async function getStaticProps({params}) { 
    const index = parseInt(params.id)
    const pages = await fetch(`https://rickandmortyapi.com/api/character/?page=${index}`)
    const pagination = await pages.json()
    
    return {
        props: { 
            index,
            pagination
        }
    }
}

export async function getStaticPaths() { // liste les (routes) pages à l'avance
    const page = await (await fetch(`https://rickandmortyapi.com/api/character`)).json()
    
    return {
        paths: [...Array(page.info.pages).keys()].map(id => ({
            params: {id: (id + 1).toString()}
        })),
        fallback: false, // met la page 404
    }
    
}

export default Page
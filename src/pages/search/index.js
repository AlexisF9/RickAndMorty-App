import Link from 'next/link'
import { createRef, useState } from 'react';
import css from './index.module.scss'

export function Search() {

    const [items, setItems] = useState([]) 
    const search = createRef()
    const select = createRef()

    async function handleOnSubmitSearch(e) {
        
        e.preventDefault(); // annule tout ce que tu fais nativement, dans ce cas : annule le rechargement de page
        const value = search.current.value
        const categorie = select.current.value      
        const rep = await fetch(`https://rickandmortyapi.com/api/${categorie}/?name=${value}`)
        const data = await rep.json()
        setItems(data.results)
      }

    return (
        
        <main className={css.searchPage}>

            <div className={css.headerSearch}>
                <h1>Rick and Morty Search</h1>
                <form onSubmit={handleOnSubmitSearch}>
                    <input ref={search} type="text"/>
                    <select ref={select}>
                        <option value="character">Personnage</option>
                        <option value="location">Location</option>
                        <option value="episode">Episode</option>
                    </select>
                    <button>Search</button>
                </form> 
                <Link href={`/`}>
                    <a>Retour à l'acueil</a>
                </Link>
            </div>

            <div className={css.searchList}>
                {items?.map((p) => ( // map retourne une valeur
                    <Link href={`/`}>
                        <a>
                            <div></div>
                            <span>{p.name}</span><br/> 
                            <img src={p.image} />
                        </a>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Search
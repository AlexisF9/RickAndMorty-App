import fs from 'fs-extra'
import path from 'path'

export default async function getContentFromAPI(url) {

    const cachePath = path.join(process.cwd(), 'cache-url', url + '.json') // contient la route du fichier du cache
    // process.cwd() = racine du projet / ur.json

    if (fs.existsSync(cachePath)) { // si le cache existe

        const data = fs.readFileSync(cachePath) // lie le contenu du fichier
        return (
            JSON.parse(data) // retourne le contenu en le sérialisant
        )

    }else {

        const response = await fetch(`https://rickandmortyapi.com/${url}`) //telechargement
        const json = await response.json() //serialise 

        fs.ensureFileSync(cachePath) // créé les dossier ou sera stocker le cache
        fs.writeJsonSync(cachePath, json) // text est injecté dans un fichier (enregistrer le cache)
        return json

    }
    
}
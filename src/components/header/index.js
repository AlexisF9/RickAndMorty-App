import Link from 'next/link'
import css from './index.module.scss'

export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png" />
            </div>

            <Link href={`../../search`}>
                <a>
                    Rick and Morty Search
                </a>
            </Link>
        </div>
    )
}
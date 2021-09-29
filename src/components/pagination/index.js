import React, { useState } from 'react'
import Link from 'next/link'
import css from './index.module.scss'

export default function Pagination({ index, max }) {
    return (
        <div className={css.btnPagination}>
            {index > 1 && <Link href={index === 2?'/':`/page/${index - 1}`}>
                    <a>
                        <button>Prev</button> 
                    </a>
                </Link>
            }
            <p>({index}/{max})</p>
            {index < max && <Link href={`/page/${index + 1}`}>
                    <a>
                        <button>Next</button>
                    </a>
                </Link>
            }
        </div>
    )
}
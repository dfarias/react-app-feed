import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import styles from './Comment.module.css'

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/keuller.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Keuller Magalhães</strong>
              <time
                  title="8 de junho às 08:13"
                  dateTime='2022-06-08 08:13:43'>
                Cerca de 2h atrás
              </time>
            </div>

            <button title='Apagar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

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

            <button onClick={handleDeleteComment} title='Apagar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp onClick={handleLikeComment} size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
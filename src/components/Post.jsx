import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
              src="http://github.com/dfarias.png"
          />
          <div className={styles.authorInfo}>
            <strong>David Farias</strong>
            <span>Middleware Manager</span>
          </div>
        </div>

        <time
            title="8 de junho às 08:13"
            dateTime='2022-06-08 08:13:43'>
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu profile. É um projeto que fiz no evento da Red Hat.</p>
        <p><a href="#">redhat.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#redhat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
        </div>

      </form>
    </article>
  )
}
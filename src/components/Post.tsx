import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link',
  content: string
}

interface PostProps {
  author: Author,
  content: Content[],
  publishedAt: Date
}

export function Post({author, content, publishedAt}: PostProps) {

  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([
    'Muito bom, parabéns!!!'
  ])

  const publishedDateFormatted = format(
    publishedAt, "d 'de' MMMM 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    publishedAt, 
    { locale: ptBR, addSuffix: true }
  )

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const newComments = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(newComments)
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
              src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map(line=> {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          value={newComment}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>

        <div className={styles.commentList}>
          {
            comments.map(comment=>{
              return (
                <Comment 
                  key={comment}
                  content={comment}
                  onDeleteComment={deleteComment}
                />
              )
            })
          }
        </div>

      </form>
    </article>
  )
}
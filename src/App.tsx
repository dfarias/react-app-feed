import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dfarias.png',
      name: 'David Farias',
      role: 'Midleware Architect'
    },
    content: [
      {type: 'paragraph', content: "Fala galera"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu profile. É um projeto que fiz no evento da Red Hat."},
      {type: 'link', content: "redhat.design/dfarias"},
      // {type: 'tag', content: "#novoprojeto"},
      // {type: 'tag', content: "#redhat"},
    ],
    publishedAt: new Date('2023-05-03 20:08:32')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mgohashi.png',
      name: 'Marcelo Ohashi',
      role: 'Midleware Architect'
    },
    content: [
      {type: 'paragraph', content: "Fala galera"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu profile. É um projeto que fiz no evento da Red Hat."},
      {type: 'link', content: "redhat.design/mohashi"}
    ],
    publishedAt: new Date('2023-05-09 13:22:03')
  },
]

export function App() {
  return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })}
          </main>
        </div>
      </>
  )
}

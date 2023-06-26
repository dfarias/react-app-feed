import { Avatar } from './Avatar'
import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img 
          className={styles.cover}
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=40" alt="Cover Image"
      />

      <div className={styles.profile}>
        <Avatar src='http://github.com/fernandoreb.png'/>

        <strong>Fernando Guimarães</strong>
        <span>Middleware Architect</span>
      </div>

      <footer>

        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>

      </footer>

    </aside>
  )
}
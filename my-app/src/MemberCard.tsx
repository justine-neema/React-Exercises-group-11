// Author: Adeline
import type { ReactElement } from 'react'
// Author: Joshua Ochel Mugisha
import './MemberCard.css'
// Author: Neema
// Author: Karabo-jpg (Task 27: Inline styles)

type MemberCardProps = {
  id: number                              // Author: Phillip Mulindwa (Task 46: needed to identify member for callbacks)
  name: string
  role: string
  bio: string
  tasksCompleted: number   // Author: Adeline
  isActive: boolean        // Author: Adeline
  onRemove: (id: number) => void          // Author: Phillip Mulindwa (Task 46: Callback Props, typed)
  onToggleStatus: (id: number) => void    // Author: Phillip Mulindwa (Task 46 & 47: Callback Props, typed)
}
function MemberCard({ id, name, role = 'Team Member', bio, tasksCompleted, isActive, onRemove, onToggleStatus }: MemberCardProps): ReactElement {
  return (
    // Author: Joshua Ochel Mugisha
    <article className={`member-card ${isActive ? 'active' : 'inactive'}`}>
      <h2>{name}</h2>
      <h3>{role}</h3>
      {/* Author: Adeline */}
      <p style={{ fontWeight: 'bold' }}>Tasks completed: {tasksCompleted}</p>
      <p>Active: {isActive ? 'active' : 'inactive'}</p>
      {bio && <p>{bio}</p>}
      
    </article>
  )
}

export default MemberCard
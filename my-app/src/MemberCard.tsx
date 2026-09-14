// Author: Adeline
import type { ReactElement } from 'react'
// Author: Joshua Ochel Mugisha
import './MemberCard.css'
// Author: Neema
// Author: Karabo-jpg (Task 27: Inline styles)

type MemberCardProps = {
  name: string
  role: string
  bio: string
  tasksCompleted: number   // Author: Adeline
  isActive: boolean        // Author: Adeline
}

function MemberCard({ name, role = 'Team Member', bio, tasksCompleted, isActive }: MemberCardProps): ReactElement {
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
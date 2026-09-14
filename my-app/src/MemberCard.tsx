// Author: Adeline
import type { ReactElement } from 'react'

type MemberCardProps = {
  name: string
  role: string
  bio: string
  tasksCompleted: number   // Author: Adeline
  isActive: boolean        // Author: Adeline
}

function MemberCard({ name, role, bio, tasksCompleted, isActive }: MemberCardProps): ReactElement {
  return (
    <article>
      <h2>{name}</h2>
      <h3>{role}</h3>
      {/* Author: Adeline */}
      <p>Tasks completed: {tasksCompleted}</p>
      <p>Active: {isActive ? 'active' : 'inactive'}</p>
      {bio && <p>{bio}</p>}
    </article>
  )
}

export default MemberCard
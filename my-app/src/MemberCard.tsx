import type { ReactElement } from 'react'
// Author Neema
type MemberCardProps = {
  name: string
  role: string
  bio: string
  tasksCompleted: number
  isActive: boolean

}
// Author Neema
function MemberCard({ name, role, bio, tasksCompleted, isActive }: MemberCardProps): ReactElement {
  return (
    <article>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
      <p>Tasks completed: {tasksCompleted}</p>
      <p>Active: {isActive ? 'active' : 'inactive'}</p>
      {bio && <p>{bio}</p>}
    </article>
  )
}

export default MemberCard

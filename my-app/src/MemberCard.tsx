import type { ReactElement } from 'react'
// Author Neema
type MemberCardProps = {
  name: string
  role: string
  bio: string
  tasksCompleted: number
  isActive: boolean

}

<<<<<<< HEAD
function MemberCard({ name, role, bio, tasksCompleted, isActive }: MemberCardProps): ReactElement {
=======
// Author Neema
function MemberCard({ name, role, bio }: MemberCardProps): ReactElement {
>>>>>>> 16a494f5ac5965f37ec86999e8d2c31e3ffc1e53
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

import type { ReactElement } from 'react'

type MemberCardProps = {
  name: string
  role: string
  bio: string
}

function MemberCard({ name, role, bio }: MemberCardProps): ReactElement {
  return (
    <article>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
    </article>
  )
}

export default MemberCard

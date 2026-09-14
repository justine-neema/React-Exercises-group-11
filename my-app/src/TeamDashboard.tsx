// AUthor Neema
import type { ReactElement } from 'react'
import MemberCard from './MemberCard'

type TeamMember = {
  name: string
  role: string
  bio: string
}

const members: TeamMember[] = [
  {
    name: 'Adeline',
    role: 'Frontend Developer',
    bio: 'Builds clean interfaces and keeps the user experience simple and engaging.'
  },
  {
    name: 'Jacob',
    role: 'Project Lead',
    bio: 'Coordinates the team, keeps priorities clear, and turns ideas into action.'
  },
  {
    name: 'Maya',
    role: 'UX Designer',
    bio: 'Shapes intuitive layouts and thoughtful interactions for every screen.'
  }
]

function TeamDashboard(): ReactElement {
  return (
    <>
      <header>
        <h1>Group 11 Team Dashboard</h1>
        <p>
          Our group application helps teammates stay organized, collaborative, and
          focused on delivering a polished product together.
        </p>
      </header>

      <section>
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </section>
    </>
  )
}

export default TeamDashboard

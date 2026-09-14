// AUthor Neema
import type { ReactElement } from 'react'
import MemberCard from './MemberCard'

type TeamMember = {
  name: string
  role: string
  bio: string
  tasksCompleted: number
  isActive: boolean
}

const members: TeamMember[] = [
  { 
    name: 'Adeline',
<<<<<<< HEAD
    role: 'Frontend Developer',
    bio: 'Builds clean interfaces and keeps the user experience simple and engaging.',
    tasksCompleted: 8,
    isActive: true
======= 
    role: 'React Developer',
    bio: 'Builds clean interfaces and keeps the user experience simple and engaging.'
>>>>>>> 16a494f5ac5965f37ec86999e8d2c31e3ffc1e53
  },
  {
    name: 'Neema',
    role: 'Project Lead',
    bio: 'Coordinates the team, keeps priorities clear, and turns ideas into action.',
    tasksCompleted: 12, // AUthor: Adeline
    isActive: true // Author: Adeline
  },
  {
<<<<<<< HEAD
    name: 'Maya',
    role: 'UX Designer',
    bio: 'Shapes intuitive layouts and thoughtful interactions for every screen.',
    tasksCompleted: 5,   // Author: Adeline
    isActive: false  // Author: Adeline
=======

    name: 'Karabo',
    role: 'React Developer',
    bio: 'Shapes intuitive layouts and thoughtful interactions for every screen.'
>>>>>>> 16a494f5ac5965f37ec86999e8d2c31e3ffc1e53
  }
]

function TeamDashboard(): ReactElement {
  return (
    <>
      <header>
        <h1>Group 11 Team Dashboard</h1>
        <p>
          Our group application keeps teams organized, collaborative and
          Set on producing a clean product as a team.
        </p>
      </header>

      <section>
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            {/* Author: Adeline */}
            tasksCompleted={member.tasksCompleted} 
            isActive={member.isActive} 
          />
        ))}
      </section>
    </>
  )
}

export default TeamDashboard

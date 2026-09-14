// AUthor Neema
// Author: Karabo-jpg (Task 30)
import { useState } from 'react'
import type { ReactElement } from 'react'
import MemberCard from './MemberCard'
import './TeamDashboard.css'

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
    role: 'Frontend Developer',
    bio: 'Builds clean interfaces and keeps the user experience simple and engaging.',
    tasksCompleted: 8,
    isActive: true
  },
  {
    name: 'Neema',
    role: 'Project Lead',
    bio: 'Coordinates the team, keeps priorities clear, and turns ideas into action.',
    tasksCompleted: 12,
    isActive: true
  },
  {
    name: 'Maya',
    role: 'UX Designer',
    bio: 'Shapes intuitive layouts and thoughtful interactions for every screen.',
    tasksCompleted: 5,
    isActive: false
  }
]

function TeamDashboard(): ReactElement {
  // Task 31: useState Hook (Typed)
  const [teamScore, setTeamScore] = useState<number>(0)

  return (
    <>
      <header className="dashboard-header">
        <h1>Group 11 Team Dashboard</h1>
        <p>
          Our group application keeps teams organized, collaborative and
          Set on producing a clean product as a team.
        </p>
      </header>
      
      {/* Task 32: Display State */}
      <div className="score-panel">
        <h2>Team Score: {teamScore}</h2>
      </div>
                                      
      <section className="team-dashboard-container">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
          />
        ))}
      </section>
    </>
  )
}

export default TeamDashboard

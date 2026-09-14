// Author: Neema
// Author: Karabo (Task 30)
import { useState } from 'react'
import type { ReactElement, ChangeEvent, FormEvent } from 'react'
import MemberCard from './MemberCard'
import './TeamDashboard.css'

// Author: elohejacs (Task 41: Member Interface)
// Author: Phillip Mulindwa (added id field — required for Task 45 remove & Task 47 toggle)
interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  tasksCompleted: number
  isActive: boolean
}

const initialMembers: TeamMember[] = [
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
    tasksCompleted: 12,   // Author: Adeline
    isActive: true        // Author: Adeline
  },
  {
    name: 'Maya',
    role: 'UX Designer',
    bio: 'Shapes intuitive layouts and thoughtful interactions for every screen.',
    tasksCompleted: 5,    // Author: Adeline
    isActive: false       // Author: Adeline
  }
]

function TeamDashboard(): ReactElement {
  // Task 31: useState Hook (Typed)
  const [teamScore, setTeamScore] = useState<number>(0)

  // Author: elohejacs (Task 42: Array State - typed useState for members)
  // Note: setter is wired up for Task 43 (adding members), which is out of scope here.
  // Author: Phillip Mulindwa (Task 42 completed: added setTeamMembers so members can be added/removed/updated)
const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialMembers)

  // Author: elohejacs (Task 36: String State for new member's name)
  const [newMemberName, setNewMemberName] = useState<string>('')

  // Author: elohejacs (Task 40: displays the most recently submitted name)
  const [submittedName, setSubmittedName] = useState<string>('')

  // Author: elohejacs (Task 35: Decrease State without going below 0)
  const decreaseScore = (): void => {
    setTeamScore(prevScore => (prevScore > 0 ? prevScore - 1 : 0))
  }

  // Author: elohejacs (Task 38: Change Event, typed)
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewMemberName(event.target.value)
  }

  // Author: elohejacs (Task 39 & 40: Form Submission, typed, preventDefault)
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setSubmittedName(newMemberName)
    console.log('Submitted member name:', newMemberName)
    setNewMemberName('')
  }

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
        {/* Task 34: Functional Updates */}
        <button onClick={() => setTeamScore(prevScore => prevScore + 1)}>
          Increase Score
        </button>
        {/* Author: elohejacs (Task 35: Decrease State) */}
        <button onClick={decreaseScore}>
          Decrease Score
        </button>
      </div>

      {/* Author: elohejacs (Tasks 36-40: Controlled form for a new member's name) */}
      <form className="add-member-form" onSubmit={handleSubmit}>
        <label htmlFor="newMemberName">New member name</label>
        <input
          id="newMemberName"
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter member name"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p className="submitted-name">Last submitted name: {submittedName}</p>}

      <section className="team-dashboard-container">
        {teamMembers.map((member) => (
          // Author: Adeline
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
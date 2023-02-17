import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Pedrito',
    name: 'Pedro Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'Polo33',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoXD',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TomiCrack',
    name: 'Tomas Urrego',
    isFollowing: false
  }
]

export function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          formatUserName={formatUserName(userName)}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}

// <React.Fragment></React.Fragment> es lo mismo que poner solamente <></>

import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName='LIRIK' name='Lirik'>
        Lirik
      </TwitterFollowCard>
      <TwitterFollowCard userName='xqc' name='xQc'>
        xQc
      </TwitterFollowCard>
      <TwitterFollowCard userName='pokelawls' name='pokelawls'>
        pokelawls
      </TwitterFollowCard>
    </section>
  )
}

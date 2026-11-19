import { Link } from 'react-router'

export default function Symptoms() {
  return (
    <>
      <main>
        <h1>Symptoms</h1>
        <section>
          <div className="info-container">
            <div className="info-card">
              <h2>Early Symptoms</h2>
              <p>
                Poor Coordination, Walking and Balance Problems, Confusion, Delusions, Issues With Thinking, Memory, and Judgement, Behavior Changes (Depression, Mood Swings, and Anxiety), Speech Difficulty, Insomnia or Changes In Sleep Patterns, Vision Changes, Hallucinations, Dizziness, and Tremors.
              </p>
            </div>
            <div className="info-card">
              <h2>Later Symptoms</h2>
              <p>
                Weakness of the Arms and Legs, Blindness, Paralysis, Problems Swallowing and Becoming Comatose (deep, unresponsive state of unconsciousness)
              </p>
            </div>
            <div className="info-card">
              <h2>Why?</h2>
              <p>
                All of these occur because of the abnormal prions slowly killing the brain, which destroys functionality of the nervous system.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Source: <a href="https://www.cdc.gov/creutzfeldt-jakob/hcp/clinical-overview/index.html" target="_blank" rel="noopener noreferrer">CDC Creutzfeldt-Jakob Disease Clinical Overview</a></p>
      </footer>
    </>
  )
}

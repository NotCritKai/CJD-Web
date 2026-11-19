import { Link } from 'react-router'

export default function Overview() {
  return (
    <main>
      <h1>Creutzfeldt-Jakob Disease</h1>
      <p>
        Creutzfeldt-Jakob disease (CJD) is a rare, degenerative, and fatal brain
        disorder. It is characterized by rapid mental deterioration, usually
        within a few months. Early symptoms include memory loss, behavioral
        changes, and coordination problems.
      </p>
      <section aria-label="About CJD">
        <div className="info-container">
          <div className="info-card">
            <h2>Summary</h2>
            <p>
              Cruetzfeldt-Jakobs primarily affects the nervous system. The
              nervous system is composed of your brain, spinal cord, and nerves.
              Using electric signals, which work as messages, they communicate
              across the body. Functions of a properly functioning nervous
              system are blushing, sweating, and blinking, while also helping to
              regulate thoughts, memory, learning, emotions, balance, senses,
              wound healing, sleep, heartbeat and breathing patterns, stress
              response, digestion and other body processes like puberty and
              aging. There are 3 different types of neurons: motor neurons,
              sensory neurons, and interneurons. Motor neurons take signals from
              the brain and spinal cord to your muscles, helping you move.
              Sensory neurons take information from your senses to your brain
              (think taste, smell, hearing, touch and sight). Interneurons
              communicate between the former two types and regulate movement in
              response to sensory information. The nervous system can be grouped
              into two groups: central nervous system (CNS) and peripheral
              nervous system (PNS). The CNS is made up of the brain and spinal
              cord, with the brain processing information. The PNS is made of a
              network of nerves, which work together to relay information to and
              from the brain.
            </p>
          </div>
          <div className="info-card">
            <h2>Types of CJD</h2>
            <p>The four types of CJD are:</p>
            <ul>
              <li>
                Sporadic CJD: Occurs randomly and is the most common form.
              </li>
              <li>Variant CJD: Linked to consuming contaminated beef.</li>
              <li>Iatrogenic CJD: Acquired through medical procedures.</li>
              <li>Inherited/Familial CJD: Caused by genetic mutations.</li>
            </ul>
          </div>
        </div>

        <div className="links-container">
        <Link to="/symptoms" className="link-section">
          <div className="link-text">
            <h2>Symptoms</h2>
            <p>Learn more about the symptoms experienced</p>
          </div>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </Link>

        <Link to="/risk-factors" className="link-section">
          <div className="link-text">
            <h2>Risk Factors</h2>
            <p>Learn more about the risk factors</p>
          </div>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </Link>

        <Link to="/diagnosis" className="link-section">
          <div className="link-text">
            <h2>Diagnosis</h2>
            <p>Learn more about the diagnosis</p>
          </div>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </Link>

        <Link to="/treatments" className="link-section">
          <div className="link-text">
            <h2>Treatments</h2>
            <p>Learn more about the treatments</p>
          </div>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </Link>

        <Link to="/sources" className="link-section">
          <div className="link-text">
            <h2>Sources</h2>
            <p>Learn more about the sources</p>
          </div>
          <span className="arrow" aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      </section>
    </main>
  );
}

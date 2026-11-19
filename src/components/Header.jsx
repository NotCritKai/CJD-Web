import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/" className="title" aria-label="CJD Guide home">
              <img src="/icons/android-chrome-192x192.png" alt="CJD Guide" width="50" height="50" />
            </Link>
          </li>
          <li><NavLink to="/" end>Overview</NavLink></li>
          <li><NavLink to="/symptoms">Symptoms</NavLink></li>
          <li><NavLink to="/risk-factors">Risk Factors</NavLink></li>
          <li><NavLink to="/diagnosis">Diagnosis</NavLink></li>
          <li><NavLink to="/treatments">Treatments</NavLink></li>
          <li><NavLink to="/cause-and-effect">Cause & Effect</NavLink></li>
          <li><NavLink to="/sources">Sources</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

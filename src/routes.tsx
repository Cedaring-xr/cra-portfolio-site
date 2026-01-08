import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ResumePage from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
import ItteroTestPlan from './pages/ItteroTestPlan'
import ClimbSafeTestPlan from './pages/ClimbSafeTestPlan'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/resume" element={<ResumePage />} />
				<Route path="/ItteroTestPlan" element={<ItteroTestPlan />} />
				<Route path="/climbSafeTestPlan" element={<ClimbSafeTestPlan />} />
			</Routes>
			<Footer date="Jan. 2026" />
		</Router>
	)
}

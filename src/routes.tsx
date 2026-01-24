import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ResumePage from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import ItteroTestPlan from './pages/ItteroTestPlan'
import ClimbSafeTestPlan from './pages/ClimbSafeTestPlan'
import { BUILD_INFO } from './buildInfo'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
				<Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
				<Route path="/resume" element={<PageTransition><ResumePage /></PageTransition>} />
				<Route path="/ItteroTestPlan" element={<PageTransition><ItteroTestPlan /></PageTransition>} />
				<Route path="/climbSafeTestPlan" element={<PageTransition><ClimbSafeTestPlan /></PageTransition>} />
			</Routes>
			<Footer date={BUILD_INFO.lastUpdated} />
		</Router>
	)
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import ResumePage from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/resume" element={<ResumePage />} />
			</Routes>
			<Footer date="Nov 2023" />
		</Router>
	)
}

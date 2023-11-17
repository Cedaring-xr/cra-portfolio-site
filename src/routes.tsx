import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
			<Footer date="Nov 2023" />
		</Router>
	)
}

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer date="oct 2023" />
		</Router>
	)
}

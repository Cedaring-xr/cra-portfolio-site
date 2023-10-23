import React from 'react'
import Project from '../components/Project'

import camp from '/public/camping1.png'
import ship from '/public/icyShip.png'
import mtn from '/public/spaceMountains.png'

import ThreeJs from '/public/icons/Three.png'
import Next from '/public/icons/nextJS.png'
import ReactJS from '/public/icons/react.png'
import Tailwind from '/public/icons/tailwind.png'
import Typescript from '/public/icons/Typescript.png'
import Vite from '/public/icons/vite.png'
import Vitest from '/public/icons/vitest.png'
import Jest from '/public/icons/jest.png'
import Lambda from '/public/icons/lambda.png'
import AWSCombo from '/public/icons/aws-combined.png'
import Playwright from '/public/icons/playwright.png'
import S3 from '/public/icons/s3.png'

export default function Projects() {
	return (
		<>
			<div className="bg-slate-600 text-white">
				<h2 className="font-title text-3xl">Personal Coding Projects</h2>
				<Project
					title="Quiz Generator"
					description="Create and Share custom multiple choice quizzes/surveys"
					pictures={[
						{ url: camp, description: 'camping', alt: 'camping image' },
						{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
						{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
					]}
					logos={[
						{ name: 'React', url: ReactJS },
						{ name: 'Tailwind CSS', url: Tailwind },
						{ name: 'AWS', url: AWSCombo },
						{ name: 'Next.js', url: Next }
					]}
					link="https://github.com/Cedaring-xr"
				/>
				<Project
					title="React Component Practice"
					description="Building commonly used component for practice with React, Typescript, and unit testsing"
					pictures={[
						{ url: camp, description: 'camping', alt: 'camping image' },
						{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
						{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
					]}
					logos={[
						{ name: 'React', url: ReactJS },
						{ name: 'Tailwind CSS', url: Tailwind },
						{ name: 'Typescript', url: Typescript },
						{ name: 'Vitest', url: Vitest }
					]}
					link="https://github.com/Cedaring-xr"
				/>
				<Project
					title="Cedaring VR Art"
					description="Displaying 3D scenes of VR artwork and rock climbing"
					pictures={[
						{ url: camp, description: 'camping', alt: 'camping image' },
						{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
						{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
					]}
					logos={[
						{ name: 'React', url: ReactJS },
						{ name: 'ThreeJS', url: ThreeJs },
						{ name: 'Playwright', url: Playwright },
						{ name: 'AWS S3', url: S3 }
					]}
					link="https://cedaring.art/"
				/>
			</div>
		</>
	)
}

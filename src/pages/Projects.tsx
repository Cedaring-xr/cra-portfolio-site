import Project from '../components/Project'
import camp from '../assets/camping1.png'
import ship from '../assets/icyShip.png'
import mtn from '../assets/spaceMountains.png'
import ThreeJs from '../assets/icons/Three.png'
import Next from '../assets/icons/nextJS.png'
import ReactJS from '../assets/icons/react.png'
import Tailwind from '../assets/icons/tailwind.png'
import Typescript from '../assets/icons/typescript.png'
import Vitest from '../assets/icons/vitest.png'
import AWSCombo from '../assets/icons/aws-combined.png'
import Playwright from '../assets/icons/playwright.png'
import S3 from '../assets/icons/S3.png'

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

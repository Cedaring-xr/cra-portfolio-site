import Project from '../components/Project'
import camp from '../assets/camping1.png'
import ship from '../assets/icyShip.png'
import mtn from '../assets/spaceMountains.png'
import components1 from '../assets/ReactComponents1.png'
import components2 from '../assets/ReactComponents2.png'
import components3 from '../assets/ReactComponents3.png'
import elevation1 from '../assets/elevationWeatherExample1.png'
import elevation2 from '../assets/elevationWeatherExample2.png'
import elevation3 from '../assets/elevationWeatherExample3.png'

// logos
import ThreeJs from '../assets/icons/Three.png'
import Next from '../assets/icons/nextJS.png'
import ReactJS from '../assets/icons/react.png'
import Tailwind from '../assets/icons/tailwind.png'
import Typescript from '../assets/icons/typescript.png'
import Jest from '../assets/icons/jest.png'
import AWSCombo from '../assets/icons/aws-combined.png'
import Playwright from '../assets/icons/playwright.png'
import S3 from '../assets/icons/S3.png'
import Amplify from '../assets/icons/amplify.png'

export default function Projects() {
	return (
		<>
			<div className="bg-transparent">
				<h2 className="font-title text-3xl">Personal Coding Projects</h2>
				<div id="projects-container" className="flex flex-col md:flex-row md:gap-8 md:flex-wrap">
					<Project
						title="Elevation Weather App"
						description="search for current weather based on city location or elevation"
						pictures={[
							{ url: elevation1, description: 'camping', alt: 'camping image' },
							{ url: elevation2, description: 'ship in ice', alt: 'ship in ice' },
							{ url: elevation3, description: 'elevation example', alt: 'ps' },
							{ url: elevation3, description: 'elevation example', alt: 'ps' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind CSS', url: Tailwind },
							{ name: 'Amplify', url: Amplify }
						]}
						link="https://dev.dr7t8my3rq95b.amplifyapp.com/"
					/>
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
					<Project
						title="Cloud Resume template"
						description="Custom created resume in html that is exportable to pdf"
						pictures={[
							{ url: camp, description: 'camping', alt: 'camping image' },
							{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
							{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind CSS', url: Tailwind },
							{ name: 'AWS S3', url: S3 }
						]}
						link=""
					/>
					<Project
						title="React Component Practice"
						description="Building commonly used component for practice with React, Typescript, and unit testsing"
						pictures={[
							{ url: components1, description: 'examples of react components', alt: 'example image' },
							{ url: components2, description: 'examples of react components', alt: 'example image' },
							{ url: components3, description: 'examples of react components', alt: 'example image' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind CSS', url: Tailwind },
							{ name: 'Typescript', url: Typescript },
							{ name: 'Jest', url: Jest }
						]}
						link="https://main.d1x2x77vkbyrf2.amplifyapp.com/"
					/>
					<Project
						title="Raspberry Pi long-term time lapse camera"
						description="Taking time lapse pictures and uploading to cloud"
						pictures={[
							{ url: camp, description: 'camping', alt: 'camping image' },
							{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
							{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
						]}
						logos={[
							{ name: 'Python', url: ReactJS },
							{ name: 'IoT', url: ThreeJs },
							{ name: 'AWS S3', url: S3 }
						]}
						link="https://cedaring.art/"
					/>
				</div>
			</div>
		</>
	)
}

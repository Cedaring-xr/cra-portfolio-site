import Project from '../components/Project'
import camp from '../assets/camping1.png'
import ship from '../assets/icyShip.png'
import mtn from '../assets/spaceMountains.png'
import RC1 from '../assets/RC1.png'
import RC2 from '../assets/RC2.png'
import RC3 from '../assets/RC3.png'
import art1 from '../assets/Art1.png'
import art2 from '../assets/Art2.png'
import art3 from '../assets/Art3.png'
import EW1 from '../assets/EW1.png'
import EW2 from '../assets/EW2.png'
import EW3 from '../assets/EW3.png'
import res1 from '../assets/oldResume1.png'
import res2 from '../assets/pdfMe.png'

// logos
import ThreeJs from '../assets/icons/Three.png'
import ReactJS from '../assets/icons/react.png'
import Tailwind from '../assets/icons/tailwind.png'
import Typescript from '../assets/icons/typescript.png'
import Jest from '../assets/icons/jest.png'
import Playwright from '../assets/icons/playwright.png'
import S3 from '../assets/icons/S3.png'
import Amplify from '../assets/icons/amplify.png'
import Lambda from '../assets/icons/lambda.png'
import Python from '../assets/icons/python.png'

export default function Projects() {
	return (
		<>
			<div className="bg-transparent md:background mt-[180px]">
				<h2 className="font-title text-2xl lg:text-3xl text-center">Personal Coding Projects</h2>
				<div
					id="projects-container"
					className="flex flex-col md:flex-row md:gap-8 md:flex-wrap md:max-w-[1400px] mx-auto justify-center"
				>
					<Project
						title="Elevation Weather App"
						description="Simple weather application that can search for current weather based on city location or elevation"
						pictures={[
							{ url: EW1, description: 'camping', alt: 'weather landing page screen' },
							{ url: EW2, description: 'ship in ice', alt: 'weather display for warm climate' },
							{ url: EW3, description: 'elevation example', alt: 'weather display on elevation page' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind', url: Tailwind },
							{ name: 'Amplify', url: Amplify }
						]}
						link="https://dev.dr7t8my3rq95b.amplifyapp.com/"
					/>
					<Project
						title="Cedaring VR Art Showcase"
						description="Learning ThreeJS and 3D web development basics in order to display artwork created in VR and create more dynamic and interesting web experiences"
						pictures={[
							{ url: art1, description: 'camping', alt: 'camping image' },
							{ url: art2, description: 'ship in ice', alt: 'ship in ice' },
							{ url: art3, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'ThreeJS', url: ThreeJs },
							{ name: 'Playwright', url: Playwright },
							{ name: 'S3', url: S3 }
						]}
						link="https://cedaring.art/"
					/>
					<Project
						title="Cloud Resume Template"
						description="Customizable resume template for generating a resume in html that is exportable to pdf using JSpdf plugin"
						pictures={[
							{ url: res1, description: 'camping', alt: 'camping image' },
							{ url: res2, description: 'ship in ice', alt: 'ship in ice' },
							{ url: res1, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind', url: Tailwind },
							{ name: 'AWS S3', url: S3 }
						]}
						link=""
					/>
					<Project
						title="Raspberry Pi time lapse camera"
						description="Using a Raspberry Pi to take timelapse pictures, uploading pictures to S3 then running lambda functions to process pictures. Final output is displayed in an amplify website"
						pictures={[
							{ url: camp, description: 'camping', alt: 'camping image' },
							{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
							{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
						]}
						logos={[
							{ name: 'Python', url: Python },
							{ name: 'S3', url: S3 },
							{ name: 'Lambda', url: Lambda },
							{ name: 'Amplify', url: Amplify }
						]}
						link=""
					/>
					<Project
						title="React Component Practice"
						description="Building commonly used and interesting web components for practice with React, Typescript, and unit testsing"
						pictures={[
							{ url: RC1, description: 'examples of react components', alt: 'example image' },
							{ url: RC2, description: 'examples of react components', alt: 'example image' },
							{ url: RC3, description: 'examples of react components', alt: 'example image' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind', url: Tailwind },
							{ name: 'Typescript', url: Typescript },
							{ name: 'Jest', url: Jest }
						]}
						link="https://main.d1x2x77vkbyrf2.amplifyapp.com/"
					/>
					{/* <Project
						title="Full Stack Quiz Generator"
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
					/> */}
				</div>
			</div>
		</>
	)
}

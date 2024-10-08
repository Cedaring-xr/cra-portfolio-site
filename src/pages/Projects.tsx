import Project from '../components/Project'
import RC1 from '../assets/RC1.png'
import RC2 from '../assets/RC2.png'
import RC3 from '../assets/RC3.png'
import art1 from '../assets/Art1.png'
import art2 from '../assets/Art2.png'
import art3 from '../assets/Art3.png'
import EW1 from '../assets/EW1.png'
import EW2 from '../assets/EW2.png'
import EW3 from '../assets/EW3.png'
import PiCamera1 from '../assets/piCamera2.png'
import PiCamera2 from '../assets/timelapse1.png'
import PiCamera3 from '../assets/timeLapse3.png'
import Journal from '../assets/journal.png'
import Infinity from '../assets/infinity2.png'
import LandingPage from '../assets/landingPage.png'
import Blog1 from '../assets/blog1.png'
import Blog3 from '../assets/blog3.png'
import Blog4 from '../assets/blog4.png'
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
import Next from '../assets/icons/nextJS.png'
import Dynamo from '../assets/icons/dynamo.png'
import Cognito from '../assets/icons/cognito.png'
import ApiGateway from '../assets/icons/APIgateway.png'
import Cypress from '../assets/icons/cypress.png'

export default function ProjectsPage() {
	return (
		<>
			<div className="bg-transparent md:background mt-[180px]">
				<h2 className="font-title text-2xl lg:text-3xl text-center">Personal Coding Projects</h2>
				<div
					id="projects-container"
					className="flex flex-row gap-8 flex-wrap md:max-w-[1400px] mx-auto justify-center"
				>
					<Project
						title="Elevation Weather App"
						description="Simple weather application that can search for current weather based on city location or elevation"
						pictures={[
							{ url: EW1, description: 'weather landing page', alt: 'weather landing page screen' },
							{ url: EW2, description: 'hot weather result', alt: 'weather display for warm climate' },
							{ url: EW3, description: 'elevation example', alt: 'weather display on elevation page' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'Tailwind', url: Tailwind },
							{ name: 'Amplify', url: Amplify },
							{ name: 'Typescript', url: Typescript }
						]}
						link="https://dev.dr7t8my3rq95b.amplifyapp.com/"
					/>
					<Project
						title="Cedaring VR Art Showcase"
						description="Learning ThreeJS and 3D web development basics in order to display artwork created in VR and create more dynamic and interesting web experiences"
						pictures={[
							{ url: art1, description: 'Cedaring art scenes', alt: 'Cedaring art scenes' },
							{ url: art2, description: 'art modal', alt: 'art modal' },
							{ url: art3, description: 'cedaring homepage', alt: 'Cedaring homepage' }
						]}
						logos={[
							{ name: 'React', url: ReactJS },
							{ name: 'ThreeJS', url: ThreeJs },
							{ name: 'Playwright', url: Playwright },
							{ name: 'S3', url: S3 }
						]}
						link="https://cedaringvrart.com/"
					/>
					<Project
						title="Raspberry Pi time lapse camera"
						description="Using a Raspberry Pi to take timelapse pictures, uploading pictures to S3 then running Lambda functions to process pictures. Final output is displayed in an amplify website"
						pictures={[
							{ url: PiCamera1, description: 'camera setup', alt: 'camera setup' },
							{ url: PiCamera2, description: 'landing page for website', alt: 'website landing page' },
							{
								url: PiCamera3,
								description: 'slideshow display',
								alt: 'slideshow display section'
							}
						]}
						logos={[
							{ name: 'Python', url: Python },
							{ name: 'S3', url: S3 },
							{ name: 'Lambda', url: Lambda },
							{ name: 'Amplify', url: Amplify }
						]}
						link="https://main.d2zforex81luny.amplifyapp.com/"
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
					<Project
						title="Development Blog"
						description="Personal Blog about development, coding, and interacting with cloud architecture"
						pictures={[
							{ url: Blog1, description: 'blog homepage', alt: 'blog homepage' },
							{ url: Blog3, description: 'example blog post content', alt: 'blog content' },
							{ url: Blog4, description: 'tags and navigation', alt: 'tags and navigation' }
						]}
						logos={[
							{ name: 'Next.js', url: Next },
							{ name: 'Tailwind', url: Tailwind },
							{ name: 'Typescript', url: Typescript }
						]}
						link="https://www.radiantpine-devblog.com/"
					/>
					<Project
						title="Ittero"
						description="Full stack list creation, productivity tracker, quick journal, and feedback for continuous improvement"
						pictures={[
							{ url: Journal, description: 'writing journal', alt: 'writing journal' },
							{ url: Infinity, description: 'website logo with background', alt: 'website logo' },
							{
								url: LandingPage,
								description: 'website homepage',
								alt: 'website homepage'
							}
						]}
						logos={[
							{ name: 'Next.js', url: Next },
							{ name: 'Tailwind', url: Tailwind },
							{ name: 'Typescript', url: Typescript },
							{ name: 'Dynamo', url: Dynamo },
							{ name: 'Cognito', url: Cognito },
							{ name: 'API gateway', url: ApiGateway },
							{ name: 'Cypress', url: Cypress }
						]}
						link=""
					/>
				</div>
			</div>
		</>
	)
}

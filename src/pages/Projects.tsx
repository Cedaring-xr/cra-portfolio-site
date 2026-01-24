import Project from '../components/Project'
import EnhancedProject from '../components/EnhancedProject'
// logos
const ThreeJs = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/Three.png'
const ReactJS = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/react.png'
const Tailwind = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/tailwind.png'
const Typescript = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/typescript.png'
const Jest = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/jest.png'
const Playwright = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/playwright.png'
const S3 = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/S3.png'
const Amplify = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/amplify.png'
const Lambda = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/lambda.png'
const Python = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/python.png'
const Next = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/nextJS.png'
const Dynamo = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/dynamo.png'
const Cognito = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/cognito.png'
const ApiGateway = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/APIgateway.png'
const Cypress = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/cypress.png'
const Aurora = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/Aurora.jpg'
const Markdown = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/markdown.jpg'
const SNS = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/SNS.jpg'
const Rekognition = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/rekognition.png'
const CodePipeline = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/codePipeline.jpg'
const Vite = 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/icons/vite.png'

export default function ProjectsPage() {
	return (
		<>
			<div className="bg-transparent md:background mt-[180px]">
				<h1 className="font-title text-2xl lg:text-3xl text-center font-bold mb-24">
					Personal Coding Projects
				</h1>

				{/* Most Recent Projects Section */}
				<div className="mb-16">
					<div className="bg-zinc-800 w-[90%] md:w-[70% lg:w-[60%] mx-auto h-10 pt-1 rounded-full overflow-hidden">
						<div className="border-b-2 border-amber-600 relative w-[95%] mx-auto mb-8">
							<h2 className="sans-font text-2xl font-bold bg-zinc-800 text-amber-600 text-center mx-auto -mb-4 w-fit px-4">
								Most Recent Projects
							</h2>
						</div>
					</div>
					<div
						id="recent-projects-container"
						className="flex flex-row gap-4 flex-wrap md:max-w-[1600px] mx-auto justify-center"
					>
						<EnhancedProject
							title="Ittero"
							description="Full stack list creation, productivity tracker, quick journal, and feedback application. Extensive testing with Playwright. Will extend and continue to add feature over time."
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Ittero1.png',
									description: 'writing journal',
									alt: 'writing journal'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Ittero2.png',
									description: 'ittero dashboard page',
									alt: 'dashboard'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Ittero3.png',
									description: 'website create journal entry form',
									alt: 'create journal form'
								}
							]}
							logos={[
								{ name: 'Next.js', url: Next },
								{ name: 'Typescript', url: Typescript },
								{ name: 'Tailwind', url: Tailwind },
								{ name: 'Dynamo', url: Dynamo },
								{ name: 'Cognito', url: Cognito },
								{ name: 'API gateway', url: ApiGateway },
								{ name: 'Lambda', url: Lambda },
								{ name: 'RDS Aurora', url: Aurora },
								{ name: 'Playwright', url: Playwright },
								{ name: 'SNS', url: SNS },
								{ name: 'Code Pipeline', url: CodePipeline }
							]}
							link="https://itteroapp.com"
							testPlan="/ItteroTestPlan"
							architectureDiagram="https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Ittero+Architecture.drawio.png"
						/>
						<EnhancedProject
							title="QA stats Dashboard"
							description="Single page test run statistics populated by CI test runs for several projects"
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/qaDash1.png',
									description: 'Test Runs Summary',
									alt: 'dashboard'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/qaDash2.png',
									description: 'Test Results Overview',
									alt: 'test results'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/qaDash3.png',
									description: 'Test Pyramid',
									alt: 'test pyramid'
								}
							]}
							logos={[
								{ name: 'Vite', url: Vite },
								{ name: 'S3', url: S3 },
								{ name: 'Amplify', url: Amplify },
								{ name: 'Typescript', url: Typescript }
							]}
							link="https://main.dhy42jph43zbk.amplifyapp.com/"
							testPlan=""
							architectureDiagram=""
						/>
						<EnhancedProject
							title="climbSafe Vision"
							description="Live feed video processing with AWS Rekognition and real-time alerts. Trained on custom data to detect safety concerns at a climbing wall facility. Once issues are detected an AWS alert is triggered and a alert message is sent to on-site devices."
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/cameraVision.png',
									description: 'camera vision of climbing wall',
									alt: 'climbing wall image'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/camera.jpg',
									description: 'camera setup with Rpi-4',
									alt: 'camera and connected devices'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/landingPage.png',
									description: 'ClimbSafe Vision landing page template',
									alt: 'landing page for application'
								}
							]}
							logos={[
								{ name: 'Next.js', url: Next },
								{ name: 'Typescript', url: Typescript },
								{ name: 'Tailwind', url: Tailwind },
								{ name: 'Rekognition', url: Rekognition },
								{ name: 'SNS', url: SNS },
								{ name: 'API gateway', url: ApiGateway },
								{ name: 'S3', url: S3 }
							]}
							link=""
							testPlan="/climbSafeTestPlan"
							architectureDiagram="https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/kinesis-video-streams.drawio.png"
						/>
					</div>
				</div>
				<div className="mb-16">
					<div className="bg-zinc-800 w-[90%] md:w-[70% lg:w-[60%] mx-auto h-10 pt-1 rounded-full overflow-hidden">
						<div className="border-b-2 border-amber-600 relative w-[95%] mx-auto mb-8">
							<h2 className="sans-font text-2xl font-bold bg-zinc-800 text-amber-600 text-center mx-auto -mb-4 w-fit px-4">
								Previous Projects
							</h2>
						</div>
					</div>
					<div
						id="older-projects-container"
						className="flex flex-row gap-8 flex-wrap md:max-w-[1600px] mx-auto justify-center"
					>
						<Project
							title="Elevation Weather App"
							description="Simple weather application that can search for current weather based on city location or elevation. Built for practice consuming public API data and working with Typescript. Elevation data is all based on cities around Colorado."
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/EW1.png',
									description: 'weather landing page',
									alt: 'weather landing page screen'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/EW2.png',
									description: 'hot weather result',
									alt: 'weather display for warm climate'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/EW3.png',
									description: 'elevation example',
									alt: 'weather display on elevation page'
								}
							]}
							logos={[
								{ name: 'React', url: ReactJS },
								{ name: 'Tailwind', url: Tailwind },
								{ name: 'Amplify', url: Amplify },
								{ name: 'Typescript', url: Typescript },
								{ name: 'Cypress', url: Cypress }
							]}
							link="https://staging.d18q2isx69j0by.amplifyapp.com/"
							testPlan=""
						/>
						<Project
							title="Radiant Pine LLC"
							description="Bussiness website for freelance web development and consultation. An elegant static site with SVG elements, contact form, and reusable components"
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/radiantPine1.jpg',
									description: 'Radiant Pine landing page',
									alt: 'Radiant Pine landing page'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/radiantPine2.jpg',
									description: 'Radiant Pine services example',
									alt: 'Radiant Pine services example'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/radiantPine3.jpg',
									description: 'Radiant Pine about example',
									alt: 'Radiant Pine about example'
								}
							]}
							logos={[
								{ name: 'Next.js', url: Next },
								{ name: 'Tailwind', url: Tailwind },
								{ name: 'Typescript', url: Typescript },
								{ name: 'Amplify', url: Amplify }
							]}
							link="https://radiantpine.com"
							testPlan=""
						/>
						<Project
							title="Development Blog"
							description="Personal Blog about development, coding, and interacting with cloud architecture. Uses posts written in markdown. Switched to LLC branding. Will add more posts over time."
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/blog1.png',
									description: 'blog homepage',
									alt: 'blog homepage'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/blog3.png',
									description: 'example blog post content',
									alt: 'blog content'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/blog4.png',
									description: 'tags and navigation',
									alt: 'tags and navigation'
								}
							]}
							logos={[
								{ name: 'Next.js', url: Next },
								{ name: 'Typescript', url: Typescript },
								{ name: 'Tailwind', url: Tailwind },
								{ name: 'Markdown', url: Markdown }
							]}
							link="https://www.radiantpine-devblog.com/"
							testPlan=""
						/>
					</div>
				</div>
				<div className="mb-16">
					<div className="bg-zinc-800 w-[90%] md:w-[70% lg:w-[60%] mx-auto h-10 pt-1 rounded-full overflow-hidden">
						<div className="border-b-2 border-amber-600 relative w-[95%] mx-auto mb-8">
							<h2 className="sans-font text-2xl font-bold bg-zinc-800 text-amber-600 text-center mx-auto -mb-4 w-fit px-4">
								Legacy Projects
							</h2>
						</div>
					</div>
					<div
						id="older-projects-container"
						className="flex flex-row gap-8 flex-wrap md:max-w-[1600px] mx-auto justify-center"
					>
						<Project
							title="Cedaring VR Art Showcase"
							description="Learning ThreeJS and 3D web development basics in order to display artwork created in VR and create more dynamic and interesting web experiences"
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Art1.png',
									description: 'Cedaring art scenes',
									alt: 'Cedaring art scenes'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Art2.png',
									description: 'art modal',
									alt: 'art modal'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/Art3.png',
									description: 'cedaring homepage',
									alt: 'Cedaring homepage'
								}
							]}
							logos={[
								{ name: 'React', url: ReactJS },
								{ name: 'ThreeJS', url: ThreeJs },
								{ name: 'Playwright', url: Playwright },
								{ name: 'S3', url: S3 }
							]}
							link="https://d2ubvddn7k4zah.cloudfront.net/"
							testPlan=""
						/>

						<Project
							title="Raspberry Pi time lapse camera"
							description="Using a Raspberry Pi to take timelapse pictures, uploading pictures to S3 then running Lambda functions to process pictures. Final output is displayed in an amplify website. Build for practice with some basic AWS cloud architecture."
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/piCamera2.png',
									description: 'camera setup',
									alt: 'camera setup'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/timelapse1.png',
									description: 'landing page for website',
									alt: 'website landing page'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/timeLapse3.png',
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
							testPlan=""
						/>

						<Project
							title="React Component Practice"
							description="Building commonly used and interesting web components for practice with React, Typescript, and unit testsing."
							pictures={[
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/RC1.png',
									description: 'examples of react components',
									alt: 'example image'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/RC2.png',
									description: 'examples of react components',
									alt: 'example image'
								},
								{
									url: 'https://mray-dev-resources.s3.us-east-2.amazonaws.com/portfolio/RC3.png',
									description: 'examples of react components',
									alt: 'example image'
								}
							]}
							logos={[
								{ name: 'React', url: ReactJS },
								{ name: 'Tailwind', url: Tailwind },
								{ name: 'Typescript', url: Typescript },
								{ name: 'Jest', url: Jest }
							]}
							link="https://main.d1x2x77vkbyrf2.amplifyapp.com/"
							testPlan=""
						/>
					</div>
				</div>
			</div>
		</>
	)
}

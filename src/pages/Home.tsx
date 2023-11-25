import Profile from '../components/Profile'
import Certifications from '../components/Certifications'
import self from '../assets/self.png'

export default function HomePage() {
	return (
		<div>
			<div className="background pt-[200px] lg:pt-[350px] flex flex-col">
				<Profile title="MATT RAY" subTitle="Web Developer & QA Automation Engineer" img={self} />
				<Certifications />
			</div>
			<div className="bg-zinc-900 pt-12 pb-6 lg:pb-24">
				<div className="border-b-2 border-amber-600 relative w-3/4 mx-auto">
					<h3 className="text-amber-600 w-[200px] bg-zinc-900 text-2xl -mb-4 text-center top-20 mx-auto sans-font">
						About Myself
					</h3>
				</div>
				<div className="flex flex-col lg:flex-row lg:gap-6 text-white lg:px-2 lg:max-w-[1600px] mx-auto lg:pt-12 px-4 pt-12">
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">Programming background</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							I Started with a casual interest in web development back in 2014. Most of the programming I
							have done over the years is self taught following videos and tutorials through online
							learning resources. I did go through a coding bootcamp back in 2015 for full stack
							development. After that, I worked as a QA engineer for several years writing automation test
							suites and performing testing on numerous web applications. As I progress, I would like to
							transition out of QA testing and back into development and creating features and
							applications.
						</p>
					</div>
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">Hobbies and personal life</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							Growing up and living in Colorado has brought me a great appreciation for nature and the
							outdoors. I try to find a good balance between technology/computer work and spending time
							outside. My main outdoor hobby is rock climbing. It has been a big part of my life for many
							years. I have spent a lot of time traveling and climbing around the western US. Aside from
							climbing, I also started to get into mountain biking and nordic skiing. Learning new
							activities has been a fun experience.
						</p>
					</div>
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">Future Plans and projects</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							I plan to expand upon my current projects and build more side projects occasionally in my
							free time. For the most part, I want to continue down the path of cloud development on AWS.
							Building out projects that leverage and combine different AWS services as I also pursue more
							AWS certifications.
						</p>
						<p className="indent-4 mt-2">
							Aside from cloud development, I am completely enamoured by 3D web development, ThreeJS, and
							creative coding. Building rich interactive 3D experiences for the web is a ton of fun and
							extremely dynamic and unique. In the future I plan on diving more into ThreeJs, React3Fiber,
							and creating more artistic stuff for the web for the fun of it.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

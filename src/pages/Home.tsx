import Profile from '../components/Profile'
import Certifications from '../components/Certifications'
import self from '../assets/self.png'
import Skills from '../components/Skills'
import Books from '../components/Books'

export default function HomePage() {
	return (
		<div>
			<div className="background pt-[200px] lg:pt-[350px] flex flex-col">
				<Profile
					title="MATT RAY"
					subTitle="Web Developer & QA Automation Engineer"
					email="mattray.dev@gmail.com"
					img={self}
				/>
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
						<h3 className="font-title font-bold text-xl text-amber-600">Programming Background</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							I Started with a casual interest in web development back in 2014. Most of the programming I
							have done over the years is self taught following videos and tutorials through online
							learning resources. I did go through a coding bootcamp back in 2015 for full stack
							development, but found it to be lacking in content and detailed explanations. After that, I
							worked as a QA engineer for several years writing automation test suites and performing
							testing on web applications for a variety of different companies.
						</p>
						<p className="indent-4 mt-2">
							As I progress, I would like to deepen my understanding of QA testing as well as diving into
							feature creation and contributing to application development in a more meaningful way. I
							value the testing mindset that I have gained and want to apply the focus on quality to other
							aspects of the development process. I enjoy the entire process of application development
							and each of the unique roles surrounding it.
						</p>
					</div>
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">Hobbies and Free Time</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							Growing up and living in Colorado has brought me a great appreciation for nature and the
							outdoors. I try to find a good balance between technology/computer work and spending time
							outside. My main outdoor hobby is rock climbing. It has been a big part of my life for many
							years. I have spent a lot of time traveling and climbing around the western US. Aside from
							rock climbing, I also started to get into mountain biking and nordic skiing. Learning new
							activities has been a fun experience.
						</p>
					</div>
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">Future Plans and Projects</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							I plan to expand upon my current projects and also build more side projects occasionally in
							my free time. For the most part, I want to continue down the path of cloud development on
							AWS. I also plan on trying out new tech stacks, more modern development and testing
							frameworks, and learning about new ways to build applications. Over the next couple years, I
							will obtain more AWS certifications as well.
						</p>
						<p className="indent-4 mt-2">
							Aside from cloud development, I am completely enamoured by 3D web development, ThreeJS, and
							creative coding. Building rich interactive 3D experiences for the web is a ton of fun and
							extremely dynamic and unique. If I have time in the future, I plan on diving more into
							ThreeJS, React3Fiber, and creating more artistic stuff for the fun of it.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row lg:gap-6 text-white lg:px-2 lg:max-w-[1600px] mx-auto lg:pt-12 px-4 pt-12">
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">Personal Life</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							I currently live in western Colorado in order to be closer to family. Being able to assist
							aging family members is an important aspect of my life right now. Living in this area also
							allows me to spend time outside with my dog, going on hikes and enjoying the outdoors.
							Having good high speed internet and a quiet work environment allows me to perform remote
							work from here while remaining more efficient and productive.
						</p>
						<p className="indent-4 mt-2"></p>
					</div>
					<div className="p-3 rounded-lg mt-8 lg:w-1/3">
						<h3 className="font-title font-bold text-xl text-amber-600">QA philosophy</h3>
						<hr className="line-break" />
						<p className="mt-4 indent-4">
							I really enjoy many different aspects of software testing. My aim with my career is to try
							and deeply understand applications and how they work in order to understand the issues that
							are highlighted from testing. This helps me in becoming a much more valuable QA engineer for
							any team that I work with. I also would like to branch out in to more back-end data based
							testing and cloud architecture testing.
						</p>
					</div>
				</div>
			</div>
			<Skills />
			<Books />
		</div>
	)
}

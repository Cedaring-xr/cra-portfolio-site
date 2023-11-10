import React from 'react'

const Header = () => {
	return (
		<>
			<div
				id="header-container"
				className="transparent flex flex-row h-[90px] w-ful z-10 sans-font absolute top-0"
			>
				<div className="bg-stone-900 m-1 p-1 rounded-lg opacity-95">
					<a href="/">
						<h1 className="text-3xl text-white">Matt Ray Dev Portfolio</h1>
						<h4 className="text-white mx-2 serif-font">
							Showcase of personal side projects and coding work
						</h4>
					</a>
				</div>

				<nav className="m-4 ">
					<ul className="flex flex-row gap-6 text-amber-600 border-b-2 border-amber-600">
						<li>
							<button className="">
								<a href="/projects" className="text-2xl font-sans font-bold uppercase">
									Projects
								</a>
							</button>
						</li>
						<li>
							<button className="">
								<a href="/projects" className="text-2xl font-sans font-bold uppercase">
									Resume
								</a>
							</button>
						</li>
						<li>
							<button className="">
								<a href="/projects" className="text-2xl font-sans font-bold uppercase">
									GitHub
								</a>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header

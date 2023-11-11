import React, { useEffect, useState } from 'react'

const Header = () => {
	const [isSticky, setSticky] = useState(false)

	const handleScroll = () => {
		const offset = window.scrollY

		if (offset > 0) {
			setSticky(true)
		} else {
			setSticky(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const headerClass = isSticky ? 'sticky bg-zinc-900 ease-in-out' : ''

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row md-gap-[200px] lg:gap-[400px] h-[60px] w-full z-10 sans-font absolute top-0 ${headerClass}`}
		>
			<div className="m-1 p-1 rounded-lg opacity-95">
				<a href="/">
					<h1 className="text-5xl text-black font-bold mt-12 ml-6">Matt Ray Dev Portfolio</h1>
					<h4 className="text-black mx-2 serif-font">Showcase of personal side projects and coding work</h4>
				</a>
			</div>
			<nav className="m-8">
				<ul className="flex flex-row lg:gap-20 text-amber-600">
					<li>
						<button className="">
							<a
								href="/projects"
								className="text-3xl font-sans font-bold uppercase underline decoration-zinc-900"
							>
								Projects
							</a>
						</button>
					</li>
					<li>
						<button className="">
							<a
								href="/projects"
								className="text-3xl font-sans font-bold uppercase underline decoration-zinc-900"
							>
								Resume
							</a>
						</button>
					</li>
					<li>
						<button className="">
							<a
								href="/projects"
								className="text-3xl font-sans font-bold uppercase underline decoration-zinc-900"
							>
								GitHub
							</a>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header

import React, { useEffect, useState } from 'react'

const Header = () => {
	const [isSticky, setSticky] = useState(false)

	const handleScroll = () => {
		const offset = window.scrollY

		if (offset > 180) {
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

	const stickyHeader = isSticky && 'sticky bg-zinc-900 transition ease-in-out duration-500  -mt-16'
	const stickyTitle = isSticky && 'mt-3 text-white text-2xl lg:text-[2.1rem]'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-3'
	const stickyButton = isSticky && 'border-none'

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row justify-between h-[60px] w-full z-10 sans-font absolute top-0 ${stickyHeader}`}
		>
			<div className="min-w-[400px]">
				<a href="/">
					<h1 className={`text-3xl lg:text-5xl text-black font-bold mt-12 ml-6 ${stickyTitle}`}>
						Matt Ray Dev Portfolio
					</h1>
					<h4 className={`text-black text-sm lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}>
						Showcase of personal side projects and coding work
					</h4>
				</a>
			</div>
			<nav className={`my-16 md:mr-24 lg:mr-24 xl:mr-48 ${stickyNav}`}>
				<ul className="flex flex-row gap-12 lg:gap-20 text-amber-600">
					<li>
						<button className={`border-b-2 border-black ${stickyButton}`}>
							<a
								href="/projects"
								className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
							>
								Projects
							</a>
						</button>
					</li>
					<li>
						<button className={`border-b-2 border-black ${stickyButton}`}>
							<a
								href="/resume"
								className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
							>
								Resume
							</a>
						</button>
					</li>
					<li>
						<button className={`border-b-2 border-black ${stickyButton}`}>
							<a
								href="https://github.com/Cedaring-xr"
								target="_blank"
								className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
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

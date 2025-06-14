import { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

type SizeProps = {
	width: number
	height: number
}

const Header = () => {
	const [isSticky, setSticky] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [size, setSize] = useState<SizeProps>({ width: window.innerWidth, height: window.innerHeight })
	const breakpoint = 764

	const menuToggleOpen = () => {
		document.body.classList.toggle('header-menu-open')
		setMenuOpen((open) => !open)
	}

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

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [size.width])

	const stickyHeader = isSticky && 'sticky bg-zinc-950 transition ease-in-out duration-500  -mt-16'
	const stickyTitle = isSticky && 'mt-3 text-white text-2xl lg:text-[2.1rem]'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-3'
	const stickyButton = isSticky && 'border-none'
	const stickyMobile = isSticky && '-mt-4 md:-mr-24'

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row justify-between h-[60px] w-full z-10  sans-font absolute top-0 ${stickyHeader}`}
		>
			<div className="min-w-[250px]">
				<a href="/">
					<h1 className={`text-2xl md:text-3xl lg:text-5xl text-black font-bold mt-12 ml-6 ${stickyTitle}`}>
						Matt Ray Dev Portfolio
					</h1>
					<h4
						className={`text-black text-sm w-2/3 md:w-full lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}
					>
						Showcase of personal side projects and coding work
					</h4>
				</a>
			</div>
			<nav className={`my-8 md:mr-24 lg:mr-24 xl:mr-36 ${stickyNav}`}>
				{size.width < breakpoint ? (
					<>
						<BiMenuAltRight
							className={`text-7xl text-amber-600 -mt-5 ${stickyMobile}`}
							onClick={menuToggleOpen}
						/>
						{menuOpen && (
							<div className="fixed bg-stone-700 text-white w-screen left-0 top-0 h-screen pt-6">
								<a href="/">
									<h1 className={`text-2xl text-amber-600 font-bold`}>Matt Ray Dev Portfolio</h1>
								</a>
								<ul className="flex flex-col justify-center items-center text-4xl gap-6">
									<li>
										<AiOutlineClose
											onClick={menuToggleOpen}
											className="absolute right-10 hover:text-amber-600 top-6"
										/>
									</li>
									<li className="hover:text-amber-600">
										<button>
											<a href="/projects" className="">
												Projects
											</a>
										</button>
									</li>
									<li className="hover:text-amber-600">
										<button>
											<a href="/resume" className="">
												Resume
											</a>
										</button>
									</li>
									<li className="hover:text-amber-600">
										<button>
											<a
												href="https://github.com/Cedaring-xr"
												target="_blank"
												rel="noreferrer"
												className=""
											>
												GitHub
											</a>
										</button>
									</li>
								</ul>
							</div>
						)}
					</>
				) : (
					<ul className="flex flex-row gap-12 lg:gap-16 text-amber-600">
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/projects"
									className="text-xl md:text-2xl font-sans font-bold uppercase decoration-zinc-900"
								>
									Projects
								</a>
							</button>
						</li>
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/resume"
									className="text-xl md:text-2xl font-sans font-bold uppercase decoration-zinc-900"
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
									rel="noreferrer"
									className="text-xl md:text-2xl font-sans font-bold uppercase decoration-zinc-900"
								>
									GitHub
								</a>
							</button>
						</li>
					</ul>
				)}
			</nav>
		</div>
	)
}

export default Header

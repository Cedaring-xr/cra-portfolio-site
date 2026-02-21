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
	const [isClosing, setIsClosing] = useState(false)
	const [size, setSize] = useState<SizeProps>({ width: window.innerWidth, height: window.innerHeight })
	const breakpoint = 764

	const menuToggleOpen = () => {
		if (menuOpen) {
			// Start closing animation
			setIsClosing(true)
			setTimeout(() => {
				setMenuOpen(false)
				setIsClosing(false)
				document.body.classList.remove('header-menu-open')
			}, 300) // Match animation duration
		} else {
			// Open menu
			setMenuOpen(true)
			document.body.classList.add('header-menu-open')
		}
	}

	const handleScroll = () => {
		const offset = window.scrollY

		if (offset > 100) {
			setSticky(true)
		} else if (offset < 30) {
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

	const stickyHeader = isSticky
		? 'fixed top-0 bg-zinc-950 shadow-lg h-[60px]'
		: 'absolute top-0 bg-white/80 backdrop-blur-sm h-auto'
	const stickyTitle = isSticky && '!mt-2 text-white text-2xl lg:text-[2.1rem]'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-0'
	const stickyButton = isSticky && 'border-none'
	const stickyMobile = isSticky && '-mt-6 md:-mr-24'
	const stickyLinkHover = isSticky ? 'hover:!text-white' : 'hover:text-zinc-700'

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row justify-between w-full z-50 sans-font transition ease-in-out duration-500 ${stickyHeader}`}
		>
			<div className="min-w-[250px]">
				<a href="/">
					<h1
						className={`text-2xl md:text-3xl lg:text-4xl text-black font-bold mt-4 md:mt-8 ml-6 ${stickyTitle}`}
					>
						Matt Ray Dev Portfolio
					</h1>
					<h2
						className={`text-black text-sm w-2/3 md:w-full lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}
					>
						Showcase of personal side projects and coding work
					</h2>
				</a>
			</div>
			<nav className={`my-4 ${stickyNav}`}>
				{size.width < breakpoint ? (
					<div className="mr-4">
						<button
							onClick={menuToggleOpen}
							className="min-w-[44px] min-h-[44px] flex items-center justify-center -mt-5"
							aria-label="Open navigation menu"
						>
							<BiMenuAltRight className={`text-6xl text-amber-600 ${stickyMobile}`} />
						</button>
						{menuOpen && (
							<div
								className={`fixed bg-stone-700 text-white w-full left-0 top-0 h-screen pt-4 overflow-x-hidden ${isClosing ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}
							>
								<div className="flex justify-between items-center px-4 mb-12">
									<a href="/">
										<h1 className={`text-xl sm:text-2xl text-amber-500 font-bold`}>
											Matt Ray Dev Portfolio
										</h1>
									</a>
									<button
										onClick={menuToggleOpen}
										className="min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-amber-600 flex-shrink-0"
										aria-label="Close navigation menu"
									>
										<AiOutlineClose className="text-3xl" />
									</button>
								</div>
								<ul className="flex flex-col justify-center items-center text-3xl gap-4">
									<li className="mobile-menu-item w-full flex justify-center">
										<a
											href="/projects"
											className="hover:text-amber-600 min-h-[44px] min-w-[44px] flex items-center justify-center px-8 py-3"
										>
											Projects
										</a>
									</li>
									<li className="mobile-menu-item w-full flex justify-center">
										<a
											href="/resume"
											className="hover:text-amber-600 min-h-[44px] min-w-[44px] flex items-center justify-center px-8 py-3"
										>
											Resume
										</a>
									</li>
									<li className="mobile-menu-item w-full flex justify-center">
										<a
											href="https://github.com/Cedaring-xr"
											target="_blank"
											rel="noreferrer"
											className="hover:text-amber-600 min-h-[44px] min-w-[44px] flex items-center justify-center px-8 py-3"
										>
											GitHub
										</a>
									</li>
								</ul>
							</div>
						)}
					</div>
				) : (
					<div className="mr-24 lg:mr-24 xl:mr-36">
						<ul className="flex flex-row gap-8 lg:gap-12 text-amber-600">
							<li>
								<a
									href="/projects"
									className={`px-6 py-3 min-h-[44px] flex items-center decoration-zinc-900 ${stickyLinkHover} transition shadow hover:shadow-xl border-b-2 border-black text-xl md:text-2xl font-sans font-bold uppercase ${stickyButton}`}
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="/resume"
									className={`px-6 py-3 min-h-[44px] flex items-center border-b-2 border-black decoration-zinc-900 ${stickyLinkHover} transition shadow hover:shadow-xl text-xl md:text-2xl font-sans font-bold uppercase ${stickyButton}`}
								>
									Resume
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Cedaring-xr"
									target="_blank"
									rel="noreferrer"
									className={`px-6 py-3 min-h-[44px] flex items-center border-b-2 border-black decoration-zinc-900 ${stickyLinkHover} transition shadow hover:shadow-xl text-xl md:text-2xl font-sans font-bold uppercase ${stickyButton}`}
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	)
}

export default Header

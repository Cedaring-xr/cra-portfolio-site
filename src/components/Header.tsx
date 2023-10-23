import React from 'react'

const Header = () => {
	return (
		<>
			<div
				id="header-container"
				className="bg-gradient-to-b from-stone-700 from-50% flex flex-row h-[100px] md:bg-gradient-to-r md:from-10%"
			>
				<a href="/">
					<h1 className="text-3xl font-display text-white my-4 mx-2">Matt Ray Dev Portfolio</h1>
				</a>
				{/* <nav>
					<ul>
						<li>
							<button className="p-2 m-4 bg-emerald-700 text-white rounded-full w-[200px]">
								<a href="/projects" className="text-2xl font-display">
									Projects
								</a>
							</button>
						</li>
					</ul>
				</nav> */}
			</div>
		</>
	)
}

export default Header

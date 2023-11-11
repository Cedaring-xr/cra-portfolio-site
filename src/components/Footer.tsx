import React from 'react'

type FooterProps = {
	date: string
}

const Footer: React.FC<FooterProps> = ({ date }) => {
	return (
		<div className="text-white bg-stone-950 flex justify-between px-[5px] sm:px-2 md:px-8 text-sm md:text-base py-1 shadow-lg">
			<span>Created by: Matt Ray</span>
			<span>last updated: {date}</span>
		</div>
	)
}

export default Footer

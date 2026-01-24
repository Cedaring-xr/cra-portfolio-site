import React from 'react'

type FooterProps = {
	date: string
}

const Footer: React.FC<FooterProps> = ({ date }) => {
	return (
		<div className=" bg-stone-300 flex justify-between px-[5px] sm:px-2 md:px-8 text-xs md:text-sm py-1 shadow-lg text-black">
			<span>MR &#169; 2025</span>
			<span>last updated: {date}</span>
		</div>
	)
}

export default Footer

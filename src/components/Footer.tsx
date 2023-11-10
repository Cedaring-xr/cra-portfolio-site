import React from 'react'

type FooterProps = {
	date: string
}

const Footer: React.FC<FooterProps> = ({ date }) => {
	return (
		<div className="bg-stone-900 text-white flex justify-between px-8 py-1">
			<span>Created by Matt Ray</span>
			<span>last updated: {date}</span>
		</div>
	)
}

export default Footer

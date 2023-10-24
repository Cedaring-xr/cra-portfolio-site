import React from 'react'

type FooterProps = {
	date: string
}

const Footer: React.FC<FooterProps> = ({ date }) => {
	return (
		<>
			<div className="bg-slate-800 text-white">
				<span>last updated: {date}</span>
			</div>
		</>
	)
}

export default Footer

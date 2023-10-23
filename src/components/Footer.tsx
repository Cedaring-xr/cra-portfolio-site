import React from 'react'

type Props = {
	data: string
}

const Footer = ({ date }) => {
	return (
		<>
			<div className="bg-slate-800 text-white">
				<span>last updated: {date}</span>
			</div>
		</>
	)
}

export default Footer

import { useState } from 'react'

import CCP from '../assets/icons/CCPtransparent.png'
import SAA from '../assets/icons/SAAtransparent.png'

const Certifications = () => {
	const [modalopen, setModalOpen] = useState(false)

	const handleModalOpen = () => {
		console.log('open modal')
		setModalOpen(true)
	}

	const handleModalClose = () => {
		console.log('close modal')
		setModalOpen(false)
	}

	return (
		<div className="bg-zinc-700 w-[500px] h-[500px] quarter-circle text-white relative left-full -translate-x-[500px] pr-4 border-slate-500 border-t-4">
			<h2 className="text-2xl ml-[150px] mt-[220px] sans-font text-amber-600">Current Earned Certifications</h2>
			<hr className="line-break w-2/3 ml-[150px]" />
			<div className="flex flex-row mt-8 justify-end">
				<span className="font-title text-xl m-2 mt-4" onClick={() => handleModalOpen}>
					AWS Cloud Practitioner
				</span>
				<img src={CCP} alt="Cloud Practitioner icon" className="w-[60px] h-[60px]" />
			</div>
			<div className="flex flex-row mt-6 justify-end">
				<span className="font-title text-xl m-2 mt-4" onClick={() => handleModalOpen}>
					AWS Solutions Architect Associate
				</span>
				<img src={SAA} alt="Solutions Architect Associate icon" className="max-w-[60px] h-[60px] aspect-auto" />
			</div>
		</div>
	)
}

export default Certifications

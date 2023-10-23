import { useState } from 'react'

import CCP from '/public/icons/CCP.png'
import SAA from '/public/icons/SAA.png'

function Certifications() {
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
		<div>
			<h2 className="font-title font-2xl">Current Earned Certifications</h2>
			<div className="flex flex-row">
				<span className="font-title text-3xl m-2" onClick={() => handleModalOpen}>
					AWS Cloud Practitioner
				</span>
				<img src={CCP} alt="Cloud Practitioner icon" className="w-[50px]" />
			</div>
			<div className="flex flex-row">
				<span className="font-title text-3xl m-2" onClick={() => handleModalOpen}>
					AWS Solutions Architect Associate
				</span>
				<img src={SAA} alt="Solutions Architect Associate icon" className="w-[50px]" />
			</div>
		</div>
	)
}

export default Certifications

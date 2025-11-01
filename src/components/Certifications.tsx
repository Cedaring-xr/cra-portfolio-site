import CCP from '../assets/icons/CCPtransparent.png'
import SAA from '../assets/icons/SAAtransparent.png'
import DA from '../assets/icons/DAtransparent.png'

const Certifications = () => {
	return (
		<div className="bg-zinc-700 w-[500px] h-[500px] quarter-circle text-white relative left-full -translate-x-[500px] pr-4 border-slate-500 border-t-4">
			<h2 className="text-2xl ml-[150px] mt-[200px] sans-font text-amber-600">Current Earned Certifications</h2>
			<hr className="line-break w-2/3 ml-[150px]" />
			<div className="flex flex-row mt-4 justify-end">
				<p className="font-title text-xl m-2 mt-4">AWS Cloud Practitioner</p>
				<img src={CCP} alt="Cloud Practitioner icon" className="w-[60px] h-[60px]" />
			</div>
			<div className="flex flex-row mt-6 justify-end">
				<p className="font-title text-xl m-2 mt-4">AWS Solutions Architect Associate</p>
				<img src={SAA} alt="Solutions Architect Associate icon" className="max-w-[60px] h-[60px] aspect-auto" />
			</div>
			<div className="flex flex-row mt-6 justify-end">
				<p className="font-title text-xl m-2 mt-4">
					AWS Developer Associate: <span className="text-emerald-500">In Progress</span>
				</p>
				<img src={DA} alt="Solutions Architect Associate icon" className="max-w-[60px] h-[60px] aspect-auto" />
			</div>
		</div>
	)
}

export default Certifications

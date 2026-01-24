import CCP from '../assets/icons/CCPtransparent.png'
import SAA from '../assets/icons/SAAtransparent.png'
import DA from '../assets/icons/DAtransparent.png'

const Certifications = () => {
	return (
		<div className="bg-zinc-700 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] quarter-circle text-white relative left-full -translate-x-[300px] sm:-translate-x-[400px] md:-translate-x-[500px] pr-2 sm:pr-4 border-slate-500 border-t-4">
			<h2 className="text-base sm:text-xl md:text-2xl ml-auto sm:ml-[100px] md:ml-[130px] mr-4 sm:mr-auto mt-[100px] sm:mt-[150px] md:mt-[180px] sans-font text-amber-600 leading-tight max-w-[200px] sm:max-w-none text-right sm:text-left">Current Earned Certifications</h2>
			<hr className="line-break ml-[60px] sm:ml-[100px] md:ml-[130px] mr-4 sm:mr-6 md:mr-8" />
			<div className="flex flex-row mt-4 sm:mt-6 md:mt-8 justify-end pr-1 sm:pr-2">
				<p className="font-title text-xs sm:text-sm md:text-base m-1 mt-2 sm:mt-3">AWS Cloud Practitioner</p>
				<img src={CCP} alt="Cloud Practitioner icon" className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]" />
			</div>
			<div className="flex flex-row mt-3 sm:mt-4 md:mt-6 justify-end pr-1 sm:pr-2">
				<p className="font-title text-xs sm:text-sm md:text-base m-1 mt-2 sm:mt-3">AWS Solutions Architect</p>
				<img src={SAA} alt="Solutions Architect Associate icon" className="max-w-[35px] h-[35px] sm:max-w-[45px] sm:h-[45px] md:max-w-[55px] md:h-[55px] aspect-auto" />
			</div>
			<div className="flex flex-row mt-3 sm:mt-4 md:mt-6 justify-end pr-1 sm:pr-2">
				<p className="font-title text-xs sm:text-sm md:text-base m-1 mt-2 sm:mt-3">
					AWS Developer: <span className="text-emerald-500">In Progress</span>
				</p>
				<img src={DA} alt="Solutions Architect Associate icon" className="max-w-[35px] h-[35px] sm:max-w-[45px] sm:h-[45px] md:max-w-[55px] md:h-[55px] aspect-auto" />
			</div>
		</div>
	)
}

export default Certifications

import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

type Skill = {
	name: string
	level: number // 1-5
}

const skillsData: Skill[] = [
	// Frontend Development
	{ name: 'HTML', level: 5 },
	{ name: 'CSS', level: 4 },
	{ name: 'JavaScript', level: 4 },
	{ name: 'TypeScript', level: 3 },
	{ name: 'React', level: 3 },
	{ name: 'Next.js', level: 4 },

	// Cloud & DevOps
	{ name: 'AWS', level: 4 },

	// Version Control
	{ name: 'Git', level: 5 },

	// Testing & QA
	{ name: 'Cypress', level: 5 },
	{ name: 'Playwright', level: 4 },
	{ name: 'WebdriverIO', level: 3 },
	{ name: 'Postman', level: 5 },
	{ name: 'axe-core', level: 2 },
	{ name: 'REST API testing', level: 4 },

	// Database
	{ name: 'SQL', level: 3 },

	// Project Management
	{ name: 'Agile Scrum', level: 5 },
	{ name: 'Jira', level: 5 }
]

const SkillRating: React.FC<{ level: number }> = ({ level }) => {
	return (
		<div className="flex gap-1">
			{[1, 2, 3, 4, 5].map((star) => (
				star <= level ? (
					<FaStar key={star} className="text-amber-600" />
				) : (
					<FaRegStar key={star} className="text-neutral-600" />
				)
			))}
		</div>
	)
}

function Skills() {
	return (
		<div className="bg-zinc-900 pt-12 pb-12">
			<div className="border-b-2 border-amber-600 relative w-3/4 mx-auto">
				<h3 className="text-amber-600 w-[200px] bg-zinc-900 text-2xl -mb-4 text-center top-20 mx-auto sans-font">
					Skills
				</h3>
			</div>
			<div className="max-w-[1200px] mx-auto px-4 pt-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillsData.map((skill) => (
						<div
							key={skill.name}
							className="flex justify-between items-center bg-neutral-800 p-3 rounded-lg"
						>
							<span className="text-white font-semibold">{skill.name}</span>
							<SkillRating level={skill.level} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills

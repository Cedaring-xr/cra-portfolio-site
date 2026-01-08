import React from 'react'

function ItteroTestPlan() {
	const sections = [
		{ id: 'overview', label: '1. Overview' },
		{ id: 'scope', label: '2. Scope' },
		{ id: 'approach', label: '3. Test Approach' },
		{ id: 'environments', label: '4. Environments' },
		{ id: 'testdata', label: '5. Test Data' },
		{ id: 'strategy', label: '6. Coverage Strategy' },
		{ id: 'roles', label: '8. Roles & Responsibilities' },
		{ id: 'risks', label: '10. Risks & Resolutions' },
		{ id: 'defects', label: '11. Defect Management' },
		{ id: 'deliverables', label: '12. Deliverables' },
		{ id: 'appendix', label: 'Review' }
	]

	const Row = ({ label, children }: any) => (
		<div className="grid gap-2 border-b border-dashed border-slate-700/60 py-3 md:grid-cols-[170px_1fr]">
			<div className="text-xs text-slate-100">{label}</div>
			<div className="text-sm text-slate-100">{children}</div>
		</div>
	)

	const Tag = ({ variant = 'neutral', children }: any) => {
		const styles =
			variant === 'ok'
				? 'text-emerald-300 border-emerald-300/30'
				: variant === 'warn'
				? 'text-amber-300 border-amber-300/30'
				: variant === 'bad'
				? 'text-rose-300 border-rose-300/30'
				: 'text-slate-400 border-slate-700'
		return (
			<span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${styles}`}>
				{children}
			</span>
		)
	}

	const Card = ({ id, title, hint, right, children }: any) => (
		<section id={id} className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-sm">
			<div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
				<h2 className="text-base font-semibold text-slate-50">{title}</h2>
				{right}
			</div>
			{hint ? <p className="mb-3 text-xs text-slate-50">{hint}</p> : null}
			{children}
		</section>
	)

	const Th = ({ children }: any) => (
		<th className="bg-slate-950/40 px-3 py-2 text-left text-xs font-semibold text-slate-100">{children}</th>
	)

	const Td = ({ children }: any) => (
		<td className="border-t border-slate-800 px-3 py-2 align-top text-sm text-slate-100">{children}</td>
	)

	const Table = ({ children }: any) => (
		<div className="mt-2 overflow-x-auto rounded-xl border border-slate-800">
			<table className="w-full border-collapse">{children}</table>
		</div>
	)

	return (
		<div className="min-h-screen text-slate-150 mt-[200px]">
			<h1 className="text-xl md:text-4xl text-slate-900 flex justify-center underline">Test Plan Document</h1>
			<div className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 pt-6 grid-cols-1 lg:grid-cols-[250px_1fr]">
				{/* TOC */}
				<aside className="lg:sticky lg:top-[76px] lg:self-start">
					<nav className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
						<div className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-50">
							Contents
						</div>
						<div className="space-y-1">
							{sections.map((s) => (
								<a
									key={s.id}
									href={`#${s.id}`}
									className="block rounded-xl border border-transparent px-3 py-2 text-sm text-slate-100 hover:border-sky-400/25 hover:bg-sky-400/10"
								>
									{s.label}
								</a>
							))}
						</div>
					</nav>
				</aside>

				{/* Main */}
				<main className="space-y-4">
					<Card id="overview" title="1. Overview" hint="What this test plan covers and why it exists.">
						<div className="divide-y divide-dashed divide-slate-900/60">
							<Row label="Purpose">
								Define test scope, approach, resources, and acceptance criteria for Ittero web
								application.
							</Row>
							<Row label="Stakeholders">Matt Ray (cedaring-xr github account)</Row>
							<Row label="Links" className="flex flex-col">
								<div>
									<span>Prod: </span>
									<a
										href="https://www.Ittero-app.com"
										rel="noreferer"
										target="blank"
										className="hover:text-blue-400"
									>
										https://www.Ittero-app.com
									</a>
								</div>
								<div>
									<span>Staging: </span>
									<a
										href="https://d2xc931vsyaq5.cloudfront.net/"
										rel="noreferer"
										target="blank"
										className="hover:text-blue-400"
									>
										https://d2xc931vsyaq5.cloudfront.net/
									</a>
								</div>
							</Row>
						</div>
					</Card>
					<Card id="scope" title="2. Scope" hint="Clear boundaries: what’s in, what’s out, and assumptions.">
						<div className="grid gap-3 md:grid-cols-2">
							<div>
								<h3 className="mb-1 text-sm font-semibold text-slate-50">In Scope</h3>
								<ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
									<li>User login / auth flows</li>
									<li>Core functionality: lists, journals, stats</li>
									<li>API endpoints: /lists, /tasks, /entry</li>
									<li>Analytics events: statistics generation and display</li>
								</ul>
							</div>
							<div>
								<h3 className="mb-1 text-sm font-semibold text-slate-50">Out of Scope</h3>
								<ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
									<li>User Alerts settings</li>
									<li>Monthly user email stats</li>
									<li>User email stats download</li>
								</ul>
							</div>
						</div>

						<div className="mt-3 rounded-xl border border-sky-400/25 bg-sky-400/10 p-3 text-sm">
							<div className="font-semibold text-slate-50">Assumptions:</div>
							<ul className="mt-1 list-disc space-y-1 pl-5 text-slate-100">
								<li>Test user creation for both admin and normal account</li>
								<li>AWS architecture setup and running correctly</li>
								<li>Test data is not conflicting with actual users</li>
							</ul>
						</div>
					</Card>

					<Card id="approach" title="3. Test Approach" hint="How we will test: levels, methods, and tooling.">
						<Table>
							<thead>
								<tr>
									<Th>Test Type</Th>
									<Th>Goal</Th>
									<Th>Owner</Th>
									<Th>Tooling</Th>
									<Th>Notes</Th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<Td>Smoke</Td>
									<Td>Validate critical paths quickly</Td>
									<Td>QA/dev</Td>
									<Td>Playwright + CI</Td>
									<Td>Run against each deploy to staging</Td>
								</tr>
								<tr>
									<Td>Regression</Td>
									<Td>Catch unintended breakage</Td>
									<Td>QA/dev</Td>
									<Td>Playwright</Td>
									<Td>Runs against each deploy to staging and prior to pushes</Td>
								</tr>
								<tr>
									<Td>Integration</Td>
									<Td>Validate sms notifications</Td>
									<Td>QA/dev</Td>
									<Td>manual</Td>
									<Td>Manual send through AWS architecture</Td>
								</tr>
								<tr>
									<Td>Accessibility</Td>
									<Td>Basic WCAG coverage</Td>
									<Td>QA/dev</Td>
									<Td>Lighthouse + manual</Td>
									<Td>Keyboard nav, contrast checks, alt labels, responsive text</Td>
								</tr>
								<tr>
									<Td>Performance</Td>
									<Td>Page load / API responsiveness</Td>
									<Td>QA/dev</Td>
									<Td>Lighthouse + AWS Lambda</Td>
									<Td>Scale to be determined</Td>
								</tr>
								<tr>
									<Td>Security</Td>
									<Td>Common web risks validation</Td>
									<Td>QA/dev</Td>
									<Td>manual</Td>
									<Td>Relying on AWS security measures</Td>
								</tr>
							</tbody>
						</Table>
						<div className="mt-3 rounded-xl border border-sky-400/25 bg-sky-400/10 p-3 text-sm">
							<h3 className="mt-4 text-sm font-semibold text-slate-50">Browsers / Platforms</h3>
							<ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-100">
								<li>Desktop: Chrome latest, Firefox latest, Safari latest</li>
								<li>Mobile: phone + tablet responsive design</li>
							</ul>
						</div>
					</Card>

					<Card id="environments" title="4. Environments" hint="Where tests run and how environments differ.">
						<Table>
							<thead>
								<tr>
									<Th>Environment</Th>
									<Th>URL / Access</Th>
									<Th>Build Source</Th>
									<Th>Data</Th>
									<Th>Notes</Th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<Td>Local</Td>
									<Td>localhost</Td>
									<Td>branch</Td>
									<Td>DynamoDB prod</Td>
									<Td>development</Td>
								</tr>
								<tr>
									<Td>Staging</Td>
									<Td>https://d2xc931vsyaq5.cloudfront.net/</Td>
									<Td>branch + AWS CodeBuild</Td>
									<Td>DynamoDB prod</Td>
									<Td>feature additions</Td>
								</tr>
								<tr>
									<Td>Production</Td>
									<Td>https://www.Ittero-app.com</Td>
									<Td>branch: main</Td>
									<Td>DynamoDB prod</Td>
									<Td>manual usage validation</Td>
								</tr>
							</tbody>
						</Table>
					</Card>

					<Card id="testdata" title="5. Test Data" hint="Accounts, roles, datasets, and reset strategy.">
						<div className="divide-y divide-dashed divide-slate-700/60">
							<Row label="Test Accounts">
								<ul className="list-disc space-y-1 pl-5">
									<li>Admin: mattray.maps@gmail.com</li>
									<li>Standard User: mattray.dev@gmail.com</li>
								</ul>
							</Row>
							<Row label="Permissions / Roles">All admin + user abilities</Row>
							<Row label="Data">Only one database because of cost restraints</Row>
						</div>
					</Card>

					<Card id="strategy" title="6. Coverage Strategy" hint="What matters most, key scenarios covered.">
						<h3 className="text-sm font-semibold text-slate-50">Critical User Journeys</h3>
						<ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-100">
							<li>Sign up → verify → login → first action</li>
							<li>Create → update → delete lists</li>
							<li>Create → update → delete tasks</li>
							<li>Create → view → review → journal entries</li>
							<li>Review → calculate journal stats</li>
							<li>Review → calculate tasks + lists stats</li>
							<li>Role-based access: permitted vs forbidden actions</li>
						</ul>
						<div className="mt-3 rounded-xl border border-sky-400/25 bg-sky-400/10 p-3 text-sm">
							<h3 className="mt-4 text-sm font-semibold text-slate-50">Test Case Inventory</h3>
							<ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-100">
								<li>Test cases detailed in repo under tests/test-cases/[file] markdown files</li>
							</ul>
						</div>
					</Card>
					<Card
						id="roles"
						title="8. Roles & Responsibilities"
						hint="Ownership of test creation and maintenance."
					>
						<Table>
							<thead>
								<tr>
									<Th>Role</Th>
									<Th>Name</Th>
									<Th>Responsibilities</Th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<Td>QA</Td>
									<Td>Matt Ray</Td>
									<Td>Plan, test creation, execution, bug identification</Td>
								</tr>
								<tr>
									<Td>Development</Td>
									<Td>Matt Ray</Td>
									<Td>Bug fixes, feature releases</Td>
								</tr>
							</tbody>
						</Table>
					</Card>
					<Card
						id="risks"
						title="10. Risks & Mitigations"
						hint="Potential for appliation state vulnerabilities"
					>
						<Table>
							<thead>
								<tr>
									<Th>Risk</Th>
									<Th>Impact</Th>
									<Th>Resolution</Th>
									<Th>Owner</Th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<Td>Unstable staging env</Td>
									<Td>very low</Td>
									<Td>commit rollback, architecture updates</Td>
									<Td>Matt Ray</Td>
								</tr>
								<tr>
									<Td>Unstable production env</Td>
									<Td>Moderate</Td>
									<Td>Roll back deploy to previous version</Td>
									<Td>Matt Ray</Td>
								</tr>
								<tr>
									<Td>User data compromised</Td>
									<Td>High</Td>
									<Td>Ensure encryption of data at rest and in transit</Td>
									<Td>Matt Ray</Td>
								</tr>
							</tbody>
						</Table>
					</Card>

					<Card
						id="defects"
						title="11. Defect Management"
						hint="How bugs are reported, triaged, and measured."
					>
						<div className="divide-y divide-dashed divide-slate-700/60">
							<Row label="Tracker">Sticky note cards</Row>
							<Row label="Severity Definitions">
								<ul className="list-disc space-y-1 pl-5">
									<li>None</li>
								</ul>
							</Row>
							<Row label="Bug Template">
								<ul className="list-disc space-y-1 pl-5">
									<li>None</li>
								</ul>
							</Row>
							<Row label="Triage Cadence">As time allows</Row>
						</div>
					</Card>

					<Card id="deliverables" title="12. Deliverables" hint="What you will produce as part of this plan.">
						<ul className="list-disc space-y-1 pl-5 text-sm text-slate-100">
							<li>Test plan (this document)</li>
							<li>Test cases: tracked in repo</li>
							<li>Test automation updates (as new features developed)</li>
							<li>Test execution (on feature release)</li>
							<li>Application quality consistency</li>
						</ul>
					</Card>
					<Card id="review" title="Review" hint="Update documentation if changes may occur.">
						<h3 className="text-sm font-semibold text-slate-50">A. Test Case Logs</h3>
						<ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-100">
							<li>Test Case documentation location may change</li>
							<li>Test Case logs need updated as features develop</li>
						</ul>

						<h3 className="mt-4 text-sm font-semibold text-slate-50">
							B. AWS architecture workflow changes
						</h3>
						<ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-100">
							<li>Data storage state and separation</li>
							<li>Alert and notification system expansion</li>
							<li>Review AWS architecture usage as budgeting allows</li>
						</ul>
					</Card>
				</main>
			</div>
		</div>
	)
}
export default ItteroTestPlan

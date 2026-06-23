'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Monitor, Users } from 'lucide-react';

const expectations = [
	{
		icon: Zap,
		title: 'Lightning talks',
		description: 'Tips, workflows, and real-world insights',
	},
	{
		icon: Monitor,
		title: 'Demos',
		description: 'Real projects built with AI tools',
	},
	{
		icon: Users,
		title: 'Hangout',
		description: 'Connect with builders and makers',
	},
];

const WhatToExpectSection: React.FC = () => {
	return (
		<motion.section
			id="expect"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<h2 className="text-2xl md:text-3xl font-bold text-cursor-text text-center mb-10">
				What to expect
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{expectations.map((item) => (
					<div
						key={item.title}
						className="flex flex-col items-center text-center p-6 rounded-lg border border-cursor-border bg-cursor-bg-dark/50"
					>
						<div className="p-3 rounded-full bg-philly-cta/15 border border-philly-cta/25 mb-4">
							<item.icon className="w-6 h-6 text-philly-cta" aria-hidden />
						</div>
						<h3 className="text-lg font-medium text-cursor-text mb-2">{item.title}</h3>
						<p className="text-sm text-cursor-text-muted">{item.description}</p>
					</div>
				))}
			</div>
			<p className="text-center text-cursor-text-muted text-sm">
				Beginner-friendly. <span className="whitespace-nowrap">Curious is enough.</span>
			</p>
		</motion.section>
	);
};

export default WhatToExpectSection;

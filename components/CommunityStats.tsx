'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
	{ value: '20+', label: 'Lightning talks' },
	{ value: '450+', label: 'Community members' },
];

const CommunityStats: React.FC = () => {
	return (
		<motion.section
			id="stats"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			className="mb-16 scroll-mt-20"
		>
			<div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className="flex flex-col items-center text-center p-6 rounded-lg border border-cursor-border bg-cursor-bg-dark/50"
					>
						<span className="text-4xl md:text-5xl font-bold text-philly-cta tabular-nums mb-1">
							{stat.value}
						</span>
						<span className="text-sm text-cursor-text-muted uppercase tracking-wider">
							{stat.label}
						</span>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default CommunityStats;

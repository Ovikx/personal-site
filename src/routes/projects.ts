export const projects: Project[] = [
	{
		title: 'Reaper',
		description:
			'A Chrome extension designed to keep you productive with gentle reminders of your mortality',
		techs: ['Preact', 'Vite', 'TailwindCSS', 'TypeScript', 'IndexedDB'],
		href: 'https://www.github.com/Ovikx/reaper'
	},
	{
		title: 'agile-store',
		description:
			'Streamlined typed IndexedDB operations with a store-centric interface and implicit transaction handling',
		techs: ['TypeScript', 'Jest'],
		href: 'https://github.com/Ovikx/agile-store'
	},
	{
		title: 'Exalt',
		description:
			'A text-based RPG Discord bot. Fight against unique enemies in PvE or duel your friends in real-time PvP using highly customizable equipment',
		techs: ['TypeScript', 'Eris', 'MongoDB', 'Node.js', 'Azure Functions'],
		href: 'https://github.com/Ovikx/exalt-public',
		imgUrl: 'exalt-logo-banner.png'
	},
	{
		title: 'Vector field particle simulator',
		description:
			'A particle simulator where force comes from a globally-defined vector field. Created with SDL2 bindings for Rust',
		techs: ['Rust', 'SDL2'],
		href: 'https://github.com/Ovikx/vec-field-particles',
		imgUrl: 'particles.png'
	},
	{
		title: 'expo-ink',
		description:
			"Modernizing Expo's local database ecosystem with a lightweight, type-safe, and Promise-based ORM for expo-sqlite",
		techs: ['TypeScript', 'React Native', 'Expo', 'SQLite', 'Jest'],
		href: 'https://github.com/Ovikx/expo-ink'
	},
	{
		title: 'PyTorch Checkpoint Manager',
		description:
			'A lightweight checkpoint manager for PyTorch models with support for automatic model saving and loading',
		techs: ['Python', 'PyTorch'],
		href: 'https://github.com/Ovikx/PyTorch-Checkpoint-Manager'
	}
];

export interface Project {
	title: string;
	description: string;
	techs: string[];
	href: string;
	imgUrl?: string;
}

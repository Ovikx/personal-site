import { projects, type Project } from './projects';
import { JSDOM } from 'jsdom';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const retrieved: Required<Project>[] = [];
	for (const project of projects) {
		if (!project.imgUrl) {
			try {
				const response = await fetch(project.href);
				const html = await response.text();
				const dom = new JSDOM(html);

				const imgUrl =
					dom.window.document.querySelector('meta[property="og:image"]')?.getAttribute('content') ??
					'';
				retrieved.push({ ...project, imgUrl: imgUrl });
			} catch (e) {
				console.log(`Failed to fetch ${project.href} with err: ${e}`);
			}
		} else {
			retrieved.push(project as Required<Project>);
		}
	}
	return {
		projects: retrieved
	};
}

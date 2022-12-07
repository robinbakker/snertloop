import { render } from 'preact';
import App from './app.js';

export async function prerender(data) {
	// Prerender your app with `preact-iso`.
	const result = await render(<App {...data} />);

	// Return the results back to WMR
	return {
		...result,
	};
}

render(<App />, document.body);

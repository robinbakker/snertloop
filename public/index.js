import { render } from 'preact';
import Routes from './routes';
import Map from './map';

function App() {
	return (
		<main>
			<fieldset>
				<input id="t16" type="checkbox" checked />
				<label for="t16">16km</label>
				<input id="t11" type="checkbox" checked />
				<label for="t11">11km</label>
				<input id="t5" type="checkbox" checked />
				<label for="t5">5km</label>
				<input id="tc" type="checkbox" checked />
				<label for="tc">Verkeersregelaar</label>
				<input id="t16km" type="checkbox" checked />
				<label for="t16km">16km labels</label>
			</fieldset>
			<div class="map-container">
				{/* <Map /> */}
				<img src="/assets/map.svg" alt="map" />
				<Routes />
			</div>
		</main>
	);
}

render(<App />, document.body);

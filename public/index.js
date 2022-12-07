import { render } from 'preact';
import Routes from './routes';
import Map from './map';

function App() {
	return (
		<main>
			<h1>Snertloop</h1>
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
			<aside>
				<h2>
					<label for="legend">Legenda</label>
				</h2>
				<input id="legend" type="checkbox" checked />
				<dl>
					<dt class="track track16">Rode lijn</dt>
					<dd>
						<label for="t16">Route 10 EM (16.1 km)</label>
					</dd>
					<dt class="track track11">Blauwe lijn</dt>
					<dd>
						<label for="t11">Route 11 km</label>
					</dd>
					<dt class="track track5">Groene lijn</dt>
					<dd>
						<label for="t5">Route 5 km</label>
					</dd>
					<dt>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							style="isolation:isolate"
							viewBox="0 0 10 10"
							width="10pt"
							height="10pt"
						>
							<circle
								vector-effect="non-scaling-stroke"
								cx="4.999999999999999"
								cy="4.999999999999999"
								r="3"
								fill="#fff"
								stroke-width="2"
								stroke="rgb(0,0,0)"
								stroke-linejoin="miter"
								stroke-linecap="square"
								stroke-miterlimit="3"
							/>
						</svg>
					</dt>
					<dd>Start/Finish</dd>
					<dt class="svg svg--tc">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							style="isolation:isolate"
							viewBox="0 0 10 10"
							width="10pt"
							height="10pt"
						>
							<defs>
								<clipPath id="_clipPath_4we1JPgjuo6K7oOrPic3p0dH17ZzqA8v">
									<rect width="10" height="10" />
								</clipPath>
							</defs>
							<g clip-path="url(#_clipPath_4we1JPgjuo6K7oOrPic3p0dH17ZzqA8v)">
								<g>
									<radialGradient
										id="_rgradient_0"
										fx="0.5"
										fy="0.5"
										cx="0.5"
										cy="0.5"
										r="0.5"
										gradientTransform="matrix(10.062,0,0,10.062,-0.031,-0.031)"
										gradientUnits="userSpaceOnUse"
									>
										<stop
											offset="0%"
											stop-opacity="1"
											style="stop-color:rgb(255,255,0)"
										/>
										<stop
											offset="99.16666666666667%"
											stop-opacity="1"
											style="stop-color:rgb(202,202,0)"
										/>
									</radialGradient>
									<mask id="_mask_vsE6NPYwaYugom64MXwAGD3uxi7MEbwI">
										<circle
											vector-effect="non-scaling-stroke"
											cx="4.999999999999999"
											cy="4.999999999999999"
											r="5.031249999999999"
											fill="white"
											stroke="none"
										/>
									</mask>
									<circle
										vector-effect="non-scaling-stroke"
										cx="4.999999999999999"
										cy="4.999999999999999"
										r="5.031249999999999"
										fill="url(#_rgradient_0)"
									/>
									<circle
										vector-effect="non-scaling-stroke"
										cx="4.999999999999999"
										cy="4.999999999999999"
										r="5.031249999999999"
										fill="url(#_rgradient_0)"
										mask="url(#_mask_vsE6NPYwaYugom64MXwAGD3uxi7MEbwI)"
										stroke-width="2"
										stroke="rgb(0,0,0)"
										stroke-linejoin="miter"
										stroke-linecap="square"
										stroke-miterlimit="3"
									/>
									<g clip-path="url(#_clipPath_QYmJmy2hQDfMMn5OLC07GiufOeX5nWZN)">
										<text
											transform="matrix(1,0,0,1,2.975,7.328)"
											style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;"
										>
											1
										</text>
									</g>
									<defs>
										<clipPath id="_clipPath_QYmJmy2hQDfMMn5OLC07GiufOeX5nWZN">
											<rect
												x="0"
												y="0"
												width="6"
												height="8.171"
												transform="matrix(1,0,0,1,2.688,0.915)"
											/>
										</clipPath>
									</defs>
								</g>
							</g>
						</svg>
					</dt>
					<dd>
						<label for="tc">Verkeersregelaar</label>
					</dd>
					<dt class="svg svg--km">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							style="isolation:isolate"
							viewBox="0 0 13 13"
							width="13pt"
							height="13pt"
						>
							<defs>
								<clipPath id="_clipPath_rfsl1tYdLnWZkwH93LYvYDJOvYSE5C76">
									<rect width="13" height="13" />
								</clipPath>
							</defs>
							<g clip-path="url(#_clipPath_rfsl1tYdLnWZkwH93LYvYDJOvYSE5C76)">
								<g>
									<rect
										x="2.578"
										y="2.578"
										width="7.843"
										height="7.843"
										transform="matrix(0.707,0.707,-0.707,0.707,6.5,-2.692)"
										fill="rgb(255,255,255)"
										vector-effect="non-scaling-stroke"
										stroke-width="1"
										stroke="rgb(255,25,25)"
										stroke-linejoin="miter"
										stroke-linecap="square"
										stroke-miterlimit="2"
									/>
									<g clip-path="url(#_clipPath_R1xuVRxyDeaOZ5f61MSFm1vOrGbxtdQN)">
										<text
											transform="matrix(1,0,0,1,4.506,8.796)"
											style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;"
										>
											1
										</text>
									</g>
									<defs>
										<clipPath id="_clipPath_R1xuVRxyDeaOZ5f61MSFm1vOrGbxtdQN">
											<rect
												x="0"
												y="0"
												width="6"
												height="8.171"
												transform="matrix(1,0,0,1,4.219,2.383)"
											/>
										</clipPath>
									</defs>
								</g>
							</g>
						</svg>
					</dt>
					<dd>
						<label for="t16km">Kilometerpunt (16,1 km)</label>
					</dd>
				</dl>
			</aside>
		</main>
	);
}

render(<App />, document.body);

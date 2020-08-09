<div id="weather" class="app-container weather" data-test="weather"><!-- Metric -->
<div class="app-dash metric-item" title="Scattered clouds" data-test="app-dash">
	<div class="metric-stat">
			<span class="icon icon-weather" data-icon="H" title="Scattered clouds"></span><span class="metric-stat-number" data-test="temperature">28</span><span class="weather-degree">°</span><span class="unit hide">c</span>
	</div>
	<div class="location metric-label data" data-test="location" title="Richmond Hill, Ontario, Canada">
		<span class="metric-label-name">Richmond Hill</span>
	</div>
	<span class="metric-message"></span>
</div>

<div class="app-wrapper nipple nipple-top-right">
	<div class="app weather-app ">

		<!-- Main weather area -->
		<section class="weather-current">

			<!-- Header -->
			<header class="weather-current-header">

				<div class="weather-current-location">
					<div class="weather-location">
						<span class="weather-location-name" title="Richmond Hill, Ontario, Canada" data-test="location-name">Richmond Hill</span>
						<i class="loading-icon"></i>
						<span class="weather-location-icon weather-location-edit" data-test="edit-icon"><i class="icon-edit"></i></span>
					</div>
					<div class="input-group current-location-group">
						<div class="input-wrapper">
							<input type="text" name="current-location" id="current-location" class="current-location" autocomplete="off" placeholder="Location" value="Richmond Hill" spellcheck="false" data-test="weather-location-search">
							<span class="icon-row">
								<span class="weather-location-icon weather-location-reset" title="Use your current location">
									<svg class="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4"><path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path></svg>
								</span>
								<i class="u--flex-center clear" data-test="clear-icon">
									<span class="icon-wrapper">
										<svg class="icon icon-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path></svg></span>
								</i>
							</span>
						</div>

						<div class="dropdown typeahead">
							<div class="searching">Searching<i>.</i><i>.</i><i>.</i></div>
							<ul class="dropdown-list location-dropdown-list" data-test="weather-location-results"></ul>
							<div class="not-found">No locations found.</div>
						</div>
					</div>

					<span class="weather-current-conditions">Scattered clouds</span>
				</div>

				<div class="more">
					<div class="icon-wrapper more-toggle" data-test="more">
						<svg class="icon icon-ellipsis more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg></div>
					<div class="dropdown more-dropdown">
						<ul class="dropdown-list">
							<li class="toggle-hourly has-toggle" data-test="toggle-hourly-button">
								Hourly forecast
								<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
							</li>
							<li class="toggle-details has-toggle" data-test="toggle-details-button">
								Extra weather info
								<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
							</li>
							<li class="line"></li>
							<li class="toggle-metric has-toggle" data-test="toggle-metrics-button">
								Metric units
								<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
							</li>
							<li class="weather-location-edit-menu" data-test="edit-dropdown">Edit location</li>
						</ul>
					</div>
				</div>
			</header>


			<div class="weather-current-temp-row">
				<!-- Main temp -->
				<div class="weather-current-temp-wrapper toggle-hourly" data-test="toggle-hourly-div">
					
					<span class="icon icon-weather weather-current-icon" data-icon="H" title="Scattered clouds"></span><span class="weather-current-temp">28°</span>
				</div>

				<!-- Main details -->
			</div>


			<!-- Extra weather info -->
		</section>



		<!-- 5-day advance forecast -->
		<section class="weather-row weather-forecast weather-forecast-daily active">
			<div class="weather-forecast-item weather-forecast-day" data-day="Saturday" data-test="forecast-day" title="Sky is clear">
				<div class="weather-forecast-label" data-test="forecast-day-label">Sat</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="B"></span>
				<span class="weather-forecast-high" data-test="forecast-high">28°</span><span class="weather-forecast-low">19°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Sunday" data-test="forecast-day" title="Moderate rain">
				<div class="weather-forecast-label" data-test="forecast-day-label">Sun</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="R"></span>
				<span class="weather-forecast-high" data-test="forecast-high">28°</span><span class="weather-forecast-low">20°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Monday" data-test="forecast-day" title="Sky is clear">
				<div class="weather-forecast-label" data-test="forecast-day-label">Mon</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="B"></span>
				<span class="weather-forecast-high" data-test="forecast-high">30°</span><span class="weather-forecast-low">21°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Tuesday" data-test="forecast-day" title="Moderate rain">
				<div class="weather-forecast-label" data-test="forecast-day-label">Tue</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="R"></span>
				<span class="weather-forecast-high" data-test="forecast-high">27°</span><span class="weather-forecast-low">18°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Wednesday" data-test="forecast-day" title="Overcast clouds">
				<div class="weather-forecast-label" data-test="forecast-day-label">Wed</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span class="weather-forecast-high" data-test="forecast-high">28°</span><span class="weather-forecast-low">18°</span>
			</div>
		</section>

		<div class="weather-empty empty">
			<div class="title">No location set</div>
			<button class="button find-location">
				<svg class="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4"><path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path></svg>
				<span>Find My Location</span>
			</button>
			<div class="description set-manual-location" data-test="manual-location">Enter location manually</div>
		</div>
		<div class="weather-backround-icon">
			<div>H</div>
		</div>


	</div>
</div>
</div>
</div>
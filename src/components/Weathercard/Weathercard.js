import React from 'react';
import './Weathercard.css';
import {    FaCloudRain  } from "react-icons/fa";


const Weathercard=()=>{
    return(
        <div className="container mainsection p-2">
		<div className="row p-0 m-0">
			
			
			
			<div className="col-md-6 col-sm-12 col-12">
				<div className="weather-part-third border">
					<div className="row">
						<div className="col-lg-12 weather-part-third-image">
							<img src="http://nicesnippets.com/demo/weather-image3.gif" />
							<div className="badge badge-danger weather-part-third-image-label pl-3 pr-3 pt-2 rounded-0">
								<p>20</p>
								<p>Aug</p>
							</div>
						</div>
						<div className="col-lg-12 col-12 text-center">
							<div className="weather-part-thitd-icon">
								<div className="row">
                                <div className="col-lg-4 col-4 p-2">
										<p className="pt-3"><FaCloudRain /></p>
										<p>30 <sup>C <sup><i className="fa fa-circle-o" aria-hidden="true"></i></sup></sup></p>
										<p>8pm</p>
									</div>
									<div className="col-lg-4 col-4 p-2">
										<p className="pt-3"><i className="fa fa-cloud" aria-hidden="true"></i></p>
										<p>30 <sup>C <sup><i className="fa fa-circle-o" aria-hidden="true"></i></sup></sup></p>
										<p>8pm</p>
									</div>
									<div className="col-lg-4 col-4 p-2">
										<p className="pt-3"><i className="fa fa-sun-o" aria-hidden="true"></i></p>
										<p>28<sup>C <sup><i className="fa fa-circle-o" aria-hidden="true"></i></sup></sup></p>
										<p>12am</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
};

export default Weathercard;
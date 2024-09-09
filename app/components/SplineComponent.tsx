"use client";

import React from "react";
// import { Application } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default function SplineComponent() {
	// const canvas = document.getElementById("canvas3d");
	// const app = new Application(canvas);
	// app.load("https://prod.spline.design/k6BYNF0Csgsm2kRa/scene.splinecode");

	return (
		<div className='absolute -z-10 flex justify-center items-center w-screen h-auto min-h-fit top-52 md:top-32 lg:top-2 opacity-70'>
			<Spline scene='https://prod.spline.design/YJyenoVQlTF6RJho/scene.splinecode' />
		</div>
	);
}

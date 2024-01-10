"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function TestComponent() {
	useEffect(() => {
		function updatePosition() {
			const element = document.getElementById("centeredComponent");

			if (element) {
				const screenWidth = window.innerWidth;
				const screenHeight = window.innerHeight;

				const elementWidth = element.offsetWidth;
				const elementHeight = element.offsetHeight;

				const left = (screenWidth - elementWidth) / 2;
				const top = (screenHeight - elementHeight) / 2;

				element.style.left = `${left}px`;
				element.style.top = `${top}px`;
			}
		}

		// Call the function on mount and window resize
		updatePosition();
		window.addEventListener("resize", updatePosition);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", updatePosition);
		};
	}, []);

	return (
		<div
			id='centeredComponent'
			className={cn(
				"fixed z-50 grid w-full max-w-lg gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state:closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state:closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state:closed]:slide-out-to-left-1/2 data-[state:closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950"
			)}>
			TEST COMPONENT
		</div>
	);
}

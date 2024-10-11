"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import VolumeSlider from "./VolumeSlider";
import { debounce } from "lodash"; // Add this import at the top of your file

const whiteKeys = [
	"C1",
	"D1",
	"E1",
	"F1",
	"G1",
	"A1",
	"B1",
	"C2",
	"D2",
	"E2",
	"F2",
	"G2",
	"A2",
	"B2",
	"C3",
	"D3",
	"E3",
	"F3",
	"G3",
	"A3",
	"B3",
	"C4",
	"D4",
	"E4",
	"F4",
	"G4",
	"A4",
	"B4",
];

const blackKeys = [
	"Db1",
	"Eb1",
	"Gb1",
	"Ab1", // Black keys in octave 1
	"Db2",
	"Eb2",
	"Gb2",
	"Ab2", // Black keys in octave 2
	"Db3",
	"Eb3",
	"Gb3",
	"Ab3", // Black keys in octave 3
	"Db4",
	"Eb4",
	"Gb4",
	"Ab4", // Black keys in octave 4
	"Db5",
	"Eb5",
	"Gb5",
	"Ab5", // Black keys in octave 5
];

// Mapping for keyboard keys
const keyMap = {
	// Octave 1 (C1 - B1)
	z: "C1",
	x: "Db1",
	c: "D1",
	v: "Eb1",
	b: "E1",
	n: "F1",
	m: "Gb1",
	",": "G1",
	".": "Ab1",
	"/": "A1",
	Shift: "Bb1", // Using B as Bb for compatibility with the list
	a: "B1",
	// Octave 2 (C2 - B2)
	s: "C2",
	d: "Db2",
	f: "D2",
	g: "Eb2",
	h: "E2",
	j: "F2",
	k: "Gb2",
	l: "G2",
	";": "Ab2",
	"'": "A2",
	Enter: "Bb2",
	q: "B2",
	// Octave 3 (C3 - B3)
	w: "C3",
	e: "Db3",
	r: "D3",
	t: "Eb3",
	y: "E3",
	u: "F3",
	i: "Gb3",
	o: "G3",
	p: "Ab3",
	"[": "A3",
	"]": "Bb3",
	// Octave 4 (C4 - B4)
	"\\": "C4",
	1: "Db4",
	2: "D4",
	3: "Eb4",
	4: "E4",
	5: "F4",
	6: "Gb4",
	7: "G4",
	8: "Ab4",
	9: "A4",
	0: "Bb4",
	"-": "B4",

	// Octave 5 (C5 - B5)
	"=": "C5",
	"`": "Db5",
	Tab: "D5",
};
``;
export default function Piano() {
	const [activeKeys, setActiveKeys] = useState([]);
	const [volume, setVolume] = useState(75); // Add a state for volume
	const [keyTimeouts, setKeyTimeouts] = useState({}); // Add a state for key timeouts
	const [enableMouseEvents, setEnableMouseEvents] = useState(false); // Add a state for enabling/disabling mouse events
	const [screenSize, setScreenSize] = useState(1025);
	const [numWhiteKeys, setNumWhiteKeys] = useState(whiteKeys.length);
	const [numBlackKeys, setNumBlackKeys] = useState(blackKeys.length);

	const lastPlayedRef = useRef({});
	const activeTouchesRef = useRef(new Set());

	// Function to play sound
	const playSound = useCallback(
		key => {
			const now = Date.now();
			if (now - (lastPlayedRef.current[key] || 0) > 50) {
				// 50ms debounce
				console.log(`Playing sound for key: ${key}`);
				const audio = new Audio(`/sounds/${key}.mp3`);
				audio.volume = volume / 100;
				audio.play().catch(error => {
					console.error(`Error playing sound for key ${key}:`, error);
				});
				lastPlayedRef.current[key] = now;
			}
		},
		[volume]
	);

	// Handle key down event
	const handleKeyDown = useCallback(
		event => {
			console.log(`Key pressed: ${event.key}`);
			const key = keyMap[event.key];
			if (key) {
				setActiveKeys(prev => [...new Set([...prev, key])]);
				playSound(key);
			}
		},
		[playSound]
	);

	// Handle key up event
	const handleKeyUp = useCallback(event => {
		const key = keyMap[event.key];
		if (key) {
			setActiveKeys(prev => prev.filter(k => k !== key));
		}
	}, []);

	const handleTouch = useCallback(
		(event, action) => {
			event.preventDefault();
			const touches = action === "end" ? event.changedTouches : event.touches;
			const newActiveKeys = new Set(activeKeys);

			if (action === "end") {
				// Remove ended touches
				for (let i = 0; i < touches.length; i++) {
					activeTouchesRef.current.delete(touches[i].identifier);
				}
			} else {
				// Process current touches
				for (let i = 0; i < touches.length; i++) {
					const touch = touches[i];
					const element = document.elementFromPoint(
						touch.clientX,
						touch.clientY
					);
					const key = element?.getAttribute("data-key");

					if (key) {
						if (!newActiveKeys.has(key)) {
							newActiveKeys.add(key);
							playSound(key);
						}
						activeTouchesRef.current.add(touch.identifier);
					}
				}
			}

			// Remove keys that are no longer touched
			activeKeys.forEach(key => {
				if (
					!Array.from(touches).some(touch => {
						const element = document.elementFromPoint(
							touch.clientX,
							touch.clientY
						);
						return element?.getAttribute("data-key") === key;
					})
				) {
					newActiveKeys.delete(key);
				}
			});

			setActiveKeys(Array.from(newActiveKeys));
		},
		[activeKeys, playSound]
	);

	// Mouse event handlers Like clicking on the piano
	const handleMouseEvent = useCallback(
		(key, isDown) => {
			if (isDown) {
				setActiveKeys(prev => {
					if (!prev.includes(key)) {
						playSound(key);
						return [...prev, key];
					}
					return prev;
				});
			} else {
				setActiveKeys(prev => prev.filter(k => k !== key));
			}
		},
		[playSound]
	);

	// New function to handle mouse hover events
	const handleMouseHoverEvent = useCallback(
		(key, isDown) => {
			if (enableMouseEvents) {
				handleMouseEvent(key, isDown);
			}
		},
		[enableMouseEvents, handleMouseEvent]
	);

	useEffect(() => {
		const touchStart = e => handleTouch(e, "start");
		const touchMove = e => handleTouch(e, "move");
		const touchEnd = e => handleTouch(e, "end");

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		window.addEventListener("touchstart", touchStart, { passive: false });
		window.addEventListener("touchmove", touchMove, { passive: false });
		window.addEventListener("touchend", touchEnd, { passive: false });

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
			window.removeEventListener("touchstart", touchStart);
			window.removeEventListener("touchmove", touchMove);
			window.removeEventListener("touchend", touchEnd);
		};
	}, [handleKeyDown, handleKeyUp, handleTouch]);

	useEffect(() => {
		const handleResize = debounce(() => {
			const width = window.innerWidth;
			setScreenSize(width);
			if (width < 1024) {
				setNumWhiteKeys(Math.ceil(whiteKeys.length / 2));
				setNumBlackKeys(Math.ceil(blackKeys.length / 2));
			} else {
				setNumWhiteKeys(whiteKeys.length);
				setNumBlackKeys(blackKeys.length);
			}
		}, 250);

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			handleResize.cancel();
		};
	}, []);

	// Get corresponding keyboard button for piano key
	const getKeyLabel = key => {
		return Object.keys(keyMap).find(k => keyMap[k] === key);
	};

	// Function to get black key offset
	const getBlackKeyOffset = index => {
		const desktopOffsets = [
			3.75, //
			7.25, //
			14.25, //
			17.75, //
			21.25, //
			28.25, //
			31.75, // ]
			38.75, // z
			42.25, // g
			45.5, // j
			52.5, // ;
			56, // ,
			63, // 2
			66.5, // 4
			70, // 7
			77, // 9
			80.5, // 0
			87.4, // -
			91, // 1
			94.5, // 3
			98, // 6

			// 21 Keys
			// repeat for every octave ??
		];
		const mobileOffsets = [
			6.25, // x
			13.25, // v
			27, // m
			34.25, // .
			41, // d
			55.25, // g // Eb2
			62, // k // Gb2
			76, // ; // Ab2
			83.25, // e // Db3
			90, // t // Eb3
			91, // r // Gb3
			92, // y // Ab3
			93, // u // Db4
			94, // i // Eb4
			95, // o // Gb4
			96, // p // Ab4
			97, // a // Db5
			98, // s // Eb5
			99, // n // Gb5
			99.25, // l // Ab5
			99.5, // h // Db6
			// 21 Keys
			// 10 Keys
		];

		if (screenSize >= 1024) {
			// Desktop screen size
			// console.log("Using desktop offsets"); // Debugging log
			return desktopOffsets[index % desktopOffsets.length];
		} else {
			// Mobile screen size
			// console.log("Using mobile offsets"); // Debugging log
			return mobileOffsets[index % mobileOffsets.length];
		}
	};

	return (
		<div className='flex flex-col justify-center items-center content-center h-screen w-screen pb-2 '>
			<h1 className='text-4xl lg:text-6xl text-center pb-4'>Piano App</h1>
			<div className='flex flex-col items-center mt-4 '>
				<label className='hidden lg:inline-flex items-center '>
					<input
						type='checkbox'
						checked={enableMouseEvents}
						onChange={event => setEnableMouseEvents(event.target.checked)}
					/>
					<span className='ml-2'>Enable Mouse Hover Playing</span>
				</label>
			</div>
			{/* Render the VolumeSlider component */}
			<VolumeSlider volume={volume} setVolume={setVolume} />
			<div className='relative flex justify-center items-center content-center w-full h-72 mt-5 px-2 lg:px-8 '>
				{/* White Keys */}
				<div className='flex relative w-full h-full'>
					{whiteKeys.slice(0, numWhiteKeys).map((key, index) => (
						<div
							key={key}
							data-key={key}
							className={`flex flex-col h-full w-full border border-black bg-primary-light  items-center justify-end shadow-lg lg:active:shadow-red-400/75 transition-all duration-75 ease-out select-none
              ${
								activeKeys.includes(key)
									? "bg-secondary-dark shadow-red-400/75 scale-[98%] sm:scale-[88%] -translate-y-[16px]"
									: ""
							}
              flex-grow flex-shrink basis-[calc(100%/52)]`}
							onMouseEnter={() => handleMouseHoverEvent(key, true)}
							onMouseLeave={() => handleMouseHoverEvent(key, false)}
							onMouseDown={() => handleMouseEvent(key, true)}
							onMouseUp={() => handleMouseEvent(key, false)}>
							<div className='flex flex-col text-black text-base xl:text-xl mb-1 text-center items-center -space-y-4'>
								<span className=''>{getKeyLabel(key)}</span>
								<br></br>
								<span className='opacity-15 font-bold'>{key}</span>
							</div>
						</div>
					))}
				</div>
				{/* Black Keys */}
				<div className='absolute top-0 flex w-full h-[60%] justify-center'>
					{blackKeys.slice(0, numBlackKeys).map((key, index) => {
						if (!key) return null; // Skip spaces where there's no black key

						// Use the getBlackKeyOffset function to position black keys
						const leftOffset = getBlackKeyOffset(index); // Get the specific offset for this key
						// console.log(`Black key ${key} offset:`, leftOffset); // Debugging log
						const blackKeyStyle = {
							left: `${leftOffset}%`, // Use the offset for positioning
						};
						return (
							<div
								key={key}
								data-key={key}
								className={`absolute border border-primary-dark bg-black w-[calc(100%/28*1)] lg:w-[calc(100%/32*0.6)] h-full flex flex-col items-center justify-end shadow-lg transition-all duration-75 ease-out select-none
              ${
								activeKeys.includes(key)
									? "bg-secondary-dark shadow-red-400/75 scale-[92%] sm:scale-[82%] -translate-y-[16px]"
									: ""
							}
              z-10`}
								style={blackKeyStyle}
								onMouseEnter={() => handleMouseHoverEvent(key, true)}
								onMouseLeave={() => handleMouseHoverEvent(key, false)}
								onMouseDown={() => handleMouseEvent(key, true)}
								onMouseUp={() => handleMouseEvent(key, false)}>
								<div
									className={`flex flex-col items-center text-center text-base xl:text-lg -space-y-6 text-white mb-1 z-10  ${
										activeKeys.includes(key) ? "text-primary-light " : ""
									}`}>
									<span className=''>{getKeyLabel(key)}</span>
									<br></br>
									<span className='opacity-40 font-semibold text-xs md:text-base xl:text-lg'>
										{key}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

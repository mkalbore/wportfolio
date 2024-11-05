// pages/index.js
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Encouragement() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("en-US");
	const [headingText, setHeadingText] = useState("Encouragement yourself 🙂");
	const [placeholderText, setPlaceholderText] = useState("Enter your name");
	const [buttonText, setButtonText] = useState("Get Encouragement");

	useEffect(() => {
		changeLanguage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedLanguage]); // Run changeLanguage every time selectedLanguage changes

	const changeLanguage = () => {
		if (selectedLanguage === "pl-PL") {
			setHeadingText("Dodaj pewności 🙂");
			setPlaceholderText("Wpisz swoje imię");
			setButtonText("Dodaj Otuchy");
		} else {
			setHeadingText("Encouragement yourself 🙂");
			setPlaceholderText("Enter your name");
			setButtonText("Get Encouragement");
		}
	};

	const playEncouragement = () => {
		if (name.length > 100) {
			setMessage(
				selectedLanguage === "pl-PL"
					? "Proszę wpisać imię krótsze niż 100 znaków."
					: "Please enter a name shorter than 100 characters."
			);
			return;
		}

		if (name.trim() === "") {
			setMessage(
				selectedLanguage === "pl-PL"
					? "Proszę wpisać swoje imię."
					: "Please enter your name."
			);
			return;
		}

		const messageContent =
			selectedLanguage === "pl-PL"
				? `Jestem z ciebie dumny, ${name} !`
				: `I'm proud of you, ${name} !`;

		setMessage(messageContent);

		if (window.speechSynthesis) {
			const speech = new SpeechSynthesisUtterance(messageContent);
			speech.lang = selectedLanguage;
			speech.pitch = 1;
			speech.rate = 1.2;
			window.speechSynthesis.speak(speech);
		} else {
			setMessage(
				prev =>
					prev +
					(selectedLanguage === "pl-PL"
						? "\nPrzepraszamy, twoja przeglądarka nie obsługuje syntezy mowy."
						: "\nSorry, your browser does not support speech synthesis.")
			);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen px-2'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>

			<div className='container text-center bg-primary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg max-w-sm'>
				<h1 className='text-2xl font-bold mb-4'>{headingText}</h1>

				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder={placeholderText}
					className='w-full p-2 mb-4 border bg-primary-light dark:bg-primary-dark border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
					maxLength='100'
				/>

				<select
					value={selectedLanguage}
					onChange={e => setSelectedLanguage(e.target.value)}
					className='w-full p-2 mb-4 border bg-primary-light dark:bg-primary-dark  border-gray-400 rounded-lg'>
					<option value='en-US'>English</option>
					<option value='pl-PL'>Polski</option>
				</select>

				<button
					onClick={playEncouragement}
					className='relative text-[#F3F3F3] text-xl md:text-2xl 
             px-4 md:px-8 py-2 md:py-4 rounded-3xl cursor-pointer 
             border-8 border-transparent 
             bg-[#121213] animate-shadow-gradient 
             hover:animate-shadow-gradient-fast'>
					{buttonText}
				</button>

				<p
					className={`mt-4 font-bold text-xl md:text-2xl  ${
						message ? "opacity-100" : "opacity-0"
					}`}>
					{message}
				</p>
			</div>
		</div>
	);
}

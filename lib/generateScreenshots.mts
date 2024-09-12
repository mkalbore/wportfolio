import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(
	"in package.json, add the following scripts: " + "'type' : 'module',"
);

// Path to your TypeScript file
const filePath = path.resolve(__dirname, "cheatSheetLinks.ts");

// Directory to save screenshots
const screenshotDir = path.resolve(__dirname, "../public/screenshots");

// Ensure the screenshot directory exists
if (!fs.existsSync(screenshotDir)) {
	fs.mkdirSync(screenshotDir, { recursive: true });
}

// Function to take screenshots
async function takeScreenshot(url: string, id: string): Promise<string> {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: "networkidle2" });

	const screenshotPath = path.join(
		screenshotDir,
		`${id.replace(/\s+/g, "-")}-screenshot.png`
	);
	await page.screenshot({ path: screenshotPath });

	await browser.close();
	return screenshotPath;
}

// Function to modify the TypeScript file
async function modifyFile() {
	// Read the existing file
	const fileContent = fs.readFileSync(filePath, "utf-8");

	// Parse the content as JavaScript
	const links = eval(
		fileContent.match(/export const links = (.*);/s)?.[1] || "[]"
	);

	for (const category of links) {
		for (const item of category.items) {
			if (item.url && item.id) {
				const screenshotPath = path.join(
					screenshotDir,
					`${item.id.replace(/\s+/g, "-")}-screenshot.png`
				);

				// Check if the screenshot file already exists
				if (!fs.existsSync(screenshotPath)) {
					const newScreenshotPath = await takeScreenshot(item.url, item.id);
					item.screenshot = `/screenshots/${path.basename(newScreenshotPath)}`;
				} else {
					item.screenshot = `/screenshots/${path.basename(screenshotPath)}`;
				}
				console.log(
					`Screenshot taken for ${item.id} (${item.url}) and saved as ${screenshotPath}`
				);
			}
		}
	}

	// Write the modified data back to the file
	const updatedContent = `export const links = ${JSON.stringify(
		links,
		null,
		2
	)};`;
	fs.writeFileSync(filePath, updatedContent, "utf-8");

	console.log("File updated with screenshot paths!");
}

// Run the script
modifyFile().catch(err => console.error(err));

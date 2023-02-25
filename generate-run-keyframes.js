/**
 * This file generates the code in @keyframes run
 */

let lines = [];

for (let i = 0; i < 120; i++) {
	const startingPercentage = i == 0 ? 0 : ((i * 50) / 120 + 0.0001).toFixed(4);
	const endingPercentage = (((i + 1) * 50) / 120).toFixed(4);
	lines.push(`    ${startingPercentage}%, ${endingPercentage}% {`);
	lines.push(`        background-position: -128px -${(i % 4) * 32}px;`);
	lines.push("    }");
}

for (let i = 0; i < 15; i++) {
	const startingPercentage = ((i * 50) / 15 + 50.0001).toFixed(4);
	const endingPercentage = (((i + 1) * 50) / 15 + 50).toFixed(4);
	lines.push(`    ${startingPercentage}%, ${endingPercentage}% {`);
	if (i < 2) {
		lines.push(`        background-position: -96px -${(i % 2) * 32 + 64}px;`);
	} else {
		lines.push(`        background-position: -64px -${(i % 2) * 32}px;`);
	}
	lines.push("    }");
}

console.log(lines.join("\n"));
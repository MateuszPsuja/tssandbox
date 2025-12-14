export function getStatusMessage(): string {
	return "I am working";
}

export function main(): void {
	console.log(getStatusMessage());
}

declare const require: any;
if (typeof require !== 'undefined' && require.main === module) {
	main();
}

const CHAR_CODE_A = 97;
const CHAR_CODE_0 = 48;

function intToHex(num: number) {
	if (num < 10) return String.fromCharCode(CHAR_CODE_0 + num);
	else return String.fromCharCode(CHAR_CODE_A + (num - 10));
}

export function Uint8ArrayToHexString(buffer: Uint8Array) {
	let str = '';
	// hex conversion - 2 chars per 8 bit component
	for (let i = 0; i < buffer.length; i++) {
		const num = buffer[i];
		// big endian conversion, but whatever
		str += intToHex(num >> 4);
		str += intToHex(num & 0xf);
	}
	return str;
}

export function randomUint8Array(len: number) {
	const buffer = new Uint8Array(len);
	for (let i = 0; i < buffer.length; i++) buffer[i] = Math.random() * (2 << 8);
	return buffer;
}

export function Uint8ArrayXor(to: Uint8Array, from: Uint8Array) {
	for (let i = 0; i < to.length; i++) to[i] = to[i] ^ from[i];
	return to;
}

export function cloneUint8Array(input: Uint8Array): Uint8Array {
	const output = new Uint8Array(input.length);
	for (let i = 0; i < output.length; i++) output[i] = input[i];
	return output;
}

export function copyUint8Array(destinaton: Uint8Array, source: Uint8Array): Uint8Array {
	if (destinaton.length !== source.length) {
		throw new Error('Arrays are different sizes.');
	}
	for (let i = 0; i < destinaton.length; i++) destinaton[i] = source[i];
	return source;
}

export function Uint8ArrayEqual(bufferA: Uint8Array, bufferB: Uint8Array) {
	if (bufferA.length !== bufferB.length) {
		return false;
	}
	for (let i = 0; i < bufferA.length; i++) {
		if (bufferA[i] !== bufferB[i]) return false;
	}
	return true;
}

export function randomHexString(len: number) {
	return Uint8ArrayToHexString(randomUint8Array(Math.floor(len / 2)));
}

importScripts('https://unpkg.com/terser');

self.postMessage({ ready: true });

self.addEventListener('message', event => {
	const result = Terser.minify(event.data.input, {
		// TODO support options
	});

	self.postMessage(result);
});
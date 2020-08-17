importScripts('https://unpkg.com/terser@5');

self.postMessage({ ready: true });

self.addEventListener('message', event => {
	const result = Terser.minify(event.data.input, {
		// TODO support options
	});

	result.then(data => self.postMessage(data));
});
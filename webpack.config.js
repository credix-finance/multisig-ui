module.exports = {
	resolve: {
		fallback: {
			os: require.resolve("os-browserify/browser"),
			http: require.resolve("stream-http"),
			https: require.resolve("https-browserify"),
			crypto: require.resolve("crypto-browserify"),
			stream: require.resolve("stream-browserify"),
		},
	},
};

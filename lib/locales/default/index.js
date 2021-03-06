module.exports = {
	_meta: {
		id: "default",
		fallback: null,
		mask: "\#\{([A-Za-z0-9_\.]+)\}",
		language: "English (United States)",
		country: "United States",
		countryCode: "US"
	},

	names: require("./names"),
	phone: require("./phone"),
	address: require("./address"),
	company: require("../en-GB/company"),
	internet: require("./internet"),
	lorem: require("./lorem"),
	date: require("../en-GB/date"),
	misc: require("./misc"),
	entity: require("./entity")
};

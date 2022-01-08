module.exports = {
    module: {
        rules: [{
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
            {
                test: require.resolve("underscore"),
                loader: "expose-loader",
                options: {
                    exposes: [
                        "_.map|map",
                        {
                            globalName: "_.reduce",
                            moduleLocalName: "reduce",
                        },
                        {
                            globalName: ["_", "filter"],
                            moduleLocalName: "filter",
                        },
                    ],
                },
            },
        ],
    },
};

//git remote add origin https://github.com/GastonX-web/visionmine-site.git
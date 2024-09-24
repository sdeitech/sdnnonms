const config = {
    local: {
        DB: {
            HOST: "",
            PORT: process.env.DB_PORT,
            DBNAME: process.env.DB_NAME,
            USERNAME: "",
            PASSWORD: "",
        },
        API_PORT: process.env.API_PORT
    },
    stage: {
        DB: {
            HOST: "",
            PORT: process.env.DB_PORT,
            DBNAME: process.env.DB_NAME,
            USERNAME: "",
            PASSWORD: "",
        },
        API_PORT: process.env.API_PORT
    },
    prod: {
        DB: {
            HOST: "",
            PORT: process.env.DB_PORT,
            DBNAME: process.env.DB_NAME,
            USERNAME: "",
            PASSWORD: "",
        },
        API_PORT: process.env.API_PORT
    }
}

export default config;
module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/83637eb4aea34bc5b8df4811eaa11930?v=485208a0d90b4aa79af5b3d1c2bf1251"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/e2341351a77d4034874c399dca56f8a6?v=871d47a5dd7243fd8dbc77058a96d89a"
            }
        }
    ],
}

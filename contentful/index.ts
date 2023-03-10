const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getAssets = async () => {
    const assets = await client.getAssets()
    return assets
}

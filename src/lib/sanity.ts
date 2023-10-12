import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
    projectId: 'p2r4izjx',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03',
}

export const client = createClient(config)
const sanityClient = require('@sanity/client');

export const client = sanityClient({
    projectId: 'jraodywc',
    dataset: 'production',
    useCdn: true,
});

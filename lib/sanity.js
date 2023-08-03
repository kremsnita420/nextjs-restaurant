import { createClient } from "next-sanity";
const projectId = 'w2fhosuu';
const dataset = 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false
});

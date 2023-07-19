import {defineConfig} from 'sanity';
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '8x4tdu0d',
    dataset: 'production',
    title: 'My Dev Portfolio',
    apiVersion: '2023-07-19',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}
});

export default config;
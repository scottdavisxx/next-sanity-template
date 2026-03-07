/**
 * Sanity CLI config for the frontend workspace.
 * Used so `sanity typegen generate` can run from the frontend (e.g. predev).
 * API and schema point at the studio project.
 */

import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '<your project ID>'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  typegen: {
    path: './sanity/**/*.{ts,tsx,js,jsx}',
    schema: '../studio/schema.json',
    generates: './sanity.types.ts',
    overloadClientMethods: true,
  },
})

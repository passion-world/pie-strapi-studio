export default ({ env }: { env: (key: string) => string }) => ({
  'vercel-deploy': {
    enabled: true,
    config: {
      deployHook: env('VERCEL_DEPLOY_HOOK'), // Your Vercel deployment hook URL
      apiToken: env('VERCEL_API_TOKEN'), // Your Vercel API token
      projectId: env('VERCEL_PROJECT_ID'), // Your Vercel project ID
      teamId: env('VERCEL_TEAM_ID'), // Optional: Your Vercel team ID
      roles: ['strapi-super-admin', 'strapi-editor', 'strapi-author'] // Optional: Roles that can trigger a deploy
    }
  }
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Antares',
      description: 'Lightweight API-focused PHP framework for PHP 8.2+',
      head: [],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/johnlesis/antares',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/johnlesis/antares/edit/main/docs/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Features',
          items: [
            { label: 'Controllers', slug: 'features/controllers' },
            { label: 'DTOs', slug: 'features/dtos' },
            { label: 'Response DTOs', slug: 'features/response-dtos' },
            { label: 'Guards', slug: 'features/guards' },
            { label: 'Migrations', slug: 'features/migrations' },
            { label: 'CLI', slug: 'features/cli' },
            { label: 'OpenAPI', slug: 'features/openapi' },
            { label: 'Error Handling', slug: 'features/error-handling' },
            { label: 'Service Providers', slug: 'features/service-providers' },
            { label: 'Middleware & Pipeline', slug: 'features/middleware' },
          ],
        },
        {
          label: 'Core',
          items: [
            { label: 'Application', slug: 'core/application' },
            { label: 'Boot Sequence', slug: 'core/boot-sequence' },
            { label: 'Dispatcher', slug: 'core/dispatcher' },
          ],
        },
        {
          label: 'Packages',
          items: [
            {
              label: 'Container',
              items: [
                { label: 'Overview', slug: 'packages/container/overview' },
                { label: 'Autowiring', slug: 'packages/container/autowiring' },
                { label: 'Bindings & Singletons', slug: 'packages/container/bindings' },
                { label: 'Error Handling', slug: 'packages/container/errors' },
              ],
            },
            {
              label: 'Router',
              items: [
                { label: 'Overview', slug: 'packages/router/overview' },
                { label: 'Route Attributes', slug: 'packages/router/attributes' },
                { label: 'Route Caching', slug: 'packages/router/caching' },
                { label: 'Config & YAML Routes', slug: 'packages/router/config' },
              ],
            },
            {
              label: 'Validation',
              items: [
                { label: 'Overview', slug: 'packages/validation/overview' },
                { label: 'DTOs & Hydration', slug: 'packages/validation/dtos' },
                { label: 'Validation Attributes', slug: 'packages/validation/attributes' },
                { label: 'Custom Rules', slug: 'packages/validation/custom' },
              ],
            },
            {
              label: 'Bridges',
              items: [
                { label: 'Monolog', slug: 'packages/bridges/monolog' },
                { label: 'Eloquent', slug: 'packages/bridges/eloquent' },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});

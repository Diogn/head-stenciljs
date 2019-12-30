import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

export const config: Config = {
  namespace: 'my-header',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/style.css',
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
          browsers: ['last 6 versions'],
          cascade: false
        }),
        tailwindcss('./tailwind.config.js'),
        purgecss({
          content: [
              './src/index.html', 
              './src/components/**/*.tsx'
        ],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:]+/g) || []
        })
      ]
    })
  ]
};

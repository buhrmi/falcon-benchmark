import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import Unocss from 'unocss/vite'
import {presetIcons, presetUno} from 'unocss'
import { importAssets } from 'svelte-preprocess-import-assets'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  resolve: {
    dedupe: ['axios'],
    alias: {
      '$lib': __dirname + '/app/frontend/lib',
      '$assets': __dirname + '/app/frontend/assets',
    }
  },
  plugins: [
    RubyPlugin(),
    svelte({
      compilerOptions: {
        hydratable: true,
      },
      preprocess: [
        importAssets()
      ]
    }),
    
    Unocss({
      extractors: [
        extractorSvelte(),
      ],
      presets: [
        presetIcons({
          extraProperties: {
            'display': 'inline-block'
          }
        }),
        presetUno(),
      ]
     })
  ]
})

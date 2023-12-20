import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { createInertiaApp, router } from '@inertiajs/svelte'

import resolve from '../resolve'

createInertiaApp({ 
  resolve,
  setup({ el, App, props }) {
    new App({ target: el, hydrate: true, props })
  },
})

window.addEventListener('message', async function(event) {
  if (event.data == 'logged_in') {
    router.reload()
  }
})

document.addEventListener('click', (event) => {
  const target = event.target
  const anchorElement = target.closest('a')
  if (!anchorElement || anchorElement.rel == 'external' || anchorElement.target == '_blank') return
  if (anchorElement.href && anchorElement.href.startsWith(location.origin)) {
    event.preventDefault()
    event.stopPropagation()
    router.visit(anchorElement.href, {
      method: anchorElement.dataset['method'],
    })
  }
})
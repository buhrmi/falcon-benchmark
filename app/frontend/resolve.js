const pages = import.meta.glob('../**/*.svelte')

export default async name => {
  const componentPath = `./pages/${name}.svelte`
  const layoutPath = `./pages/_layout.svelte`      
  if (!pages[componentPath]) throw new Error(`Unknown page ${componentPath}`)
  if (!pages[layoutPath]) throw new Error(`Unknown layout ${layoutPath}`)
  const page = await pages[componentPath]()
  const layout = await pages[layoutPath]()
  return Object.assign({
    layout: layout.default
  }, page)
}
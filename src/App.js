import { Index } from '/pages/Index'
import { Challenge as Challenge3dImageEffect } from '/pages/1-3d-image-effect/Challenge'
import { Solution as Solution3dImageEffect } from '/pages/1-3d-image-effect/Solution'
import { Challenge as Challenge3dImageEffect2 } from '/pages/2-3d-image-effect/Challenge'
import { Solution as Solution3dImageEffect2 } from '/pages/2-3d-image-effect/Solution'

export default function App({ config, path }) {
  console.log({ path })
  if (path === '/') return <Index />
  if (path === '/1-3d-image-effect') return <Challenge3dImageEffect />
  if (path === '/1-3d-image-effect-solution') return <Solution3dImageEffect />
  if (path === '/2-3d-image-effect') return <Challenge3dImageEffect2 />
  if (path === '/2-3d-image-effect-solution') return <Solution3dImageEffect2 />
}

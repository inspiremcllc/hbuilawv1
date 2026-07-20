// Downloads the Higgsfield-generated hero video into public/videos/hero-loop.mp4
// Runs automatically before `next build` (prebuild). Non-fatal on failure:
// the hero falls back to its poster image if the video is missing.
import { mkdir, writeFile, stat } from 'node:fs/promises'

const URL_MP4 =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3CQAaD3QCjC9ggPJHdeI7d3lCbW/hf_20260720_223625_24d02dc6-6e56-4bf3-8624-c745c9a5c696.mp4'
const OUT = 'public/videos/hero-loop.mp4'

try {
  const existing = await stat(OUT).catch(() => null)
  if (existing && existing.size > 1e6) {
    console.log(`hero video already present (${(existing.size / 1e6).toFixed(1)} MB), skipping download`)
    process.exit(0)
  }
  const res = await fetch(URL_MP4)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await mkdir('public/videos', { recursive: true })
  await writeFile(OUT, buf)
  console.log(`Saved ${OUT} (${(buf.length / 1e6).toFixed(1)} MB)`)
} catch (err) {
  console.warn(`WARN: hero video download failed (${err.message}). Site will use the poster image fallback.`)
}

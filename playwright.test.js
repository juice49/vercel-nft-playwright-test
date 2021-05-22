import t from 'tap'
import { nodeFileTrace as nodeFileTrace_0_11_2 } from '@vercel/nft-0.11.2'
import { nodeFileTrace as nodeFileTrace_0_12_0 } from '@vercel/nft-0.12.0'

const testNft = async nft => {
  const { fileList } = await nft(['./playwright.js'])

  return fileList.filter(name =>
    name.includes('node_modules/playwright-core/browsers.json'),
  )
}

t.test('NFT includes `playwright-core/browsers.json`', async () => {
  const [matches_0_11_2, matches_0_12_0] = await Promise.all([
    testNft(nodeFileTrace_0_11_2),
    testNft(nodeFileTrace_0_12_0),
  ])

  t.ok(matches_0_11_2.length === 1, '@vercel/nft 0.11.2')
  t.ok(matches_0_12_0.length === 1, '@vercel/nft 0.12.0')
})

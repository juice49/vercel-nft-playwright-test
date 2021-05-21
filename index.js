import { strict as assert } from 'assert'
import { nodeFileTrace } from '@vercel/nft'

const { fileList } = await nodeFileTrace(['./playwright.js'])
const matches = fileList.filter(name => name.includes('browsers.json'))
console.log(matches)
assert.equal(matches.length, 1)

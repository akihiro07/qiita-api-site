import { getItemList, url } from '@/plugins/qiita'

describe('Qiita API', () => {
  test('URL', () => {
    expect(url).toBe('https://qiita.com/api/v2/items')
  })

  // パラメータは`quey='query
  test('GET /api/v2/items', async () => {
    // const itemList = await getItemList('marsstay0729')
  })
})

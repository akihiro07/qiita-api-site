import { getItemList } from '@/plugins/qiita'

import axios from 'axios'
jest.mock('axios')

describe('Qiita API', () => {
  test('GET /api/v2/items', async () => {
    console.log(await getItemList('marsstay0729'))
    // const users = [{ name: 'Bob' }]
    // const resp = { data: users }
    // axios.get.mockResolvedValue(resp)
    // // or you could use the following depending on your use case:
    // // axios.get.mockImplementation(() => Promise.resolve(resp))
    // return Users.all().then((data) => expect(data).toEqual(users))
  })
})

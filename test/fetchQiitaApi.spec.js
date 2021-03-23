import axios from 'axios'
import { shallowMount } from '@vue/test-utils'
import Component from '@/pages/search-result'

jest.mock('axios')

describe('Qiita API', () => {
  test('GET /api/v2/items', () => {
    const wrapper = shallowMount(Component, { sync: false })

    const users = [{ name: 'Bob' }]
    const resp = { data: users }
    axios.get.mockResolvedValue(resp)

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then((data) => expect(data).toEqual(users))
  })
})

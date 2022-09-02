import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Indecision from '../../../src/components/Indecision.vue'


describe('Indecision component', () => {
    test('debe de ser identico con el snapshot', () => {
        const wrapper = shallowMount(Indecision)
        // toMatchSnapshot() garantiza que un valor coincida con la instantánea más reciente.
        expect(wrapper.html()).toMatchSnapshot()

        // actualizar snapshot
        // yarn test -u
    })
})
import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/parent-child/Parent.vue'

describe('Message.vue', () => {
    it('renders props.msg when passed', ()=> {
        const wrapper = shallowMount(Parent)
        expect(wrapper.text()).toContain("Parent")
    })
})

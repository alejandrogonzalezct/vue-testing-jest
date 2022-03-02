import { mount } from "@vue/test-utils";
import TodoApp from '@/components/TodoApp.vue'

describe("TodoApp.vue", () => {
    it("Should render todo text", () => {
        const wrapper = mount(TodoApp)

        const todo = wrapper.get('[data-test="todo"]')

        expect(todo.text()).toBe("Learn Vue Testing")
    })
})
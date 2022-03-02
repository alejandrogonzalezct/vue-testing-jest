import { mount } from "@vue/test-utils";
import TodoApp from '@/components/TodoApp.vue'
import { assert } from "@vue/compiler-core";

describe("TodoApp.vue", () => {
    it("Should render todo text", () => {
        const wrapper = mount(TodoApp)

        const todo = wrapper.get('[data-test="todo"]')

        expect(todo.text()).toBe("Learn Vue Testing")
    })

    it("should add new todo", async () => {
        const wrapper = mount(TodoApp)

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3);
        
        await wrapper.get('[data-test="new-todo"]').setValue("New todo")
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(4);
    })
})
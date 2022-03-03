import { mount } from "@vue/test-utils";
import Navbar from "@/components/Nav.vue"

describe("Nav.vue", () => {
    let wrapper
    
    beforeEach(()=> {
        wrapper = mount(Navbar)
    })

    it("render isLoggedIn prop when passed", () => {
        wrapper = mount(Navbar,{
            data(){
                return {
                    isLoggedIn: true
                }
            }
        })
        
        const profileLink = wrapper.get("#profile")

        expect(profileLink.text()).toEqual("My profile")
    })

    it("should not render a profile link", () => {
        wrapper = mount(Navbar,{
            data(){
                return {
                    isLoggedIn: false
                }
            }
        })

        const profileLink = wrapper.find("#profile")
        

        expect(profileLink.exists()).toBe(false)
    })
})

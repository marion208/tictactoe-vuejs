import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import RotateLoader from 'vue-spinner/src/RotateLoader.vue'
import GridBox from '@/components/GridBox'

describe('App.vue', () => {
    it('has a title', () => {
        const wrapper = shallowMount(App, {
            context: {
                children: [GridBox, RotateLoader]
            }
        });
        expect(wrapper.text()).toContain('Jeu du morpion');
    })
    it('has a text to restart the game', () => {
        const wrapper = shallowMount(App, {
            context: {
                children: [GridBox, RotateLoader]
            }
        });
        expect(wrapper.text()).toContain('Recommencer une nouvelle partie');
    })
    it('has a text to restart the game', () => {
        const wrapper = shallowMount(App, {
            context: {
                children: [GridBox, RotateLoader]
            }
        });
        expect(wrapper.text()).toContain('Recommencer une nouvelle partie');
    })

    /*   it('takes first game click into account', async () => {
           let loader = document.createElement('div');
           loader.setAttribute("id", "loader");
           loader.setAttribute("class", "invisible");
           let children = document.createElement('div');
           loader.appendChild(children);
           document.body.appendChild(loader);
   
           const wrapper = shallowMount(App, {
               context: {
                   children: [GridBox, RotateLoader]
               }
           });
           await wrapper.findComponent(GridBox).trigger('click');
           expect(wrapper.findComponent(GridBox).text()).toBe('X');
       })*/
})

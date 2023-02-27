import { mount } from '@vue/test-utils';
import ShowDetails from '@/views/ShowDetails/ShowDetails.vue';

const castList = [];
const showPlot = true;

describe('ShowDetails.vue', () => {

    test('it is a vue instance', () => {
        const wrapper = mount(ShowDetails);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});


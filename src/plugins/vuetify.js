import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
            primary: colors.cyan.lighten1, // #E0F7FA
            secondary: colors.brown.lighten2, // #A1887F
            accent: colors.amber.lighten4, // #FFECB3
            background: colors.cyan.lighten4, // #E0F7FA
        },
    },
    breakpoint: {
        mobileBreakpoint: 'xs'
        },
    }
    })

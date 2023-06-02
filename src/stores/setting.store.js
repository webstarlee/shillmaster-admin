import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';
import { useAuthStore } from '@/stores';

export const useSettingStore = defineStore({
    id: 'setting',
    state: () => ({
        setting: null
    }),
    actions: {
        async fetch() {
            try {
                const setting = await fetchWrapper.get('http://127.0.0.1:5000/api/group/master/setting');

                // update pinia state
                this.setting = setting;

            } catch (error) {
                const { user, logout } = useAuthStore();
                if ([401, 403].includes(error.response.status) && user) {
                    logout();
                }
            }
        },
        async update(banMode, shillMode) {
            try {
                const shill_mode = shillMode == "On"? true: false;
                const ban_mode = banMode == "On"? true: false;
                const setting = await fetchWrapper.post('http://127.0.0.1:5000/api/group/master/setting', { ban_mode, shill_mode });

                // update pinia state
                this.setting = setting;

            } catch (error) {
                if ([401].includes(error.response.status)) {
                    const alertStore = useAlertStore();
                    alertStore.error("Username or Password do not match");
                }
            }
        },
    }
});

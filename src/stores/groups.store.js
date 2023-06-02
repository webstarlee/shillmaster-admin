import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';
import { useAuthStore } from '@/stores';

export const useGroupsStore = defineStore({
    id: 'groups',
    state: () => ({
        groups: [],
        group: {}
    }),
    actions: {
        async getAll() {
            try {
                this.groups = await fetchWrapper.get('http://127.0.0.1:5000/api/groups');

            } catch (error) {
                const { user, logout } = useAuthStore();
                if ([401, 403].includes(error.response.status) && user) {
                    logout();
                }
            }
        },
        async getById(groupId) {
            try {
                this.group = await fetchWrapper.get(`http://127.0.0.1:5000/api/group/${groupId}`);

            } catch (error) {
                const { user, logout } = useAuthStore();
                if ([401, 403].includes(error.response.status) && user) {
                    logout();
                }
            }
        },
        async updateSetting(banMode, shillMode, groupId) {
            try {
                const shill_mode = shillMode == "On"? true: false;
                const ban_mode = banMode == "On"? true: false;
                await fetchWrapper.post(`http://127.0.0.1:5000/api/group/${groupId}/setting`, { ban_mode, shill_mode });

            } catch (error) {
                const { user, logout } = useAuthStore();
                if ([401, 403].includes(error.response.status) && user) {
                    logout();
                }
            }
        },
    }
});

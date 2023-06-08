import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers';
import { useAuthStore } from '@/stores';

export const useLeaderStore = defineStore({
    id: 'leaders',
    state: () => ({
        leaders: null
    }),
    actions: {
        async fetch() {
            try {
                const leaders = await fetchWrapper.get('http://127.0.0.1:5000/api/leaderboards');
                this.leaders = leaders;
            } catch (error) {
                const { user, logout } = useAuthStore();
                if ([401, 403].includes(error.response.status) && user) {
                    logout();
                }
            }
        },
    }
});

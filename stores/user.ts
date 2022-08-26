import { defineStore } from 'pinia'
import type { User, UserDetailsProps } from '@/app-modules/app/types/user'
import formatDate from '@/helpers/formatDate'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
    user: {} as User,
  }),

  getters: {
    getUserFullName: (state): string => `${state.user.first_name} ${state.user.last_name}`,

    getMemberSinceDate: (state): string => formatDate(state.user.created_at),

    getUserDetails(state) {
      return {
        memberSince: this.getMemberSinceDate,
        progressTitle: state.user.progress_title || 'Placeholder: A Manager of Systems',
        progressDesc: state.user.progress_desc || 'Placeholder: To become someone who integrates all operational components to improve performance and achieve the best outcome.',
      } as UserDetailsProps
    },

    setUser: state => state.user = state.userData?.data.getSigData,
  },

  actions: {
    async getUser(userId: string) {
      try {
        this.userData = await useAsyncData('data', () => GqlSignature({ id: userId }))
        this.setUser
      }
      catch (error) {
        return error
      }
    },
  },
})

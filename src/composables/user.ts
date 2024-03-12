import { useLocalStorage } from "@vueuse/core"
import { IdentityGuardBinding } from "../directives/identity-guard"

export function useUser() {
  const user = useLocalStorage<{
    role: IdentityGuardBinding['role']
  }>('user', {
    role: 'User'
  })
  return user
}

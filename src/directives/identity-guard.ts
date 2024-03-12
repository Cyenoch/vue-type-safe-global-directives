import { Directive } from "vue"
import { useUser } from "../composables/user"

export type IdentityGuardBinding = {
  role: 'Admin' | 'User'
}

export const DirectiveIdentityGuard: Directive<HTMLElement, IdentityGuardBinding> = (el, binding) => {
  const user = useUser()
  // demo simple logic
  el.innerText = user.value.role !== binding.value.role ? 'You are blocked out' : 'Passed the identity guard'
}

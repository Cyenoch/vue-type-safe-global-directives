import { DirectiveIdentityGuard } from "./directives/identity-guard";

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    vIdentityGuard: typeof DirectiveIdentityGuard
  }
}

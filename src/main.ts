import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { DirectiveIdentityGuard } from './directives/identity-guard'

const app = createApp(App)

app.directive('identity-guard', DirectiveIdentityGuard)

app.mount('#app')

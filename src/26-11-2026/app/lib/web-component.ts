export function register(component: typeof HTMLElement) {
  return customElements.define(component.name, component);
}

export function registers(components:typeof HTMLElement[]) {
  components.forEach(register)
}

export const WebComponent = {
  register,
  registers
} as const
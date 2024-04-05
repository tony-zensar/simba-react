import type { Components, JSX } from "../types/components";

interface SmartAssistant extends Components.SmartAssistant, HTMLElement {}
export const SmartAssistant: {
    prototype: SmartAssistant;
    new (): SmartAssistant;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

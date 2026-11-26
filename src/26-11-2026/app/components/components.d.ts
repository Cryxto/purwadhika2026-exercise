import type { RichButton } from "./rich-button";

declare global {
  interface HTMLElementTagNameMap {
    'rich-button': RichButton;
  }
}
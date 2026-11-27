/* 악몽 · 아트머그 상세 페이지 (built 2026-11-27 from v2/src; edit there, then node v2/build.mjs) */
(() => {
const BASE = new URL('.', document.currentScript ? document.currentScript.src : location.href).href;
const CSS = ":host{--radius: 0.625rem;--background: oklch(0.985 0 0);--foreground: oklch(0.205 0 0);--card: oklch(1 0 0);--card-foreground: oklch(0.205 0 0);--popover: oklch(1 0 0);--popover-foreground: oklch(0.205 0 0);--primary: oklch(0.205 0 0);--primary-foreground: oklch(0.985 0 0);--secondary: oklch(0.955 0 0);--secondary-foreground: oklch(0.205 0 0);--muted: oklch(0.955 0 0);--muted-foreground: oklch(0.48 0 0);--accent: oklch(0.955 0 0);--accent-foreground: oklch(0.205 0 0);--destructive: oklch(0.577 0.245 27.325);--border: oklch(0.91 0 0);--input: oklch(0.88 0 0);--ring: oklch(0.708 0 0);--chart-1: oklch(0.646 0.222 41.116);--chart-2: oklch(0.6 0.118 184.704);--chart-3: oklch(0.398 0.07 227.392);--chart-4: oklch(0.828 0.189 84.429);--chart-5: oklch(0.769 0.188 70.08);--sidebar: oklch(0.97 0 0);--sidebar-foreground: oklch(0.205 0 0);--sidebar-primary: oklch(0.205 0 0);--sidebar-primary-foreground: oklch(0.985 0 0);--sidebar-accent: oklch(0.955 0 0);--sidebar-accent-foreground: oklch(0.205 0 0);--sidebar-border: oklch(0.91 0 0);--sidebar-ring: oklch(0.708 0 0);}:host([data-theme=\"dark\"]){color-scheme: dark;--background: oklch(0.17 0 0);--foreground: oklch(0.93 0 0);--card: oklch(0.2 0 0);--card-foreground: oklch(0.93 0 0);--popover: oklch(0.22 0 0);--popover-foreground: oklch(0.93 0 0);--primary: oklch(0.93 0 0);--primary-foreground: oklch(0.2 0 0);--secondary: oklch(0.25 0 0);--secondary-foreground: oklch(0.93 0 0);--muted: oklch(0.25 0 0);--muted-foreground: oklch(0.72 0 0);--accent: oklch(0.25 0 0);--accent-foreground: oklch(0.93 0 0);--destructive: oklch(0.704 0.191 22.216);--border: oklch(1 0 0 / 10%);--input: oklch(1 0 0 / 16%);--ring: oklch(0.556 0 0);--chart-1: oklch(0.488 0.243 264.376);--chart-2: oklch(0.696 0.17 162.48);--chart-3: oklch(0.769 0.188 70.08);--chart-4: oklch(0.627 0.265 303.9);--chart-5: oklch(0.645 0.246 16.439);--sidebar: oklch(0.2 0 0);--sidebar-foreground: oklch(0.93 0 0);--sidebar-primary: oklch(0.488 0.243 264.376);--sidebar-primary-foreground: oklch(0.985 0 0);--sidebar-accent: oklch(0.25 0 0);--sidebar-accent-foreground: oklch(0.93 0 0);--sidebar-border: oklch(1 0 0 / 10%);--sidebar-ring: oklch(0.556 0 0);--shadow-overlay: 0 8px 24px rgb(0 0 0 / 0.4),0 2px 6px rgb(0 0 0 / 0.3);}@media (prefers-color-scheme: dark){:host(:not(.light):not([data-theme=\"light\"])){color-scheme: dark;--background: oklch(0.17 0 0);--foreground: oklch(0.93 0 0);--card: oklch(0.2 0 0);--card-foreground: oklch(0.93 0 0);--popover: oklch(0.22 0 0);--popover-foreground: oklch(0.93 0 0);--primary: oklch(0.93 0 0);--primary-foreground: oklch(0.2 0 0);--secondary: oklch(0.25 0 0);--secondary-foreground: oklch(0.93 0 0);--muted: oklch(0.25 0 0);--muted-foreground: oklch(0.72 0 0);--accent: oklch(0.25 0 0);--accent-foreground: oklch(0.93 0 0);--destructive: oklch(0.704 0.191 22.216);--border: oklch(1 0 0 / 10%);--input: oklch(1 0 0 / 16%);--ring: oklch(0.556 0 0);--shadow-overlay: 0 8px 24px rgb(0 0 0 / 0.4),0 2px 6px rgb(0 0 0 / 0.3);}}:host{color-scheme: light;--font-sans: \"Pretendard Variable\",Pretendard,-apple-system,BlinkMacSystemFont,\"Apple SD Gothic Neo\",\"Noto Sans KR\",system-ui,sans-serif;--font-mono: ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;--radius-sm: calc(var(--radius) * 0.6);--radius-md: calc(var(--radius) * 0.8);--radius-lg: var(--radius);--radius-xl: calc(var(--radius) * 1.4);--radius-full: 9999px;--space-1: 4px;--space-2: 8px;--space-3: 12px;--space-4: 16px;--space-6: 24px;--space-8: 32px;--space-12: 48px;--space-16: 64px;--space-24: 96px;--hover: color-mix(in oklab,var(--foreground) 6%,transparent);--selected: color-mix(in oklab,var(--foreground) 10%,transparent);--shadow-overlay: 0 8px 24px rgb(0 0 0 / 0.08),0 2px 6px rgb(0 0 0 / 0.04);--tempo: 1;--ease-out: cubic-bezier(0.23,1,0.32,1);--ease-spring: cubic-bezier(0.34,1.2,0.64,1);--ease-bounce: cubic-bezier(0.34,1.3,0.64,1);--dur-instant: calc(80ms * var(--tempo));--dur-out: calc(240ms * var(--tempo));--dur-fast: calc(180ms * var(--tempo));--dur-base: calc(240ms * var(--tempo));--dur-slow: calc(360ms * var(--tempo));--dur-press: calc(240ms * var(--tempo));--dur-release: calc(420ms * var(--tempo));--dur-spring: calc(500ms * var(--tempo));--dur-flash: calc(400ms * var(--tempo));--dur-roll: calc(450ms * var(--tempo));--press-scale: 0.97;--press-scale-small: 0.9;--press-scale-wide: 0.99;--flash: 0.12;--pop-from: 0.96;--pop-shift: 4px;--slide: 24px;--thumb-stretch: 20px;}@supports (transition-timing-function: linear(0,1)){:host{--ease-bounce: linear(0,0.08,0.261,0.472,0.669,0.83,0.946,1.02,1.059,1.073,1.07,1.058,1.043,1.028,1.015,1.006,1,0.996,0.995,0.995,0.996,0.997,1);--ease-spring: linear(0,0.063,0.207,0.381,0.551,0.7,0.819,0.908,0.969,1.007,1.028,1.037,1.037,1.033,1.027,1.021,1.015,1.009,1.005,1.002,1.001,0.999,1);}}:host([data-feel=\"lively\"]){--dur-out: calc(500ms * var(--tempo));--dur-fast: calc(200ms * var(--tempo));--dur-base: calc(300ms * var(--tempo));--dur-slow: calc(500ms * var(--tempo));--dur-press: calc(600ms * var(--tempo));--dur-release: calc(900ms * var(--tempo));--dur-spring: calc(600ms * var(--tempo));--dur-flash: calc(800ms * var(--tempo));--dur-roll: calc(700ms * var(--tempo));--press-scale: 0.92;--press-scale-small: 0.8;--press-scale-wide: 0.985;--flash: 0.28;--pop-from: 0.9;--pop-shift: 8px;--slide: 40px;--thumb-stretch: 24px;}@supports (transition-timing-function: linear(0,1)){:host([data-feel=\"lively\"]){--ease-bounce: linear(0,0.39,0.89,1.25,1.37,1.3,1.12,0.97,0.88,0.87,0.92,0.99,1.03,1.05,1.04,1.02,1,0.98,0.98,0.99,1,1,1.01,1,1,1,1,1,1,1,1);--ease-spring: linear(0,0.321,0.639,0.891,1.055,1.135,1.153,1.132,1.093,1.053,1.019,0.996,0.984,0.981,0.983,0.987,0.992,0.997,1,1.002,1.002,1.002,1.002,1.001,1);}}.studio-root,.rail{margin: 0;background: var(--background);color: var(--foreground);font-family: var(--font-sans);font-size: 14px;line-height: 1.6;-webkit-font-smoothing: antialiased;word-break: keep-all;overflow-wrap: anywhere;}.tf-theme-switching,.tf-theme-switching *{transition: none !important;}[hidden]{display: none !important;}.tf-display{font-size: 48px;line-height: 1.08;font-weight: 500;letter-spacing: -0.035em;text-wrap: balance;}.tf-title{font-size: 36px;line-height: 1.12;font-weight: 500;letter-spacing: -0.03em;text-wrap: balance;}.tf-heading{font-size: 24px;line-height: 1.25;font-weight: 500;letter-spacing: -0.02em;text-wrap: balance;}.tf-subheading{font-size: 16px;line-height: 1.4;font-weight: 500;letter-spacing: -0.01em;}.tf-lead{font-size: 16px;line-height: 1.65;font-weight: 400;color: var(--muted-foreground);text-wrap: pretty;}.tf-body{font-size: 14px;line-height: 1.6;font-weight: 400;}.tf-caption{font-size: 13px;line-height: 1.5;font-weight: 400;color: var(--muted-foreground);}.tf-label{font-size: 12px;line-height: 1.4;font-weight: 500;}.tf-code{font-family: var(--font-mono);font-size: 13px;line-height: 1.6;}@media (max-width: 640px){.tf-display{font-size: 36px;}.tf-title{font-size: 28px;}.tf-heading{font-size: 20px;}}.tf-btn:focus-visible,.tf-checkbox:focus-visible,.tf-switch:focus-visible,.tf-tab:focus-visible,.tf-link:focus-visible,.tf-nav__item:focus-visible,.tf-sidenav__item:focus-visible,.tf-menu__item:focus-visible,.tf-radio:focus-visible,.tf-item:focus-visible,.tf-table__sort:focus-visible{outline: 2px solid var(--foreground);outline-offset: 2px;}.tf-btn{position: relative;display: inline-flex;align-items: center;justify-content: center;gap: var(--space-2);box-sizing: border-box;height: 36px;padding: 0 var(--space-4);border: 1px solid transparent;border-radius: var(--radius-md);background: var(--primary);color: var(--primary-foreground);font: inherit;font-size: 14px;font-weight: 500;line-height: 1;white-space: nowrap;text-decoration: none;cursor: pointer;-webkit-tap-highlight-color: transparent;box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.14);transition: background-color var(--dur-out) var(--ease-out),border-color var(--dur-out) var(--ease-out),transform var(--dur-release) var(--ease-bounce);}.tf-btn::after{content: \"\";position: absolute;inset: -1px;border-radius: inherit;background: currentColor;opacity: 0;pointer-events: none;transition: opacity var(--dur-flash) var(--ease-out);}.tf-btn--outline{background: var(--card);color: var(--foreground);border-color: var(--input);box-shadow: 0 1px 0 rgb(0 0 0 / 0.04);}.tf-btn--ghost{background: transparent;color: var(--foreground);box-shadow: none;}.tf-btn--danger{background: var(--card);box-shadow: 0 1px 0 rgb(0 0 0 / 0.04);color: var(--destructive);border-color: color-mix(in oklab,var(--destructive) 40%,transparent);}@media (hover: hover) and (pointer: fine){.tf-btn:hover{background: color-mix(in oklab,var(--primary) 88%,var(--background));transition-duration: var(--dur-instant),var(--dur-instant),var(--dur-release);}.tf-btn--outline:hover{background: color-mix(in oklab,var(--foreground) 5%,var(--card));}.tf-btn--ghost:hover{background: var(--hover);}.tf-btn--danger:hover{background: color-mix(in oklab,var(--destructive) 8%,var(--background));}}.tf-btn:active{transform: scale(var(--press-scale));transition-duration: var(--dur-instant),var(--dur-instant),var(--dur-press);transition-timing-function: var(--ease-out);}.tf-btn:active::after{opacity: var(--flash);transition-duration: 0s;}.tf-btn--sm{height: 32px;padding: 0 var(--space-3);font-size: 13px;}.tf-btn--lg{height: 40px;padding: 0 var(--space-6);}.tf-btn:disabled,.tf-btn[aria-disabled=\"true\"]{opacity: 0.5;pointer-events: none;}.tf-btn[aria-busy=\"true\"]{pointer-events: none;}.tf-spinner{width: 14px;height: 14px;box-sizing: border-box;border: 1.5px solid currentColor;border-right-color: transparent;border-radius: 50%;animation: tf-spin 600ms linear infinite;}@keyframes tf-spin{to{transform: rotate(360deg);}}@media (pointer: coarse){.tf-btn,.tf-input,.tf-select{min-height: 44px;}.tf-btn--sm{min-height: 36px;}.tf-btn--sm::before{content: \"\";position: absolute;inset: -4px 0;}}.tf-link{color: inherit;text-decoration: underline;text-decoration-color: var(--ring);text-underline-offset: 3px;transition: text-decoration-color var(--dur-out) var(--ease-out);}.tf-link--quiet{color: var(--muted-foreground);text-decoration: none;transition: color var(--dur-out) var(--ease-out);}@media (hover: hover) and (pointer: fine){.tf-link:hover{text-decoration-color: var(--foreground);transition-duration: var(--dur-instant);}.tf-link--quiet:hover{color: var(--foreground);transition-duration: var(--dur-instant);}}.tf-field{display: grid;gap: var(--space-2);}.tf-field__label{font-size: 14px;font-weight: 500;line-height: 1.4;}.tf-field__hint{font-size: 13px;line-height: 1.5;color: var(--muted-foreground);}.tf-field__hint--error{color: var(--destructive);}.tf-input,.tf-textarea,.tf-select{box-sizing: border-box;width: 100%;border: 1px solid var(--input);border-radius: var(--radius-md);background: var(--card);color: var(--foreground);font: inherit;font-size: 14px;transition: border-color var(--dur-out) var(--ease-out);}.tf-input{height: 36px;padding: 0 var(--space-3);}.tf-textarea{display: block;min-height: 96px;padding: var(--space-2) var(--space-3);line-height: 1.6;resize: vertical;}.tf-select{height: 36px;padding: 0 var(--space-8) 0 var(--space-3);appearance: none;-webkit-appearance: none;cursor: pointer;}.tf-select-wrap{position: relative;}.tf-select-wrap::after{content: \"\";position: absolute;top: 50%;right: 14px;width: 6px;height: 6px;border-right: 1.5px solid var(--muted-foreground);border-bottom: 1.5px solid var(--muted-foreground);transform: translateY(-70%) rotate(45deg);pointer-events: none;}.tf-input::placeholder,.tf-textarea::placeholder{color: var(--muted-foreground);}@media (hover: hover) and (pointer: fine){.tf-input:hover,.tf-textarea:hover,.tf-select:hover{border-color: var(--ring);transition-duration: var(--dur-instant);}}.tf-input:focus-visible,.tf-textarea:focus-visible,.tf-select:focus-visible{outline: 2px solid var(--foreground);outline-offset: -1px;}.tf-input[aria-invalid=\"true\"],.tf-textarea[aria-invalid=\"true\"]{border-color: var(--destructive);}.tf-input:disabled,.tf-textarea:disabled,.tf-select:disabled{opacity: 0.5;cursor: not-allowed;}@media (max-width: 640px){.tf-input,.tf-textarea,.tf-select{font-size: 16px;}}.tf-checkbox::before,.tf-radio::before{content: \"\";position: absolute;inset: -10px;}.tf-switch::before{content: \"\";position: absolute;inset: -8px 0;}.tf-checkbox{appearance: none;-webkit-appearance: none;position: relative;display: inline-grid;place-content: center;flex: none;box-sizing: border-box;width: 16px;height: 16px;margin: 0;border: 1px solid var(--muted-foreground);border-radius: 4px;background: transparent;cursor: pointer;transition: background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out),transform var(--dur-spring) var(--ease-spring);}.tf-checkbox::after{content: \"\";width: 8px;height: 4px;border-left: 1.5px solid var(--primary-foreground);border-bottom: 1.5px solid var(--primary-foreground);transform: translateY(-1px) rotate(-45deg);clip-path: inset(-2px 110% -2px -2px);transition: clip-path var(--dur-fast) var(--ease-out);}.tf-checkbox:checked{background: var(--primary);border-color: var(--primary);}.tf-checkbox:checked::after{clip-path: inset(-2px);transition: clip-path var(--dur-base) var(--ease-out) 60ms;}.tf-checkbox:active{transform: scale(var(--press-scale-small));transition-duration: var(--dur-fast),var(--dur-fast),var(--dur-press);transition-timing-function: var(--ease-out);}.tf-checkbox:disabled{opacity: 0.5;cursor: not-allowed;}@media (hover: hover) and (pointer: fine){.tf-checkbox:hover:not(:checked):not(:disabled),.tf-radio:hover:not(:checked):not(:disabled){border-color: var(--foreground);transition-duration: var(--dur-instant);}}.tf-switch{appearance: none;-webkit-appearance: none;position: relative;flex: none;width: 36px;height: 20px;margin: 0;border-radius: var(--radius-full);background: color-mix(in oklab,var(--foreground) 20%,transparent);cursor: pointer;-webkit-tap-highlight-color: transparent;transition: background-color 250ms var(--ease-out);}.tf-switch::after{content: \"\";position: absolute;top: 2px;left: 2px;width: 16px;height: 16px;border-radius: var(--radius-full);background: var(--background);transition: transform var(--dur-spring) var(--ease-spring),width var(--dur-fast) var(--ease-out);}.tf-switch:checked{background: var(--primary);}.tf-switch:checked::after{transform: translateX(16px);}.tf-switch:active::after{width: var(--thumb-stretch);}.tf-switch:checked:active::after{transform: translateX(calc(32px - var(--thumb-stretch)));}.tf-switch:disabled{opacity: 0.5;cursor: not-allowed;}.tf-setting{display: flex;align-items: flex-start;justify-content: space-between;gap: var(--space-6);padding: var(--space-4) 0;border-bottom: 1px solid var(--border);cursor: pointer;}.tf-setting:last-child{border-bottom: 0;}.tf-setting__title{display: block;font-size: 14px;font-weight: 500;}.tf-setting__text{display: block;font-size: 13px;color: var(--muted-foreground);}.tf-tabs{position: relative;display: flex;gap: var(--space-6);border-bottom: 1px solid var(--border);}.tf-tab{padding: var(--space-3) 0;border: 0;background: none;color: var(--muted-foreground);font: inherit;font-size: 14px;font-weight: 500;white-space: nowrap;cursor: pointer;-webkit-tap-highlight-color: transparent;transition: color var(--dur-out) var(--ease-out);}.tf-tab[aria-selected=\"true\"]{color: var(--foreground);}.tf-tab__count{margin-left: 4px;font-weight: 400;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}@media (hover: hover) and (pointer: fine){.tf-tab:hover{color: var(--foreground);transition-duration: var(--dur-instant);}}.tf-tabs__strip{position: absolute;left: 0;bottom: -1px;width: 1px;height: 2px;background: var(--foreground);transform-origin: left center;transform: translateX(var(--tf-strip-x,0px)) scaleX(var(--tf-strip-w,0));}.tf-tabs[data-ready=\"true\"] .tf-tabs__strip{transition: transform var(--dur-slow) var(--ease-out);}.tf-badge{display: inline-flex;align-items: center;box-sizing: border-box;height: 22px;padding: 0 var(--space-2);border: 1px solid var(--border);border-radius: var(--radius-full);color: var(--muted-foreground);font-size: 12px;font-weight: 500;line-height: 1;white-space: nowrap;transition: color var(--dur-out) var(--ease-out),border-color var(--dur-out) var(--ease-out),background-color var(--dur-out) var(--ease-out);}.tf-badge--strong{color: var(--foreground);border-color: var(--ring);}.tf-badge--solid{background: var(--primary);color: var(--primary-foreground);border-color: var(--primary);}.tf-badge--danger{color: var(--destructive);border-color: color-mix(in oklab,var(--destructive) 40%,transparent);}.tf-card{border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--card);color: var(--card-foreground);}.tf-card__header{display: flex;align-items: baseline;justify-content: space-between;gap: var(--space-4);padding: var(--space-4);border-bottom: 1px solid var(--border);}.tf-card__title{margin: 0;font-size: 16px;font-weight: 500;line-height: 1.4;letter-spacing: -0.01em;}.tf-card__meta{font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;white-space: nowrap;}.tf-card__body{padding: var(--space-4);}.tf-card__footer{padding: var(--space-3) var(--space-4);border-top: 1px solid var(--border);font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.tf-list{margin: 0;padding: 0;list-style: none;}.tf-list__row{display: flex;align-items: center;gap: var(--space-3);min-height: 44px;box-sizing: border-box;padding: var(--space-2) var(--space-4);transition: background-color var(--dur-out) var(--ease-out);}.tf-list__row:not([hidden]) ~ .tf-list__row{border-top: 1px solid var(--border);}.tf-list--plain .tf-list__row{padding-inline: 0;}.tf-list__title{flex: 1;min-width: 0;font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;transition: color var(--dur-out) var(--ease-out);}.tf-list__meta{font-size: 13px;color: var(--muted-foreground);white-space: nowrap;font-variant-numeric: tabular-nums;}.tf-list__row[data-done=\"true\"] .tf-list__title{color: var(--muted-foreground);}@media (hover: hover) and (pointer: fine){.tf-list--hover .tf-list__row:hover{background: var(--hover);transition-duration: var(--dur-instant);}}.tf-empty{display: grid;justify-items: start;gap: var(--space-2);padding: var(--space-8) var(--space-4);}.tf-empty__title{margin: 0;font-size: 14px;font-weight: 500;}.tf-empty__text{margin: 0 0 var(--space-2);font-size: 14px;color: var(--muted-foreground);}.tf-menu-anchor{position: relative;display: inline-block;}.tf-menu{position: absolute;top: calc(100% + 6px);right: 0;z-index: 20;min-width: 180px;box-sizing: border-box;padding: 4px;border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--popover);color: var(--popover-foreground);box-shadow: var(--shadow-overlay);transform-origin: top right;opacity: 0;transform: scale(var(--pop-from)) translateY(calc(var(--pop-shift) * -1));visibility: hidden;transition: opacity 150ms var(--ease-out),transform 150ms var(--ease-out),visibility 0s linear 150ms;}.tf-menu[data-open=\"true\"]{opacity: 1;transform: none;visibility: visible;transition: opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out),visibility 0s;}.tf-menu__item{display: flex;align-items: center;width: 100%;box-sizing: border-box;padding: 6px var(--space-2);border: 0;border-radius: var(--radius-sm);background: none;color: inherit;font: inherit;font-size: 14px;text-align: left;cursor: pointer;transition: background-color var(--dur-out) var(--ease-out);}.tf-menu--start{right: auto;left: 0;transform-origin: top left;}.tf-menu__item--danger{color: var(--destructive);}.tf-menu__sep{height: 1px;margin: 4px -4px;background: var(--border);}@media (hover: hover) and (pointer: fine){.tf-menu__item:hover{background: var(--hover);transition-duration: var(--dur-instant);}}.tf-overlay{position: fixed;inset: 0;z-index: 40;display: grid;place-items: center;padding: var(--space-4);background: oklch(0 0 0 / 0.4);opacity: 0;visibility: hidden;transition: opacity var(--dur-fast) var(--ease-out),visibility 0s linear var(--dur-fast);}.tf-overlay[data-open=\"true\"]{opacity: 1;visibility: visible;transition: opacity var(--dur-base) var(--ease-out),visibility 0s;}.tf-dialog{width: 100%;max-width: 420px;box-sizing: border-box;padding: var(--space-6);border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--popover);color: var(--popover-foreground);box-shadow: var(--shadow-overlay);transform: scale(var(--pop-from));transition: transform var(--dur-fast) var(--ease-out);}.tf-overlay[data-open=\"true\"] .tf-dialog{transform: none;transition: transform var(--dur-spring) var(--ease-spring);}.tf-dialog__title{margin: 0 0 var(--space-2);font-size: 16px;font-weight: 500;line-height: 1.4;letter-spacing: -0.01em;}.tf-dialog__text{margin: 0 0 var(--space-6);font-size: 14px;color: var(--muted-foreground);}.tf-dialog__actions{display: flex;flex-wrap: wrap;justify-content: flex-end;gap: var(--space-2);}.tf-toasts{position: fixed;right: max(var(--space-6),env(safe-area-inset-right,0px));bottom: max(var(--space-6),env(safe-area-inset-bottom,0px));z-index: 50;display: grid;justify-items: end;gap: var(--space-2);pointer-events: none;}.tf-toast{padding: var(--space-3) var(--space-4);border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--popover);color: var(--popover-foreground);box-shadow: var(--shadow-overlay);font-size: 14px;opacity: 0;transform: translateX(var(--slide));transition: opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out);}.tf-toast[data-open=\"true\"]{opacity: 1;transform: none;transition-duration: var(--dur-slow);}.tf-stats{display: grid;grid-template-columns: repeat(4,minmax(0,1fr));border-block: 1px solid var(--border);}.tf-stat{padding: var(--space-6) var(--space-6) var(--space-6) 0;}.tf-stat + .tf-stat{padding-left: var(--space-6);border-left: 1px solid var(--border);}.tf-stat__label{margin: 0;font-size: 13px;color: var(--muted-foreground);}.tf-stat__value{margin: var(--space-2) 0 0;font-size: 28px;font-weight: 500;line-height: 1.2;letter-spacing: -0.02em;font-variant-numeric: tabular-nums;}.tf-stat__note{margin: var(--space-1) 0 0;font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}@media (max-width: 640px){.tf-stats{grid-template-columns: repeat(2,minmax(0,1fr));}.tf-stat{padding: var(--space-4) var(--space-4) var(--space-4) 0;}.tf-stat:nth-child(odd){padding-left: 0;border-left: 0;}.tf-stat:nth-child(even){padding-left: var(--space-4);}.tf-stat:nth-child(n + 3){border-top: 1px solid var(--border);}.tf-stat__value{font-size: 24px;}}.tf-progress{height: 4px;border-radius: var(--radius-full);background: var(--border);overflow: hidden;}.tf-progress__bar{height: 100%;border-radius: inherit;background: var(--foreground);transform-origin: left center;transform: scaleX(var(--tf-progress,0));transition: transform var(--dur-slow) var(--ease-out);}.tf-meter{display: grid;gap: var(--space-2);padding: var(--space-3) 0;}.tf-meter__line{display: flex;align-items: baseline;justify-content: space-between;gap: var(--space-4);font-size: 14px;}.tf-props{margin: 0;}.tf-props__row{display: flex;align-items: baseline;justify-content: space-between;gap: var(--space-4);padding: var(--space-3) 0;border-bottom: 1px solid var(--border);font-size: 14px;}.tf-props__row:first-child{border-top: 1px solid var(--border);}.tf-props__row dt{color: var(--muted-foreground);}.tf-props__row dd{margin: 0;text-align: right;font-variant-numeric: tabular-nums;}.tf-prose{max-width: 640px;font-size: 16px;line-height: 1.7;text-wrap: pretty;}.tf-prose p{margin: 0 0 1em;}.tf-prose p:last-child{margin-bottom: 0;}.tf-page-header{display: grid;gap: var(--space-3);max-width: 640px;padding-block: var(--space-12) var(--space-8);}.tf-page-header__eyebrow{margin: 0;font-size: 13px;line-height: 1.5;color: var(--muted-foreground);}.tf-page-header__title{margin: 0;font-size: 36px;font-weight: 500;line-height: 1.12;letter-spacing: -0.03em;text-wrap: balance;}.tf-page-header__lead{margin: 0;max-width: 480px;font-size: 16px;line-height: 1.65;color: var(--muted-foreground);text-wrap: pretty;font-variant-numeric: tabular-nums;}.tf-page-header__actions{display: flex;flex-wrap: wrap;gap: var(--space-2);margin-top: var(--space-3);}.tf-page-header__title--moment{font-size: 48px;line-height: 1.08;letter-spacing: -0.035em;}.tf-page{box-sizing: border-box;max-width: 1008px;margin-inline: auto;padding-inline: max(var(--space-6),env(safe-area-inset-left,0px)) max(var(--space-6),env(safe-area-inset-right,0px));padding-bottom: var(--space-24);}.tf-page--narrow{max-width: 768px;}.tf-topbar{display: flex;align-items: center;justify-content: space-between;gap: var(--space-6);height: 56px;border-bottom: 1px solid var(--border);}.tf-topbar__name{font-size: 14px;font-weight: 500;letter-spacing: -0.01em;white-space: nowrap;}.tf-nav{display: flex;align-items: center;gap: var(--space-6);min-width: 0;}.tf-nav__item{color: var(--muted-foreground);font-size: 13px;text-decoration: none;white-space: nowrap;transition: color var(--dur-out) var(--ease-out);}.tf-nav__item[aria-current=\"page\"]{color: var(--foreground);}.tf-sidenav{display: grid;align-content: start;gap: 2px;}.tf-sidenav__item{display: block;margin-inline: calc(var(--space-3) * -1);padding: 6px var(--space-3);border-radius: var(--radius-md);color: var(--muted-foreground);font-size: 14px;text-decoration: none;transition: background-color var(--dur-out) var(--ease-out),color var(--dur-out) var(--ease-out);}.tf-sidenav__item[aria-current=\"true\"]{background: var(--selected);color: var(--foreground);}@media (hover: hover) and (pointer: fine){.tf-nav__item:hover{color: var(--foreground);transition-duration: var(--dur-instant);}.tf-sidenav__item:hover{background: var(--hover);color: var(--foreground);transition-duration: var(--dur-instant);}}.tf-split{display: grid;grid-template-columns: 184px minmax(0,1fr);gap: var(--space-12);align-items: start;}.tf-split>.tf-sidenav{position: sticky;top: var(--space-6);}.tf-columns{display: grid;grid-template-columns: minmax(0,1fr) 264px;gap: var(--space-12);align-items: start;}.tf-halves{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: var(--space-12);align-items: start;}.tf-toolbar{display: flex;flex-wrap: wrap;align-items: flex-end;justify-content: space-between;gap: var(--space-4);margin-bottom: var(--space-4);}.tf-toolbar .tf-tabs{flex: 1;min-width: 0;}.tf-toolbar:has(+ .tf-stats){margin-bottom: 0;}.tf-toolbar + .tf-stats{border-top: 0;}.tf-section{display: grid;gap: var(--space-4);padding-block: var(--space-8);border-top: 1px solid var(--border);}.tf-section:first-child{padding-top: 0;border-top: 0;}.tf-section__title{margin: 0;font-size: 16px;font-weight: 500;line-height: 1.4;letter-spacing: -0.01em;}.tf-section__text{margin: calc(var(--space-2) * -1) 0 0;max-width: 480px;font-size: 14px;color: var(--muted-foreground);}.tf-actions{display: flex;flex-wrap: wrap;align-items: center;gap: var(--space-2);}.tf-form{display: grid;gap: var(--space-6);max-width: 480px;}.tf-back{display: inline-block;margin-top: var(--space-6);font-size: 13px;}.tf-back + .tf-page-header{padding-top: var(--space-3);}@media (max-width: 760px){.tf-split,.tf-columns,.tf-halves{grid-template-columns: minmax(0,1fr);gap: var(--space-8);}.tf-split>.tf-sidenav{position: static;}.tf-sidenav{display: flex;flex-wrap: wrap;gap: var(--space-1) var(--space-2);}.tf-sidenav__item{margin-inline: 0;}}@media (max-width: 640px){.tf-page-header{padding-block: var(--space-8) var(--space-6);}.tf-page-header__title{font-size: 28px;}.tf-page-header__title--moment{font-size: 36px;}.tf-nav{gap: var(--space-4);}}.tf-radio{appearance: none;-webkit-appearance: none;position: relative;display: inline-grid;place-content: center;flex: none;box-sizing: border-box;width: 16px;height: 16px;margin: 0;border: 1px solid var(--muted-foreground);border-radius: 50%;background: transparent;cursor: pointer;transition: border-color var(--dur-fast) var(--ease-out),transform var(--dur-spring) var(--ease-spring);}.tf-radio::after{content: \"\";width: 8px;height: 8px;border-radius: 50%;background: var(--primary);transform: scale(0.4);opacity: 0;transition: transform var(--dur-spring) var(--ease-spring),opacity var(--dur-fast) var(--ease-out);}.tf-radio:checked{border-color: var(--primary);}.tf-radio:checked::after{transform: scale(1);opacity: 1;}.tf-radio:active{transform: scale(var(--press-scale-small));transition-duration: var(--dur-fast),var(--dur-press);transition-timing-function: var(--ease-out);}.tf-choices{display: grid;gap: var(--space-2);}.tf-choice{display: flex;align-items: flex-start;gap: var(--space-3);padding: var(--space-4);border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--card);cursor: pointer;-webkit-tap-highlight-color: transparent;transition: background-color var(--dur-out) var(--ease-out),border-color var(--dur-out) var(--ease-out),transform var(--dur-release) var(--ease-bounce);}.tf-choice .tf-radio{margin-top: 3px;}.tf-choice__title{display: block;font-size: 14px;font-weight: 500;}.tf-choice__text{display: block;font-size: 13px;color: var(--muted-foreground);}.tf-choice:has(.tf-radio:checked){border-color: var(--foreground);}@media (hover: hover) and (pointer: fine){.tf-choice:hover{background: color-mix(in oklab,var(--foreground) 4%,var(--card));transition-duration: var(--dur-instant),var(--dur-instant),var(--dur-release);}}.tf-choice:active{transform: scale(var(--press-scale-wide));transition-duration: var(--dur-instant),var(--dur-instant),var(--dur-press);transition-timing-function: var(--ease-out);}.tf-table-wrap{overflow-x: auto;}.tf-table{width: 100%;border-collapse: collapse;font-size: 14px;}.tf-table th{height: 40px;padding: 0 var(--space-4);border-bottom: 1px solid var(--border);color: var(--muted-foreground);font-size: 13px;font-weight: 500;text-align: left;white-space: nowrap;}.tf-table td{height: 52px;padding: var(--space-2) var(--space-4);border-bottom: 1px solid var(--border);vertical-align: middle;white-space: nowrap;}.tf-table tbody tr:last-child td{border-bottom: 0;}.tf-table tbody tr{transition: background-color var(--dur-out) var(--ease-out);}.tf-table tbody tr[aria-selected=\"true\"],.tf-table tbody tr[aria-selected=\"true\"]:hover{background: var(--selected);}.tf-table__check{width: 16px;padding-right: 0 !important;}.tf-table__num{text-align: right !important;font-variant-numeric: tabular-nums;white-space: nowrap;}.tf-table__main{display: block;font-weight: 500;}.tf-table__sub{display: block;font-size: 13px;color: var(--muted-foreground);}.tf-table__grow{width: 100%;max-width: 0;}.tf-table__grow .tf-table__main,.tf-table__grow .tf-table__sub{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.tf-table__sort{display: inline-flex;align-items: center;gap: 4px;padding: 0;border: 0;border-radius: 4px;background: none;color: inherit;font: inherit;cursor: pointer;transition: color var(--dur-out) var(--ease-out);}.tf-table__sort::after{content: \"↕\";opacity: 0.4;}th[aria-sort=\"ascending\"] .tf-table__sort,th[aria-sort=\"descending\"] .tf-table__sort{color: var(--foreground);}th[aria-sort=\"ascending\"] .tf-table__sort::after{content: \"↑\";opacity: 1;}th[aria-sort=\"descending\"] .tf-table__sort::after{content: \"↓\";opacity: 1;}@media (hover: hover) and (pointer: fine){.tf-table tbody tr:hover{background: var(--hover);transition-duration: var(--dur-instant);}.tf-table__sort:hover{color: var(--foreground);transition-duration: var(--dur-instant);}}.tf-bulk{display: flex;flex-wrap: wrap;align-items: center;gap: var(--space-2) var(--space-4);padding: var(--space-3) var(--space-4);border-bottom: 1px solid var(--border);font-size: 14px;font-variant-numeric: tabular-nums;}.tf-bulk__count{margin-right: auto;font-weight: 500;}.tf-card__footer--split{display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;gap: var(--space-3);}.tf-master{background: var(--card);display: grid;grid-template-columns: 320px minmax(0,1fr);min-height: 460px;border: 1px solid var(--border);border-radius: var(--radius-lg);overflow: hidden;}.tf-master__list{border-right: 1px solid var(--border);}.tf-master__detail{min-width: 0;padding: var(--space-6);}.tf-item{display: grid;gap: 2px;width: 100%;box-sizing: border-box;padding: var(--space-3) var(--space-4);border: 0;border-bottom: 1px solid var(--border);background: none;color: inherit;font: inherit;text-align: left;cursor: pointer;-webkit-tap-highlight-color: transparent;transition: background-color var(--dur-out) var(--ease-out);}.tf-item:focus-visible{outline-offset: -2px;}.tf-item[aria-selected=\"true\"],.tf-item[aria-selected=\"true\"]:hover{background: var(--selected);}.tf-item__top{display: flex;align-items: baseline;justify-content: space-between;gap: var(--space-3);}.tf-item__title{min-width: 0;font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.tf-item__time{flex: none;font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.tf-item__text{font-size: 13px;color: var(--muted-foreground);overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.tf-item[data-unread=\"true\"] .tf-item__title{font-weight: 500;}.tf-item[data-unread=\"true\"] .tf-item__title::before{content: \"\";display: inline-block;width: 6px;height: 6px;margin-right: var(--space-2);border-radius: 50%;background: var(--foreground);vertical-align: middle;}@media (hover: hover) and (pointer: fine){.tf-item:hover{background: var(--hover);transition-duration: var(--dur-instant);}}.tf-narrow{max-width: 360px;margin-inline: auto;padding-top: var(--space-16);}.tf-narrow--wide{max-width: 520px;}.tf-narrow .tf-page-header{padding-top: 0;}.tf-btn--block{width: 100%;}.tf-field__row{display: flex;align-items: baseline;justify-content: space-between;gap: var(--space-3);}.tf-divider{display: flex;align-items: center;gap: var(--space-3);color: var(--muted-foreground);font-size: 13px;}.tf-divider::before,.tf-divider::after{content: \"\";flex: 1;height: 1px;background: var(--border);}.tf-check{display: flex;align-items: center;gap: var(--space-2);font-size: 14px;cursor: pointer;}.tf-steps{display: grid;gap: var(--space-2);margin-bottom: var(--space-8);}.tf-steps__label{font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.tf-hero{display: grid;gap: var(--space-6);max-width: 720px;padding-block: var(--space-24) var(--space-16);}.tf-hero__eyebrow{margin: 0;font-size: 13px;color: var(--muted-foreground);}.tf-hero__title{margin: 0;font-size: 48px;font-weight: 500;line-height: 1.08;letter-spacing: -0.035em;text-wrap: balance;}.tf-hero__lead{margin: 0;max-width: 560px;font-size: 16px;line-height: 1.65;color: var(--muted-foreground);text-wrap: pretty;}.tf-hero__actions{display: flex;flex-wrap: wrap;align-items: center;gap: var(--space-2) var(--space-4);}.tf-hero__note{font-size: 13px;color: var(--muted-foreground);}.tf-band{padding-block: var(--space-16);border-top: 1px solid var(--border);}.tf-band__title{margin: 0 0 var(--space-8);font-size: 24px;font-weight: 500;line-height: 1.25;letter-spacing: -0.02em;text-wrap: balance;}.tf-points__row{display: grid;grid-template-columns: 240px minmax(0,1fr);gap: var(--space-8);padding-block: var(--space-6);border-top: 1px solid var(--border);}.tf-points__row:last-child{padding-bottom: 0;}.tf-points__title{margin: 0;font-size: 16px;font-weight: 500;line-height: 1.4;letter-spacing: -0.01em;}.tf-points__text{margin: 0;max-width: 560px;font-size: 16px;line-height: 1.7;color: var(--muted-foreground);text-wrap: pretty;}.tf-plans{background: var(--card);display: grid;grid-template-columns: repeat(2,minmax(0,1fr));border: 1px solid var(--border);border-radius: var(--radius-lg);}.tf-plan{display: grid;align-content: start;gap: var(--space-4);padding: var(--space-6);}.tf-plan + .tf-plan{border-left: 1px solid var(--border);}.tf-plan__name{margin: 0;font-size: 16px;font-weight: 500;}.tf-plan__price{margin: 0;font-size: 36px;font-weight: 500;line-height: 1.12;letter-spacing: -0.03em;font-variant-numeric: tabular-nums;}.tf-plan__unit{font-size: 14px;font-weight: 400;letter-spacing: 0;color: var(--muted-foreground);}.tf-plan__list{display: grid;gap: var(--space-2);margin: 0;padding: 0;list-style: none;font-size: 14px;}.tf-footer{display: flex;flex-wrap: wrap;justify-content: space-between;gap: var(--space-4);padding-block: var(--space-8);border-top: 1px solid var(--border);color: var(--muted-foreground);font-size: 13px;}.tf-footer__links{display: flex;flex-wrap: wrap;gap: var(--space-6);}@media (max-width: 760px){.tf-master{grid-template-columns: minmax(0,1fr);min-height: 0;}.tf-master__list{border-right: 0;border-bottom: 1px solid var(--border);}.tf-points__row{grid-template-columns: minmax(0,1fr);gap: var(--space-2);}.tf-plans{grid-template-columns: minmax(0,1fr);}.tf-plan + .tf-plan{border-left: 0;border-top: 1px solid var(--border);}}@media (max-width: 640px){.tf-hero{padding-block: var(--space-16) var(--space-12);}.tf-hero__title{font-size: 36px;}.tf-band{padding-block: var(--space-12);}.tf-band__title{font-size: 20px;}.tf-narrow{padding-top: var(--space-8);}}@media (prefers-reduced-motion: reduce){:host(:not([data-motion=\"full\"])) .tf-btn{transition: background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);}:host(:not([data-motion=\"full\"])) .tf-btn:active{transform: none;}:host(:not([data-motion=\"full\"])) .tf-checkbox{transition: background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);}:host(:not([data-motion=\"full\"])) .tf-checkbox:active{transform: none;}:host(:not([data-motion=\"full\"])) .tf-checkbox::after,:host(:not([data-motion=\"full\"])) .tf-checkbox:checked::after{transition: none;}:host(:not([data-motion=\"full\"])) .tf-switch::after{transition: none;}:host(:not([data-motion=\"full\"])) .tf-radio{transition: border-color var(--dur-fast) var(--ease-out);}:host(:not([data-motion=\"full\"])) .tf-radio:active{transform: none;}:host(:not([data-motion=\"full\"])) .tf-radio::after{transform: none;transition: opacity var(--dur-fast) var(--ease-out);}:host(:not([data-motion=\"full\"])) .tf-choice{transition: background-color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);}:host(:not([data-motion=\"full\"])) .tf-choice:active{transform: none;}:host(:not([data-motion=\"full\"])) .tf-tabs[data-ready=\"true\"] .tf-tabs__strip{transition: none;}:host(:not([data-motion=\"full\"])) .tf-menu{transform: none;transition: opacity 150ms var(--ease-out),visibility 0s linear 150ms;}:host(:not([data-motion=\"full\"])) .tf-menu[data-open=\"true\"]{transition: opacity var(--dur-fast) var(--ease-out),visibility 0s;}:host(:not([data-motion=\"full\"])) .tf-dialog,:host(:not([data-motion=\"full\"])) .tf-overlay[data-open=\"true\"] .tf-dialog{transform: none;transition: none;}:host(:not([data-motion=\"full\"])) .tf-toast{transform: none;}:host(:not([data-motion=\"full\"])) .tf-progress__bar{transition: none;}:host(:not([data-motion=\"full\"])) .tf-spinner{animation-duration: 1.5s;}}:host{all: initial;display: block;--rail: 184px;}*{box-sizing: border-box;}h1,h2,h3,h4,p,ul,ol,dl,dd,figure,blockquote{margin: 0;padding: 0;}ul,ol{list-style: none;}img{display: block;max-width: 100%;}button{font: inherit;color: inherit;}.studio-root{container-type: inline-size;padding-bottom: var(--space-24);}.st-main{max-width: 920px;}@container (max-width: 1099px){.st-main{max-width: none;}}.st-hero{display: grid;grid-template-columns: minmax(0,1fr) 160px;gap: var(--space-8);align-items: start;padding-block: var(--space-12) var(--space-8);}.st-hero__portrait{width: 160px;height: 160px;border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--card);object-fit: cover;}.st-hero .tf-hero__title{max-width: 680px;}.st-chain{display: flex;flex-wrap: wrap;align-items: center;gap: var(--space-2);margin: 0;padding: 0;color: var(--muted-foreground);font-size: 13px;}.st-chain li{display: inline-flex;align-items: center;gap: var(--space-2);}.st-chain li + li::before{content: \"→\";color: var(--ring);}.st-remote-note{font-size: 13px;color: var(--muted-foreground);}.st-band{padding-block: var(--space-12);border-top: 1px solid var(--border);scroll-margin-top: var(--space-6);}.st-band__head{display: grid;gap: var(--space-2);margin-bottom: var(--space-6);}.st-points--after{margin-top: var(--space-6);}.st-band__head .tf-heading{margin: 0;}.st-band__head p{max-width: 560px;color: var(--muted-foreground);font-size: 14px;}.st-sub{margin: var(--space-12) 0 var(--space-4);}.st-trust{display: grid;gap: var(--space-3);padding-block: var(--space-6);}.st-trust .tf-heading{margin-bottom: var(--space-2);}.st-logos{display: grid;grid-template-columns: repeat(4,minmax(0,1fr));margin: 0;padding: 0;overflow: hidden;}.st-logo{display: grid;justify-items: center;align-content: center;gap: var(--space-3);min-height: 112px;padding: var(--space-4);}.st-logo + .st-logo{border-left: 1px solid var(--border);}.st-logo img{height: 32px;width: auto;max-width: 100%;object-fit: contain;filter: brightness(0);opacity: 0.88;}:host([data-theme=\"dark\"]) .st-logo img{filter: brightness(0) invert(1);}.st-logo span{font-size: 13px;color: var(--muted-foreground);}.st-servers{display: grid;grid-template-columns: 200px minmax(0,1fr);align-items: baseline;gap: var(--space-4);padding-top: var(--space-2);}.st-servers__label{font-size: 14px;color: var(--muted-foreground);}.st-servers__label b{color: var(--foreground);font-weight: 500;}.st-servers ul{display: flex;flex-wrap: wrap;gap: var(--space-2) var(--space-6);}.st-servers li{font-size: 16px;font-weight: 500;letter-spacing: -0.01em;}.st-creators{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));column-gap: var(--space-8);}.st-creator{display: grid;grid-template-columns: 40px minmax(0,1fr) auto;align-items: center;gap: var(--space-3);min-height: 64px;padding-block: var(--space-3);border-top: 1px solid var(--border);}.st-creator img{width: 40px;height: 40px;border-radius: var(--radius-full);border: 1px solid var(--border);background: var(--muted);object-fit: cover;}.st-creator__name{font-size: 14px;font-weight: 500;}.st-creator__where{font-size: 13px;color: var(--muted-foreground);}.st-creator__count{font-size: 14px;font-variant-numeric: tabular-nums;text-align: right;}.st-more{margin-top: var(--space-6);border-top: 1px solid var(--border);}.st-more>summary{display: flex;align-items: center;justify-content: space-between;gap: var(--space-4);min-height: 48px;font-size: 14px;font-weight: 500;cursor: pointer;list-style: none;border-radius: var(--radius-md);transition: background-color var(--dur-out) var(--ease-out);}.st-more>summary::-webkit-details-marker{display: none;}.st-more>summary::after{content: \"+\";color: var(--muted-foreground);font-weight: 400;transition: transform var(--dur-base) var(--ease-out);}.st-more[open]>summary::after{transform: rotate(45deg);}.st-more>summary:focus-visible{outline: 2px solid var(--foreground);outline-offset: 2px;}@media (hover: hover) and (pointer: fine){.st-more>summary:hover{background: var(--hover);transition-duration: var(--dur-instant);}}.st-more__body{padding-bottom: var(--space-6);}.st-table-wrap{max-height: 480px;overflow: auto;border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--card);}.st-table{width: 100%;border-collapse: collapse;font-size: 14px;font-variant-numeric: tabular-nums;}.st-table th,.st-table td{height: 44px;padding: 0 var(--space-4);border-bottom: 1px solid var(--border);text-align: right;white-space: nowrap;}.st-table th:first-child,.st-table td:first-child{text-align: left;}.st-table thead th{position: sticky;top: 0;height: 40px;background: var(--card);font-size: 13px;font-weight: 500;color: var(--muted-foreground);}.st-table tr:last-child td{border-bottom: 0;}.st-table .is-empty{color: var(--muted-foreground);}.st-media{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: var(--space-6);}.st-media--clips{grid-template-columns: repeat(3,minmax(0,1fr));margin-top: var(--space-8);}.st-player{display: grid;gap: var(--space-3);}.st-player__frame{position: relative;aspect-ratio: 16 / 9;overflow: hidden;border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--muted);}.st-player__frame img,.st-player__frame iframe{width: 100%;height: 100%;border: 0;object-fit: cover;}.st-player__play{position: absolute;inset: 0;display: grid;place-items: center;border: 0;background: transparent;cursor: pointer;-webkit-tap-highlight-color: transparent;}.st-player__play span{display: inline-flex;align-items: center;gap: var(--space-2);height: 36px;padding: 0 var(--space-4);border: 1px solid var(--input);border-radius: var(--radius-full);background: var(--card);color: var(--foreground);font-size: 14px;font-weight: 500;box-shadow: var(--shadow-overlay);transition: background-color var(--dur-out) var(--ease-out),transform var(--dur-release) var(--ease-bounce);}.st-player__play:focus-visible{outline: 2px solid var(--foreground);outline-offset: -4px;border-radius: var(--radius-lg);}@media (hover: hover) and (pointer: fine){.st-player__play:hover span{background: color-mix(in oklab,var(--foreground) 5%,var(--card));transition-duration: var(--dur-instant),var(--dur-release);}}.st-player__play:active span{transform: scale(var(--press-scale));transition-duration: var(--dur-instant),var(--dur-press);transition-timing-function: var(--ease-out);}.st-player__duration{position: absolute;right: var(--space-2);bottom: var(--space-2);padding: 0 var(--space-2);border-radius: var(--radius-sm);background: var(--card);font-size: 12px;font-weight: 500;line-height: 20px;font-variant-numeric: tabular-nums;}.st-clips{display: grid;grid-template-columns: repeat(3,minmax(0,1fr));gap: var(--space-6);}.st-clip{display: grid;grid-template-columns: 112px minmax(0,1fr);align-items: center;gap: var(--space-3);}.st-clip .st-player__play span{height: 28px;padding: 0 var(--space-3);font-size: 13px;}.st-clip:has(iframe){grid-column: 1 / -1;grid-template-columns: minmax(0,560px) minmax(0,1fr);}.st-player__title{font-size: 14px;font-weight: 500;}.st-player__meta{font-size: 13px;color: var(--muted-foreground);}.st-points{display: grid;}.st-points__row{display: grid;grid-template-columns: 200px minmax(0,1fr);gap: var(--space-8);padding-block: var(--space-4);border-top: 1px solid var(--border);}.st-points__title{font-size: 14px;font-weight: 500;}.st-points__text{font-size: 14px;color: var(--muted-foreground);max-width: 560px;}.st-reviews{display: grid;grid-template-columns: repeat(3,minmax(0,1fr));gap: var(--space-6);}.st-review{display: grid;align-content: space-between;gap: var(--space-4);padding-top: var(--space-4);border-top: 1px solid var(--foreground);}.st-review blockquote{font-size: 14px;line-height: 1.7;}.st-review figcaption{font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.st-band__foot{margin-top: var(--space-6);}.st-price-lead{margin: var(--space-6) 0 var(--space-2);font-size: 14px;color: var(--muted-foreground);}.st-price-panel[hidden]{display: none;}.st-price-panel.is-entering{animation: st-in var(--dur-base) var(--ease-out);}@keyframes st-in{from{opacity: 0;transform: translateY(var(--pop-shift));}}.st-offers{margin-top: var(--space-4);}.st-offer{display: grid;grid-template-columns: minmax(0,1fr) 120px auto;align-items: center;gap: var(--space-6);min-height: 88px;padding: var(--space-4);}.st-offer__name{font-size: 16px;font-weight: 500;letter-spacing: -0.01em;}.st-offer__text{margin-top: var(--space-1);font-size: 14px;color: var(--muted-foreground);max-width: 520px;}.st-offer__terms{margin-top: var(--space-1);font-size: 13px;color: var(--muted-foreground);}.st-offer__price{font-size: 16px;font-weight: 500;text-align: right;font-variant-numeric: tabular-nums;white-space: nowrap;}.st-offer + .st-offer{border-top: 1px solid var(--border);}.st-offer__action{min-width: 136px;}.st-note{display: grid;gap: var(--space-1);margin-top: var(--space-6);padding: var(--space-4);border: 1px solid var(--border);border-radius: var(--radius-lg);}.st-note strong{font-size: 14px;font-weight: 500;}.st-note p{font-size: 14px;color: var(--muted-foreground);max-width: 680px;}.st-bullets{display: grid;gap: var(--space-2);font-size: 14px;}.st-bullets li{display: grid;grid-template-columns: 12px minmax(0,1fr);gap: var(--space-2);}.st-bullets li::before{content: \"·\";color: var(--muted-foreground);}.st-bullets--two{grid-template-columns: repeat(2,minmax(0,1fr));column-gap: var(--space-8);}.st-small{margin-top: var(--space-4);font-size: 13px;color: var(--muted-foreground);max-width: 680px;}.st-small__lead{font-weight: 500;color: var(--foreground);}.st-week{display: flex;align-items: center;justify-content: space-between;gap: var(--space-4);margin-bottom: var(--space-4);}.st-week__label{font-size: 16px;font-weight: 500;font-variant-numeric: tabular-nums;}.st-week__nav{display: flex;gap: var(--space-2);}.st-days{display: grid;grid-template-columns: repeat(7,minmax(0,1fr));gap: var(--space-2);}.st-day{display: grid;gap: var(--space-1);justify-items: start;min-height: 72px;padding: var(--space-3);border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--card);cursor: pointer;text-align: left;-webkit-tap-highlight-color: transparent;transition: background-color var(--dur-out) var(--ease-out),border-color var(--dur-out) var(--ease-out),transform var(--dur-release) var(--ease-bounce);}.st-day__name{font-size: 13px;color: var(--muted-foreground);}.st-day__date{font-size: 16px;font-weight: 500;font-variant-numeric: tabular-nums;}.st-day__count{font-size: 12px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.st-day[aria-pressed=\"true\"]{border-color: var(--foreground);}.st-day:disabled{opacity: 0.5;cursor: not-allowed;}.st-day:focus-visible,.st-slot:focus-visible{outline: 2px solid var(--foreground);outline-offset: 2px;}@media (hover: hover) and (pointer: fine){.st-day:not(:disabled):hover{background: color-mix(in oklab,var(--foreground) 4%,var(--card));transition-duration: var(--dur-instant),var(--dur-instant),var(--dur-release);}}.st-day:not(:disabled):active{transform: scale(var(--press-scale-wide));transition-duration: var(--dur-instant),var(--dur-instant),var(--dur-press);transition-timing-function: var(--ease-out);}.st-slots{display: flex;flex-wrap: wrap;gap: var(--space-2);margin-top: var(--space-4);min-height: 36px;}.st-slot[aria-pressed=\"true\"]{background: var(--primary);color: var(--primary-foreground);border-color: var(--primary);}.st-state{display: grid;gap: var(--space-3);justify-items: start;margin-top: var(--space-4);padding: var(--space-6);border: 1px dashed var(--border);border-radius: var(--radius-lg);font-size: 14px;}.st-state p{color: var(--muted-foreground);}.st-state--error{border-style: solid;border-color: color-mix(in oklab,var(--destructive) 40%,transparent);}.st-state--error strong{color: var(--destructive);font-weight: 500;}.st-status{margin-top: var(--space-4);font-size: 13px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.st-inquiry{display: grid;grid-template-columns: minmax(0,1fr) 320px;gap: var(--space-8);align-items: start;}.st-form{display: grid;gap: var(--space-8);}.st-fieldset{display: grid;gap: var(--space-3);margin: 0;padding: 0;border: 0;min-width: 0;}.st-fieldset[hidden]{display: none;}.st-fieldset legend{padding: 0;margin-bottom: var(--space-3);font-size: 16px;font-weight: 500;letter-spacing: -0.01em;}.st-choices{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: var(--space-2);}.st-choice-price{display: block;margin-top: var(--space-1);font-size: 13px;font-variant-numeric: tabular-nums;}.st-checks{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: var(--space-2) var(--space-6);}.st-check{display: flex;align-items: flex-start;gap: var(--space-2);min-height: 36px;padding-block: var(--space-2);font-size: 14px;cursor: pointer;}.st-check .tf-checkbox{margin-top: 2px;}.st-check small{display: block;font-size: 13px;color: var(--muted-foreground);}.st-fields{display: grid;grid-template-columns: repeat(2,minmax(0,1fr));gap: var(--space-4);}.st-fields .tf-field--wide{grid-column: 1 / -1;}.st-mic{max-width: 200px;}.st-summary{position: relative;display: grid;gap: var(--space-4);padding: var(--space-6);}.st-summary__label{font-size: 13px;color: var(--muted-foreground);}.st-summary__items{display: grid;gap: var(--space-2);font-size: 14px;}.st-summary__item{display: flex;justify-content: space-between;gap: var(--space-4);font-variant-numeric: tabular-nums;}.st-summary__item span:last-child{white-space: nowrap;}.st-summary__slot{font-size: 13px;color: var(--muted-foreground);}.st-total{margin: 0;font-size: 48px;font-weight: 500;line-height: 1.08;letter-spacing: -0.035em;font-variant-numeric: tabular-nums;}.st-total__unit{margin-left: var(--space-1);font-size: 16px;font-weight: 400;letter-spacing: 0;color: var(--muted-foreground);}.st-total-note{font-size: 13px;color: var(--muted-foreground);}.st-copy-status{min-height: 20px;font-size: 13px;color: var(--muted-foreground);}.st-preview>summary{font-size: 13px;}.st-preview textarea{width: 100%;min-height: 200px;font-family: var(--font-mono);font-size: 12px;}.st-process{display: grid;grid-template-columns: repeat(4,minmax(0,1fr));gap: var(--space-6);counter-reset: step;}.st-step{position: relative;display: grid;gap: var(--space-2);padding-top: var(--space-6);border-top: 1px solid var(--foreground);counter-increment: step;}.st-step::before{content: counter(step,decimal-leading-zero);position: absolute;top: var(--space-2);font-size: 12px;font-weight: 500;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.st-step:not(:last-child)::after{content: \"→\";position: absolute;top: -11px;right: calc(var(--space-6) / -2 - 6px);padding-inline: var(--space-1);background: var(--background);color: var(--muted-foreground);font-size: 13px;line-height: 20px;}.st-step strong{font-size: 14px;font-weight: 500;}.st-step p{font-size: 14px;color: var(--muted-foreground);}.st-faq .st-more{margin-top: 0;}.st-faq .st-more__body .st-bullets{max-width: 640px;color: var(--muted-foreground);}.st-foot{display: flex;flex-wrap: wrap;justify-content: space-between;gap: var(--space-4);padding-top: var(--space-8);border-top: 1px solid var(--border);font-size: 13px;color: var(--muted-foreground);}@container (max-width: 760px){.st-hero{grid-template-columns: minmax(0,1fr);padding-block: var(--space-12) var(--space-8);}.st-hero__portrait{width: 96px;height: 96px;order: -1;}.st-clip:has(iframe){grid-template-columns: minmax(0,1fr);}.st-logos{grid-template-columns: repeat(2,minmax(0,1fr));}.st-logo:nth-child(3){border-left: 0;}.st-logo:nth-child(n + 3){border-top: 1px solid var(--border);}.st-servers{grid-template-columns: minmax(0,1fr);gap: var(--space-2);}.st-creators,.st-media,.st-clips,.st-reviews,.st-choices,.st-checks,.st-fields,.st-bullets--two{grid-template-columns: minmax(0,1fr);}.st-points__row{grid-template-columns: minmax(0,1fr);gap: var(--space-1);}.st-offer{grid-template-columns: minmax(0,1fr) auto;gap: var(--space-2) var(--space-4);}.st-offer__action{grid-column: 1 / -1;width: 100%;}.st-inquiry{grid-template-columns: minmax(0,1fr);}.st-process{grid-template-columns: minmax(0,1fr);}.st-step:not(:last-child)::after{content: none;}.st-days{grid-template-columns: repeat(4,minmax(0,1fr));}.st-band{padding-block: var(--space-12);}.tf-hero__title{font-size: 36px;}.tf-heading{font-size: 20px;}.st-total{font-size: 36px;}.tf-stats{grid-template-columns: repeat(2,minmax(0,1fr));}.tf-stat{padding: var(--space-4) var(--space-4) var(--space-4) 0;}.tf-stat:nth-child(odd){padding-left: 0;border-left: 0;}.tf-stat:nth-child(even){padding-left: var(--space-4);}.tf-stat:nth-child(n + 3){border-top: 1px solid var(--border);}.tf-stat__value{font-size: 24px;}.tf-tabs{overflow-x: auto;scrollbar-width: none;}}@media (prefers-reduced-motion: reduce){:host(:not([data-motion=\"full\"])) .st-price-panel{animation: none;}:host(:not([data-motion=\"full\"])) .st-day,:host(:not([data-motion=\"full\"])) .st-player__play span{transform: none !important;}}.rail{position: fixed;z-index: 1000;top: var(--space-6);width: var(--rail);display: grid;gap: var(--space-4);padding: var(--space-3);border: 1px solid var(--border);border-radius: var(--radius-lg);background: var(--card);color: var(--foreground);font-family: var(--font-sans);font-size: 14px;line-height: 1.6;word-break: keep-all;opacity: 0;visibility: hidden;transform: translateY(var(--pop-shift));transition: opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out),visibility 0s linear var(--dur-fast);}.rail[data-open=\"true\"]{opacity: 1;visibility: visible;transform: none;transition: opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out),visibility 0s;}.rail__name{padding: var(--space-1) var(--space-2) 0;font-size: 13px;color: var(--muted-foreground);}.rail__nav{position: relative;display: grid;}.rail__item{position: relative;z-index: 1;display: flex;align-items: center;min-height: 32px;padding: 0 var(--space-2);border: 0;border-radius: var(--radius-md);background: transparent;color: var(--muted-foreground);font: inherit;font-size: 14px;text-align: left;cursor: pointer;-webkit-tap-highlight-color: transparent;transition: color var(--dur-out) var(--ease-out),background-color var(--dur-out) var(--ease-out);}.rail__item[aria-current=\"true\"]{color: var(--foreground);font-weight: 500;}.rail__item:focus-visible{outline: 2px solid var(--foreground);outline-offset: 2px;}@media (hover: hover) and (pointer: fine){.rail__item:hover{background: var(--hover);color: var(--foreground);transition-duration: var(--dur-instant);}}.rail__marker{position: absolute;left: 0;right: 0;top: 0;height: 32px;border-radius: var(--radius-md);background: var(--accent);transform: translateY(var(--rail-y,0px));transition: transform var(--dur-slow) var(--ease-out);}.rail__meter{display: grid;gap: var(--space-2);padding: 0 var(--space-2);}.rail__meter-line{display: flex;justify-content: space-between;font-size: 12px;color: var(--muted-foreground);font-variant-numeric: tabular-nums;}.rail .tf-btn{width: 100%;}.rail--bar{top: auto;left: 0 !important;right: 0;bottom: 0;width: auto;display: flex;align-items: center;justify-content: space-between;gap: var(--space-3);padding: var(--space-3) var(--space-4) max(var(--space-3),env(safe-area-inset-bottom,0px));border-width: 1px 0 0;border-radius: 0;box-shadow: var(--shadow-overlay);}.rail--bar .rail__nav,.rail--bar .rail__meter,.rail--bar .rail__name{display: none;}.rail__now{display: none;font-size: 14px;font-weight: 500;}.rail--bar .rail__now{display: block;}.rail--bar .tf-btn{width: auto;}@media (prefers-reduced-motion: reduce){:host(:not([data-motion=\"full\"])) .rail{transform: none;}:host(:not([data-motion=\"full\"])) .rail__marker{transition: none;}}.st-trust__note{font-size: 13px;color: var(--muted-foreground);}.st-principles{display: flex;flex-wrap: wrap;gap: var(--space-2) 0;margin-top: var(--space-1);}.st-principles li{font-size: 14px;font-weight: 500;}.st-principles li + li::before{content: \"·\";margin-right: var(--space-6);color: var(--muted-foreground);font-weight: 400;}.st-faces{display: grid;grid-template-columns: repeat(6,minmax(0,1fr));gap: var(--space-4);}.st-faces li{display: grid;justify-items: center;gap: var(--space-2);text-align: center;}.st-faces img{width: 56px;height: 56px;border-radius: var(--radius-full);border: 1px solid var(--border);background: var(--muted);object-fit: cover;}.st-faces span{font-size: 13px;font-weight: 500;}.st-review blockquote{display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;}.st-more--form{margin-top: 0;}.st-more--form .st-more__body{padding-top: var(--space-2);}.st-sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap;}@container (max-width: 760px){.st-faces{grid-template-columns: repeat(3,minmax(0,1fr));row-gap: var(--space-6);}}";
const ARTMUG_CSS = "html:has(#akmong-studio[data-theme=\"light\"]){--ak-bg: oklch(0.985 0 0);--ak-card: oklch(1 0 0);--ak-fg: oklch(0.205 0 0);--ak-muted: oklch(0.48 0 0);--ak-border: oklch(0.91 0 0);--ak-input: oklch(0.88 0 0);--ak-hover: color-mix(in oklab,oklch(0.205 0 0) 6%,transparent);--ak-shadow: 0 8px 24px rgb(0 0 0 / 0.08),0 2px 6px rgb(0 0 0 / 0.04);--ak-font: \"Pretendard Variable\",Pretendard,-apple-system,BlinkMacSystemFont,\"Apple SD Gothic Neo\",\"Noto Sans KR\",sans-serif;--ak-ease: cubic-bezier(0.23,1,0.32,1);& body{background: var(--ak-bg);}& #goods_head{font-family: var(--ak-font);}& #goods_head .making,& #goods_head .goods_num{color: var(--ak-muted);font-size: 13px;}& #goods_head .goods_title,& #goods_head .goods_title a{font-size: 24px;font-weight: 500;letter-spacing: -0.02em;color: var(--ak-fg);}& #rightInfo{font-family: var(--ak-font);}& #profile,& #goodsInfo,& #goodsOrder{box-sizing: border-box;background: var(--ak-card);border: 1px solid var(--ak-border);border-radius: 10px;overflow: hidden;}& #goodsInfo,& #goodsOrder{margin-top: 12px;}& #profile .nic_name a{font-size: 16px;font-weight: 500;color: var(--ak-fg);}& #profile .brief{color: var(--ak-muted);font-size: 13px;line-height: 1.6;}& #receive_Y,& #profile .bill_mark{display: inline-flex;align-items: center;height: 22px;padding: 0 8px;border: 1px solid var(--ak-border);border-radius: 9999px;background: transparent;color: var(--ak-fg);font-size: 12px;font-weight: 500;line-height: 1;}& #profile .contact .orange,& #payment .guide .orange{color: var(--ak-fg);}& #goodsInfo .head,& #goodsOrder .head{height: auto;padding: 16px;background: transparent;color: var(--ak-fg);border-bottom: 1px solid var(--ak-border);font-size: 16px;font-weight: 500;line-height: 1.4;text-align: left;letter-spacing: -0.01em;}& #goodsInfo .left_right_dl{font-size: 14px;}& #goodsInfo .left_right_dl dl:first-child{color: var(--ak-muted);}& .goodsTitle_op{font-size: 14px;font-weight: 500;color: var(--ak-fg);}& .opBox{box-sizing: border-box;border: 1px solid var(--ak-input) !important;border-radius: 8px;background: var(--ak-card);}& .opBox > div:last-child{border: 1px solid var(--ak-border) !important;border-radius: 10px;background: var(--ak-card) !important;box-shadow: var(--ak-shadow);padding: 4px;margin-top: 4px !important;}& .opBox > div:last-child > div{border-radius: 8px;transition: background-color 240ms var(--ak-ease);}& .opBox > div:last-child > div:hover{background: var(--ak-hover);transition-duration: 80ms;}& #goodsOrder input[type=\"text\"]{border: 1px solid var(--ak-input);border-radius: 8px;}& #payment .totalTitle{font-size: 14px;font-weight: 500;color: var(--ak-fg);}& #payment .totalPrice,& #payment .totalPrice *{color: var(--ak-fg) !important;font-weight: 500;font-variant-numeric: tabular-nums;}& .btn_qna,& .btn_order,& #cont_qna .sBtn1{box-sizing: border-box;display: flex;align-items: center;justify-content: center;height: 48px;line-height: 1;border-radius: 8px;font-family: var(--ak-font);font-size: 14px;font-weight: 500;cursor: pointer;transition: background-color 240ms var(--ak-ease),transform 420ms var(--ak-ease);}& .btn_qna,& #cont_qna .sBtn1{background: var(--ak-card);color: var(--ak-fg);border: 1px solid var(--ak-input);}& .btn_order{background: var(--ak-fg);color: var(--ak-card);border: 1px solid var(--ak-fg);box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.14);}& .btn_qna:active,& .btn_order:active,& #cont_qna .sBtn1:active{transform: scale(0.97);transition-duration: 80ms,240ms;}@media (hover: hover) and (pointer: fine){& .btn_qna:hover,& #cont_qna .sBtn1:hover{background: color-mix(in oklab,var(--ak-fg) 5%,var(--ak-card));transition-duration: 80ms,420ms;}& .btn_order:hover{background: color-mix(in oklab,var(--ak-fg) 88%,var(--ak-bg));transition-duration: 80ms,420ms;}}& .btn_open .btn_open_btn{border: 1px solid var(--ak-input);border-radius: 8px;background: var(--ak-card);color: var(--ak-fg);font-family: var(--ak-font);font-size: 14px;font-weight: 500;transition: background-color 240ms var(--ak-ease);}@media (hover: hover) and (pointer: fine){& .btn_open .btn_open_btn:hover{background: color-mix(in oklab,var(--ak-fg) 5%,var(--ak-card));transition-duration: 80ms;}}& #detailViews{font-family: var(--ak-font);color: var(--ak-muted);font-size: 14px;line-height: 1.7;}& #detailViews .s_title,& #cont_qna .s_title,& #cont_after .s_title{font-family: var(--ak-font);font-size: 24px;font-weight: 500;letter-spacing: -0.02em;color: var(--ak-fg);}& #cont_qna,& #cont_after{box-sizing: border-box;margin-top: 48px;padding: 24px;background: var(--ak-card);border: 1px solid var(--ak-border);border-radius: 10px;font-family: var(--ak-font);}& #cont_after .blank[style*=\"95px\"]{height: 0 !important;}& #cont_qna .orange,& #cont_qna .noticeIcon_o{color: var(--ak-muted);}& #cont_qna .answer_per{width: fit-content;display: inline-flex;align-items: center;height: 22px;padding: 0 8px;border: 1px solid var(--ak-border);border-radius: 9999px;font-size: 12px;font-weight: 500;color: var(--ak-fg);}& #cont_qna .listTh,& #cont_after .listTh{height: 40px;background: transparent;color: var(--ak-muted);border-bottom: 1px solid var(--ak-border);font-size: 13px;font-weight: 500;}& #list_qna td,& #list_after td{font-size: 14px;color: var(--ak-fg);}& #list_after td[colspan][style*=\"background\"]{background-color: var(--ak-border) !important;}& #list_qna .line_bottom{height: 1px;border: 0 !important;background: var(--ak-border);}& #list_qna .date,& #list_after .date,& #list_after td:first-child{color: var(--ak-muted);font-size: 13px;font-variant-numeric: tabular-nums;}& #list_qna .name{color: var(--ak-fg);}& #list_qna .title a{color: var(--ak-muted);}& #paging2 .num,& #paging3 .num{display: inline-flex;align-items: center;justify-content: center;min-width: 32px;height: 32px;padding: 0 8px;border-radius: 8px;border: 1px solid transparent !important;font-family: var(--ak-font);font-size: 13px;font-variant-numeric: tabular-nums;background: transparent;color: var(--ak-muted);}& #paging2 .num.selected,& #paging3 .num.selected{background: var(--ak-fg);color: var(--ak-card);}& #paging2 .num.defaultOver,& #paging3 .num.defaultOver{background: var(--ak-hover);color: var(--ak-fg);}}@media (prefers-reduced-motion: reduce){html:has(#akmong-studio[data-theme=\"light\"]) :is(.btn_qna,.btn_order,#cont_qna .sBtn1):active{transform: none;}}";
const DATA = {"content":{"hero":{"eyebrow":"원격 방송 · 음향 세팅 · 문제 해결","title":"송출부터 마이크 소리까지, 한 사람이 원격으로 맞춥니다","lead":"치지직 · YouTube · SOOP 방송의 송출 설정과 목소리를 손봅니다. 비용을 먼저 알려 드리고 실제 방송 출력까지 확인합니다.","chain":["마이크","오디오 인터페이스","EQ · 잡음 억제 · 컴프레서","OBS","치지직 · YouTube · SOOP"],"remote":"모든 작업은 원격으로 진행합니다. 견적과 일정은 아트머그 상담에서 확정합니다."},"stats":[{"label":"세팅한 고객","value":"500+","note":"2022년부터"},{"label":"함께한 팀","value":"110","note":"최대 452만 구독 채널"},{"label":"아트머그 후기","value":"{reviews}","note":"{reviewDate}"},{"label":"음향 A/S","value":"3개월","note":"방송 세팅은 1개월"}],"highlights":[{"title":"대형 서버 5곳","text":"{servers}에서 방송 환경을 지원했습니다."}],"situations":[{"id":"start","tab":"방송을 처음 시작해요","lead":"PC가 한 대면 원컴, 두 대면 투컴입니다. 투컴 + 토크 음향은 110,000원입니다.","rows":[{"name":"원컴 방송 세팅","text":"OBS 송출 · 장면 구성 · 장비 연결 · 설정 백업","terms":"A/S 1개월","price":50000,"pick":{"service":"broadcast","broadcastConfig":"single"}},{"name":"원컴 + 토크 음향","text":"원컴 방송 세팅 + 토크 · 게임 방송용 목소리","terms":"방송 A/S 1개월 · 음향 A/S 3개월","price":80000,"pick":{"service":"combined","broadcastConfig":"single","package":"talk"}},{"name":"투컴 방송 세팅","text":"원컴 구성에 캡처보드 연결 · 소리 전달 · 싱크 조정","terms":"A/S 1개월","price":80000,"pick":{"service":"broadcast","broadcastConfig":"dual"}}],"details":{"title":"방송 세팅에서 하는 일","items":["OBS 기본 설정과 장면 · 소스 정리","해상도 · FPS · 비트레이트 · 화질 점검","마이크 기본 입력 · 오디오 필터 점검","카메라 색감 · 노출과 캡처 설정 조정","오디오 출력 · 소리 경로 확인 및 정리","송출 확인 · 설정 백업 · 직접 운영 방법 안내"],"note":"버츄얼 방송(VTube Studio · 트래킹 연동)도 상담할 수 있습니다."}},{"id":"sound","tab":"목소리만 바꾸고 싶어요","lead":"오디오 인터페이스가 없어도 세팅할 수 있습니다.","rows":[{"name":"토크 음향","text":"EQ · 잡음 억제 · 컴프레서 · 맞춤 효과 2개","terms":"A/S 3개월","price":30000,"pick":{"service":"audio","package":"talk"}},{"name":"토크 + 노래","text":"토크 음향에 리버브 · 에코 · 장르별 조정","terms":"A/S 3개월","price":50000,"pick":{"service":"audio","package":"song"}},{"name":"맞춤 고급 음향","text":"토크 + 노래에 장르별 설정 3종, 추가 조정 3회","terms":"A/S 3개월","price":80000,"pick":{"service":"audio","package":"advanced"}}],"details":{"title":"추가 옵션","options":true,"note":"오디오 인터페이스가 있으면 Cantabile · Ableton · Studio One으로 세팅합니다."}},{"id":"fix","tab":"문제가 생겼어요","lead":"끊김 · 잡음 · 싱크 · 장비 인식 문제를 한 번에 점검합니다.","rows":[{"name":"방송 문제 해결","text":"OBS 끊김 · 잡음 · 싱크 오류 점검과 해결","terms":"3일 안에 같은 문제가 생기면 무상","price":25000,"pick":{"service":"troubleshoot"}},{"name":"기존 설정 복원","text":"PC를 바꾸거나 포맷한 뒤 기존 설정 옮기기","terms":"기존 세팅 고객 대상","price":5000,"pick":null},{"name":"교체 장비 재세팅","text":"장비를 바꾼 뒤 새 장비에 맞춰 다시 세팅","terms":"기존 세팅 고객 대상","price":null,"priceText":"20% 할인","pick":null}],"details":{"title":"문제 해결의 범위","items":["윈도우 오류나 BIOS 같은 고난도 작업은 추가 비용이 생길 수 있습니다. 진행 전에 먼저 알려 드립니다.","해결된 것을 함께 확인하면 작업을 마칩니다.","복원과 재세팅을 함께 하면 복원비 5,000원이 더해집니다."]}}],"costNote":{"title":"추가 비용","text":"유료 프로그램 없이 OBS만으로도 세팅할 수 있습니다. 유료 플러그인이 필요한 구성이면 정품을 직접 구매하셔야 하고 진행 전에 알려 드립니다."},"options":[{"key":"routing","name":"프로그램별 소리 분리","price":10000,"label":"10,000원"},{"key":"dual","name":"투컴 음향 연결","price":20000,"label":"20,000원 · 장비 보유 시"},{"key":"mic","name":"추가 마이크 세팅","price":20000,"label":"1대당 20,000원"},{"key":"asmr","name":"ASMR 음향 조정","price":null,"label":"가격 문의"},{"key":"preset","name":"추가 프리셋","price":10000,"label":"10,000원 · 특수효과 기준"},{"key":"deck","name":"스트림덱 연동","price":0,"label":"기본 제공 · 장비 보유 시"}],"process":[{"title":"상담","text":"원하는 작업과 장비를 확인합니다."},{"title":"견적 · 일정","text":"항목과 총액, 날짜를 정합니다."},{"title":"원격 세팅","text":"원격으로 연결해 세팅하고 실제 출력을 확인합니다."},{"title":"백업 · 안내","text":"설정을 백업하고 쓰는 법을 알려 드립니다."}],"faq":[{"q":"방송을 처음 시작해도 되나요?","a":["네, 가능합니다. 쓰실 PC와 장비, 방송 플랫폼을 알려 주세요."]},{"q":"어떤 장비든 원격으로 세팅할 수 있나요?","a":["모델과 드라이버를 먼저 확인합니다. 원격으로 어려운 부분이 있으면 상담에서 말씀드립니다."]},{"q":"방송 세팅과 음향 세팅은 무엇이 다른가요?","a":["음향 세팅은 목소리 조정과 소리 확인에 필요한 OBS 점검까지입니다.","장면 · 카메라 · 송출 구성은 방송 세팅에서 합니다.","배선이나 장비 설치처럼 직접 손봐야 하는 작업은 따로 상담합니다."]},{"q":"무엇을 준비하나요?","a":["쓰실 PC와 장비, 안정적인 인터넷 연결을 준비해 주세요.","마이크와 오디오 인터페이스 모델명을 미리 알려 주세요.","테스트 때 직접 말하거나 노래해 주시면 됩니다."]},{"q":"유료 프로그램을 사야 하나요?","a":["꼭 사지 않아도 됩니다. 유료 플러그인을 쓰는 구성일 때만 정품을 구매하시면 됩니다.","크랙 · 불법 복제 환경에서는 작업하지 않습니다."]},{"q":"A/S는 어떻게 되나요?","a":["기존 설정에 생긴 오류는 음향 3개월, 방송 1개월 동안 무상으로 고쳐 드립니다.","새 기능이나 구성 변경은 유상입니다.","문제 해결 후 3일 안에 같은 문제가 다시 생기면 무상으로 봐 드립니다."]}],"fallbackReviews":[{"text":"정말 세팅 이번에 바꾼게 총 6번째 바꾸는건데 매번 돈은 엄청 쓰구 마음에 드는 세팅이 안나와서 속상했는데정말 말도 안되게 원하는 세팅에 딱 맞는 세팅을 받아서 진짜 이번년도...","author":"**이","date":"26-11-19"},{"text":"일단 사용자가 원하는 사운드에 초점을 두고, 마이크 세팅을 맞추어가는 점이 인상적이었습니다! 보통은 추구하시는 사운드가 있냐 하고 단편적으로만 물어보시고, 그거에 맞추어 작...","author":"***i","date":"26-11-13"},{"text":"늦은 시간이었는데 친절하게 끝까지 잘 맞춰주셨습니다.세팅 환경도 조금 특이한 환경이라 손이 갔는데 성실히 임해주셔서 감사했습니다.세팅도 마음에 듭니다. 고생 많으셨습니다!","author":"*소","date":"26-11-23"}],"fallbackReviewCount":25,"videos":[{"title":"쌍베 쌍창콘 · 음향 총괄","meta":"버츄얼 페스티벌 쌍창콘서트 · 쌍튜브 공식 영상 · 2025.01.06"},{"title":"성우 남도형 · 방송 음향 세팅","meta":"남도형의 블루클럽 · 미스터비스트 성우 초대석 · 2026.09.10"}],"trustNote":"장비 사기 전에 문의하시면 맞는 장비와 제휴 혜택을 알려 드립니다.","principles":["하루 5건까지","오후 6시부터 작업","답변은 12시간 안에"]},"extracted":{"creators":[{"name":"RAON","youtube":"약 452만명","chzzk":"7,805명","soop":null,"image":"img/creator-1.jpg"},{"name":"김블루","youtube":"약 230만명","chzzk":"155,530명","soop":null,"image":"img/creator-2.jpg"},{"name":"스토리","youtube":"약 193만명","chzzk":null,"soop":null,"image":"img/creator-3.jpg"},{"name":"악어","youtube":"약 125만명","chzzk":null,"soop":null,"image":"img/creator-4.jpg"},{"name":"괴물쥐","youtube":"약 121만명","chzzk":"359,020명","soop":null,"image":"img/creator-5.jpg"},{"name":"장지수","youtube":"약 112만명","chzzk":null,"soop":null,"image":"img/creator-6.jpg"},{"name":"릴카","youtube":"약 99.3만명","chzzk":"151,599명","soop":null,"image":"img/creator-7.jpg"},{"name":"형독","youtube":"약 82.9만명","chzzk":"45,513명","soop":null,"image":"img/creator-8.jpg"},{"name":"강지","youtube":"약 76.5만명","chzzk":"298,808명","soop":null,"image":"img/creator-9.jpg"},{"name":"푸린","youtube":"약 72.6만명","chzzk":"92,900명","soop":null,"image":"img/creator-10.jpg"},{"name":"삼식","youtube":"약 71.7만명","chzzk":"191,122명","soop":null,"image":"img/creator-11.jpg"},{"name":"한동숙","youtube":"약 59.4만명","chzzk":"458,941명","soop":null,"image":"img/creator-12.jpg"},{"name":"핑맨","youtube":"약 58만명","chzzk":"143,832명","soop":null},{"name":"남도형 성우","youtube":"약 56.3만명","chzzk":"13,040명","soop":null},{"name":"문호준","youtube":"약 55만명","chzzk":"2,463명","soop":null},{"name":"김된모","youtube":"약 51.7만명","chzzk":null,"soop":null},{"name":"쫀득","youtube":"약 51만명","chzzk":"39,243명","soop":null},{"name":"와나나","youtube":"약 47.7만명","chzzk":"20,223명","soop":null},{"name":"버니버니","youtube":"약 44.7만명","chzzk":"66,516명","soop":null},{"name":"멋사","youtube":"약 44.5만명","chzzk":"116,065명","soop":null},{"name":"울프","youtube":"약 44.4만명","chzzk":"381,537명","soop":null},{"name":"명예훈장","youtube":"약 44.1만명","chzzk":"152,848명","soop":null},{"name":"허니츄러스","youtube":"약 41.2만명","chzzk":"139,914명","soop":null},{"name":"설백","youtube":"약 37.2만명","chzzk":"102,844명","soop":null},{"name":"찬이","youtube":"약 36.4만명","chzzk":"2,609명","soop":null},{"name":"아야츠노 유니","youtube":"약 36.2만명","chzzk":"308,908명","soop":null},{"name":"아카네 리제","youtube":"약 35.9만명","chzzk":"263,452명","soop":null},{"name":"유콘","youtube":"약 32.8만명","chzzk":"52,167명","soop":null},{"name":"시라유키 히나","youtube":"약 32.1만명","chzzk":"241,865명","soop":null},{"name":"김레인","youtube":"약 29.4만명","chzzk":null,"soop":null},{"name":"후추","youtube":"약 28.6만명","chzzk":"40,874명","soop":null},{"name":"너불","youtube":"약 28.6만명","chzzk":"108,934명","soop":null},{"name":"아오쿠모 린","youtube":"약 28.6만명","chzzk":"228,583명","soop":null},{"name":"박삐삐","youtube":"약 28.1만명","chzzk":null,"soop":null},{"name":"김뚜띠","youtube":"약 27.5만명","chzzk":"150,746명","soop":null},{"name":"피닉스박","youtube":"약 26.6만명","chzzk":"158,492명","soop":null},{"name":"아라하시 타비","youtube":"약 26.4만명","chzzk":"264,941명","soop":null},{"name":"스텔라이브","youtube":"약 26.1만명","chzzk":"7,288명","soop":null},{"name":"이초홍","youtube":"약 25.9만명","chzzk":"100,046명","soop":null},{"name":"텐코 시부키","youtube":"약 23.2만명","chzzk":"249,377명","soop":null},{"name":"금휘","youtube":"약 24.5만명","chzzk":"72,110명","soop":null},{"name":"텍스쳐","youtube":"약 24.1만명","chzzk":null,"soop":null},{"name":"아구이뽀","youtube":"약 23.4만명","chzzk":"93,673명","soop":null},{"name":"유즈하 리코","youtube":"약 22.5만명","chzzk":"219,685명","soop":null},{"name":"하나코 나나","youtube":"약 20.9만명","chzzk":"218,020명","soop":null},{"name":"네네코 마시로","youtube":"약 18.5만명","chzzk":"217,067명","soop":null},{"name":"안산저격수","youtube":"약 19.9만명","chzzk":null,"soop":"약 7,600명"},{"name":"실프","youtube":"약 19.7만명","chzzk":"120,061명","soop":null},{"name":"마뫄","youtube":"약 19.3만명","chzzk":"148,882명","soop":null},{"name":"금사향","youtube":"약 18.9만명","chzzk":"101,537명","soop":null},{"name":"크포","youtube":"약 17.2만명","chzzk":"50,766명","soop":null},{"name":"해기","youtube":"약 16.9만명","chzzk":null,"soop":null},{"name":"사키하네 후야","youtube":"약 13.6만명","chzzk":"166,936명","soop":null},{"name":"구칠이","youtube":"약 16.5만명","chzzk":null,"soop":null},{"name":"코렛트","youtube":"약 16.5만명","chzzk":"77,789명","soop":null},{"name":"채현찌","youtube":"약 16.3만명","chzzk":"101,510명","soop":null},{"name":"헤징","youtube":"약 16.1만명","chzzk":"69,398명","soop":null},{"name":"쌍베","youtube":"약 15.7만명","chzzk":"109,160명","soop":null},{"name":"고차비","youtube":"약 15.7만명","chzzk":"98,788명","soop":null},{"name":"앵보","youtube":"약 15.5만명","chzzk":"55,648명","soop":null},{"name":"마레 플로스","youtube":"약 14.5만명","chzzk":"70,424명","soop":null},{"name":"김뿡","youtube":"약 14.2만명","chzzk":"142,385명","soop":null},{"name":"새옴","youtube":"약 14.2만명","chzzk":"53,883명","soop":null},{"name":"카라미","youtube":"약 14만명","chzzk":"19,937명","soop":null},{"name":"버즈","youtube":"약 1.59만명","chzzk":null,"soop":"약 13만명"},{"name":"정소림 캐스터","youtube":"약 12만명","chzzk":"33,263명","soop":null},{"name":"남봉","youtube":"약 3.32만명","chzzk":"114,980명","soop":null},{"name":"감블러","youtube":"약 10.8만명","chzzk":"58,120명","soop":null},{"name":"더샤이","youtube":"약 10.8만명","chzzk":null,"soop":null},{"name":"아리사","youtube":"약 8.35만명","chzzk":"104,864명","soop":null},{"name":"아야 AYA","youtube":"약 9.36만명","chzzk":"41,060명","soop":null},{"name":"리타","youtube":"약 4,820명","chzzk":null,"soop":"약 9.3만명"},{"name":"둥그레","youtube":"약 4.69만명","chzzk":"91,568명","soop":null},{"name":"준바","youtube":"약 7.78만명","chzzk":"4,594명","soop":null},{"name":"캡틴잭","youtube":"약 7.67만명","chzzk":"70,883명","soop":null},{"name":"에피나","youtube":"약 7.2만명","chzzk":"10,000명","soop":null},{"name":"디디디용","youtube":"약 3.63만명","chzzk":"66,094명","soop":null},{"name":"오화요","youtube":"약 6.44만명","chzzk":"46,493명","soop":null},{"name":"갓데드","youtube":"약 6.39만명","chzzk":null,"soop":null},{"name":"자몽뀨","youtube":"약 6.02만명","chzzk":"25,405명","soop":null},{"name":"카린","youtube":"약 2.74만명","chzzk":"58,089명","soop":null},{"name":"아야","youtube":"약 4.1만명","chzzk":"52,595명","soop":null},{"name":"에리스","youtube":"약 3.35만명","chzzk":"51,224명","soop":null},{"name":"카르페","youtube":"약 4.95만명","chzzk":null,"soop":null},{"name":"위버멘쉬 너구리","youtube":"약 4.68만명","chzzk":"28,787명","soop":null},{"name":"담유이","youtube":"약 3.04만명","chzzk":"45,786명","soop":null},{"name":"시리안 레인","youtube":"약 2.22만명","chzzk":null,"soop":"약 4.4만명"},{"name":"너구리","youtube":"약 4.15만명","chzzk":"20,943명","soop":null},{"name":"베릴","youtube":null,"chzzk":"41,449명","soop":null},{"name":"양도끼","youtube":"약 4.09만명","chzzk":"4,929명","soop":null},{"name":"유세라","youtube":"약 3.91만명","chzzk":"40,428명","soop":null},{"name":"심술","youtube":"약 3.92만명","chzzk":"2,584명","soop":null},{"name":"연초봄","youtube":"약 3.14만명","chzzk":"29,801명","soop":null},{"name":"쿠로","youtube":"약 2.85만명","chzzk":null,"soop":null},{"name":"후니","youtube":"약 2.77만명","chzzk":"3,683명","soop":null},{"name":"미도미도 마요","youtube":"약 2.62만명","chzzk":"12,532명","soop":null},{"name":"로션욤","youtube":"약 2.04만명","chzzk":"17,834명","soop":null},{"name":"리우리","youtube":"약 6,550명","chzzk":"15,548명","soop":null},{"name":"고스트","youtube":"약 1.41만명","chzzk":null,"soop":null},{"name":"다비","youtube":"약 5,740명","chzzk":"13,193명","soop":null},{"name":"미라지","youtube":"약 6,090명","chzzk":"13,164명","soop":null},{"name":"야튀","youtube":"약 7,040명","chzzk":"11,167명","soop":null},{"name":"B1A4 공찬","youtube":"약 1.07만명","chzzk":null,"soop":null},{"name":"우말","youtube":"약 1,710명","chzzk":"10,119명","soop":null},{"name":"보나","youtube":"약 9,470명","chzzk":null,"soop":null},{"name":"김하루","youtube":"약 8,000명","chzzk":"8,279명","soop":null},{"name":"얀즈","youtube":"약 7,100명","chzzk":"6,358명","soop":null},{"name":"프로젝트 아이","youtube":"약 5,450명","chzzk":null,"soop":null},{"name":"로컨","youtube":"약 4,840명","chzzk":null,"soop":null},{"name":"이주","youtube":"약 1,670명","chzzk":"3,979명","soop":null}],"partners":[{"name":"사운드캣","alt":"사운드캣 로고","white":false,"image":"img/partner-1.png"},{"name":"오버시스템","alt":"오버시스템 로고","white":false,"image":"img/partner-2.svg"},{"name":"엘가토","alt":"엘가토 로고","white":false,"image":"img/partner-3.svg"},{"name":"에버미디어","alt":"에버미디어 로고","white":true,"image":"img/partner-4.webp"}],"portrait":"img/profile.png","videos":[{"id":"DDQoCdhjHsQ","label":"제 1회 버츄얼 페스티벌 쌍창콘서트 · 쌍튜브 공식"},{"id":"AffeiWX2aUI","label":"무엇이든 도전하는 남자, 유튜버 고재영 초대석 with 미스터비스트 성우 · 남도형의 블루클럽 공식"}],"clips":[{"url":"https://chzzk.naver.com/clips/WLTifmeBJw","creator":"오화요","source":"치지직 클립","title":"에일리 · 노래가 늘었어","date":"2026-07-29","duration":"1:52","image":"img/clip-1.jpg"},{"url":"https://chzzk.naver.com/clips/IDLtLzU22V","creator":"디디디용","source":"치지직 클립","title":"금지된 사랑 · 하이라이트","date":"2026-05-21","duration":"0:44","image":"img/clip-2.jpg"},{"url":"https://chzzk.naver.com/clips/Vd1280ZRM9","creator":"아야","source":"치지직 클립","title":"경서 · 나의 X에게","date":"2026-09-06","duration":"1:01","image":"img/clip-3.jpg"}],"servers":["악어의 놀이터","띵타이쿤","악어의 놀이터 2","콩밥특별시","봉누도2"],"faqs":[{"q":"방송을 처음 시작해도 신청할 수 있나요?","a":"가능합니다. 준비된 PC와 장비, 사용할 방송 플랫폼을 알려 주시면 필요한 작업 범위를 확인하고 사용 방법도 함께 안내합니다."},{"q":"어떤 장비든 원격으로 세팅할 수 있나요?","a":"장비 모델과 드라이버, 프로그램 지원 여부를 먼저 확인합니다. 원격으로 진행하기 어려운 부분이 있으면 상담에서 안내합니다."}]}};
/* 악몽 studio for an Artmug detail page.
   Draws into <div id="akmong-studio"> through a shadow root, so Artmug's global CSS
   (h1 hidden, line-height 1, Malgun Gothic) cannot reach it, and nothing here reaches Artmug.
   The build wraps this file and defines CSS (string), DATA (object) and BASE (url of this script's folder). */

const HOST_ID = 'akmong-studio';
const API = 'https://connectlabs-sound-portfolio.connectlabs-1.chatgpt.site/api/availability';
const FONT = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css';
const ORDERS = {
  a: ['creators', 'listen', 'reviews', 'pricing'],
  b: ['pricing', 'creators', 'reviews', 'listen'],
  c: ['listen', 'reviews', 'creators', 'pricing'],
};
const AFTER_FOLD = ['schedule', 'inquiry', 'process', 'faq'];
const LABELS = { hero: '소개', creators: '함께한 크리에이터', listen: '들어보기', reviews: '후기', pricing: '가격', schedule: '일정', inquiry: '문의 글 만들기', process: '진행 순서', faq: '자주 묻는 것' };

const host = document.getElementById(HOST_ID);
if (host && !host.shadowRoot) mount(host);

function mount(host) {
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches && host.dataset.motion !== 'full';
  const won = (n) => n.toLocaleString('ko-KR');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const img = (p) => new URL(p, BASE).href;
  const variant = ORDERS[host.dataset.variant] ? host.dataset.variant : 'c';
  if (!host.dataset.theme) host.dataset.theme = 'light';
  // Chosen 2026-11-27: the livelier response (osu!lazer amounts). Set data-feel="calm" on the box to go back.
  if (!host.dataset.feel) host.dataset.feel = 'lively';

  if (!document.querySelector('link[data-akmong-font]')) {
    const link = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: FONT });
    link.dataset.akmongFont = '';
    document.head.appendChild(link);
  }
  // Artmug's own parts on this page (reviews, Q&A, order panel) in the same quiet style. Looks only; see src/artmug.css.
  const pageStyle = document.createElement('style');
  pageStyle.textContent = ARTMUG_CSS + `html:has(#${HOST_ID}[data-theme="dark"]) body{background:oklch(0.17 0 0)}`;
  document.head.appendChild(pageStyle);

  host.replaceChildren();
  const root = host.attachShadow({ mode: 'open' });
  const D = DATA;
  const C = D.content;

  // ---------- Facts that live on the Artmug page itself ----------
  function artmugReviews() {
    const table = [...document.querySelectorAll('table')].find((t) => t.rows[0] && /평점/.test(t.rows[0].innerText) && /내용/.test(t.rows[0].innerText));
    if (!table) return null;
    const rows = [...table.rows].slice(1).map((r) => [...r.cells].map((c) => c.innerText.trim())).filter((c) => c.length >= 4 && /^\d+$/.test(c[0]));
    if (!rows.length) return null;
    const list = rows.map((c) => ({ n: Number(c[0]), text: c[2], author: c[c.length - 2], date: c[c.length - 1] })).filter((r) => r.text.length > 30);
    return { count: Math.max(...rows.map((c) => Number(c[0]))), latest: rows[0][rows[0].length - 1], list: list.sort((x, y) => y.text.length - x.text.length).slice(0, 3) };
  }
  const live = artmugReviews();
  const reviews = live?.list.length >= 3 ? live.list : C.fallbackReviews;
  const reviewCount = live?.count ?? C.fallbackReviewCount;
  const reviewDate = live?.latest ?? C.fallbackReviews[2].date;
  const shortDate = (d) => { const m = String(d).match(/(\d{2})-(\d{2})-(\d{2})/); return m ? `최근 20${m[1]}.${m[2]}.${m[3]}` : ''; };

  // ---------- Sections ----------
  const S = {};
  S.hero = () => `
    <section class="st-hero" id="st-hero" data-section="hero" aria-labelledby="st-title">
      <div class="tf-hero" style="padding:0;gap:var(--space-6)">
        <p class="tf-hero__eyebrow">${esc(C.hero.eyebrow)}</p>
        <h1 class="tf-hero__title" id="st-title">${esc(C.hero.title)}</h1>
        <p class="tf-hero__lead">${esc(C.hero.lead)}</p>
        <div class="tf-hero__actions">
          <button class="tf-btn tf-btn--outline" type="button" data-go="pricing">가격 보기</button>
          <button class="tf-btn tf-btn--ghost" type="button" data-go="listen">작업한 소리 듣기</button>
        </div>
      </div>
      <img class="st-hero__portrait" src="${img(D.extracted.portrait)}" alt="악몽의 캐릭터 프로필" width="160" height="160">
    </section>
    <div class="tf-stats" role="list">
      ${C.stats.map((s) => `<div class="tf-stat" role="listitem"><p class="tf-stat__label">${esc(s.label)}</p><p class="tf-stat__value">${esc(s.value.replace('{reviews}', reviewCount + '건'))}</p></div>`).join('')}
    </div>
    <section class="st-trust" aria-labelledby="st-trust-title">
      <h2 class="tf-heading" id="st-trust-title">함께 일하는 브랜드와 대형 프로젝트</h2>
      <ul class="tf-card st-logos" aria-label="파트너십 제휴 브랜드">${D.extracted.partners.map((p) => `<li class="st-logo"><img src="${img(p.image)}" alt="${esc(p.name)}" loading="lazy"><span>${esc(p.name)}</span></li>`).join('')}</ul>
      <div class="st-servers"><p class="st-servers__label">대형 서버 방송 지원 <b>${D.extracted.servers.length}곳</b></p>
        <ul>${D.extracted.servers.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>
    </section>`;

  S.creators = () => {
    const top = D.extracted.creators.filter((c) => c.image).slice(0, 6);
    const cell = (v) => v ? esc(v) : '<span class="is-empty">—</span>';
    return `
    <section class="st-band" id="st-creators" data-section="creators" aria-labelledby="st-creators-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-creators-title">함께한 크리에이터 ${D.extracted.creators.length}팀</h2></div>
      <ul class="st-faces">${top.map((c) => `<li><img src="${img(c.image)}" alt="" width="56" height="56" loading="lazy"><span>${esc(c.name)}</span></li>`).join('')}</ul>
      <details class="st-more"><summary>${D.extracted.creators.length}팀 전체 보기</summary>
        <div class="st-more__body"><div class="st-table-wrap" tabindex="0" role="region" aria-label="함께한 크리에이터 전체">
          <table class="st-table"><thead><tr><th scope="col">크리에이터</th><th scope="col">YouTube 구독자</th><th scope="col">치지직 팔로워</th><th scope="col">SOOP 애청자</th></tr></thead>
          <tbody>${D.extracted.creators.map((c) => `<tr><td>${esc(c.name)}</td><td>${cell(c.youtube)}</td><td>${cell(c.chzzk)}</td><td>${cell(c.soop)}</td></tr>`).join('')}</tbody></table>
        </div></div>
      </details>
    </section>`;
  };

  S.listen = () => `
    <section class="st-band" id="st-listen" data-section="listen" aria-labelledby="st-listen-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-listen-title">실제 방송에서 나간 소리</h2></div>
      <div class="st-media">${D.extracted.videos.map((v, i) => player({ kind: 'youtube', id: v.id, thumb: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`, title: C.videos[i]?.title ?? v.label, meta: C.videos[i]?.meta ?? '' })).join('')}</div>
      <h3 class="tf-subheading st-sub">노래 방송 클립</h3>
      <ul class="st-clips">${D.extracted.clips.map((c) => `
        <li class="st-clip"><div class="st-player__frame" data-kind="chzzk" data-id="${esc(c.url.split('/').pop())}" data-title="${esc(c.title)}">
          <img src="${img(c.image)}" alt="" loading="lazy"><button class="st-player__play" type="button" aria-label="${esc(c.creator)} · ${esc(c.title)} 재생"><span>재생</span></button></div>
          <div><p class="st-player__title">${esc(c.creator)}</p><p class="st-player__meta">${esc(c.title)} · ${esc(c.duration)}</p></div></li>`).join('')}
      </ul>
    </section>`;

  function player(p) {
    return `<figure class="st-player"><div class="st-player__frame" data-kind="${p.kind}" data-id="${esc(p.id)}" data-title="${esc(p.title)}">
      <img src="${esc(p.thumb)}" alt="" loading="lazy">
      <button class="st-player__play" type="button" aria-label="${esc(p.title)} 재생"><span>재생</span></button>
      ${p.duration ? `<span class="st-player__duration">${esc(p.duration)}</span>` : ''}</div>
      <figcaption><p class="st-player__title">${esc(p.title)}</p><p class="st-player__meta">${esc(p.meta)}</p></figcaption></figure>`;
  }

  S.reviews = () => `
    <section class="st-band" id="st-reviews" data-section="reviews" aria-labelledby="st-reviews-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-reviews-title">후기 ${reviewCount}건</h2></div>
      <div class="st-reviews">${reviews.map((r) => `<figure class="st-review"><blockquote>${esc(r.text)}</blockquote><figcaption>${esc(r.author)} · ${esc(r.date)}</figcaption></figure>`).join('')}</div>
      <div class="st-band__foot"><button class="tf-btn tf-btn--ghost tf-btn--sm" type="button" data-artmug="reviews">후기 전체 보기</button></div>
    </section>`;

  S.pricing = () => `
    <section class="st-band" id="st-pricing" data-section="pricing" aria-labelledby="st-pricing-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-pricing-title">가격</h2></div>
      <div class="tf-tabs" role="tablist" aria-label="상황">
        ${C.situations.map((s, i) => `<button class="tf-tab" role="tab" type="button" id="st-tab-${s.id}" aria-controls="st-panel-${s.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(s.tab)}</button>`).join('')}
        <span class="tf-tabs__strip" aria-hidden="true"></span>
      </div>
      ${C.situations.map((s, i) => `
      <div class="st-price-panel" role="tabpanel" id="st-panel-${s.id}" aria-labelledby="st-tab-${s.id}" ${i ? 'hidden' : ''}>
        <div class="tf-card st-offers">${s.rows.map((r) => `
          <div class="st-offer"><div><p class="st-offer__name">${esc(r.name)}</p><p class="st-offer__text">${esc(r.text)}</p></div>
            <p class="st-offer__price">${r.price === null ? esc(r.priceText) : won(r.price) + '원'}</p>
            ${r.pick ? `<button class="tf-btn tf-btn--outline tf-btn--sm st-offer__action" type="button" data-pick='${esc(JSON.stringify(r.pick))}'>이 구성으로 문의</button>` : `<button class="tf-btn tf-btn--outline tf-btn--sm st-offer__action" type="button" data-pick='${esc(JSON.stringify({ service: 'troubleshoot', note: r.name }))}'>문의하기</button>`}
          </div>`).join('')}
        </div>
        <details class="st-more"><summary>${esc(s.details.title)}</summary><div class="st-more__body">
          <p class="st-small" style="margin:0 0 var(--space-2)">${esc(s.lead)}</p>
          <ul class="st-bullets" style="margin-bottom:var(--space-4)">${s.rows.map((r) => `<li><span>${esc(r.name)} · ${esc(r.terms)}</span></li>`).join('')}</ul>
          ${s.details.options ? `<ul class="st-bullets st-bullets--two">${C.options.map((o) => `<li><span>${esc(o.name)} <span class="st-offer__terms">${esc(o.label)}</span></span></li>`).join('')}</ul>` : `<ul class="st-bullets st-bullets--two">${s.details.items.map((x) => `<li><span>${esc(x)}</span></li>`).join('')}</ul>`}
          ${s.details.note ? `<p class="st-small">${esc(s.details.note)}</p>` : ''}
        </div></details>
      </div>`).join('')}
      <p class="st-small"><strong class="st-small__lead">${esc(C.costNote.title)}</strong> · ${esc(C.costNote.text)}</p>
    </section>`;

  S.schedule = () => `
    <section class="st-band" id="st-schedule" data-section="schedule" aria-labelledby="st-schedule-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-schedule-title">세팅 가능한 일정</h2>
        <ul class="st-principles">${(C.principles || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="st-week"><p class="st-week__label" id="st-week-label" aria-live="polite"></p>
        <div class="st-week__nav"><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-prev">이전 주</button><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-next">다음 주</button></div></div>
      <div class="st-days" id="st-days" role="group" aria-label="날짜"></div>
      <div id="st-slots-area"></div>
      <p class="st-status" id="st-sched-status" role="status"></p>
    </section>`;

  S.inquiry = () => `
    <section class="st-band" id="st-inquiry" data-section="inquiry" aria-labelledby="st-inquiry-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-inquiry-title">문의 글 만들기</h2></div>
      <div class="st-inquiry">
        <form class="st-form" id="st-form" novalidate>
          <fieldset class="st-fieldset"><legend>어떤 도움이 필요하신가요?</legend>
            <div class="st-choices">${[['audio', '음향 세팅', '토크 · 노래 목소리'], ['broadcast', '방송 세팅', '송출 · 장비 연결'], ['combined', '방송 + 음향', '두 가격을 더한 금액'], ['troubleshoot', '문제 해결', '끊김 · 잡음 · 오류']].map(([v, t, d], i) => choice('service', v, t, d, i === 0)).join('')}</div></fieldset>
          <fieldset class="st-fieldset"><legend>장비는 갖추셨나요?</legend>
            <label class="st-check"><input class="tf-checkbox" type="checkbox" name="gear" value="yes"><span>아직 장비가 없어요<small>무료로 장비를 추천해 드립니다</small></span></label>
            <div class="st-fields" id="st-gear" hidden>
              <div class="tf-field"><label class="tf-field__label" for="st-budget">장비 예산</label><input class="tf-input" id="st-budget" name="budget" autocomplete="off" placeholder="예: 마이크 + 인터페이스 30만 원"></div>
              <div class="tf-field"><label class="tf-field__label" for="st-purpose">주로 할 방송</label><div class="tf-select-wrap"><select class="tf-select" id="st-purpose" name="purpose"><option value="">고르지 않음</option><option>토크 · 게임</option><option>노래</option><option>ASMR</option><option>버츄얼</option><option>여러 가지</option></select></div></div>
              <div class="tf-field tf-field--wide"><label class="tf-field__label" for="st-room">방 상태</label><textarea class="tf-textarea" id="st-room" name="room" placeholder="예: 원룸, 창밖 차 소리가 들리고 말하면 조금 울려요. 흡음재 없음."></textarea></div>
            </div>
          </fieldset>
          <fieldset class="st-fieldset" id="st-f-broadcast" hidden><legend>방송용 PC는 몇 대인가요?</legend>
            <div class="st-choices">${[['single', '원컴 · PC 1대', '', '50,000원'], ['dual', '투컴 · PC 2대', '', '80,000원'], ['undecided', '잘 모르겠어요', '상담에서 정해요', '가격 문의']].map(([v, t, d, p]) => choice('broadcastConfig', v, t, d, v === 'undecided', p)).join('')}</div></fieldset>
          <fieldset class="st-fieldset" id="st-f-audio"><legend>어떤 음향 세팅을 원하시나요?</legend>
            <div class="st-choices">${[['talk', '토크 음향', '', '30,000원'], ['song', '토크 + 노래', '', '50,000원'], ['advanced', '맞춤 고급 음향', '장르별 3종 · 추가 조정 3회', '80,000원']].map(([v, t, d, p]) => choice('package', v, t, d, v === 'talk', p)).join('')}</div></fieldset>
          <details class="st-more st-more--form" id="st-f-options"><summary>추가 옵션</summary><fieldset class="st-fieldset st-more__body"><legend class="st-sr">추가 옵션</legend>
            <div class="st-checks">${C.options.map((o) => `<label class="st-check"><input class="tf-checkbox" type="checkbox" name="option" value="${o.key}"><span>${esc(o.name)}<small>${esc(o.label)}</small></span></label>`).join('')}</div>
            <div class="tf-field st-mic" id="st-mic-field" hidden><label class="tf-field__label" for="st-mic">추가 마이크 대수</label>
              <input class="tf-input" id="st-mic" name="mic" type="number" min="1" step="1" value="1" inputmode="numeric" aria-describedby="st-mic-hint">
              <span class="tf-field__hint" id="st-mic-hint">1대당 20,000원</span></div>
          </fieldset></details>
          <details class="st-more st-more--form"><summary>방송 환경 적기(선택)</summary><fieldset class="st-fieldset st-more__body"><legend class="st-sr">방송 환경</legend>
            <div class="st-fields">
              <div class="tf-field"><label class="tf-field__label" for="st-channel">활동명이나 채널</label><input class="tf-input" id="st-channel" name="channel" autocomplete="off" placeholder="예: 악몽, 치지직 채널 이름"></div>
              <div class="tf-field"><label class="tf-field__label" for="st-platform">방송 플랫폼</label><div class="tf-select-wrap"><select class="tf-select" id="st-platform" name="platform"><option value="">고르지 않음</option><option>치지직</option><option>YouTube</option><option>SOOP</option><option>여러 곳</option><option>아직 정하지 않음</option></select></div></div>
              <div class="tf-field tf-field--wide"><label class="tf-field__label" for="st-equipment">쓰고 있는 장비</label><textarea class="tf-textarea" id="st-equipment" name="equipment" placeholder="예: 원컴 · RTX 4070 / SM7B / SSL2"></textarea></div>
              <div class="tf-field tf-field--wide"><label class="tf-field__label" for="st-request">원하는 것이나 불편한 점</label><textarea class="tf-textarea" id="st-request" name="request" placeholder="예: 노래할 때만 리버브를 켜고 싶어요. 방송 중에 소리가 가끔 끊겨요."></textarea></div>
            </div>
          </fieldset></details>
        </form>
        <aside class="tf-card st-summary" aria-labelledby="st-sum-label">
          <p class="st-summary__label" id="st-sum-label">예상 금액</p>
          <p class="st-total" aria-live="polite"><span id="st-total">30,000</span><span class="st-total__unit" id="st-total-unit">원</span></p>
          <p class="st-total-note" id="st-total-note">상담 후 확정</p>
          <div class="st-summary__items" id="st-items"></div>
          <p class="st-summary__slot" id="st-slot-line">희망 일정 · 상담 후 결정</p>
          <button class="tf-btn tf-btn--block" type="button" id="st-copy">글 복사하고 문의 창 열기</button>
          <p class="st-copy-status" id="st-copy-status" role="status"></p>
          <details class="st-preview"><summary class="tf-link tf-link--quiet">복사될 글 보기</summary><textarea class="tf-textarea" id="st-output" readonly aria-label="복사될 문의 글"></textarea></details>
        </aside>
      </div>
    </section>`;

  function choice(name, value, title, text, checked, price) {
    return `<label class="tf-choice"><input class="tf-radio" type="radio" name="${name}" value="${value}" ${checked ? 'checked' : ''}><span><span class="tf-choice__title">${esc(title)}</span>${text ? `<span class="tf-choice__text">${esc(text)}</span>` : ''}${price ? `<span class="st-choice-price">${esc(price)}</span>` : ''}</span></label>`;
  }

  S.process = () => `
    <section class="st-band" id="st-process" data-section="process" aria-labelledby="st-process-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-process-title">진행 순서</h2></div>
      <ol class="st-process">${C.process.map((p) => `<li class="st-step"><strong>${esc(p.title)}</strong><p>${esc(p.text)}</p></li>`).join('')}</ol>
    </section>`;

  S.faq = () => `
    <section class="st-band st-faq" id="st-faq" data-section="faq" aria-labelledby="st-faq-title">
      <div class="st-band__head"><h2 class="tf-heading" id="st-faq-title">자주 묻는 것</h2></div>
      ${C.faq.map((f) => `<details class="st-more"><summary>${esc(f.q)}</summary><div class="st-more__body"><ul class="st-bullets">${f.a.map((x) => `<li><span>${esc(x)}</span></li>`).join('')}</ul></div></details>`).join('')}
    </section>
    <footer class="st-foot"><span>ConnectLabs · 악몽 Nightmare</span><span>${esc(C.hero.remote)}</span></footer>`;

  const order = ['hero', ...ORDERS[variant], ...AFTER_FOLD];
  root.innerHTML = `<style>${CSS}</style><div class="studio-root"><main class="st-main">${order.map((k) => S[k]()).join('')}</main><div class="tf-toasts" id="st-toasts" aria-live="polite"></div></div>`;
  const $ = (sel) => root.querySelector(sel);
  const $$ = (sel) => [...root.querySelectorAll(sel)];

  // ---------- Toast ----------
  function toast(message) {
    const t = document.createElement('div');
    t.className = 'tf-toast';
    t.textContent = message;
    $('#st-toasts').appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => { t.dataset.open = 'true'; }));
    setTimeout(() => { t.dataset.open = 'false'; setTimeout(() => t.remove(), 400); }, 2600);
  }

  // ---------- Tabs ----------
  const tabs = $('.tf-tabs');
  function placeStrip() {
    const sel = tabs.querySelector('[aria-selected="true"]');
    const strip = tabs.querySelector('.tf-tabs__strip');
    strip.style.setProperty('--tf-strip-x', sel.offsetLeft - tabs.scrollLeft + 'px');
    strip.style.setProperty('--tf-strip-w', sel.offsetWidth);
  }
  function selectTab(tab, focus) {
    $$('.tf-tab').forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    $$('.st-price-panel').forEach((p) => {
      const on = p.id === tab.getAttribute('aria-controls');
      p.hidden = !on;
      p.classList.remove('is-entering');
      if (on) { void p.offsetWidth; p.classList.add('is-entering'); }
    });
    placeStrip();
    if (focus) tab.focus();
  }
  tabs.addEventListener('click', (e) => { const t = e.target.closest('.tf-tab'); if (t) selectTab(t); });
  tabs.addEventListener('keydown', (e) => {
    const list = $$('.tf-tab'); const i = list.indexOf(root.activeElement);
    if (i < 0) return;
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: list.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectTab(list[(next + list.length) % list.length], true);
  });
  tabs.addEventListener('scroll', placeStrip, { passive: true });
  (document.fonts?.ready ?? Promise.resolve()).then(() => { placeStrip(); requestAnimationFrame(() => { tabs.dataset.ready = 'true'; }); });
  new ResizeObserver(placeStrip).observe(tabs);

  // ---------- Players: load the real player only when asked ----------
  root.addEventListener('click', (e) => {
    const play = e.target.closest('.st-player__play');
    if (!play) return;
    const frame = play.parentElement;
    const src = frame.dataset.kind === 'youtube'
      ? `https://www.youtube.com/embed/${frame.dataset.id}?autoplay=1&rel=0`
      : `https://chzzk.naver.com/embed/clip/${frame.dataset.id}`;
    const iframe = Object.assign(document.createElement('iframe'), { src, title: frame.dataset.title, allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen' });
    iframe.setAttribute('allowfullscreen', '');
    frame.replaceChildren(iframe);
  });

  // ---------- Artmug's own parts ----------
  const artmug = {
    clamp: () => document.querySelector('.detailinfo.showstep1'),
    unfold() {
      const btn = document.querySelector('.btn_open_btn');
      if (this.clamp() && btn) btn.click();
    },
    reviews: () => [...document.querySelectorAll('.s_title, ul, h2, h3')].find((el) => el.textContent.trim() === '이용 후기'),
    qna: () => [...document.querySelectorAll('.btn_qna')].find((b) => b.offsetParent !== null) ?? document.querySelector('.btn_qna'),
  };

  function scrollToEl(el) {
    const top = el.getBoundingClientRect().top + scrollY - 24;
    window.scrollTo({ top, behavior: reduced() ? 'auto' : 'smooth' });
  }
  function go(key) {
    const el = $(`[data-section="${key}"]`);
    if (!el) return;
    // A section past Artmug's 3,000px cut is hidden until "내용 더 보기" is pressed.
    const clamp = artmug.clamp();
    if (clamp && el.getBoundingClientRect().bottom > clamp.getBoundingClientRect().bottom) {
      artmug.unfold();
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToEl(el)));
    } else scrollToEl(el);
  }
  root.addEventListener('click', (e) => {
    const g = e.target.closest('[data-go]');
    if (g) go(g.dataset.go);
    if (e.target.closest('[data-artmug="reviews"]')) {
      const t = artmug.reviews();
      if (t) { artmug.unfold(); requestAnimationFrame(() => scrollToEl(t)); } else toast('이 미리 보기에는 아트머그 후기가 없습니다.');
    }
    const pick = e.target.closest('[data-pick]');
    if (pick) { applyPick(JSON.parse(pick.dataset.pick)); go('inquiry'); }
  });

  // ---------- Inquiry ----------
  const form = $('#st-form');
  const prices = { talk: 30000, song: 50000, advanced: 80000 };
  const packageNames = { talk: '토크 음향', song: '토크 + 노래', advanced: '맞춤 고급 음향' };
  const configs = { single: ['원컴 방송 세팅', 50000], dual: ['투컴 방송 세팅', 80000], undecided: ['방송 세팅 · PC 구성 상담', null] };
  const serviceNames = { audio: '음향 세팅', broadcast: '방송 세팅', combined: '방송 + 음향', troubleshoot: '문제 해결' };
  let preferred = '';
  let lastTotal = 30000;
  let extraNote = '';

  function applyPick(p) {
    const set = (name, v) => { const r = form.querySelector(`input[name="${name}"][value="${v}"]`); if (r) r.checked = true; };
    set('service', p.service);
    if (p.broadcastConfig) set('broadcastConfig', p.broadcastConfig);
    if (p.package) set('package', p.package);
    extraNote = p.note ?? '';
    refresh();
  }

  function estimate() {
    const f = new FormData(form);
    const service = f.get('service');
    const items = [];
    let invalid = false;
    if (service === 'troubleshoot') items.push([extraNote || '방송 문제 해결', extraNote ? null : 25000]);
    if (service === 'broadcast' || service === 'combined') { const [n, p] = configs[f.get('broadcastConfig')]; items.push([n, p]); }
    if (service === 'audio' || service === 'combined') {
      items.push([packageNames[f.get('package')], prices[f.get('package')]]);
      for (const key of f.getAll('option')) {
        const o = C.options.find((x) => x.key === key);
        if (key === 'mic') {
          const q = Number($('#st-mic').value);
          if (!Number.isInteger(q) || q < 1 || q > 20) { invalid = true; continue; }
          items.push([`추가 마이크 ${q}대`, 20000 * q]);
        } else items.push([o.name, o.price]);
      }
    }
    if (f.get("gear")) items.push(["장비 추천 상담", 0]);
    const open = items.some(([, p]) => p === null);
    const total = items.reduce((s, [, p]) => s + (p ?? 0), 0);
    return { service, items, open, total, invalid, f };
  }

  function roll(el, from, to) {
    if (reduced() || from === to) { el.textContent = won(to); return; }
    const t0 = performance.now(); const d = parseFloat(getComputedStyle(root.host).getPropertyValue('--dur-roll')) || 450;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / d); const e = 1 - Math.pow(1 - k, 5);
      el.textContent = won(Math.round((from + (to - from) * e) / 1000) * 1000);
      if (k < 1) requestAnimationFrame(step); else el.textContent = won(to);
    };
    requestAnimationFrame(step);
  }

  function refresh() {
    const service = form.querySelector('input[name="service"]:checked').value;
    $('#st-f-broadcast').hidden = !(service === 'broadcast' || service === 'combined');
    $('#st-f-audio').hidden = !(service === 'audio' || service === 'combined');
    $('#st-f-options').hidden = !(service === 'audio' || service === 'combined');
    if (service !== 'troubleshoot') extraNote = '';
    $("#st-gear").hidden = !form.querySelector("input[name=\"gear\"]:checked");
    const micOn = !!form.querySelector('input[name="option"][value="mic"]:checked');
    $('#st-mic-field').hidden = !micOn;
    const r = estimate();
    const mic = $('#st-mic');
    mic.setAttribute('aria-invalid', String(micOn && r.invalid));
    $('#st-mic-hint').textContent = micOn && r.invalid ? '1부터 20 사이의 숫자로 적어 주세요.' : '1대당 20,000원';
    $('#st-mic-hint').classList.toggle('tf-field__hint--error', micOn && r.invalid);
    $('#st-copy').disabled = r.invalid;

    $('#st-items').innerHTML = r.items.map(([n, p]) => `<div class="st-summary__item"><span>${esc(n)}</span><span>${p === null ? '상담' : p === 0 ? '무료' : won(p) + '원'}</span></div>`).join('');
    roll($('#st-total'), lastTotal, r.total);
    lastTotal = r.total;
    $('#st-total-unit').textContent = r.open ? '원부터' : '원';
    $('#st-total-note').textContent = r.open ? '상담이 필요한 항목이 있어 최소 금액입니다' : '상담 후 확정';
    $('#st-slot-line').textContent = '희망 일정 · ' + (preferred || '상담 후 결정');

    const f = r.f;
    const lines = [
      '[악몽 세팅 문의]',
      `서비스: ${serviceNames[r.service]}`,
      ...r.items.map(([n, p]) => `- ${n}: ${p === null ? '상담 후 견적' : p === 0 ? '무료' : won(p) + '원'}`),
      `예상 금액: ${won(r.total)}원${r.open ? '부터' : ''} (상담 후 확정)`,
      `희망 일정: ${preferred || '상담 후 결정'}`,
      `활동명/채널: ${f.get('channel') || '-'}`,
      `플랫폼: ${f.get('platform') || '-'}`,
      `장비: ${f.get('gear') ? '아직 없음 (장비 추천 요청)' : f.get('equipment') || '-'}`,
      ...(f.get('gear') ? [`장비 예산: ${f.get('budget') || '-'}`, `주로 할 방송: ${f.get('purpose') || '-'}`, `방 상태: ${f.get('room') || '-'}`] : []),
      `요청: ${f.get('request') || '-'}`,
    ];
    $('#st-output').value = lines.join('\n');
    $('#st-copy-status').textContent = '';
  }
  form.addEventListener('input', refresh);
  form.addEventListener('change', refresh);

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch {
      const ta = $('#st-output'); ta.closest('details').open = true; ta.focus(); ta.select();
      try { return document.execCommand('copy'); } catch { return false; }
    }
  }
  $('#st-copy').addEventListener('click', async () => {
    const ok = await copyText($('#st-output').value);
    const qna = artmug.qna();
    const status = $('#st-copy-status');
    if (!ok) { status.textContent = '복사하지 못했습니다. 아래 글을 직접 선택해 복사해 주세요.'; $('.st-preview').open = true; return; }
    status.textContent = qna ? '복사했습니다. 열린 문의 창에 붙여 넣어 보내 주세요.' : '복사했습니다. 오른쪽의 "작가에게 문의"를 눌러 붙여 넣어 주세요.';
    if (qna) qna.click(); else toast('복사했습니다. 미리 보기에서는 문의 창이 열리지 않습니다.');
  });

  // ---------- Schedule ----------
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const kstToday = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const monday = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };
  const clock = (i) => `${String(Math.floor(i / 2)).padStart(2, '0')}:${i % 2 ? '30' : '00'}`;
  const label = (date) => { const d = new Date(date + 'T00:00:00'); return `${d.getMonth() + 1}월 ${d.getDate()}일 (${dayNames[d.getDay()]})`; };
  const today = iso(kstToday());
  let weekStart = monday(kstToday());
  let selectedDay = null;
  let weekData = null;
  const cache = new Map();

  async function fetchWeek(start) {
    const key = iso(start);
    if (cache.has(key)) return cache.get(key);
    const res = await fetch(`${host.dataset.api || API}?start=${key}&days=7`, { cache: 'no-store' });
    if (!res.ok) throw new Error('availability ' + res.status);
    const json = await res.json();
    cache.set(key, json);
    return json;
  }
  const open = (day) => (day.slots || []).filter((s) => s.status === 'available' && (day.date > today || day.date === today));

  async function loadWeek() {
    const end = new Date(weekStart); end.setDate(end.getDate() + 6);
    $('#st-week-label').textContent = `${weekStart.getMonth() + 1}월 ${weekStart.getDate()}일 – ${end.getMonth() + 1}월 ${end.getDate()}일`;
    $('#st-prev').disabled = weekStart <= monday(kstToday());
    $('#st-days').innerHTML = '';
    $('#st-slots-area').innerHTML = `<div class="st-state"><span class="tf-spinner" aria-hidden="true"></span><p>일정을 확인하는 중입니다.</p></div>`;
    try {
      weekData = await fetchWeek(weekStart);
      renderDays();
      const first = weekData.days.find((d) => open(d).length);
      selectedDay = first?.date ?? null;
      renderDays();
      if (selectedDay) renderSlots(); else await renderEmpty();
      $('#st-sched-status').textContent = `확인한 시각 ${new Date(weekData.checkedAt).toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit' })}`;
    } catch {
      $('#st-slots-area').innerHTML = `<div class="st-state st-state--error"><strong>일정을 불러오지 못했습니다.</strong><p>다시 시도하거나 원하는 날짜를 문의 글에 적어 주세요.</p><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-retry">다시 불러오기</button></div>`;
      $('#st-retry').addEventListener('click', loadWeek);
      $('#st-sched-status').textContent = '';
    }
  }
  function renderDays() {
    $('#st-days').innerHTML = weekData.days.map((d) => {
      const dt = new Date(d.date + 'T00:00:00'); const n = open(d).length; const past = d.date < today;
      return `<button class="st-day" type="button" data-date="${d.date}" aria-pressed="${d.date === selectedDay}" ${past || !n ? 'disabled' : ''}>
        <span class="st-day__name">${dayNames[dt.getDay()]}</span><span class="st-day__date">${dt.getMonth() + 1}/${dt.getDate()}</span>
        <span class="st-day__count">${past ? '지난 날' : n ? `${n}칸 열림` : '열린 칸 없음'}</span></button>`;
    }).join('');
  }
  function renderSlots() {
    const day = weekData.days.find((d) => d.date === selectedDay);
    $('#st-slots-area').innerHTML = `<div class="st-slots" role="group" aria-label="${label(selectedDay)} 시작 시간">${open(day).map((s) => {
      const text = `${label(selectedDay)} ${clock(s.index)}`;
      return `<button class="tf-btn tf-btn--outline tf-btn--sm st-slot" type="button" data-slot="${esc(text)}" aria-pressed="${preferred === text}">${clock(s.index)}</button>`;
    }).join('')}</div>`;
  }
  async function renderEmpty() {
    const area = $('#st-slots-area');
    area.innerHTML = `<div class="st-state"><p>다음 열린 날을 찾는 중입니다.</p></div>`;
    let found = null; let foundWeek = null;
    for (let w = 1; w <= 4 && !found; w++) {
      const s = new Date(weekStart); s.setDate(s.getDate() + 7 * w);
      try { const data = await fetchWeek(s); const d = data.days.find((x) => open(x).length); if (d) { found = d.date; foundWeek = s; } } catch { break; }
    }
    area.innerHTML = found
      ? `<div class="st-state"><p>가장 빠른 날은 ${label(found)}입니다.</p><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" id="st-jump">${label(found)} 보기</button></div>`
      : `<div class="st-state"><p>4주 안에 열린 시간이 없습니다. 원하는 날짜를 문의 글에 적어 주세요.</p><button class="tf-btn tf-btn--outline tf-btn--sm" type="button" data-go="inquiry">문의 글 만들기</button></div>`;
    $('#st-jump')?.addEventListener('click', () => { weekStart = foundWeek; loadWeek(); });
  }
  $('#st-days').addEventListener('click', (e) => { const b = e.target.closest('.st-day'); if (!b || b.disabled) return; selectedDay = b.dataset.date; renderDays(); renderSlots(); });
  $('#st-slots-area').addEventListener('click', (e) => {
    const b = e.target.closest('.st-slot'); if (!b) return;
    preferred = preferred === b.dataset.slot ? '' : b.dataset.slot;
    renderSlots(); refresh();
    if (preferred) toast(`${preferred}을 희망 일정으로 넣었습니다.`);
  });
  $('#st-prev').addEventListener('click', () => { weekStart.setDate(weekStart.getDate() - 7); loadWeek(); });
  $('#st-next').addEventListener('click', () => { weekStart.setDate(weekStart.getDate() + 7); loadWeek(); });

  // Load the schedule only when it comes near the screen.
  new IntersectionObserver((entries, io) => { if (entries.some((x) => x.isIntersecting)) { io.disconnect(); loadWeek(); } }, { rootMargin: '600px' }).observe($('#st-schedule'));

  // While Artmug cuts the page at 3,000px, push the first section below the cut so no heading is sliced in half.
  function fitFold() {
    const first = $(`[data-section="${AFTER_FOLD[0]}"]`);
    const clamp = artmug.clamp();
    first.style.paddingTop = '';
    if (!clamp) return;
    const cut = clamp.getBoundingClientRect().bottom;
    const head = first.querySelector('.st-band__head').getBoundingClientRect().top;
    if (head < cut + 24) first.style.paddingTop = `calc(var(--space-12) + ${Math.ceil(cut + 24 - head)}px)`;
  }
  new ResizeObserver(fitFold).observe(host);
  const fold = document.querySelector(".detailinfo");
  if (fold) new MutationObserver(fitFold).observe(fold, { attributes: true, attributeFilter: ["class"] });
  (document.fonts?.ready ?? Promise.resolve()).then(fitFold);

  refresh();
  mountRail();

  // ---------- Rail ----------
  function mountRail() {
    const holder = document.createElement('div');
    holder.id = HOST_ID + '-rail';
    holder.dataset.theme = host.dataset.theme;
    holder.dataset.feel = host.dataset.feel;
    document.body.appendChild(holder);
    const r = holder.attachShadow({ mode: 'open' });
    const keys = order;
    r.innerHTML = `<style>${CSS}</style>
      <nav class="rail" aria-label="악몽 소개 바로가기">
        <p class="rail__name">악몽 · 방송 음향 세팅</p>
        <div class="rail__nav"><span class="rail__marker" aria-hidden="true"></span>${keys.map((k) => `<button class="rail__item" type="button" data-key="${k}">${LABELS[k]}</button>`).join('')}</div>
        <div class="rail__meter"><div class="rail__meter-line"><span>읽은 곳</span><span class="rail__pct">0%</span></div><div class="tf-progress"><div class="tf-progress__bar"></div></div></div>
        <span class="rail__now"></span>
        <button class="tf-btn" type="button" data-key="inquiry">문의 글 만들기</button>
      </nav>`;
    const rail = r.querySelector('.rail');
    const items = [...r.querySelectorAll('.rail__item')];
    const cta = r.querySelector('.tf-btn');
    r.addEventListener('click', (e) => { const b = e.target.closest('[data-key]'); if (b) go(b.dataset.key); });

    let current = null;
    function layout() {
      const rect = host.getBoundingClientRect();
      const wide = rect.width >= 1100;
      rail.classList.toggle('rail--bar', !wide);
      if (wide) rail.style.left = rect.right - 184 + 'px';
      const vh = innerHeight;
      const visible = rect.top < vh * 0.6 && rect.bottom > vh * 0.4;
      rail.dataset.open = String(visible);
      // Which section holds the line a third of the way down the screen.
      let now = keys[0];
      for (const k of keys) { const el = $(`[data-section="${k}"]`); if (el && el.getBoundingClientRect().top <= vh / 3) now = k; }
      if (now !== current) {
        current = now;
        items.forEach((b) => b.setAttribute('aria-current', String(b.dataset.key === now)));
        const on = items.find((b) => b.dataset.key === now);
        r.querySelector('.rail__marker').style.setProperty('--rail-y', on.offsetTop + 'px');
        r.querySelector('.rail__now').textContent = LABELS[now];
        // One black button on screen: the form's own button takes over in the inquiry section.
        cta.classList.toggle('tf-btn--outline', now === 'inquiry');
      }
      const clamp = artmug.clamp();
      const bottom = clamp ? Math.min(rect.bottom, clamp.getBoundingClientRect().bottom) : rect.bottom;
      const total = bottom - rect.top - vh;
      const pct = Math.max(0, Math.min(1, total > 0 ? -rect.top / total : 1));
      r.querySelector('.rail__pct').textContent = Math.round(pct * 100) + '%';
      r.querySelector('.tf-progress__bar').style.setProperty('--tf-progress', pct);
    }
    let raf = 0;
    const schedule = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; layout(); }); };
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    new ResizeObserver(schedule).observe(host);
    layout();
  }
}

})();

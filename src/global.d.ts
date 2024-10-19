declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_KEYS: string;
  readonly VITE_API_KEYS_WEATHER: string;
  readonly VITE_BASE_URL_WEATHER_CURRENT_BASE: string;
  readonly VITE_BASE_URL_WEATHER_FORECASE_BASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

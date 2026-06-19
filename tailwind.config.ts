import type { Config } from 'tailwindcss';
const config: Config = {content:['./src/**/*.{ts,tsx}'],theme:{extend:{colors:{brand:{900:'#24113f',800:'#32185a',700:'#47227d'},cta:'#b8ff2c',lavender:'#f2eff8',ink:'#1f1730'},boxShadow:{soft:'0 20px 60px rgba(36,17,63,.12)',card:'0 12px 30px rgba(55,38,82,.09)'},borderRadius:{'3xl':'1.75rem','4xl':'2.25rem'}}},plugins:[]};
export default config;

import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
	// ссылка на папку проекта
  base: '/Auto/', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				main: resolve(__dirname, 'src/html/main.html'),
				equip: resolve(__dirname, 'src/html/equip.html'),
				equipTt: resolve(__dirname, 'src/html/equipTt.html'),
			}
		}
	}
});
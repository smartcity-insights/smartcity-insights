/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					// 主要顏色系列
					50: 'hsl(var(--primary-50) / <alpha-value>)',
					100: 'hsl(var(--primary-100) / <alpha-value>)',
					200: 'hsl(var(--primary-200) / <alpha-value>)',
					300: 'hsl(var(--primary-300) / <alpha-value>)',
					400: 'hsl(var(--primary-400) / <alpha-value>)',
					500: 'hsl(var(--primary-500) / <alpha-value>)',
					600: 'hsl(var(--primary-600) / <alpha-value>)',
					700: 'hsl(var(--primary-700) / <alpha-value>)',
					800: 'hsl(var(--primary-800) / <alpha-value>)',
					900: 'hsl(var(--primary-900) / <alpha-value>)',
				},
				// 中性顏色系列
				neutral: {
					50: 'hsl(var(--neutral-50) / <alpha-value>)',
					100: 'hsl(var(--neutral-100) / <alpha-value>)',
					200: 'hsl(var(--neutral-200) / <alpha-value>)',
					300: 'hsl(var(--neutral-300) / <alpha-value>)',
					400: 'hsl(var(--neutral-400) / <alpha-value>)',
					500: 'hsl(var(--neutral-500) / <alpha-value>)',
					600: 'hsl(var(--neutral-600) / <alpha-value>)',
					700: 'hsl(var(--neutral-700) / <alpha-value>)',
					800: 'hsl(var(--neutral-800) / <alpha-value>)',
					900: 'hsl(var(--neutral-900) / <alpha-value>)',
				},
				// 紫色系列
				purple: {
					50: 'hsl(var(--purple-50) / <alpha-value>)',
					100: 'hsl(var(--purple-100) / <alpha-value>)',
					200: 'hsl(var(--purple-200) / <alpha-value>)',
					300: 'hsl(var(--purple-300) / <alpha-value>)',
					400: 'hsl(var(--purple-400) / <alpha-value>)',
					500: 'hsl(var(--purple-500) / <alpha-value>)',
					600: 'hsl(var(--purple-600) / <alpha-value>)',
					700: 'hsl(var(--purple-700) / <alpha-value>)',
					800: 'hsl(var(--purple-800) / <alpha-value>)',
					900: 'hsl(var(--purple-900) / <alpha-value>)',
				},
				// 綠色系列
				green: {
					50: 'hsl(var(--green-50) / <alpha-value>)',
					100: 'hsl(var(--green-100) / <alpha-value>)',
					200: 'hsl(var(--green-200) / <alpha-value>)',
					300: 'hsl(var(--green-300) / <alpha-value>)',
					400: 'hsl(var(--green-400) / <alpha-value>)',
					500: 'hsl(var(--green-500) / <alpha-value>)',
					600: 'hsl(var(--green-600) / <alpha-value>)',
					700: 'hsl(var(--green-700) / <alpha-value>)',
					800: 'hsl(var(--green-800) / <alpha-value>)',
					900: 'hsl(var(--green-900) / <alpha-value>)',
				},
				// 橙色系列
				orange: {
					50: 'hsl(var(--orange-50) / <alpha-value>)',
					100: 'hsl(var(--orange-100) / <alpha-value>)',
					200: 'hsl(var(--orange-200) / <alpha-value>)',
					300: 'hsl(var(--orange-300) / <alpha-value>)',
					400: 'hsl(var(--orange-400) / <alpha-value>)',
					500: 'hsl(var(--orange-500) / <alpha-value>)',
					600: 'hsl(var(--orange-600) / <alpha-value>)',
					700: 'hsl(var(--orange-700) / <alpha-value>)',
					800: 'hsl(var(--orange-800) / <alpha-value>)',
					900: 'hsl(var(--orange-900) / <alpha-value>)',
				},
				// 紅色系列
				red: {
					50: 'hsl(var(--red-50) / <alpha-value>)',
					100: 'hsl(var(--red-100) / <alpha-value>)',
					200: 'hsl(var(--red-200) / <alpha-value>)',
					300: 'hsl(var(--red-300) / <alpha-value>)',
					400: 'hsl(var(--red-400) / <alpha-value>)',
					500: 'hsl(var(--red-500) / <alpha-value>)',
					600: 'hsl(var(--red-600) / <alpha-value>)',
					700: 'hsl(var(--red-700) / <alpha-value>)',
					800: 'hsl(var(--red-800) / <alpha-value>)',
					900: 'hsl(var(--red-900) / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
import { defineStore } from 'pinia'

export default defineStore('theme', {
  state: () => ({
    darkMode: false,
    darkModeClassName: 'dark'
  }),
  actions: {
    toggleMode() {
      this.darkMode = !this.darkMode

      if (this.darkMode) {
        document.body.classList.add(this.darkModeClassName)
      } else {
        document.body.classList.remove(this.darkModeClassName)
      }

      localStorage.setItem(this.darkModeClassName, `${this.darkMode}`)
    },
    setDarkMode(isDark: boolean = true) {
      if (isDark) {
        document.body.classList.add(this.darkModeClassName)
      } else {
        document.body.classList.remove(this.darkModeClassName)
      }

      this.darkMode = isDark
      localStorage.setItem(this.darkModeClassName, `${this.darkMode}`)
    }
  }
})

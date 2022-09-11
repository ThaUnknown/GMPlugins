import { all } from '@goosemod/webpack'
import { patch } from '@goosemod/patcher'
const manifest = {
  name: 'Discord',
  short_name: 'Discord',
  start_url: 'https://discord.com/channels/@me', // URL when PWA launches
  display: 'fullscreen',
  display_override: ['window-controls-overlay'],
  lang: 'en-US',
  background_color: '#202225',
  theme_color: '#202225',
  scope: 'https://discord.com', // scope of all possible URL's
  description: 'Imagine a place...',
  orientation: 'landscape'
}

const platform = (() => {
  if (navigator.userAgent.includes('Windows')) return 'WINDOWS'
  if (navigator.userAgent.includes('Mac')) return 'OSX'
  if (navigator.userAgent.includes('Linux')) return 'LINUX'
})()

const url = URL.createObjectURL(new Blob([JSON.stringify(manifest)], { type: 'application/json' }))

export default {
  goosemodHandlers: {
    onImport () {
      this.manifest = document.createElement('link')
      this.manifest.rel = 'manifest'
      this.manifest.href = url
      this.styles = document.createElement('style')
      this.styles.textContent = `
    .sidebar-1tnWFu {
      border-radius: 8px 0 0;
      overflow: hidden;
    }`
      document.head.prepend(this.manifest, this.styles) // prepend because append gets overwritten
      const titlebar = all().find(m => m?.default?.toString?.()?.includes('case m.PlatformTypes.WINDOWS'))
      this.unpatch = patch(titlebar, 'default', args => {
        if (args[0].type !== 'WEB') { // only patch on web
          this.onRemove()
          return args
        }
        args[0].type = platform
        return args
      }, true)
    },
    onRemove () {
      this.unpatch?.()
      this.styles?.remove()
      this.manifest?.remove()
    }
  }
}

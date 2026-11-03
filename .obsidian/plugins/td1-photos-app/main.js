const { Plugin, TFile, Notice } = require('obsidian')
const { shell } = require('electron')

const PHOTO_FOLDER = '01-Semestre-1/05-Optimisation-non-lineaire/assets/TD1/sources/'

module.exports = class TD1PhotosApp extends Plugin {
  onload() {
    this.registerDomEvent(document, 'click', (event) => {
      if (event.button !== 0) return

      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest('a.internal-link, .cm-hmd-internal-link')
      if (!link) return

      const raw = link.getAttribute('data-href') || link.getAttribute('href')
      if (!raw || !/\.jpe?g(?:#.*)?$/i.test(raw)) return

      const linkPath = raw.split('#', 1)[0]
      const sourcePath = this.app.workspace.getActiveFile()?.path || ''
      const file = this.app.vault.getAbstractFileByPath(linkPath) ||
        this.app.metadataCache.getFirstLinkpathDest(linkPath, sourcePath)

      if (!(file instanceof TFile) || !file.path.startsWith(PHOTO_FOLDER)) return

      event.preventDefault()
      event.stopImmediatePropagation()

      const adapter = this.app.vault.adapter
      if (typeof adapter.getFullPath !== 'function') {
        new Notice('L’ouverture dans l’application photo est indisponible sur cet appareil.')
        return
      }

      void shell.openPath(adapter.getFullPath(file.path))
        .then((error) => {
          if (error) new Notice(`Impossible d’ouvrir la photo : ${error}`)
        })
        .catch((error) => new Notice(`Impossible d’ouvrir la photo : ${error.message}`))
    }, true)
  }
}

import { all, findByProps, findByDisplayName } from '@goosemod/webpack'
import { patch } from '@goosemod/patcher'
import React from 'react'

const { openModal } = findByProps('openModalLazy')
const Colors = findByProps('button', 'colorRed')
const ConfirmModal = findByDisplayName('ConfirmModal')

let qualitySettings = { height: 1080, width: 1920, frameRate: 60, framerate: 60 }

class SettingsForm extends React.Component {
  constructor (props = {}) {
    super(props)
    this.state = qualitySettings = { ...qualitySettings, ...(props.state || {}) }
  }

  updateState (obj) {
    const newstate = { ...this.state, ...obj }
    qualitySettings = { ...newstate }
    this.setState(newstate)
  }

  render () { // source is 0, width, but how to implement that?
    return (
      <div className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz" style={{ flex: '1 1 auto' }}>
        <div className="settingsGroup-VNJxZ8">
          <h5 className="text-sm-normal-3Zj3Iv h5-2RwDNl title-3hptVQ formItemTitleSlim-2KMUr4" data-text-variant="text-sm/normal">Resolution</h5>
          <div role="group" className="group-1_ptLP flex-3BkGQD">
            <button type="button" onClick={() => this.updateState({ width: 853, height: 480 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.height === 480 && 'selectorButtonSelected-3cQUnj ') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.height === 480 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">480p</div>
            </button>
            <button type="button" onClick={() => this.updateState({ width: 1280, height: 720 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.height === 720 && 'selectorButtonSelected-3cQUnj ') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.height === 720 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">720p</div>
            </button>
            <button type="button" onClick={() => this.updateState({ width: 1920, height: 1080 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.height === 1080 && 'selectorButtonSelected-3cQUnj ') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.height === 1080 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">1080p</div>
            </button>
            <button type="button" onClick={() => this.updateState({ width: 3840, height: 2160 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.height === 2160 && 'selectorButtonSelected-3cQUnj ') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.height === 2160 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">2k</div>
            </button>
          </div>
        </div>
        <div className="settingsGroup-VNJxZ8">
          <h5 className="text-sm-normal-3Zj3Iv h5-2RwDNl title-3hptVQ formItemTitleSlim-2KMUr4" data-text-variant="text-sm/normal">Frame Rate</h5>
          <div role="group" className="group-1_ptLP flex-3BkGQD">
            <button type="button" onClick={() => this.updateState({ frameRate: 5, framerate: 5 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.frameRate === 5 && 'selectorButtonSelected-3cQUnj') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.frameRate === 5 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">5</div>
            </button>
            <button type="button" onClick={() => this.updateState({ frameRate: 15, framerate: 15 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.frameRate === 15 && 'selectorButtonSelected-3cQUnj') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.frameRate === 15 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">15</div>
            </button>
            <button type="button" onClick={() => this.updateState({ frameRate: 30, framerate: 30 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.frameRate === 30 && 'selectorButtonSelected-3cQUnj') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.frameRate === 30 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">30</div>
            </button>
            <button type="button" onClick={() => this.updateState({ frameRate: 60, framerate: 60 })} className={'item-2OyinQ flexCenter-1Mwsxg flex-3BkGQD justifyCenter-rrurWZ alignCenter-14kD11 selectorButton-3fWZ0_ ' + (this.state.frameRate === 60 && 'selectorButtonSelected-3cQUnj') || ''}>
              <div className={'defaultColor-24IHKz text-xs-normal-3SiVjEhen selectorText-LxivBc ' + (this.state.frameRate === 60 && 'selectorTextSelected-2zup8I') || ''} data-text-variant="text-xs/normal">60</div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const { WantsVideoQuality, VideoQualityManager } = findByProps('WantsVideoQuality', 'VideoQuality')

const screenShare = Object.values(all().find((obj) => {
  try {
    return Object.values(obj).some(({ prototype }) => prototype?.getDesktopSource && prototype._enable)
  } catch (e) {
    return false
  }
})).find(({ prototype }) => prototype?.getDesktopSource && prototype._enable).prototype

const { defaultVideoQualityOptions } = findByProps('defaultVideoQualityOptions')

const gdm = navigator.mediaDevices.getDisplayMedia

let unpatch = null
let unpatch2 = null

export default {
  goosemodHandlers: {
    onImport () {
      const { getDesktopSource } = screenShare
      unpatch = patch(screenShare, 'getDesktopSource', async function (args) {
        await modal({ header: 'Screen Share', cancelText: 'Back', confirmText: 'Go Live', content: (<SettingsForm state={args[0]} />) })
        defaultVideoQualityOptions.videoBudget = { ...qualitySettings } // might be unnecessary
        defaultVideoQualityOptions.videoCapture = { ...qualitySettings }
        return await getDesktopSource.call(this, qualitySettings)
      }, true, true)
      unpatch2 = patch(VideoQualityManager.prototype, 'getDesktopQuality', function () { // even if the MediaStream is 60fps they change it to 30, even tho it reports 60
        return new WantsVideoQuality({
          capture: { ...qualitySettings },
          bitrateMin: this.options.desktopBitrate.min,
          bitrateMax: this.options.desktopBitrate.max,
          bitrateTarget: this.options.desktopBitrate.max
        })
      }, true, true)
      navigator.mediaDevices.getDisplayMedia = (constraints = {}) => { // discord forces 30 fps on the function call, so just patch the root function
        constraints.video = qualitySettings
        return gdm.call(navigator.mediaDevices, constraints)
      }
    },
    onRemove () {
      unpatch?.()
      unpatch2?.()
      navigator.mediaDevices.getDisplayMedia = gdm
    }
  }
}

function modal ({ header = 'ARE YOU SURE', confirmText = 'CONFIRM', cancelText = 'CANCEL', content = 'DEFAULT', type = 'neutral' } = {}) {
  return new Promise((resolve, reject) => {
    // js sorely missing an expression switch moment
    const buttonColor =
      {
        danger: Colors.colorRed,
        confirm: Colors.colorGreen
      }[type.toLowerCase()] ?? Colors.colorBrandNew

    openModal((e) => {
      if (e.transitionState === 3) reject(Error('Modal Transition State 3'))

      return (
        <ConfirmModal
          {...{
            header,
            confirmText,
            cancelText
          }}
          transitionState={e.transitionState}
          confirmButtonColor={buttonColor}
          onClose={() => reject(Error('User Closed Modal'))}
          onCancel={() => {
            reject(Error('User Cancelled Modal'))
            e.onClose()
          }}
          onConfirm={() => {
            resolve()
            e.onClose()
          }}>
          {content}
        </ConfirmModal>
      )
    })
  })
}

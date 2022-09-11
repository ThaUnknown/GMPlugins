import { findByProps } from '@goosemod/webpack'
import { patch } from '@goosemod/patcher'
import React from 'react'

import { getOwnerInstance, getNodeInternals, findInReactTree } from '@goosemod/reactUtils'

let unpatch

const buttons = [
  {
    label: 'Copy',
    action: async (_orig, info) => {
      const url = info.target.href || info.target.src
      const res = await fetch(url)
      const blob = await res.blob()
      navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ])
    },
    id: 'c_1',
    group: 'image'
  },
  {
    label: 'Save',
    action: async (_orig, info) => {
      const url = info.target.href || info.target.src
      const res = await fetch(url)
      const blob = await res.blob()
      const link = document.createElement('a')
      const ourl = URL.createObjectURL(blob) // needed for cross origin :/
      link.download = url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))
      link.href = ourl
      link.click()
      link.remove()
      URL.revokeObjectURL(ourl)
    },
    id: 'c_2',
    group: 'image'
  },
  {
    label: 'Copy Link',
    action: (_orig, info) => {
      const url = info.target.href || info.target.src
      navigator.clipboard.writeText(url)
    },
    id: 'c_3',
    group: 'link'
  },
  {
    label: 'Open Link',
    action: (_orig, info) => {
      const url = info.target.href || info.target.src
      open(url, '_blank')
    },
    id: 'c_4',
    group: 'link'
  }
]

export default {
  goosemodHandlers: {
    onImport: () => {
      const Menu = findByProps('MenuItem')
      unpatch = patch(Menu, 'default', (args) => {
        if (args.length < 1) return
        const [{ navId, children }] = args
        if (navId !== 'message') return args
        const extraInfo = getExtraInfo(navId)
        if (!(extraInfo?.target?.href || extraInfo?.target?.src)) return args

        const groupmap = {
          image: [],
          link: []
        }

        for (const item of buttons) {
          const alreadyHasItem = findInReactTree(children, child => child?.props?.id === item.id)
          if (alreadyHasItem) continue

          item.originalAction = item.action
          item.action = function () {
            return item.originalAction(arguments, extraInfo)
          }

          const props = { ...item }

          const element = React.createElement(Menu.MenuItem, props)

          groupmap[item.group].push(element)
        }

        const groupsElements = []
        for (const [group, items] of Object.entries(groupmap)) {
          if (findInReactTree(children, child => child && child.props && child.props.group === group)) continue
          if (!items.length) continue
          groupsElements.push(React.createElement(Menu.MenuGroup, { group }, items))
        }
        children.push(...groupsElements)

        return args
      }, true)
    },
    onRemove: () => {
      unpatch()
    }
  }
}

const getExtraInfo = () => {
  try {
    return getNodeInternals(getOwnerInstance(document.getElementById('message'))).return.return.memoizedProps
  } catch (e) { return undefined }
}

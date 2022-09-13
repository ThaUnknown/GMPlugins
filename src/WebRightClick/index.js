import { findByProps } from '@goosemod/webpack'
import { patch } from '@goosemod/patcher'
import React from 'react'

import { getOwnerInstance, getNodeInternals, findInReactTree } from '@goosemod/reactUtils'

let unpatch

const buttons = [
  {
    label: 'Copy Image',
    fn: async (_orig, info) => {
      const url = info.target.href || info.target.src
      const res = await fetch(url)
      const blob = await res.blob()
      navigator.clipboard.write([new ClipboardItem({ 'image/png': new Blob([blob], { type: 'image/png' }) })])
    },
    cond: ({ attachment }) => attachment?.content_type?.startsWith('image'),
    id: 'c_1',
    group: 'image'
  },
  {
    label: 'Save Image',
    fn: async (_orig, info) => {
      const url = info.target.href || info.target.src
      const res = await fetch(url)
      const blob = await res.blob()
      const link = document.createElement('a')
      const ourl = URL.createObjectURL(blob) // needed for cross origin :/ sometimes CORS will be lineant
      link.download = url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))
      link.href = ourl
      link.click()
      link.remove()
      URL.revokeObjectURL(ourl)
    },
    cond: ({ attachment }) => attachment?.content_type?.startsWith('image'),
    id: 'c_2',
    group: 'image'
  },
  {
    label: 'Copy Link',
    fn: (_orig, { message }) => navigator.clipboard.writeText(message?.attachments?.[0]?.url || message.embeds[0].url),
    cond: ({ message }) => message?.attachments?.[0]?.url || message?.embeds?.[0]?.url,
    id: 'c_3',
    group: 'link'
  },
  {
    label: 'Open Link',
    fn: (_orig, { message }) => open(message?.attachments?.[0]?.url || message.embeds[0].url, '_blank'),
    cond: ({ message }) => message?.attachments?.[0]?.url || message?.embeds?.[0]?.url,
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
          if (!item.cond(extraInfo)) continue
          const alreadyHasItem = findInReactTree(children, child => child?.props?.id === item.id)
          if (alreadyHasItem) continue

          item.action = function () {
            return item.fn(arguments, extraInfo)
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

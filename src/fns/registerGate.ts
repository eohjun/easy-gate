import { GateView } from '../GateView'
import { openView } from './openView'
import { addIcon, Plugin } from 'obsidian'
import { GateFrameOption } from '../GateOptions'
import OpenGatePlugin from '../main'

export const registerGate = (plugin: Plugin, options: GateFrameOption) => {
    plugin.registerView(options.id, (leaf) => {
        return new GateView(leaf, options, plugin as OpenGatePlugin)
    })

    let iconName = options.icon

    if (options.icon.startsWith('<svg')) {
        addIcon(options.id, options.icon)
        iconName = options.id
    }

    if (options.hasRibbon) {
        plugin.addRibbonIcon(iconName, options.title, async (evt: MouseEvent) => openView(plugin.app.workspace, options.id, options.position))
    }

    plugin.addCommand({
        // btoa()는 ASCII만 지원하므로 UTF-8 URL을 위해 encodeURIComponent 사용
        id: `open-gate-${btoa(encodeURIComponent(options.url))}`,
        name: `Easy Gate: ${options.title}`,
        callback: async () => await openView(plugin.app.workspace, options.id, options.position)
    })
}

import { App, Modal } from 'obsidian';
import { createWebviewTag } from './fns/createWebviewTag';
import { createIframe } from './fns/createIframe';
import { Platform } from 'obsidian';
import WebviewTag = Electron.WebviewTag;

export class GatePopupModal extends Modal {
    private url: string;
    private frame: WebviewTag | HTMLIFrameElement;

    constructor(app: App, url: string) {
        super(app);
        this.url = url;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.addClass('gate-popup-modal');
        // Simple header
        const header = contentEl.createDiv({ cls: 'gate-popup-header' });
        header.createEl('h3', { text: 'Quick View' }); // Localized: English

        const body = contentEl.createDiv({ cls: 'gate-popup-body' });
        // Use full height 
        body.style.height = '600px';
        body.style.width = '100%';

        const onReady = () => {
            // Frame ready
        };

        const options = {
            id: 'popup',
            title: 'Popup',
            icon: 'globe',
            url: this.url,
            // default other props
        };

        if (Platform.isMobileApp) {
            // @ts-ignore
            this.frame = createIframe(options, onReady);
        } else {
            // @ts-ignore
            this.frame = createWebviewTag(options, onReady, contentEl.doc);
        }

        body.appendChild(this.frame as unknown as HTMLElement);
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}

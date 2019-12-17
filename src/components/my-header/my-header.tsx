import { Component, State, Prop, Event, h, EventEmitter, getAssetPath } from '@stencil/core';

@Component({
    tag: 'my-header',
    styleUrl: 'my-header.scss',
    assetsDirs: ['assets'],
    shadow: true
})
export class MyHeader {

    @State() toggle: boolean = false;
    @Event() onToggle: EventEmitter;
    @Prop() label: string;
    @Prop() icon: string;
    @Prop() width: string;
    @Prop() title: string;

    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle })
    }

    render() {

        return (
            <header class="fixed bg-white flex flex-row pin-t pin-l shadow-md w-full z-50">
                <a href="#" class="flex ml-4 mb-2 mt-2 mr-4 h-6 w-6">
                    <img src={getAssetPath(`./assets/${this.icon}`)} alt="Kompas Icon"/>
                </a>
                <div class="border-l border-solid border-black flex mb-2 mt-2"></div>
                <div class="flex items-center ml-4">
                    <span class="flex font-chronicle-display text-sm text-black tracking-wide">{this.title}</span>
                </div>
            </header>
        );
    }
}

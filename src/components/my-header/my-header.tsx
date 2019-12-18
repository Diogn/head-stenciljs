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
    @Prop() homeUrl: string;
    @Prop() label: string;
    @Prop() icon: string;
    @Prop() width: string;
    @Prop() title: string;
    @Prop() fbicon: string;
    @Prop() twiticon: string;

    toggleComponent() {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle })
    }

    render() {

        return (
            <header class="bg-black flex flex-row pin-t pin-l w-full px-4 z-50 absolute">
                <a href="{this.homeUrl}" class="flex mb-2 mt-2 mr-4 h-6 w-6">
                    <img class="block w-full" src={getAssetPath(`./assets/${this.icon}`)} alt="Kompas Icon"/>
                </a>
                <div class="border-l border-solid border-white flex mb-2 mt-2"></div>
                <div class="flex items-center ml-4 min-w-0">
                    <span class="block font-chronicle-display text-sm text-white tracking-wide whitespace-no-wrap overflow-hidden">{this.title}</span>
                </div>
                <div class="flex ml-auto">
                    <div class="flex ml-4 pr-5">
                        <a href="#" class="bg-white flex mb-2 mt-2 rounded-sm h-6 w-6 facebook-wrapper">
                            <img src={getAssetPath(`./assets/${this.fbicon}`)} alt="facebook" class="block w-full"/>
                        </a>
                        <a href="#" class="bg-white flex mb-2 mt-2 rounded-sm h-6 w-6 twitter-wrapper">
                            <img src={getAssetPath(`./assets/${this.twiticon}`)} alt="twitter" class="block w-full"/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

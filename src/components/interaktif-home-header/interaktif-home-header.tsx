import { Component, Prop, h } from '@stencil/core';


@Component({
    tag: 'interaktif-home-header',
    styleUrl: 'interaktif-home-header.scss'
})
export class InteraktifHomeHeader {

    @Prop() homeUrl: string = 'https://interaktif.kompas.id';
    @Prop() homeIcon: string = 'https://interaktif.kompas.id/wp-content/themes/interaktif/assets/img/reusables/logos/kompas-blue.svg';
    @Prop() theTitle: string = 'Tutur Visual';

    render() {
        return (
            <header class="fixed bg-white flex flex-row pin-t pin-l shadow-md w-full z-50">
                <a href={this.homeUrl} class="flex ml-4 mb-2 mt-2 mr-4 h-6 w-6">
                    <img class="block w-full" src={this.homeIcon} alt="kompas-blue-icon"/>
                </a>
                <div class="border-l border-solid border-black flex mb-2 mt-2"></div>
                <div class="flex items-center ml-4">
        <span class="flex font-chronicle-display text-sm text-black tracking-wide">{ this.theTitle }</span>
                </div>
            </header>
        );
    }
}

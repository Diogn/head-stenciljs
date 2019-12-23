import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'my-header',
    styleUrl: 'my-header.scss',
    shadow: true
})
export class MyHeader {

    @Prop() homeUrl: string = 'https://interaktif.kompas.id';
    @Prop() homeIcon: string = 'https://interaktif.kompas.id/wp-content/themes/interaktif/assets/img/reusables/logos/kompas-white.svg';
    @Prop() theTitle: string = 'Star Wars: Kisah Pertarungan Ambisi Para Skywalker';
    @Prop() fbIcon: string = 'https://interaktif.kompas.id/wp-content/themes/interaktif/assets/img/reusables/logos/facebook-white.svg';
    @Prop() twitIcon: string = 'https://interaktif.kompas.id/wp-content/themes/interaktif/assets/img/reusables/logos/twitter-white.svg';

    render() {

        return (
            <header class="bg-black flex flex-row pin-t pin-l w-full px-4 z-50 absolute">
                <a href={this.homeUrl} class="flex mb-2 mt-2 mr-4 h-6 w-6">
                    <img class="block w-full" src={this.homeIcon} alt="Kompas Icon"/>
                </a>
                <div class="border-l border-solid border-white flex mb-2 mt-2"></div>
                <div class="flex items-center ml-4 min-w-0 text-white">
                    <span class="block font-chronicle-display text-sm text-white tracking-wide whitespace-no-wrap overflow-hidden">{this.theTitle}</span>
                </div>
                <div class="flex ml-auto">
                    <div class="flex ml-4 pr-5">
                        <a href="#" class="bg-white flex mb-2 mt-2 rounded-sm h-6 w-6 facebook-wrapper">
                            <img src={this.fbIcon} alt="facebook" class="block w-full"/>
                        </a>
                        <a href="#" class="bg-white flex mb-2 mt-2 rounded-sm h-6 w-6 twitter-wrapper">
                            <img src={this.twitIcon} alt="twitter" class="block w-full"/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

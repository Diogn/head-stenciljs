import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'kompas-header',
    styleUrl: '../../global/style.css',
})

export class KompasHeader  {
    @Prop() homeUrl: string;
    @Prop() homeIcon: string;
    @Prop() storeIcon: string;
    @Prop() findIcon: string;
    @Prop() rubricIcon: string;
    @Prop() loginIcon: string;
    @Prop() memberIcon: string;

    render() {
        return (
            <div class="relative">
                <header class="bg-blue-royal-700 fixed flex flex-col font-pt-sans py-1 w-full z-40">
                    <div class="flex text-sm w-full max-w-xl mx-auto">
                        <div class="flex flex-row justify-between w-full">
                            
                            <div class="flex">
                                <button class="cursor-pointer font-bold px-4 py-2 text-white">
                                    <ion-icon name="menu"></ion-icon>
                                    <span class="hidden ml-2 tracking-wide sm:inline">Rubrik</span>
                                </button>
                                <button class="cursor-pointer font-bold px-4 py-2 text-white">
                                    <ion-icon name="search" size="medium"></ion-icon>
                                    <span class="hidden ml-2 tracking-wide sm:inline">Cari</span>
                                </button>
                                <a href="" class="cursor-pointer font-bold no-underline px-4 py-2 text-white">
                                    <ion-icon name="train"></ion-icon>
                                    <span class="hidden ml-2 tracking-wide sm:inline">Gerai</span>
                                </a>
                            </div>

                            <div class="items-center sm:flex">
                                <a href="https://kompas.id" class="w-24" title="kompas.id">
                                    <img src="https://kompas.id/wp-content/themes/kompas-id-main-2019/assets/img/logos/kompas-white.svg" alt="Logo Kompas.id"/>
                                </a>
                            </div>
                            
                            <div class="flex">
                                <div class="flex">
                                    <a href="https://login.kompas.id" class="cursor-pointer font-bold mr-2 px-4 py-2 rounded text-white focus:outline-none">
                                        <span class="hidden ml-2 tracking-wide md:inline">Masuk</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


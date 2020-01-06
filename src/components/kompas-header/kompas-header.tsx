import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'kompas-header',
    styleUrl: '../../global/style.css'
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
                                    <i class="font-awesome-icon fas fa-bars"></i>
                                    <span class="hidden ml-2 tracking-wide sm:inline">Rubrik</span>
                                </button>
                                <button class="cursor-pointer font-bold px-4 py-2 text-white">
                                    <i class="font-awesome-icon fas fa-search"></i>
                                    <span class="hidden ml-2 tracking-wide">Cari</span>
                                </button>
                                <a href="" class="cursor-pointer font-bold no-underline px-4 py-2 text-white">
                                    <i class="font-awesome-icon fas fa-store-alt"></i>
                                    <span class="hidden ml-2 tracking-wide">Gerai</span>
                                </a>
                            </div>

                            <div class="hidden items-center">
                                <a href="https://kompas.id" class="w-24" title="kompas.id">
                                    <img src="https://interaktif.kompas.id/wp-content/themes/interaktif/assets/img/reusables/logos/kompas-blue.svg" alt="Logo Kompas.id"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


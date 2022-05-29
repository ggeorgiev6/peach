<template>
    <header>
        <div class="container headerContainer">
            <div class="row">
                <div class="col">
                    <div class="navWrap">
                        <div class="logoWrap">
                            <a href="">
                                <svg-vue icon="logo"></svg-vue>
                            </a>
                        </div>
                        <div class="menuTriggerWrap">
                            <div class="menuTrigger">
                                <svg-vue icon="burger-menu"></svg-vue>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {

    mounted() {
        this.revealNav();
        this.scrollNav();
    },
    methods: {
        revealNav(){
            const header = document.querySelector("header");

            setTimeout(function(){

                header.classList.add('visible');
                
                if (window.scrollY > header.offsetHeight) {
                    header.classList.add("scrollTop");
                }
                
            }, 300)
        },
        scrollNav(){
            let scrollpos = window.scrollY;
            const header = document.querySelector("header");
            const header_height = header.offsetHeight;

            const add_class_on_scroll = () => header.classList.add("scrollTop");
            const remove_class_on_scroll = () => header.classList.remove("scrollTop");

            window.onscroll = _.throttle( () => {

                scrollpos = window.scrollY;

                if (scrollpos >= header_height) {
                     add_class_on_scroll() 
                } else { 
                    remove_class_on_scroll() 
                }

            }, 100);

        }
    }

}
</script>

<style>

</style>
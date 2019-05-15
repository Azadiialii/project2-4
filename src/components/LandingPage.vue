<template>
    <div class="wrapper">
        <nav-bar></nav-bar>

        <div class="video-wrapper">

            <div class="video"><youtube :video-id="videoURL"></youtube></div>

            <div class="newsletter">
                <form @submit="preventDefault">
                    <p>Subscribe to newsletter:</p>
                    <input type="text"/>
                    <p><input class="button" type="submit"/></p>
                </form>
            </div>

        </div>

        <div class="text">
            <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet fringilla molestie. Vivamus euismod convallis lobortis. Etiam vel tortor vitae metus eleifend mollis. Vestibulum sed tincidunt lorem, a gravida magna. Sed eget nibh quis libero tristique fermentum a id dui. Sed sodales tellus lectus, gravida vulputate nunc tempus nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
            <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet fringilla molestie. Vivamus euismod convallis lobortis. Etiam vel tortor vitae metus eleifend mollis. Vestibulum sed tincidunt lorem, a gravida magna. Sed eget nibh quis libero tristique fermentum a id dui. Sed sodales tellus lectus, gravida vulputate nunc tempus nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
            <div class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet fringilla molestie. Vivamus euismod convallis lobortis. Etiam vel tortor vitae metus eleifend mollis. Vestibulum sed tincidunt lorem, a gravida magna. Sed eget nibh quis libero tristique fermentum a id dui. Sed sodales tellus lectus, gravida vulputate nunc tempus nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
        </div>

    </div>
</template>

<script>
import NavBar from "./Helpercomponents/NavBar";
export default {
  name: 'LandingPage',
    components: {NavBar},
    data(){
      return{
          videoURL: "1gTWfV1QQ-s"
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper{
        height: calc(100vh - 16px);
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 70px 30px 60vh 30vh;
    }

    .video-wrapper{
        grid-column: 2/3;
        grid-row: 3/4;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5vw;
    }

    .video{
        grid-column: 1/2;
        grid-row: 1/2;
    }

    .newsletter{
        grid-column: 2/3;
        grid-row: 1/2;
    }

    .button{
        margin-top: 2vh;
    }

    .text{
        grid-column: 2/3;
        grid-row: 4/5;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100%;
        grid-gap: 5vw;
    }
</style>

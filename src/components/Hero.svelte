<script>
    let theme;
    let idTitle = "logo";
    let color = "cube-color";

    $: if (theme) {
        idTitle = "logo2";
        color = "cube-color-2";
    } else {
        idTitle = "logo";
        color = "cube-color";
    }
</script>

<div class="hero min-h-screen overflow-hidden">
    <div class="cube {color}"></div>
    <div class="cube {color}"></div>
    <div class="cube {color}"></div>
    <div class="cube {color}"></div>
    <div class="cube {color}"></div>
    <div class="cube {color}"></div>
    <div class="hero-overlay bg-opacity-20"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <div class="wrapper">
                <svg id={idTitle}>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Dako
                    </text>
                </svg>
            </div>
            <p class="mb-5 text-gray-200">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
            </p>
            <input
                id="themeInput"
                type="checkbox"
                value="dako2"
                bind:checked={theme}
                class="toggle theme-controller mx-2"
            />
        </div>
    </div>
</div>

<style>
    @keyframes cube {
        from {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            opacity: 1;
        }
        to {
            transform: scale(20) rotate(960deg) translate(-50%, -50%);
            opacity: 0;
        }
    }
    .cube-color {
        border: solid 1px #7fffd4;
    }
    .cube-color-2 {
        border: solid 1px #d1d5db;
    }
    .cube {
        position: relative;
        top: -25vh;
        left: -10vw;
        width: 10px;
        height: 10px;

        transform-origin: top left;
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        animation: cube 12s ease-in forwards infinite;
    }
    .cube-color:nth-child(2n) {
        border-color: #6366f1;
    }
    .cube-color-2:nth-child(2n){
        border-color: #7fffd4;;
    }
    .cube:nth-child(2) {
        animation-delay: 2.5s;
        left: 25vw;
        top: 5vh;
    }
    .cube:nth-child(3) {
        animation-delay: 4.5s;
        left: -25vw;
        top: 10vh;
    }
    .cube:nth-child(4) {
        animation-delay: 6.5s;
        left: -20vw;
        top: 35vh;
    }
    .cube:nth-child(5) {
        animation-delay: 8.5s;
        left: 10vw;
        top: 35vh;
    }
    .cube:nth-child(6) {
        animation-delay: 10s;
        left: 40vw;
        top: 20vh;
    }

    #logo,
    #logo2 {
        font-family: "Spicy Rice", sans-serif;
        width: 100%;
        height: 100%;
    }
    #logo text {
        animation: stroke 5s forwards;
        stroke-width: 2;
        stroke: #6366f1;
        font-size: 100px;
    }
    #logo2 text {
        animation: stroke-alt 5s forwards;
        stroke-width: 2;
        stroke: rgba(127, 255, 212, 1);
        font-size: 100px;
    }

    @keyframes stroke-alt {
        0% {
            fill: rgba(127, 255, 212, 0);
            stroke: rgba(127, 255, 212, 1);
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
            stroke-width: 2;
        }
        70% {
            fill: rgba(127, 255, 212, 0);
            stroke: rgba(127, 255, 212, 1);
        }
        80% {
            fill: rgba(127, 255, 212, 0);
            stroke: rgba(127, 255, 212, 1);
            stroke-width: 3;
        }
        100% {
            fill: rgba(99, 102, 241, 1);
            stroke: rgba(99, 102, 241, 0);
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            stroke-width: 0;
        }
    }
    @keyframes stroke {
        0% {
            fill: rgba(127, 255, 212, 0);
            stroke: rgba(99, 102, 241, 1);
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
            stroke-width: 2;
        }
        70% {
            fill: rgba(127, 255, 212, 0);
            stroke: rgba(99, 102, 241, 1);
        }
        80% {
            fill: rgba(127, 255, 212, 0);
            stroke: rgba(99, 102, 241, 1);
            stroke-width: 3;
        }
        100% {
            fill: rgba(127, 255, 212, 1);
            stroke: rgba(99, 102, 241, 0);
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            stroke-width: 0;
        }
    }

    .wrapper {
        background-color: transparent;
    }
</style>

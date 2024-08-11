import React from 'react'

const Preloader = () => {
  return (
    <div id="preloader">
        <div class="loader_line"></div>
        <div
            class="absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full logo top-1/2 left-1/2 bg-nightBlack border-greyBlack flex-center">
            <img src="assets/img/loader.png" alt="Minfo"/>
        </div>
    </div>
  )
}

export default Preloader

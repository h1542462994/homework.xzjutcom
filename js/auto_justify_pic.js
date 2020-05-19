window.addEventListener('resize', justify_pic)
window.addEventListener('load', justify_pic)

function justify_pic(){
    // console.log('window resize to' + window.innerWidth)
    let min_height = 400
    let c_height = 0.45 * window.innerWidth
    if(min_height > c_height)
        c_height = min_height
    // var header = document.getElementById('header-wrapper')
    // var container = document.getElementById('background-container')
    elements.header_wrapper.style.height = c_height
    //container.style.height = c_height
}


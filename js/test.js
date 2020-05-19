addEventListener('load', test)

function test() {
    var main_wrapper = document.getElementById('main-wrapper');
    main_wrapper.addEventListener('click', () => {
        console.log('hello world')
    })
}
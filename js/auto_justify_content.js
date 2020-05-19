window.addEventListener('resize', justify_content_wrapper)
window.addEventListener('load', justify_content_wrapper)

function justify_content_wrapper(){
    
    if (document.body.offsetWidth >= 960){ // 不存在换行的情况
        elements.aside_wrapper.style.flexGrow = 0
        elements.content_wrapper.style.top = -40
        //elements.main_content_wrapper.style.width = 600       
        for (let index = 0; index < elements.news_box_items.length; index++) {
            const element = elements.news_box_items[index]
            element.style.width = 0
            element.style.flexGrow = 1
        }

        for (let index = 0; index < elements.wrap_hiddens.length; index++) {
            const element = elements.wrap_hiddens[index]
            element.style.display = 'flex'
        }

    } else {
        elements.aside_wrapper.style.flexGrow = 1
        elements.content_wrapper.style.top = 0
        //elements.main_content_wrapper.style.width = 400
        for (let index = 0; index < elements.news_box_items.length; index++) {
            const element = elements.news_box_items[index]
            element.style.width = '100%'
        }

        for (let index = 0; index < elements.wrap_hiddens.length; index++) {
            const element = elements.wrap_hiddens[index]
            element.style.display = 'none'
        }
    }
}
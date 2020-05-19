
class BackgroundData{
    constructor(urls, titles, links){
        this.length = urls.length
        this.urls = urls
        this.titles = titles
        this.links = links
    }
}

var store = {
    bg_data: BackgroundData,
    anime_gn: AnimeGn
}

var elements = {
    counter:HTMLElement,
    img1: HTMLElement,
    img2: HTMLElement,
    background_container: HTMLElement,
    background_title: HTMLElement,
    header_wrapper : HTMLElement,
    news_wrapper: HTMLElement,
    aside_wrapper: HTMLElement,
    content_wrapper : HTMLElement,
    news_box_items : HTMLCollection,
    wrap_hiddens : HTMLCollection
}

window.addEventListener('load', store_test)

function init_store() {
    store.bg_data = new BackgroundData(
        ['./assets/img/news_1.jpg','./assets/img/2.jpg','./assets/img/3.jpg','./assets/img/4.jpg','./assets/img/5.jpg'],
        ['图片新闻标题1','图片新闻标题2','图片新闻标题3','图片新闻标题4','图片新闻标题5'],
        ['http://www.zjut.edu.cn/newsDetail.jsp?id=21326','about:blank','about:blank','about:blank','about:blank']
    )
    store.anime_gn = new AnimeGn(5, 10000, 1000, undefined)
    elements.counter = document.getElementById('background-counter')
    elements.img1 = document.getElementById('img-1')
    elements.img2 = document.getElementById('img-2')
    elements.background_container = document.getElementById('background-container')
    elements.background_title = document.getElementById('background-title')
    elements.header_wrapper = document.getElementById('header-wrapper')
    elements.news_wrapper = document.getElementById('news-wrapper')
    elements.aside_wrapper = document.getElementById('aside-wrapper')
    elements.content_wrapper = document.getElementById('content-wrapper')
    elements.news_box_items = document.getElementsByClassName('news-box-item')
    elements.wrap_hiddens = document.getElementsByClassName('wrap-hidden')
}

function store_test(){
    console.log(store.bg_data)
    // console.log(store.anime_gn)
    // console.log(elements)
}

function anime_percent(start_index, end_index, percent){
    console.log(start_index + " " + end_index + " " + percent)
}

init_store()

window.addEventListener('load', init_background)

function init_background(){
    init_element()
    store.anime_gn.anime_func = do_anime;
    store.anime_gn.start()
}

function init_element(){
    for(let i = 0; i < store.bg_data.length; ++i){
        var div = document.createElement('div');
        // if(i === 0){
        //     div.setAttribute('class','selected');
        // }
        div.addEventListener('click', ()=> {
            click_counter(i);
        })
        div.innerHTML = i; 
        elements.counter.appendChild(div)
    }

    elements.img1.src = store.bg_data.urls[0];
    elements.img2.src = store.bg_data.urls[0];

    elements.background_title.innerHTML = store.bg_data.titles[0];
    elements.background_title.href = store.bg_data.links[0];
}




function click_counter(index){
    store.anime_gn.slide_to_index(index);
}

function do_anime(startindex, endindex, percent){
    elements.img2.src = store.bg_data.urls[endindex];
    elements.img1.src = store.bg_data.urls[startindex];
    elements.img2.style.opacity = percent;
    elements.img1.style.opacity = 1 - percent;

    //神奇的block移动动画
    let block = document.getElementById('counter-block');
    let left1 = 60 * startindex;
    let dure = 60 * (endindex - startindex);
    block.style.left = left1 + dure * percent;

    elements.background_title.innerHTML = store.bg_data.titles[endindex];
    elements.background_title.href = store.bg_data.links[endindex];

    // elements.counter.children[startindex].className = undefined;
    // elements.counter.children[endindex].className = 'selected';

    // anime_percent(startindex, endindex, percent);
}
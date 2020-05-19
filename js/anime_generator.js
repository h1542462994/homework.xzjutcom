class AnimeGn{
    constructor(count = 5, gap = 5000, each = 500, anime_func){
        this.index = 0
        this.count = count
        this.gap = gap
        this.each = each
        this.anime_func = anime_func
        this.handler = undefined
        this.interval = undefined

        this.in_anime = false // 是否处于动画状态中
        this.startindex = undefined
        this.endindex = undefined
    }

    start() {
        this.handler = () => {
            this.normal_next()
        }
        this.interval = setInterval(this.handler, this.gap)
    }

    // 正常的按照时间的动画
    normal_next(){
        // console.log(this.index)
        this.startindex = this.index
        this.endindex = (this.index + 1) % this.count
        this.index = this.endindex
        this.handle()
    }

    // 执行一次过渡动画
    handle() {
        this.in_anime = true // 标识正在处于动画状态中
        let each_step = 50
        let count = this.each / each_step - 1  // 没50ms触发一次动作
        for(let i = each_step; i <= each_step * count; i+= each_step){
            setTimeout(()=>{
                this.anime_func(this.startindex, this.endindex, i / this.each)
            }, i)
        }
        setTimeout(()=>{
            this.anime_func(this.startindex, this.endindex, 1)
            this.in_anime = false // 取消标识动画状态
        }, this.each)
    }

    // 收到滑动到index
    slide_to_index(next){
        clearInterval(this.interval)
        this.interval = undefined
        if(!this.in_anime){
            this.startindex = this.index
            this.endindex = next
            this.index = next
            this.handle()
            setTimeout(() => {
                this.handler = () => {
                    this.normal_next()
                }
                this.interval = setInterval(this.handler, this.gap) // 重新激活正常动画
            }, this.each) //在this.each时间后重新激活正常动画
        }
        

    }

}
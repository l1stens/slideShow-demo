let allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(x) {
        let index = $(x.currentTarget).index()
        let p = index * -900
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}



let n = 0;
let size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')

let timerId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 1000)

$('.window').on('mouseenter', function() {
    window.clearInterval(timerId)
})

$('.window').on('mouseleave', function() {
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 1000)
})
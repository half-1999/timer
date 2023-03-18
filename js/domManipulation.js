window.dom = {
    _start: function (secs) {
        window.common.timer(secs, (currentTime, timer) => {
            clearTimeout(timer)
            document.getElementById('secs').innerHTML = currentTime
            console.log(currentTime);
        }, () => {
                        // document.getElementsByClassName('para')[0].innerHTML = " Timer End "
            window.common.stop = false
        })
    },
    _stop: function () {
        document.getElementById('stop').addEventListener('click', (e) => {
            window.common.stop = true
            document.getElementsByClassName('para')[0].innerHTML = " Timer Stop "
            
        })
    },
    _reset: function () {
        document.getElementById('reset').addEventListener('click', (e) => {
            if(window.common.stop == false){
                console.log('call');
                window.dom._stop()
            window.dom._start(100)
            }
            // window.dom._start(100)
            
            document.getElementsByClassName('para')[0].innerHTML = " Timer Reset "
        })
    },
    _restart: function () {
        // var isCorrect = true
        // console.log(isCorrect);
        document.getElementsByClassName('resume')[0].addEventListener('click', () => {
            let Stop = document.getElementById('secs').textContent
            console.log(Stop);
            window.common.timer(Stop, () => {
             
                window.common.stop.true
                document.getElementsByClassName('para')[0].innerHTML = " Timer Restart "
            })
            window.dom._start(Stop)
        })
    }
}

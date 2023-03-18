window.common = {
    stop : false,
    timer : function ( secs , cb , fcb ){
        var timer =  setTimeout(() => {
            if(secs >= 0 && !window.common.stop){
                cb ( secs , timer )
                secs = secs - 1
                window.common.timer( secs , cb , fcb )
            }else{
                fcb()
            }
        }, 1000);
        
    }
}
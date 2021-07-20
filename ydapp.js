"use strict";

var setMessage = function (msg) {
    document.getElementById('message').innerText = msg;
}

setMessage('正在检测浏览器...');

var onReady = function () {
    var selectedScreenIndex;
    var YD = require('YDPlayerCompatible');

    document.addEventListener('visibilitychange', function (ev) {
        console.log('[' + JSON.stringify(new Date()) + '] document visibility change, document.visibilityState: ' + document.visibilityState);
    });

    var supported = YD.supportedPlayers();
    setMessage('浏览器支持: ActiveX=' + supported.activeX + ', NPAPI=' + supported.npapi + ', ydplayer.js=' + supported.ydplayerjs);

    var screenX = (document.body.clientWidth < 1000) ? 1 : 2, screenY = screenX;
    var container = document.getElementById('video-container');
    var options = { screenX: screenX, screenY: screenY, multiplePlay: true, engines: ['mse', 'wasm'] };
    var priority = ['native', 'ydplayerjs'];
    var player = YD.createPlayer(container, options, priority);
    console.log('ydplayer loaded.');

    //选中窗口变化事件
    player.on('selectedIndexChanged', function (selectedIndex, url) {
        console.log('player selectedIndex: ' + selectedIndex + ', url: ' + url);
        selectedScreenIndex = selectedIndex;
    });
    //抓图事件
    player.on('captured', oncapture);
    player.on('videoTimeUpdate', onVideoTimeUpdate);

    //实时音视频播放，不要使用 async 
    document.getElementById('btnLiving').onclick = function () {
        var url = document.getElementById('url').value;
        player.openStreaming(url).then(function (screenIndex) {
            console.log('[APP] play in screen: ' + screenIndex);
        }).catch(alert);
    }

    var btns = document.querySelectorAll('.btnLiving_Stream');
    if (btns && btns.length > 0) {
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.onclick = function (e) {
                var streamId = parseInt(this.getAttribute("data-value")) || 2;
                var url = document.getElementById('url').value;
                debugger;
                player.openStreaming(url, streamId).then(function (screenIndex) {
                    console.log('[APP] play in screen: ' + screenIndex);
                }).catch(alert);
            }
        }
    }

    //停止
    document.getElementById('btnStop').onclick = function () {
        player.stop();
    }

    //全部停止
    document.getElementById('btnStopAll').onclick = function () {
        player.stopAll();
    }

    //切换选中画面的音频播放
    document.getElementById('btnToggleAudio').onclick = function () {
        player.toggleAudio();
    }

    //静音
    document.getElementById('btnMute').onclick = function () {
        player.mute();
    }

    //全屏
    document.getElementById('btnFullscreen').onclick = function () {
        player.requestFullscreen(player.selectedIndex);
    }

    //全屏（全部画面）
    document.getElementById('btnFullscreenAll').onclick = function () {
        player.requestFullscreen().then(function () {
            console.log('enter fullscreen mode');
        }, function (r) {
            console.error(r);
            debugger;
        });
    }

    function oncapture(result) {
        if (result) {
            var images = document.getElementById('capture_image');
            // 
            var url = result.url;      //SN: url.sn;  Channel: url.channel
            var data = result.data;
            images.insertAdjacentHTML('beforeend', '<div style="box-sizing: border-box; min-width: 50%; display: inline-block; vertical-align:middle; position: relative; border: 1px solid transparent; width:100%"><img style="width:100%;" src="' + data + '" /><p>' + url.sn + ':' + url.channel + '</p></div>');
            showModal($('#modal_capture_image'), function (e) {
                images.innerHTML = '';
            });
        }
    }

    function onVideoTimeUpdate(screenIndex, url, time) {
        if (selectedScreenIndex == screenIndex) {
            setMessage('screenIndex: ' + screenIndex + ', sn: ' + url.sn + ', channel: ' + url.channel + ', time: ' + time)
        }
    }

    function showModal($el, onHidden) {
        $el.on('hidden.bs.modal', function (e) {
            if (onHidden) onHidden();
        });
        if (player.isNative) {
            container.style.visibility = 'hidden';
            $el.on('hidden.bs.modal', function (e) {
                container.style.visibility = 'visible';
            });
            $el.modal();
        }
        else {
            $el.modal();
        }
    }

    //抓图
    document.getElementById('btnCapture').onclick = function () {
        player.capture();
    }

    //全部抓图
    document.getElementById('btnCaptureAll').onclick = function () {
        player.captureAll();
        // player.removeListener('captured', oncapture);
        // player.captureAll().then(function (results) {
        //     player.on('captured', oncapture);
        //     if (results) {
        //         var images = document.getElementById('capture_image');
        //         images.innerHTML = '';
        //         for (var i = 0; i < results.length; i++) {
        //             var url = results[i].url;
        //             var data = results[i].data;
        //             if (data && data.length > 30) {
        //                 images.insertAdjacentHTML('beforeend', '<div style="box-sizing: border-box; min-width: 50%; display: inline-block; vertical-align:middle; position: relative; border: 1px solid transparent; width:' + (100 / results.length) + '%"><img style="width:100%;" src="' + data + '" /><p>' + url.sn + ':' + url.channel + '</p></div>');
        //             }
        //         }
        //         showModal($('#modal_capture_image'));
        //     }
        // }, function (e) {
        //     player.on('captured', oncapture);
        //     alert(e);
        // });
    }

    var btnQueryRecord = document.getElementById('btnQueryRecord');
    if (btnQueryRecord) {
        btnQueryRecord.onclick = function () {
            var server = document.getElementById('url').value;
            player.queryRecords(server, new Date('2020-10-21 00:00:00'), new Date('2020-10-22 00:00:00')).then(function (records) {
                setMessage(JSON.stringify(records));
            }).catch(function (err) {
                alert(err);
            })
        }
    }

    //按时间点回放，不要使用 async 
    document.getElementById('btnConfirmPlayback').onclick = function () {
        var server = document.getElementById('url').value;
        var time = document.getElementById('datetimePlayback').value;
        var speed_input = document.getElementById('playback-speed');
        var speed = 1;
        if (speed_input)
            speed = speed_input.value || speed;
        player.openPlayback(server, new Date(time)).then(function () {
            console.log('playback is playing');
            setTimeout(function () {
                player.changePlayback(speed).then(function () {
                    console.log('change playback speed to: ' + speed);
                }, function (err) {
                    console.error(err)
                });
            }, 5000)
        }).catch(function (r) {
            alert(r);
        });
        $('#datetime_modal').modal('hide');
    }

    //画面排列
    var btnScreens = document.querySelectorAll('.btnScreenItem');
    for (var i = 0; i < btnScreens.length; i++) {
        var el = btnScreens.item(i);
        el.addEventListener('click', function (e) {
            e.preventDefault();
            //e.stopPropagation();
            var text = this.innerText;
            var value = this.attributes['data-value'].value;
            document.querySelector('#btnScreen').innerText = 'Screen:' + text;
            var arr = value.split(',');
            if (arr.length > 1) {
                var x = parseInt(arr[0]);
                var y = parseInt(arr[1]);
                player.setScreens(x, y);
            }
        });
    };

    //视频画面的缩放方式
    var fitModes = ['contain', 'fill', 'cover', 'none', 'scale-down'];
    var fitIndex = 0;
    document.getElementById('btnFitMode').onclick = function () {
        fitIndex++;
        fitIndex = fitIndex % fitModes.length;
        for (var i = 0; i < screenX * screenY; i++) {
            player.setFitMode(fitModes[fitIndex], i);
        }
    }

    var btnConfig = document.getElementById('btnGetConfig');
    if (btnConfig) {
        btnConfig.onclick = function () {
            player.getConfig('prepoint').then(function (config) {
                var json = JSON.stringify(config, null, 4);
                console.log(json);
                setMessage('config: \r\n' + json)
            }, function (err) {
                console.error(err);
                alert('erro: ' + err);
            });
        }
    }

    var btnIsSupportPtz = document.getElementById('btnIsSupportPtz');
    if (btnIsSupportPtz) {
        btnIsSupportPtz.onclick = function () {
            player.isSupportPtz().then(function (supportPtz) {
                setMessage('是否支持PTZ：' + supportPtz);
            })
        }
    }

    var btnControlPtz = document.getElementById('btnControlPtz');
    if (btnControlPtz) {
        btnControlPtz.onmousedown = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var action = document.getElementById('ptz-action').value;
            var value = document.getElementById('ptz-value').value;
            var name = document.getElementById('ptz-name').value;
            player.controlPtz(selectedScreenIndex, parseInt(action), parseInt(value), name).then(function () {
                setMessage('ptz control...success');
            });
        };
        btnControlPtz.onmouseup = function (e) {
            e.preventDefault();
            e.stopPropagation();
            player.controlPtz(selectedScreenIndex, 18, 1, '');
        };
    }

    var btnStopPtz = document.getElementById('btnStopPtz');
    if (btnStopPtz) {
        btnStopPtz.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            player.controlPtz(selectedScreenIndex, 18, 1, '');
        }
    }
}

if (document.readyState == 'complete') {
    onReady();
}
else {
    document.addEventListener('DOMContentLoaded', onReady, false);
}

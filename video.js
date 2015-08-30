console.log('video loaded');

// http://www.rtcmulticonnection.org/docs/constructor/
var rmc = new RTCMultiConnection();

rmc.body = document.getElementById('videos-container');

// http://www.rtcmulticonnection.org/docs/#getExternalIceServers
rmc.getExternalIceServers = false;

document.getElementById('openRoom').onclick = function() {
    // http://www.rtcmulticonnection.org/docs/open/
    rmc.open();
};

document.getElementById('joinRoom').onclick = function() {
    // http://www.rtcmulticonnection.org/docs/connect/
    rmc.connect();
};

rmc.onMediaCaptured = function() {
    // document.getElementById('shareScreen').disabled = false;
    // document.getElementById('recordAudioVideo').disabled = false;

    document.getElementById('openRoom').disabled = true;
    document.getElementById('joinRoom').disabled = true;
};

document.getElementById('shareScreen').onclick = function() {
    // http://www.rtcmulticonnection.org/docs/addStream/
    rmc.addStream({
        screen: true,
        oneway: true
    });

};

///////test share screen

$('#shareScreen').click(renderSharedScreen)

	var renderSharedScreen =function(){
		navigator.getUserMedia({
			audio: false,
			video: {
		   	mandatory: {
		       	chromeMediaSource: 'screen',
		       	maxWidth: 1280,
		       	maxHeight: 720
		   	},
		   	optional: []
			}
		}, function(stream) {
		   //We've got media stream
		 }, function() {
		   //Error, no stream provided
		 }
		)
	}



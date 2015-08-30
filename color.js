$(function(){
console.log('color loaded')


})
$('#color').click(function(){makeColorButtons()});

var blur = 'blur(3px)';
var grayscale = 'grayscale(1)';
var sepia = 'sepia(1)';
var brightness= 'brightness(2.5)';
var contrast = 'contrast(5)';
var rotate = 'hue-rotate(125deg)';
var invert = 'invert(1)';
var saturate = 'saturate(3)';
var opacity = 'opacity(0.3)';

var colorArray = ['blur' , 'grayscale' , 'sepia', 'brightness', 'contrast' , 'rotate' , 'invert' , 'saturate' , 'opacity'];

var makeColorButtons = function(){
	$('#color-list').empty()
	for ( i = 0 ; i < colorArray.length ; ++i){
		var currEffect = colorArray[i];
		console.log('color button created');
		var colorButton = $("<button>").text(currEffect);
		colorButton.attr('id', currEffect);
		$('#color-list').append(colorButton)
		
	}
	
	$("#blur").click(function(){$('video:nth-child(1)').css('-webkit-filter',blur);});
	$("#grayscale").click(function(){$('video:nth-child(1)').css('-webkit-filter',grayscale);});
	$("#sepia").click(function(){$('video:nth-child(1)').css('-webkit-filter',sepia);});
	$("#brightness").click(function(){$('video:nth-child(1)').css('-webkit-filter',brightness);});
	$("#contrast").click(function(){$('video:nth-child(1)').css('-webkit-filter',contrast);});
	$("#rotate").click(function(){$('video:nth-child(1)').css('-webkit-filter',rotate);}); 
	$("#invert").click(function(){$('video:nth-child(1)').css('-webkit-filter',invert);});
	$("#saturate").click(function(){$('video:nth-child(1)').css('-webkit-filter',saturate);});
	$("#opacity").click(function(){$('video:nth-child(1)').css('-webkit-filter',opacity);});
	renderRemoveButton();
}

var renderRemoveButton = function(){
	var clearFilters = $('<button>').text('remove filter');
	clearFilters.attr('id','remove-filter');
	$('#color-list').append(clearFilters)
	$('#remove-filter').click(function(){$('video:nth-child(1)').css('-webkit-filter','none');});
	var exitFilters = $('<button>').text('exit filter');
	exitFilters.attr('id', 'exit-filter')
	$('#color-list').append(exitFilters);
	$('#exit-filter').click(function(){$('#color-list').empty()});


}
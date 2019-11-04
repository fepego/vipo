const jetpack = require('fs-jetpack');
const {app, BrowserWindow} = require('electron-remote');
const base64ToImage = require('base64-to-image');
function savefile(img) {

    var optionalObj = {
        fileName: 'phototest',
        type: 'png'
    };
    var path = '/Users/felipepena/Documents/photos';
    var imageInfo = base64ToImage(img,path,optionalObj); 
    //var photoblob = dataURItoBlob(img);
    // var path = app.getPath('documents');
    //jetpack.write('/Users/felipepena/Documents/photos/photo.png', img);
}

function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}
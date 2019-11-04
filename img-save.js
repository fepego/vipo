const windowsHandler = require('electron').remote;
const base64ToImage = require('base64-to-image');
function savefile(img) {

    try {
        var optionalObj = {
            fileName: 'phototest',
            type: 'png'
        };
        var path = windowsHandler.app.getPath('documents');
        var imageInfo = base64ToImage(img,path + '/photos/',optionalObj); 
        return path + '/photos/';
    } catch(exception) {
        throw exception;
    }
   
}

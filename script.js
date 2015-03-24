/**
 * PSD Fonts v.0.1
 * (c) 2015 Creative Duo http://creativeduo.com.br
 * License: MIT
 */
(function () {

    if (documents.length == 0) {
        alert('You must have at least one open document to run this script!');
    }

    var path   = activeDocument.path + '/' + activeDocument.name + 'fonts.txt';
    var output = new File(path);
    var count  = 0;
    output.open('w');

    withAllLayers(activeDocument, function (layer) {
        if (layer.kind == LayerKind.TEXT) {
            output.write(
                layer.textItem.contents + '\n' +
                layer.textItem.font + ',' +
                layer.textItem.size + ',' +
                layer.textItem.color.rgb.hexValue  + '\n--\n'
            );
        }
    });

    output.close();
    alert('Finished!\nCheck the file at: ' + path);

    function withAllLayers(parent, callback) {
        for (var i = 0; i < parent.layers.length; i++) {
            if (++count > 100) {
                break;
            }
            var current = parent.layers[i];
            if (current.layers && current.layers.length > 0) {
                withAllLayers(current, callback);
            } else {
                callback(current);
            }
        }
    }

})();
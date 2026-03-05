var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BDF2_1 = new ol.format.GeoJSON();
var features_BDF2_1 = format_BDF2_1.readFeatures(json_BDF2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDF2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDF2_1.addFeatures(features_BDF2_1);
var lyr_BDF2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDF2_1, 
                style: style_BDF2_1,
                popuplayertitle: 'BDF2',
                interactive: true,
    title: 'BDF2<br />\
    <img src="styles/legend/BDF2_1_0.png" /> 70036 - 401507<br />\
    <img src="styles/legend/BDF2_1_1.png" /> 401507 - 732978<br />\
    <img src="styles/legend/BDF2_1_2.png" /> 732978 - 1064448<br />\
    <img src="styles/legend/BDF2_1_3.png" /> 1064448 - 1395919<br />\
    <img src="styles/legend/BDF2_1_4.png" /> 1395919 - 1727390<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_BDF2_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BDF2_1];
lyr_BDF2_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'BDF_POP200': 'BDF_POP200', });
lyr_BDF2_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'BDF_POP200': 'TextEdit', });
lyr_BDF2_1.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_2': 'inline label - always visible', 'BDF_POP200': 'inline label - always visible', });
lyr_BDF2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
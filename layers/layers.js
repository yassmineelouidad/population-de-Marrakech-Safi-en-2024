var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_couchedata_devoir_carte_thematique__province_marrakech_safi_1 = new ol.format.GeoJSON();
var features_couchedata_devoir_carte_thematique__province_marrakech_safi_1 = format_couchedata_devoir_carte_thematique__province_marrakech_safi_1.readFeatures(json_couchedata_devoir_carte_thematique__province_marrakech_safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couchedata_devoir_carte_thematique__province_marrakech_safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couchedata_devoir_carte_thematique__province_marrakech_safi_1.addFeatures(features_couchedata_devoir_carte_thematique__province_marrakech_safi_1);
var lyr_couchedata_devoir_carte_thematique__province_marrakech_safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_couchedata_devoir_carte_thematique__province_marrakech_safi_1, 
                style: style_couchedata_devoir_carte_thematique__province_marrakech_safi_1,
                popuplayertitle: "couche — data_devoir_carte_thematique__province_marrakech_safi",
                interactive: true,
    title: 'couche — data_devoir_carte_thematique__province_marrakech_safi<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_0.png" /> youssoufia 246098<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_1.png" /> rehamna 345772<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_2.png" /> chichaoua 378932<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_3.png" /> essaouira 425449<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_4.png" /> el kalaa des sraghna 560075<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_5.png" /> el haouz 642171<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_6.png" /> safi 19299<br />\
    <img src="styles/legend/couchedata_devoir_carte_thematique__province_marrakech_safi_1_7.png" /> marrakech 156070<br />'
        });
var format_Lignes_2 = new ol.format.GeoJSON();
var features_Lignes_2 = format_Lignes_2.readFeatures(json_Lignes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_2.addFeatures(features_Lignes_2);
var lyr_Lignes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_2, 
                style: style_Lignes_2,
                popuplayertitle: "Lignes",
                interactive: true,
                title: '<img src="styles/legend/Lignes_2.png" /> Lignes'
            });
var format_Pointsdepuisunetable_3 = new ol.format.GeoJSON();
var features_Pointsdepuisunetable_3 = format_Pointsdepuisunetable_3.readFeatures(json_Pointsdepuisunetable_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdepuisunetable_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdepuisunetable_3.addFeatures(features_Pointsdepuisunetable_3);
var lyr_Pointsdepuisunetable_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsdepuisunetable_3, 
                style: style_Pointsdepuisunetable_3,
                popuplayertitle: "Points depuis une table",
                interactive: true,
                title: 'Points depuis une table'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_couchedata_devoir_carte_thematique__province_marrakech_safi_1.setVisible(true);lyr_Lignes_2.setVisible(true);lyr_Pointsdepuisunetable_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_couchedata_devoir_carte_thematique__province_marrakech_safi_1,lyr_Lignes_2,lyr_Pointsdepuisunetable_3];
lyr_couchedata_devoir_carte_thematique__province_marrakech_safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Lignes_2.set('fieldAliases', {'fid': 'fid', });
lyr_Pointsdepuisunetable_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_couchedata_devoir_carte_thematique__province_marrakech_safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'Hidden', 'auxiliary_storage_labeling_lineanchorclipping': 'Hidden', 'auxiliary_storage_labeling_lineanchortype': 'Hidden', 'auxiliary_storage_labeling_lineanchortextpoint': 'Hidden', });
lyr_Lignes_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_Pointsdepuisunetable_3.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'JsonEdit', 'Area': 'JsonEdit', 'Population_2024': 'JsonEdit', 'Chef lieu': 'JsonEdit', 'lat': 'Hidden', 'long': 'Hidden', });
lyr_couchedata_devoir_carte_thematique__province_marrakech_safi_1.set('fieldLabels', {});
lyr_Lignes_2.set('fieldLabels', {'fid': 'no label', });
lyr_Pointsdepuisunetable_3.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_Pointsdepuisunetable_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
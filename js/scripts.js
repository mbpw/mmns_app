var mypoints = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "large",
          "marker-symbol": "college"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            21.011180877685547,
            52.220333379392365
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "danger"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            19.9456787109375,
            50.06066538593667
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "airport"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            21.15966796875,
            51.39920565355378
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "museum"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            11.1181640625,
            49.453842594330716
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "museum"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.17236328125,
            57.82135503542938
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "gift"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.11669921875,
            48.16608541901253
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "harbor"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.32568359375,
            48.19538740833338
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "restaurant"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            25.2685546875,
            54.67383096593114
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "restaurant"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            15.27099609375,
            52.74959372674114
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "restaurant"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            18.65478515625,
            54.380557368630654
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "hairdresser"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.98486328125,
            51.138001488062564
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "ferry"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.1142578125,
            38.46219172306828
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#3c57aa",
          "marker-size": "medium",
          "marker-symbol": "mobilephone"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.480468749999998,
            41.902277040963696
          ]
        }
      }
    ]
  }


var mymap = L.map('mapid').setView([52.25, 21], 12);

const sizeTranslator = {
    "small" : [20, 20],
    "medium" : [40, 40],
    "large" : [60, 60],
   };

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXJuc2hvdyIsImEiOiJja2dsZmZ2bzUwMzRkMnFwNHYyb2lvcnJ3In0.iNMqv-atm9k85t9xSc45hw'
}).addTo(mymap);

L.geoJSON(mypoints, {
    pointToLayer: function(geoJsonPoint, latlng) {
        console.log(geoJsonPoint.properties["marker-size"]);
        var marker = L.marker(latlng);
        var icon = marker.options.icon;
        icon.test = "ads";
        icon.options.iconsize = [160, 160];
        console.log(sizeTranslator[geoJsonPoint.properties["marker-size"]])
        marker.setIcon(icon)
        console.log(icon)
        return marker
    }
}).addTo(mymap);
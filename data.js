var APP_DATA = {
  "scenes": [
    {
      "id": "0-alila_interior1_360",
      "name": "Alila_Interior1_360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.02175994911577206,
        "pitch": 0.014088873571683536,
        "fov": 1.1120146640513902
      },
      "linkHotspots": [
        {
          "yaw": 0.1400851368236502,
          "pitch": 0.44527436133635057,
          "rotation": 0,
          "target": "1-alila_interior2_360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-alila_interior2_360",
      "name": "Alila_Interior2_360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5879490420742854,
          "pitch": 0.11911117943997951,
          "rotation": 0,
          "target": "3-alila_exterior_360"
        },
        {
          "yaw": 1.8742918052889959,
          "pitch": 0.10755839275745771,
          "rotation": 0,
          "target": "2-alila_bath_360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-alila_bath_360",
      "name": "Alila_Bath_360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7988681258287293,
          "pitch": 0.09068628688019942,
          "rotation": 0,
          "target": "1-alila_interior2_360"
        },
        {
          "yaw": 1.4556583277366242,
          "pitch": 0.11985497062419981,
          "rotation": 0,
          "target": "3-alila_exterior_360"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-alila_exterior_360",
      "name": "Alila_Exterior_360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.008144485413840385,
          "pitch": 0.04671939772634559,
          "rotation": 0,
          "target": "1-alila_interior2_360"
        },
        {
          "yaw": -1.1719089431778436,
          "pitch": 0.09543054516016625,
          "rotation": 0,
          "target": "2-alila_bath_360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

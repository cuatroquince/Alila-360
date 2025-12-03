var APP_DATA = {
  "scenes": [
    {
      "id": "0-alila_360_room_01_compress",
      "name": "Alila_360_Room_01_Compress",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.8132375051406528
      },
      "linkHotspots": [
        {
          "yaw": 0.14828474758005328,
          "pitch": 0.5174352719187247,
          "rotation": 0,
          "target": "1-alila_360_room_02_compress"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-alila_360_room_02_compress",
      "name": "Alila_360_Room_02_Compress",
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
          "yaw": 1.8580900661008597,
          "pitch": 0.12202319765489555,
          "rotation": 0,
          "target": "2-alila_360_bath_01_compress"
        },
        {
          "yaw": -1.5204010290663241,
          "pitch": 0.6300982336563568,
          "rotation": 0,
          "target": "0-alila_360_room_01_compress"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-alila_360_bath_01_compress",
      "name": "Alila_360_Bath_01_Compress",
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
          "yaw": 1.4566200139876067,
          "pitch": 0.12069832772573363,
          "rotation": 0,
          "target": "3-alila_360_terraza_01_compress"
        },
        {
          "yaw": 0.799507697293592,
          "pitch": 0.11607999010107051,
          "rotation": 0,
          "target": "1-alila_360_room_02_compress"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-alila_360_terraza_01_compress",
      "name": "Alila_360_Terraza_01_Compress",
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
          "yaw": -0.006713339497419923,
          "pitch": 0.28644847679381513,
          "rotation": 0,
          "target": "1-alila_360_room_02_compress"
        },
        {
          "yaw": -1.150446597753687,
          "pitch": 0.1613636033005772,
          "rotation": 0,
          "target": "2-alila_360_bath_01_compress"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};

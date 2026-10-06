var APP_DATA = {
  "scenes": [
    {
      "id": "0-palier",
      "name": "Palier",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.15238132099397106,
        "pitch": -0.01616863676136937,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 0.1626398570366021,
          "pitch": 0.15944328698458143,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entre",
      "name": "Entrée",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.5389070396130968,
        "pitch": 0.2054633832980528,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.531518238152863,
          "pitch": 0.15651013161233784,
          "rotation": 0,
          "target": "0-palier"
        },
        {
          "yaw": 1.5226139994486374,
          "pitch": 0.3610256884126546,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": -0.11483449017341485,
          "pitch": 0.2765578849315702,
          "rotation": 0,
          "target": "5-salle-de-bain"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "Salon",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.261740175036966,
        "pitch": 0.1254567445531194,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.1088487193246763,
          "pitch": 0.436625943406316,
          "rotation": 0,
          "target": "3-balcon"
        },
        {
          "yaw": 2.24617680269421,
          "pitch": 0.06445140032874441,
          "rotation": 0,
          "target": "4-cuisine"
        },
        {
          "yaw": 1.7578769992207564,
          "pitch": 0.19222301828063237,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcon",
      "name": "Balcon",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.174319445574067,
        "pitch": 0.16587292346923022,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.4773090889179716,
          "pitch": 0.3077548993896606,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": -2.0824636861805335,
          "pitch": -0.10935323931816399,
          "rotation": 0,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuisine",
      "name": "cuisine",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.5472808855670692,
        "pitch": 0.3354556837231968,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 0.9715331395668709,
          "pitch": 0.3088207876287612,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": 3.0895508653870225,
          "pitch": 0.17041433781309223,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salle-de-bain",
      "name": "Salle de bain",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.9469676983326494,
        "pitch": 0.2998956627952225,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.7333179375458752,
          "pitch": 0.43903335492064954,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Studio Aiguerelles",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

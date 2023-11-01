/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zgf42kg7x4vyp29",
    "created": "2023-10-31 19:34:40.822Z",
    "updated": "2023-10-31 19:34:40.822Z",
    "name": "programs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7di8gduk",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lytugiyl",
        "name": "duration",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "y9iqspso",
        "name": "season",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nkn32rxe",
        "name": "applicationDeadline",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "2tyswlky",
        "name": "partner",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "opravgud",
        "name": "campus",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "On",
            "Off"
          ]
        }
      },
      {
        "system": false,
        "id": "pi8xjcmi",
        "name": "educationType",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Full time",
            "Evening Period",
            "Online"
          ]
        }
      },
      {
        "system": false,
        "id": "os8ipxer",
        "name": "grade",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Associate degree",
            "Bachelor degree",
            "Master Non-Thesis",
            "Master With-Thesis",
            "Phd degree"
          ]
        }
      },
      {
        "system": false,
        "id": "qf42t9zy",
        "name": "language",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Turkish",
            "English",
            "Russian",
            "Arabic",
            "Spanish",
            "French",
            "German",
            "Chinese",
            "30% English 70% Turkish",
            "50% English 50% Turkish",
            "30% Arabic 70% Turkish",
            "30% German 70% Turkish"
          ]
        }
      },
      {
        "system": false,
        "id": "fwm2axvw",
        "name": "university",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "xq2r5padgqjx6y7",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fok10vkb",
        "name": "fees",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "qzu6ot87ve4h7tv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zgf42kg7x4vyp29");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xq2r5padgqjx6y7",
    "created": "2023-10-31 19:34:40.821Z",
    "updated": "2023-10-31 19:34:40.821Z",
    "name": "universities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nahfsyrc",
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
        "id": "uqvawgrd",
        "name": "picture",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "lgxggsgm",
        "name": "type",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Private",
            "State"
          ]
        }
      },
      {
        "system": false,
        "id": "3unmwshi",
        "name": "country",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "India",
            "Turkey",
            "Malaysia",
            "Ukraine",
            "Northern Cyprus",
            "Bosnia and Herzegovina"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_2FcwhXN` ON `universities` (`name`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("xq2r5padgqjx6y7");

  return dao.deleteCollection(collection);
})

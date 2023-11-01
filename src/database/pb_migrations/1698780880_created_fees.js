/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qzu6ot87ve4h7tv",
    "created": "2023-10-31 19:34:40.822Z",
    "updated": "2023-10-31 19:34:40.822Z",
    "name": "fees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sowbcjzs",
        "name": "real",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "mdgqsbjw",
        "name": "discounted",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "xdamy5ph",
        "name": "currency",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "TRY",
            "USD"
          ]
        }
      },
      {
        "system": false,
        "id": "qwjqgnex",
        "name": "type",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Yearly",
            "Full Tuition"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_PbGV1nF` ON `fees` (\n  `type`,\n  `real`,\n  `currency`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qzu6ot87ve4h7tv");

  return dao.deleteCollection(collection);
})

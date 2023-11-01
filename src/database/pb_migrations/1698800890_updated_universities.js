/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xq2r5padgqjx6y7")

  // remove
  collection.schema.removeField("uqvawgrd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2hkqn15",
    "name": "picture",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xq2r5padgqjx6y7")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("f2hkqn15")

  return dao.saveCollection(collection)
})

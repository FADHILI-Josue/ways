export const productsQuery = `*[_type == "product"]{
    "id":_id,
      "category": productCategory->name,
      name,
      "image": image.asset->url,
      description,
      price
  }`

/** @type {import('./$types').PageLoad} */

import nhost from "../../nhostConfig";
import gql from "graphql-tag";

export async function load({ url }) {

  var id = url.searchParams.get("id")

  var propertyData;
  var query = gql`
    query MyQuery {
      Flat_by_pk(id: ${id}) {
        BHK
        Furnishing
        address
        images_id
        mainImage_id
        name
        other
        price
        society
        status
        super_area
      }
      }
      
        `;

  var res = await nhost.graphql.request(query)

  propertyData = res.data.Flat_by_pk;

  return {
    post: {
      ...propertyData
    }
  };
}
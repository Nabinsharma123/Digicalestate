/** @type {import('./$types').PageLoad} */

import nhost from "../../nhostConfig";
import gql from "graphql-tag";

export async function load({ url }) {

  var id = url.searchParams.get("id")

  var propertyData;
  var query = gql`
    query MyQuery {
      Plot_by_pk(id:${id}) {
        address
        dimentions
        discription
        images_id
        mainImage_id
        name
        plot_area
        price
      }
      }
      
        `;

  var res = await nhost.graphql.request(query)

  propertyData = res.data.Plot_by_pk;

  return {
    post: {
      ...propertyData
    }
  };
}
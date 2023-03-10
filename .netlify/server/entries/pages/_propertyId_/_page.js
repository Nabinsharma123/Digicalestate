import { n as nhost } from "../../../chunks/nhostConfig.js";
import gql from "graphql-tag";
async function load({ params }) {
  var propertyData;
  var query = gql`
            query MyQuery {
                Estate(where: { id: { _eq: ${params.propertyId} } }) {
                    id
                    name
                    images_id
                    mainImage_id
                    discription
                    status
                    price
                }
            }
        `;
  var res = await nhost.graphql.request(query);
  propertyData = res.data.Estate[0];
  return {
    post: {
      ...propertyData
    }
  };
}
export {
  load
};

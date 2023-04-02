import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req:any, res:any) {
  console.log("testing-token",process.env.GRAPHCMS_TOKE )
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  try {
  const result = await graphQLClient.request(query, req.body);
  return res.status(200).send(result);
  }catch(error){
    console.error("testing", error)
    return res.status(500).send(error);
  }

 
}
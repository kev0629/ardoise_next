import Head from 'next/head'
import {Client} from '@notionhq/client'

export async function getStaticProps(){
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      results: response.results,
    },
  };
}


export default function Home({results}) {
  return (
    <div className="container">
      <div className="blackboard">
        <ul className="paper">
            {results.map((result) => (
          <li key={results.indexOf(result)}>
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <span><i className="fa fa-eraser" aria-hidden="true"></i></span>{result.properties.Name.title[0].plain_text}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
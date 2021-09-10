import Head from 'next/head'
import {Client} from '@notionhq/client'




export default function Home({datas}) {
  console.log(datas)
  return (
    <div className="container">
      <div className="blackboard">
        <ul className="paper">
          {datas.map(data => (
            <li key={data.id}>{data.properties.Name.title[0].plain_text}</li>
          ))}
            {/* {results.map((result) => (
          <li key={results.indexOf(result)}>
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <span><i className="fa fa-eraser" aria-hidden="true"></i></span>{result.properties.Name.title[0].plain_text}
          </li>
        ))} */}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps (){
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
  });
  return {
    props: {
      datas:response.results,
    },
    revalidate :1
  };
}
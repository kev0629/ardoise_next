import Head from 'next/head'
import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Feuille 1!A2:A10',
  });

  const posts = response.data.values.flat();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
  return (
    <div className="container">
      <div className="blackboard">
        <ul className="paper">
          <li><i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <span><i className="fa fa-eraser" aria-hidden="true"></i></span>test</li>
            {posts.map((posts) => (
          <li key={posts}>
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <span><i className="fa fa-eraser" aria-hidden="true"></i></span>{posts}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <div className="blackboard">
        <ul className="paper">
          <li><i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <span><i className="fa fa-eraser" aria-hidden="true"></i></span>test</li>
        </ul>
      </div>
    </div>
  )
}

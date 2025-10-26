import { CardTitle, CardText } from "react-bootstrap";


export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 grid-rows-6 justify-self-center min-w-xl min-h-200">
      <div className="col-span-3 row-span-1">
        <h1 className="font-black text-center">Shotgun Divine - Dashboard</h1>
      </div>
      <div className="col-span-1 row-start-2 row-span-5">
        <CardTitle>First</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </CardText>
      </div>
      <div className="col-start-2 col-span-2 row-start-2 row-span-2">
        <CardTitle>Second</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </CardText>
      </div>
      <div className="col-start-2 col-span-2 row-start-4 row-span-3">
        <CardTitle>Third</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </CardText>
      </div>
    </div>
  )
}
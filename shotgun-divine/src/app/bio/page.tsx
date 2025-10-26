import { Card, CardBody, CardHeader, CardTitle, CardSubtitle, CardText } from "react-bootstrap"
import Image from 'next/image';
import jesseOutside from '../../../public/images/jesse_outside.jpg'
import brandonExtreme from '../../../public/images/brandon_extreme.jpg'
import dylanMustache from '../../../public/images/dylan_mustache.jpg'
import drumKit from '../../../public/images/drum_kit.jpg'
import kevinLicking from '../../../public/images/kevin_licking.jpg'

export default function Bio() {
  return (
    <div className="grid grid-cols-5 grid-rows-7 justify-self-center min-w-xl min-h-200">
      <div className="col-span-5 row-span-1">
        <h1 className="font-black text-center">Shotgun Divine - Bio</h1>
      </div>
      <div className="col-start-1 col-span-1 row-start-2 row-span-3" >
        <Card className="min-h-full bg-secondary text-white opacity-100" border="dark">
          <CardBody>
            <CardHeader>
              <CardTitle>Jesse</CardTitle>
              <CardSubtitle>Guitarist</CardSubtitle>
            </CardHeader>
            <CardText>
              <Image
                src={jesseOutside}
                alt="Background"
                layout="contain" // Stretches the image to fill the parent
                objectFit="contain" // Ensures the image covers the area without distortion
                quality={100} // Adjust quality as needed
                priority // For images above the fold
                style={{ zIndex: -1 }} // Puts the image behind other content
              />
            </CardText>
            <CardText>"I'm not very good though!" -</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-start-3 col-span-1 row-start-2 row-span-3">
        <Card className="min-h-full bg-secondary text-white opacity-100" border="dark">
          <CardBody>
            <CardHeader>
              <CardTitle>Brandon</CardTitle>
              <CardSubtitle>Volcanist</CardSubtitle>
            </CardHeader>
            <CardText>
              <Image
                src={brandonExtreme}
                alt="Background"
                layout="contain" // Stretches the image to fill the parent
                objectFit="contain" // Ensures the image covers the area without distortion
                quality={100} // Adjust quality as needed
                priority // For images above the fold
                style={{ zIndex: -1 }} // Puts the image behind other content
              />
            </CardText>
            <CardText>"I'm not very good though!" -</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-start-5 col-span-1 row-start-2 row-span-3">
        <Card className="min-h-full bg-secondary text-white opacity-100" border="dark">
          <CardBody>
            <CardHeader>
              <CardTitle>Dylan</CardTitle>
              <CardSubtitle>Bassoonist</CardSubtitle>
            </CardHeader>
            <CardText>
              <Image
                src={dylanMustache}
                alt="Background"
                layout="contain" // Stretches the image to fill the parent
                objectFit="contain" // Ensures the image covers the area without distortion
                quality={100} // Adjust quality as needed
                priority // For images above the fold
                style={{ zIndex: -1 }} // Puts the image behind other content
              />
            </CardText>
            <CardText>"You're not very good though!" - Jesse Carter</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-start-2 col-span-1 row-start-5 row-span-3">
        <Card className="min-h-full bg-secondary text-white opacity-100" border="dark">
          <CardBody>
            <CardHeader>
              <CardTitle>Electricity</CardTitle>
              <CardSubtitle>Drumming</CardSubtitle>
            </CardHeader>
            <CardText>
              <Image
                src={drumKit}
                alt="Background"
                layout="contain" // Stretches the image to fill the parent
                objectFit="contain" // Ensures the image covers the area without distortion
                quality={100} // Adjust quality as needed
                priority // For images above the fold
                style={{ zIndex: -1 }} // Puts the image behind other content
              />
            </CardText>
            <CardText>"Best kit ever!" - Jesse Carter</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-start-4 col-span-1 row-start-5 row-span-3">
        <Card className="min-h-full bg-secondary text-white opacity-100" border="dark">
          <CardBody>
            <CardHeader>
              <CardTitle>Kevin</CardTitle>
              <CardSubtitle>Guitarer</CardSubtitle>
            </CardHeader>
            <CardText>
              <Image
                src={kevinLicking}
                alt="Background"
                layout="contain" // Stretches the image to fill the parent
                objectFit="contain" // Ensures the image covers the area without distortion
                quality={100} // Adjust quality as needed
                priority // For images above the fold
                style={{ zIndex: -1 }} // Puts the image behind other content
              />
            </CardText>
            <CardText>"You're not very good either!" - to Jesse Carter</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
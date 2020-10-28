import React from "react";
import App from "./App";
import {findByText, fireEvent, render, waitFor} from "@testing-library/react";
import {fetchMissions as mockFetchMissions} from "./api/fetchMissions";

jest.mock("./api/fetchMissions");
//we want to only test the app compoenents that we have control over, we dont have control over the api
test("app fetches spaceX missions data and renders it to the dom", async () => {

    //set up the mock
mockFetchMissions.mockResolvedValueOnce(missions)


 //render app - should show get data button
 //machers here:  
const {getByRole, findByText, getAllByTestId} = render(<App />)

 //click on the get data button
const button = getByRole('button', {name: /get data/i});
//with get by the assercion is already build in "throw" from the cheetshit so we dont need to make an assertion like expect...
fireEvent.click(button);
await findByText(/we are fetching data/i);

 //component waits for the api, then renders the data that is returned
 //use the waitFor function here to wait for the api call to resolve

await waitFor(() => {
    expect(getAllByTestId(/mission/i)).toHaveLength(3);
})

});
//mock data:
const missions = {data: [
    {
       "mission_name":"Thaicom",
       "mission_id":"9D1B7E0",
       "manufacturers":[
         "Orbital ATK"
       ],
       "payload_ids":[
         "Thaicom 6",
         "Thaicom 8"
       ],
       "wikipedia":"https://en.wikipedia.org/wiki/Thaicom",
       "website":"http://www.thaicom.net/en/satellites/overview",
       "twitter":"https://twitter.com/thaicomplc",
       "description":"Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology."
    },
    {
       "mission_name":"Telstar",
       "mission_id":"F4F83DE",
       "manufacturers":[
         "SSL"
       ],
       "payload_ids":[
         "Telstar 19V",
         "Telstar 18V"
       ],
       "wikipedia":"https://en.wikipedia.org/wiki/Telesat",
       "website":"https://www.telesat.com/",
       "twitter":null,
       "description":"Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009."
   },
   {
       "mission_name":"Iridium NEXT",
       "mission_id":"F3364BF",
       "manufacturers":[
         "Orbital ATK"
       ],
       "payload_ids":[
         "Iridium NEXT 1",
         "Iridium NEXT 2",
         "Iridium NEXT 3",
         "Iridium NEXT 4",
         "Iridium NEXT 5",
         "Iridium NEXT 6",
         "Iridium NEXT 7",
         "Iridium NEXT 8"
       ],
       "wikipedia":"https://en.wikipedia.org/wiki/Iridium_satellite_constellation",
       "website":"https://www.iridiumnext.com/",
       "twitter":"https://twitter.com/IridiumBoss?lang=en",
       "description":"In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways."
   },
]}
//always think about what the component your testing see as far as data and props or the response

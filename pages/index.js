import dynamic from "next/dynamic";

const MyButton = dynamic(()=>import("MFRemote/button"))
const MyCard = dynamic(()=>import("MFRemote/card"))
export default function Home() {
  return (
    <div>
      <h1>Host App</h1>
      <MyCard title="Title of Host App" content="content of host app">
        <MyButton>MUI Button</MyButton>
      </MyCard>
    </div>
  )
}

import dynamic from "next/dynamic";

const Page = dynamic(()=> import('MFRemote/pages/federatedPage'))

export default Page;
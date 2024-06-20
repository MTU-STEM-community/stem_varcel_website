import Link from 'next/link';
import Head from 'next/head';
import { Metadata } from 'next';
import MenuAdmin from '@/app/components/MenuAdmin';
import ManageUsersAdminSu from '@/app/components/ManageUsersSU';
import Statistics from '@/app/components/Statistics';
import MenuSU from '../components/SUMenu';


export const metadata: Metadata = {
    title: 'Dashboard SuperUser',
  }
  
export default function Users() {
    return (
        <>
            
            <div>
        {/* <Navbar/> */}
        
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Dashboard UI</title>
      </Head>
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <MenuSU/>
        <Statistics/>
        
      </div>
    </div>


      </div>

        



        </>
    );
}
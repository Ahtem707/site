import AdminPanel from '@/components/Administrator/AdminPanel'
import Users from '@/components/Administrator/Users'
// import Books from '@/components/Administrator/Books'
// import CycleWorks from '@/components/Administrator/CycleWorks'
// import Genre from '@/components/Administrator/Genre'
// import Achievement from '@/components/Administrator/Achievement'
// import Awards from '@/components/Administrator/Awards'
// import StatusReading from '@/components/Administrator/StatusReading'
// import StatusWriting from '@/components/Administrator/StatusWriting'
// import SignIn from '@/components/Administrator/AdminSignIn'


export default [
    {
        path: "/",
        component: AdminPanel,
        children: [
            {
                path: "/administrator/users",
                component: Users
            }
            // {
            //     path: "/books",
            //     component: Books
            // },
            // {
            //     path: "/cycleworks",
            //     component: CycleWorks
            // },
            // {
            //     path: "/genre",
            //     component: Genre
            // },
            // {
            //     path: "/achievement",
            //     component: Achievement
            // },
            // {
            //     path: "/awards",
            //     component: Awards
            // },
            // {
            //     path: "/statusreading",
            //     component: StatusReading
            // },
            // {
            //     path: "/statuswriting",
            //     component: StatusWriting
            // },
        ]
    },
    // {
    //     path: "/",
    //     name: "adminSignIn",
    //     component: SighIn
    // },
    
]
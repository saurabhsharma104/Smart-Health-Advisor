"use client"
import React, { useState } from 'react'
import {Tabs,TabsList,TabsTrigger} from "@/components/ui/tabs"
import PersonalInfo from '../_components/personal-info'
import HealthInformation from '../_components/health-information'
import MedicalHistory from '../_components/medical-history'
import Symptoms from '../_components/symptoms'
import WritingEffect from '@/components/WritingEffect'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("basic-information");
    const [activateAllTab, setActivateAllTab] = useState(true)
    const [submitted,setSubmitted]=useState(false)

    const onTabChange = (value:string) => {
        setActiveTab(value);
    }

    const predictData=`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est architecto quos maxime, adipisci veniam nihil magnam temporibus doloribus sed aspernatur incidunt hic ab corrupti, consectetur voluptas labore quo, consequatur vitae!
    Molestiae eligendi ipsum tempore rerum odit nulla, placeat in ducimus rem, veniam incidunt praesentium accusantium quam unde quod soluta perspiciatis! Officiis dolor quasi laudantium vel, necessitatibus sed corrupti ipsam amet!
    Quos dignissimos odio assumenda, sapiente at laboriosam consequuntur sequi inventore ducimus laudantium itaque praesentium natus dolore blanditiis, earum error cumque neque corporis molestias. Nihil temporibus quam saepe cupiditate praesentium sunt.
    Provident cumque atque quis facere quia aperiam hic delectus aut doloremque nulla! At debitis eaque repudiandae quasi labore quas rem vel! Earum in rem magni eaque. Exercitationem quisquam voluptate quibusdam.`

  

  return (
    <div className="h-[100%] flex flex-col mt-28">
        {submitted==false? (
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
                <Tabs value={activeTab} onValueChange={onTabChange} className="w-[90%] mt-5 md:w-[70%] lg:w-[70%]">
                    <TabsList className="hidden md:grid w-full grid-cols-4">
                        <TabsTrigger value="basic-information" disabled={activateAllTab}>Basic Information</TabsTrigger>
                        <TabsTrigger value="health-information" disabled={activateAllTab}>Health Information</TabsTrigger>
                        <TabsTrigger value="medical-history" disabled={activateAllTab}>Medical History</TabsTrigger>
                        <TabsTrigger value="your-symptoms" disabled={activateAllTab}>Your Symptoms</TabsTrigger>
                    </TabsList>
                    <PersonalInfo onChangeFn={onTabChange} activate={setActivateAllTab} />
                    <HealthInformation onChangeFn={onTabChange} />
                    <MedicalHistory onChangeFn={onTabChange} currentTab={activeTab}/>
                    <Symptoms onChangeFn={onTabChange} onPredict={setSubmitted}/>
                </Tabs>
            </div>
        ):(
        <div className="flex flex-col items-center justify-center md:justify-start gap-y-8 flex-1">
            <Card className="w-[90%] mt-5 md:w-[70%] lg:w-[70%]">
            <CardHeader>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
                <h3 className="text-base sm:text-xl md:text-2xl font-medium">Revolutionary software predicts diseases based on symptoms, enhancing early detection and healthcare efficiency.</h3>
            </CardHeader>
                <CardContent className='mt-5'>
                    <WritingEffect text={predictData} onBack={setSubmitted} onChangeFn={onTabChange} activate={setActivateAllTab}/>
                </CardContent>
            </Card>
        </div>)}
        

        
   </div>
  )
}

export default HomePage
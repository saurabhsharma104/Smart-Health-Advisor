"use client"
import React, { useState } from 'react'
import {Tabs,TabsList,TabsTrigger} from "@/components/ui/tabs"
import PersonalInfo from '../_components/personal-info'
import HealthInformation from '../_components/health-information'
import MedicalHistory from '../_components/medical-history'
import Symptoms from '../_components/symptoms'
import WritingEffect from '@/components/WritingEffect'
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card"
import useFinalData from '@/hooks/useFinalData'
import { Loader } from 'lucide-react'

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("basic-information");
    const [activateAllTab, setActivateAllTab] = useState(true)
    const [submitted,setSubmitted]=useState(false)
    const {predictedDisease,isloading} =useFinalData()


    const onTabChange = (value:string) => {
        setActiveTab(value);
    }


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
                <h3 className="text-base sm:text-xl md:text-2xl font-medium">Revolutionary software predicts diseases based on symptoms, enhancing early detection and healthcare efficiency.</h3>
            </CardHeader>
                <CardContent className='mt-5'>
                    <p className='mb-2'>
                    Predicted Disease:<span className='text-lg font-bold ml-2'>{`${predictedDisease[0]}`}</span>
                        
                    </p>
                    {isloading ? <div className='h-32 flex justify-center items-center'><Loader  className='w-10 h-10 animate-spin'/></div>:
                    <WritingEffect text={`Based on the provided symptoms, ${predictedDisease[0]} is slightly indicated. However, if you have concerns, it's advisable to consult a healthcare professional for a more accurate assessment.`} onBack={setSubmitted} onChangeFn={onTabChange} activate={setActivateAllTab}/>
                    }
                </CardContent>
            </Card>
        </div>)}
        

        
   </div>
  )
}

export default HomePage
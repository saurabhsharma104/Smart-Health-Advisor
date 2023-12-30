"use client"
import React, { useState } from 'react'
import {Tabs,TabsList,TabsTrigger} from "@/components/ui/tabs"
import PersonalInfo from '../_components/personal-info'
import HealthInformation from '../_components/health-information'
import MedicalHistory from '../_components/medical-history'
import Symptoms from '../_components/symptoms'


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("basic-information");
    const [activateAllTab, setActivateAllTab] = useState(true)

    const onTabChange = (value:string) => {
        setActiveTab(value);
    }

  return (
    <div className="h-[100%] flex flex-col mt-28">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1">
            <Tabs value={activeTab} onValueChange={onTabChange}  className="w-[90%] mt-5 md:w-[70%] lg:w-[70%]">
                <TabsList className="hidden md:grid w-full grid-cols-4">
                    <TabsTrigger value="basic-information" disabled={activateAllTab}>Basic Information</TabsTrigger>
                    <TabsTrigger value="health-information" disabled={activateAllTab}>Health Information</TabsTrigger>
                    <TabsTrigger value="medical-history" disabled={activateAllTab}>Medical History</TabsTrigger>
                    <TabsTrigger value="your-symptoms" disabled={activateAllTab}>Your Symptoms</TabsTrigger>
                </TabsList>
                <PersonalInfo onChangeFn={onTabChange} activate={setActivateAllTab} />
                <HealthInformation onChangeFn={onTabChange} />
                <MedicalHistory onChangeFn={onTabChange} currentTab={activeTab}/>
                <Symptoms onChangeFn={onTabChange}/>
            </Tabs>
        </div>
   </div>
  )
}

export default HomePage
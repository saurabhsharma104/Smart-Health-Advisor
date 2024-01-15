"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { Label } from '@radix-ui/react-label'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import axios from 'axios'
import useFinalData from '@/hooks/useFinalData'
import { API_URL, base_url } from '@/lib/urls'
import useClientData from '@/hooks/useClientData'

interface SymptomsVal{
    symptomsName:Object,
}

interface Symptom {
    value: string;
    label: string;
}

interface SymptomsProps{
    onChangeFn:(val:string)=> void;
    onPredict:(value:boolean)=>void,
}
const Symptoms = ({onChangeFn,onPredict}:SymptomsProps) => {
  const [symptomsDatas,setSymptomsDatas] = useState([])
  const {setPredictedDisease,setIsloading} =useFinalData()
  const {alcoholData, diseaseData} = useClientData()
  const initialValue:SymptomsVal={
    symptomsName:[],
  }

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
      initialValues:initialValue,
      onSubmit:(values,action)=>{
        setIsloading(true)
        onPredict(true)

        let transformedObject: { [key: string]: string } = {};

        if (Array.isArray(values.symptomsName)) {
            values.symptomsName.forEach((symptom: Symptom) => {
                transformedObject[symptom.value] = symptom.label;
            });
        }

        if(alcoholData.value=='occasional'){
            const data= {'acquiring drinking alcohol taking lot time':"acquiring drinking alcohol taking lot time"}
            transformedObject = { ...transformedObject, ...data };
        }

        if(alcoholData.value=='regular'){
            const data ={"drinking large amount alcohol long period":"drinking large amount alcohol long period"}
            transformedObject = { ...transformedObject, ...data };
        }

        if(diseaseData.value!=""){
            const data = {current_disease:diseaseData.label}
            transformedObject = { ...transformedObject, ...data };
        }

        axios.post(`${base_url}${API_URL.predict}`, transformedObject)
        .then(response => {
            setIsloading(false)
            setPredictedDisease(response.data);
        })
        .catch(error => {
            setIsloading(false)
            setPredictedDisease([]);
            console.error('API Error:', error);
        });

      }
  });

  async function symptomData() {
    const response = await fetch(`/api/symptom`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setSymptomsDatas(result)
      return result;
  }
  
  useEffect(()=>{
    symptomData()
  },[])


  return (
    <TabsContent value="your-symptoms">
    <Card>
        <form onSubmit={handleSubmit}>
            <CardHeader>
                <CardTitle className='text-3xl'>Tell Us About Your Symptoms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">

                <div className="space-y-1 text-start mt-3">
                    <Label htmlFor="name ">Do you currently have any Symptoms  Select from below dropdown</Label>
                    <Select 
                    className=""
                    name="symptomsName"
                    id="symptomsName"
                    placeholder='Select Symptoms'
                    isSearchable
                    closeMenuOnSelect={false}
                    isMulti
                    onChange={selectedOption => {
                        let event = {target: {name: 'symptomsName', value: selectedOption}}
                        handleChange(event)
                    }}
                    onBlur={() => {
                        handleBlur({target: {name: 'symptomsName'}});
                    }}
                    options={symptomsDatas}
                    />
                </div>
            </CardContent>
            <CardFooter className='flex justify-between  gap-4 md:justify-end '>
                <Button variant='outline' onClick={()=>onChangeFn('medical-history')}>Previous</Button>
                <Button type='submit'>Predict</Button>
            </CardFooter>
        </form>
    </Card>
</TabsContent>
  )
}

export default Symptoms
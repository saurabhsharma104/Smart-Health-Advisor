"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {

    return ( 
        <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Get Your First Health Prediction.&nbsp;<span className="underline">DPS</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Revolutionary software predicts diseases based on symptoms, enhancing early detection and healthcare efficiency.
        </h3>
    
        <Button asChild>
            <Link href='/predict'>
                Predict Disease
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Link>
        </Button>

      </div>
     );
}
 
export default Heading;
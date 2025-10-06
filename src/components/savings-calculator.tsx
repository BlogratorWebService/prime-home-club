"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { services } from '@/lib/data';

const avgSavingsPerService = services.map(s => ({
    categoryId: s.categoryId,
    savings: s.standardPrice - s.memberPrice
}));

export default function SavingsCalculator() {
    const [plumbingCount, setPlumbingCount] = useState(1);
    const [electricalCount, setElectricalCount] = useState(1);
    const [hvacCount, setHvacCount] = useState(1);
    const [cleaningCount, setCleaningCount] = useState(1);

    const avgPlumbingSaving = useMemo(() => {
        const plumbingServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-1');
        return plumbingServices.reduce((acc, s) => acc + s.savings, 0) / plumbingServices.length;
    }, []);
    const avgElectricalSaving = useMemo(() => {
        const electricalServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-2');
        return electricalServices.reduce((acc, s) => acc + s.savings, 0) / electricalServices.length;
    }, []);
    const avgHvacSaving = useMemo(() => {
        const hvacServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-3');
        return hvacServices.reduce((acc, s) => acc + s.savings, 0) / hvacServices.length;
    }, []);
    const avgCleaningSaving = useMemo(() => {
        const cleaningServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-4');
        return cleaningServices.reduce((acc, s) => acc + s.savings, 0) / cleaningServices.length;
    }, []);

    const totalSavings = useMemo(() => {
        const savings = (plumbingCount * avgPlumbingSaving) +
                        (electricalCount * avgElectricalSaving) +
                        (hvacCount * avgHvacSaving) +
                        (cleaningCount * avgCleaningSaving);
        return Math.max(0, savings - 149); // Subtracting membership fee
    }, [plumbingCount, electricalCount, hvacCount, cleaningCount, avgPlumbingSaving, avgElectricalSaving, avgHvacSaving, avgCleaningSaving]);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="font-headline">Estimate Your Savings</CardTitle>
                <CardDescription>Adjust the sliders to match how many services you expect to use per year.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="plumbing" className="flex justify-between items-center mb-2">
                            <span>Plumbing Services</span>
                            <span className="font-bold text-primary">{plumbingCount}</span>
                        </Label>
                        <Slider
                            id="plumbing"
                            min={0}
                            max={5}
                            step={1}
                            value={[plumbingCount]}
                            onValueChange={(value) => setPlumbingCount(value[0])}
                        />
                    </div>
                    <div>
                        <Label htmlFor="electrical" className="flex justify-between items-center mb-2">
                            <span>Electrical Services</span>
                            <span className="font-bold text-primary">{electricalCount}</span>
                        </Label>
                        <Slider
                            id="electrical"
                            min={0}
                            max={5}
                            step={1}
                            value={[electricalCount]}
                            onValueChange={(value) => setElectricalCount(value[0])}
                        />
                    </div>
                    <div>
                        <Label htmlFor="hvac" className="flex justify-between items-center mb-2">
                            <span>HVAC Services</span>
                            <span className="font-bold text-primary">{hvacCount}</span>
                        </Label>
                        <Slider
                            id="hvac"
                            min={0}
                            max={5}
                            step={1}
                            value={[hvacCount]}
                            onValueChange={(value) => setHvacCount(value[0])}
                        />
                    </div>
                     <div>
                        <Label htmlFor="cleaning" className="flex justify-between items-center mb-2">
                            <span>Cleaning Services</span>
                            <span className="font-bold text-primary">{cleaningCount}</span>
                        </Label>
                        <Slider
                            id="cleaning"
                            min={0}
                            max={5}
                            step={1}
                            value={[cleaningCount]}
                            onValueChange={(value) => setCleaningCount(value[0])}
                        />
                    </div>
                </div>
                <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                    <p className="text-lg font-medium text-primary">Your Estimated Net Annual Savings:</p>
                    <p className="text-5xl font-bold font-headline text-primary mt-2">
                        ${totalSavings.toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        after the $149 annual membership fee.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

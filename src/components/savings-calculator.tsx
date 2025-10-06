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
    const [tvCount, setTvCount] = useState(1);
    const [acCount, setAcCount] = useState(1);
    const [washingMachineCount, setWashingMachineCount] = useState(1);
    const [refrigeratorCount, setRefrigeratorCount] = useState(1);
    const [geyserCount, setGeyserCount] = useState(1);

    const avgTvSaving = useMemo(() => {
        const categoryServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-1');
        return categoryServices.length > 0 ? categoryServices.reduce((acc, s) => acc + s.savings, 0) / categoryServices.length : 0;
    }, []);
    const avgAcSaving = useMemo(() => {
        const categoryServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-2');
        return categoryServices.length > 0 ? categoryServices.reduce((acc, s) => acc + s.savings, 0) / categoryServices.length : 0;
    }, []);
    const avgWashingMachineSaving = useMemo(() => {
        const categoryServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-3');
        return categoryServices.length > 0 ? categoryServices.reduce((acc, s) => acc + s.savings, 0) / categoryServices.length : 0;
    }, []);
    const avgRefrigeratorSaving = useMemo(() => {
        const categoryServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-4');
        return categoryServices.length > 0 ? categoryServices.reduce((acc, s) => acc + s.savings, 0) / categoryServices.length : 0;
    }, []);
    const avgGeyserSaving = useMemo(() => {
        const categoryServices = avgSavingsPerService.filter(s => s.categoryId === 'cat-5');
        return categoryServices.length > 0 ? categoryServices.reduce((acc, s) => acc + s.savings, 0) / categoryServices.length : 0;
    }, []);

    const totalSavings = useMemo(() => {
        const savings = (tvCount * avgTvSaving) +
                        (acCount * avgAcSaving) +
                        (washingMachineCount * avgWashingMachineSaving) +
                        (refrigeratorCount * avgRefrigeratorSaving) +
                        (geyserCount * avgGeyserSaving);
        return Math.max(0, savings - 149); // Subtracting membership fee
    }, [tvCount, acCount, washingMachineCount, refrigeratorCount, geyserCount, avgTvSaving, avgAcSaving, avgWashingMachineSaving, avgRefrigeratorSaving, avgGeyserSaving]);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="font-headline">Estimate Your Savings</CardTitle>
                <CardDescription>Adjust the sliders to match how many services you expect to use per year.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="tv" className="flex justify-between items-center mb-2">
                            <span>TV Repairs</span>
                            <span className="font-bold text-primary">{tvCount}</span>
                        </Label>
                        <Slider
                            id="tv"
                            min={0}
                            max={5}
                            step={1}
                            value={[tvCount]}
                            onValueChange={(value) => setTvCount(value[0])}
                        />
                    </div>
                    <div>
                        <Label htmlFor="ac" className="flex justify-between items-center mb-2">
                            <span>AC Repairs</span>
                            <span className="font-bold text-primary">{acCount}</span>
                        </Label>
                        <Slider
                            id="ac"
                            min={0}
                            max={5}
                            step={1}
                            value={[acCount]}
                            onValueChange={(value) => setAcCount(value[0])}
                        />
                    </div>
                    <div>
                        <Label htmlFor="washing-machine" className="flex justify-between items-center mb-2">
                            <span>Washing Machine Repairs</span>
                            <span className="font-bold text-primary">{washingMachineCount}</span>
                        </Label>
                        <Slider
                            id="washing-machine"
                            min={0}
                            max={5}
                            step={1}
                            value={[washingMachineCount]}
                            onValueChange={(value) => setWashingMachineCount(value[0])}
                        />
                    </div>
                     <div>
                        <Label htmlFor="refrigerator" className="flex justify-between items-center mb-2">
                            <span>Refrigerator Repairs</span>
                            <span className="font-bold text-primary">{refrigeratorCount}</span>
                        </Label>
                        <Slider
                            id="refrigerator"
                            min={0}
                            max={5}
                            step={1}
                            value={[refrigeratorCount]}
                            onValueChange={(value) => setRefrigeratorCount(value[0])}
                        />
                    </div>
                    <div>
                        <Label htmlFor="geyser" className="flex justify-between items-center mb-2">
                            <span>Geyser Repairs</span>
                            <span className="font-bold text-primary">{geyserCount}</span>
                        </Label>
                        <Slider
                            id="geyser"
                            min={0}
                            max={5}
                            step={1}
                            value={[geyserCount]}
                            onValueChange={(value) => setGeyserCount(value[0])}
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
